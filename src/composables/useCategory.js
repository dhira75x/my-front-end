/**
 * useCategory composable
 * Fetches products, subcategories, and brands for a given category
 * from the backend API, replacing hardcoded mock data.
 */
import { ref, onMounted } from 'vue';
import { Categories } from '@/classes/categories.class';

const categoriesService = new Categories();

// Cache the taxonomy so we only fetch it once per page session
let taxonomyCache = null;

export function useCategory(categoryName) {
    const products = ref([]);
    const subCategories = ref([]);
    const brands = ref([]);
    const isLoading = ref(true);
    const error = ref(null);

    const fetchData = async () => {
        isLoading.value = true;
        error.value = null;
        try {
            // Fetch taxonomy (cached after first call) and products in parallel
            const [taxonomyRes, productsRes] = await Promise.all([
                taxonomyCache ? Promise.resolve(taxonomyCache) : categoriesService.getTaxonomy(),
                categoriesService.getProductsByCategory(categoryName, { limit: 50 })
            ]);

            if (!taxonomyCache) taxonomyCache = taxonomyRes;

            // Extract subcategories and brands from taxonomy
            const entry = taxonomyRes.payload.taxonomy.find(t => t.category === categoryName);
            if (entry) {
                // Subcategories are now objects { name, code, specTemplate } — extract just the name for display
                subCategories.value = entry.subcategories.map((sub, i) => ({
                    id: i + 1,
                    name: typeof sub === 'string' ? sub : sub.name,
                }));
                // Brands are still plain strings
                brands.value = entry.brands.map((name, i) => ({ id: i + 1, name }));
            }

            // Map API products to the shape the BaseCategoryPage expects
            const docs = productsRes.payload?.docs ?? [];
            products.value = docs.map(p => ({
                id: p._id,
                name: p.title,
                description: p.description,
                price: `₦${Number(p.price).toLocaleString('en-NG', { minimumFractionDigits: 2 })}`,
                image: p.img?.[0]?.imgData ?? 'https://via.placeholder.com/400x300?text=No+Image',
                categoryIds: p.subcategories ?? [],
                brandId: p.brand ?? '',
                rating: 0,
                reviews: 0,
                onSale: false,
                freeShipping: false,
                dateAdded: p.createdAt,
            }));
        } catch (err) {
            console.error(`[useCategory] Failed to load "${categoryName}":`, err);
            error.value = 'Failed to load products. Please try again.';
        } finally {
            isLoading.value = false;
        }
    };

    onMounted(fetchData);

    return { products, subCategories, brands, isLoading, error };
}
