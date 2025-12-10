<template>
  <div class="min-h-screen py-8 bg-gray-50 animate__animated animate__fadeIn">
    <div class="container px-4 mx-auto">
      <!-- Category Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-800">{{ categoryTitle }}</h1>
        <p class="mt-2 text-gray-600">{{ categoryDescription }}</p>
      </div>

      <div class="flex flex-col gap-8 lg:flex-row">
        <!-- Filters Sidebar -->
        <div class="w-full lg:w-64 flex-shrink-0">
          <div class="p-6 bg-white rounded-lg shadow-md animate__animated animate__fadeIn">
            <h2 class="mb-4 text-lg font-semibold text-gray-800">Filters</h2>
            
            <!-- Search Filter -->
            <div class="mb-6">
              <label for="search" class="block mb-2 text-sm font-medium text-gray-700">Search</label>
              <div class="relative">
                <input 
                  type="text" 
                  id="search" 
                  v-model="searchQuery"
                  class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-lime-500 focus:border-lime-500" 
                  placeholder="Search products..."
                >
                <svg class="absolute w-5 h-5 text-gray-400 left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>

            <!-- Category Filters -->
            <div class="mb-6">
              <h3 class="mb-3 text-sm font-medium text-gray-700">Categories</h3>
              <div class="space-y-2">
                <div v-for="subCategory in subCategories" :key="subCategory.id" class="flex items-center">
                  <input 
                    type="checkbox" 
                    :id="`category-${subCategory.id}`" 
                    :value="subCategory.id"
                    v-model="selectedCategories"
                    class="w-4 h-4 text-lime-600 border-gray-300 rounded focus:ring-lime-500"
                  >
                  <label :for="`category-${subCategory.id}`" class="ml-2 text-sm text-gray-700">{{ subCategory.name }}</label>
                </div>
              </div>
            </div>

            <!-- Price Range Filter -->
            <div class="mb-6">
              <h3 class="mb-3 text-sm font-medium text-gray-700">Price Range</h3>
              <div class="space-y-4">
                <div>
                  <input 
                    type="range" 
                    id="minPrice" 
                    v-model="priceRange.min"
                    min="0" 
                    max="1000000" 
                    step="1000"
                    class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  >
                  <div class="flex justify-between mt-1 text-xs text-gray-500">
                    <span>₦0</span>
                    <span>₦1,000,000</span>
                  </div>
                </div>
                <div class="flex justify-between">
                  <div>
                    <label for="minPriceInput" class="block text-xs text-gray-500">Min</label>
                    <input 
                      type="number" 
                      id="minPriceInput" 
                      v-model="priceRange.min"
                      class="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-lime-500 focus:border-lime-500"
                    >
                  </div>
                  <div>
                    <label for="maxPriceInput" class="block text-xs text-gray-500">Max</label>
                    <input 
                      type="number" 
                      id="maxPriceInput" 
                      v-model="priceRange.max"
                      class="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-lime-500 focus:border-lime-500"
                    >
                  </div>
                </div>
              </div>
            </div>

            <!-- Brand Filter -->
            <div class="mb-6">
              <h3 class="mb-3 text-sm font-medium text-gray-700">Brand</h3>
              <div class="space-y-2">
                <div v-for="brand in brands" :key="brand.id" class="flex items-center">
                  <input 
                    type="checkbox" 
                    :id="`brand-${brand.id}`" 
                    :value="brand.id"
                    v-model="selectedBrands"
                    class="w-4 h-4 text-lime-600 border-gray-300 rounded focus:ring-lime-500"
                  >
                  <label :for="`brand-${brand.id}`" class="ml-2 text-sm text-gray-700">{{ brand.name }}</label>
                </div>
              </div>
            </div>

            <!-- Rating Filter -->
            <div class="mb-6">
              <h3 class="mb-3 text-sm font-medium text-gray-700">Customer Rating</h3>
              <div class="space-y-2">
                <div v-for="rating in ratings" :key="rating.value" class="flex items-center">
                  <input 
                    type="radio" 
                    :id="`rating-${rating.value}`" 
                    :value="rating.value"
                    v-model="selectedRating"
                    class="w-4 h-4 text-lime-600 border-gray-300 focus:ring-lime-500"
                  >
                  <label :for="`rating-${rating.value}`" class="ml-2 flex items-center text-sm text-gray-700">
                    <div class="flex text-yellow-400">
                      <svg v-for="i in 5" :key="i" class="w-4 h-4" :class="i <= rating.value ? 'fill-current' : 'text-gray-300'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                      </svg>
                    </div>
                    <span class="ml-1">& Up</span>
                  </label>
                </div>
              </div>
            </div>

            <!-- Special Offers Filter -->
            <div class="mb-6">
              <h3 class="mb-3 text-sm font-medium text-gray-700">Special Offers</h3>
            <div class="space-y-2">
              <div class="flex items-center">
                <input 
                  type="checkbox" 
                  id="onSale" 
                  v-model="onSale"
                  class="w-4 h-4 text-lime-600 border-gray-300 rounded focus:ring-lime-500"
                >
                <label for="onSale" class="ml-2 text-sm text-gray-700">On Sale</label>
              </div>
              <div class="flex items-center">
                <input 
                  type="checkbox" 
                  id="freeShipping" 
                  v-model="freeShipping"
                  class="w-4 h-4 text-lime-600 border-gray-300 rounded focus:ring-lime-500"
                >
                <label for="freeShipping" class="ml-2 text-sm text-gray-700">Free Shipping</label>
              </div>
            </div>
          </div>

          <!-- Reset Filters Button -->
          <button 
            @click="resetFilters"
            class="w-full py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-transform duration-200 hover:scale-105 focus:ring-2 focus:ring-gray-300"
          >
            Reset Filters
          </button>
        </div>
      </div>

      <!-- Products Grid -->
      <div class="flex-1">
        <!-- Sort and View Options -->
        <div class="flex flex-col justify-between mb-6 sm:flex-row">
          <div class="mb-4 sm:mb-0">
            <p class="text-gray-600">Showing {{ filteredProducts.length }} of {{ products.length }} products</p>
          </div>
          <div class="flex items-center space-x-4">
            <div>
              <label for="sort" class="mr-2 text-sm text-gray-600">Sort by:</label>
              <select 
                id="sort" 
                v-model="sortBy"
                class="px-3 py-1 text-sm border border-gray-300 rounded focus:ring-lime-500 focus:border-lime-500"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest First</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
            <div class="flex">
              <button 
                @click="viewMode = 'grid'"
                class="p-2 text-gray-600 rounded-l hover:bg-gray-100"
                :class="viewMode === 'grid' ? 'bg-gray-100' : ''"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
              </button>
              <button 
                @click="viewMode = 'list'"
                class="p-2 text-gray-600 rounded-r hover:bg-gray-100"
                :class="viewMode === 'list' ? 'bg-gray-100' : ''"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Products Grid/List View -->
        <div v-if="filteredProducts.length > 0" :class="viewMode === 'grid' ? 'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3' : 'space-y-6'">
          <!-- Product Card/Grid Item -->
          <div 
            v-for="product in sortedProducts" 
            :key="product.id" 
            class="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg cursor-pointer transition-transform duration-300 hover:-translate-y-1 animate__animated animate__fadeInUp"
            @click="viewProduct(product.id)"
            :class="viewMode === 'list' ? 'flex' : ''"
          >
            <div :class="viewMode === 'list' ? 'w-1/3 flex-shrink-0' : ''">
              <div class="relative">
                <img :src="product.image" alt="Product Image" class="object-cover w-full h-48">
                <button class="absolute p-2 bg-white rounded-full shadow-md top-3 right-3 hover:bg-gray-100" @click.stop>
                  <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </button>
                <div v-if="product.isNew" class="absolute px-2 py-1 text-xs font-bold text-white rounded top-3 left-3 bg-lime-500">
                  NEW
                </div>
                <div v-if="product.onSale" class="absolute px-2 py-1 text-xs font-bold text-white rounded top-12 left-3 bg-red-500">
                  SALE
                </div>
              </div>
            </div>
            <div class="p-4" :class="viewMode === 'list' ? 'flex-1' : ''">
              <div class="flex items-center mb-1">
                <div class="flex text-yellow-400">
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                  <svg class="w-4 h-4 text-gray-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                </div>
                <span class="ml-1 text-xs text-gray-500">({product.reviews})</span>
              </div>
              <h3 class="mb-1 text-lg font-semibold text-gray-800">{{ product.name }}</h3>
              <p class="mb-3 text-sm text-gray-600">{{ product.description }}</p>
              <div class="flex items-center justify-between">
                <div>
                  <span class="font-bold text-lime-600">{{ product.price }}</span>
                  <span v-if="product.originalPrice" class="ml-2 text-sm text-gray-500 line-through">{{ product.originalPrice }}</span>
                </div>
                <button @click.stop="addToCart(product)" class="p-2 text-white transition rounded-full bg-lime-500 hover:bg-lime-600 duration-200 hover:scale-105 focus:ring-2 focus:ring-lime-400">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- No Products Found -->
        <div v-else class="py-12 text-center">
          <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <h3 class="mt-4 text-lg font-medium text-gray-900">No products found</h3>
          <p class="mt-1 text-gray-500">Try adjusting your filters to find what you're looking for.</p>
          <button 
            @click="resetFilters"
            class="mt-4 px-4 py-2 text-sm font-medium text-white bg-lime-600 rounded-md hover:bg-lime-700"
          >
            Reset Filters
          </button>
        </div>

        <!-- Pagination -->
        <div v-if="filteredProducts.length > 0" class="flex items-center justify-between mt-8">
          <div class="text-sm text-gray-700">
            Showing <span class="font-medium">1</span> to <span class="font-medium">12</span> of <span class="font-medium">{{ filteredProducts.length }}</span> results
          </div>
          <div class="flex space-x-2">
            <button class="px-3 py-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              Previous
            </button>
            <button class="px-3 py-1 text-sm font-medium text-white bg-lime-600 border border-transparent rounded-md hover:bg-lime-700">
              1
            </button>
            <button class="px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              2
            </button>
            <button class="px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              3
            </button>
            <button class="px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Props
const props = defineProps({
  categoryTitle: {
    type: String,
    required: true
  },
  categoryDescription: {
    type: String,
    required: true
  },
  products: {
    type: Array,
    required: true
  },
  subCategories: {
    type: Array,
    required: true
  },
  brands: {
    type: Array,
    required: true
  }
});

// Filter state
const searchQuery = ref('');
const selectedCategories = ref([]);
const selectedBrands = ref([]);
const selectedRating = ref(0);
const priceRange = ref({
  min: 0,
  max: 1000000
});
const onSale = ref(false);
const freeShipping = ref(false);
const sortBy = ref('featured');
const viewMode = ref('grid');

// Ratings options
const ratings = [
  { value: 4, label: '4 Stars & Up' },
  { value: 3, label: '3 Stars & Up' },
  { value: 2, label: '2 Stars & Up' },
  { value: 1, label: '1 Star & Up' }
];

// Filter products based on selected filters
const filteredProducts = computed(() => {
  return props.products.filter(product => {
    // Search filter
    if (searchQuery.value && !product.name.toLowerCase().includes(searchQuery.value.toLowerCase()) && 
        !product.description.toLowerCase().includes(searchQuery.value.toLowerCase())) {
      return false;
    }
    
    // Category filter
    if (selectedCategories.value.length > 0 && !selectedCategories.value.includes(product.categoryId)) {
      return false;
    }
    
    // Brand filter
    if (selectedBrands.value.length > 0 && !selectedBrands.value.includes(product.brandId)) {
      return false;
    }
    
    // Price filter
    const productPrice = parseFloat(product.price.replace('₦', '').replace(',', ''));
    if (productPrice < priceRange.value.min || productPrice > priceRange.value.max) {
      return false;
    }
    
    // Rating filter
    if (selectedRating.value > 0 && product.rating < selectedRating.value) {
      return false;
    }
    
    // Sale filter
    if (onSale.value && !product.onSale) {
      return false;
    }
    
    // Free shipping filter
    if (freeShipping.value && !product.freeShipping) {
      return false;
    }
    
    return true;
  });
});

// Sort products
const sortedProducts = computed(() => {
  const products = [...filteredProducts.value];
  
  switch (sortBy.value) {
    case 'price-low':
      return products.sort((a, b) => {
        const priceA = parseFloat(a.price.replace('₦', '').replace(',', ''));
        const priceB = parseFloat(b.price.replace('₦', '').replace(',', ''));
        return priceA - priceB;
      });
    case 'price-high':
      return products.sort((a, b) => {
        const priceA = parseFloat(a.price.replace('₦', '').replace(',', ''));
        const priceB = parseFloat(b.price.replace('₦', '').replace(',', ''));
        return priceB - priceA;
      });
    case 'newest':
      return products.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
    case 'rating':
      return products.sort((a, b) => b.rating - a.rating);
    default:
      return products;
  }
});

// Reset all filters
const resetFilters = () => {
  searchQuery.value = '';
  selectedCategories.value = [];
  selectedBrands.value = [];
  selectedRating.value = 0;
  priceRange.value = {
    min: 0,
    max: 1000000
  };
  onSale.value = false;
  freeShipping.value = false;
  sortBy.value = 'featured';
};

// View product details
const viewProduct = (productId) => {
  router.push(`/product/${productId}`);
};

// Add to cart
const addToCart = (product) => {
  console.log('Product added to cart:', product);
  // In a real app, this would add the product to the cart
  alert(`${product.name} added to cart!`);
};
</script>
