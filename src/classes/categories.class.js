import { http } from '../util/https';

export class Categories {
    /**
     * GET /categories
     * Returns full taxonomy: categories[], taxonomy[{ category, subcategories, brands, specTemplate }]
     * This is a public endpoint — no auth needed.
     */
    async getTaxonomy() {
        try {
            const response = await http.get('/categories');
            return response.data;
        } catch (error) {
            console.error('Error fetching categories taxonomy:', error);
            throw error;
        }
    }

    /**
     * GET /products?category=Electronics
     * Returns products belonging to a specific category.
     */
    async getProductsByCategory(category, params = {}) {
        try {
            const response = await http.get('/products', {
                params: { category, ...params }
            });
            return response.data;
        } catch (error) {
            console.error(`Error fetching products for category ${category}:`, error);
            throw error;
        }
    }

    /**
     * GET /products?category=Electronics&subcategory=Audio+%26+Headphones
     * Returns products filtered by category + subcategory.
     */
    async getProductsBySubcategory(category, subcategory, params = {}) {
        try {
            const response = await http.get('/products', {
                params: { category, subcategory, ...params }
            });
            return response.data;
        } catch (error) {
            console.error(`Error fetching products for subcategory ${subcategory}:`, error);
            throw error;
        }
    }
}
