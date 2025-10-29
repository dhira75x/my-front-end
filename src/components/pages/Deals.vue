<template>
  <app-layout>
    <template v-slot:main-content>
      <div class="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <!-- Decorative elements -->
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-lime-100 opacity-50 blur-3xl"></div>
          <div class="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-green-100 opacity-50 blur-3xl"></div>
        </div>
        
        <div class="relative max-w-6xl mx-auto">
          <!-- Header -->
          <div class="text-center mb-16">
            <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Hot <span class="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-green-800">Deals</span>
            </h1>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our latest offers and exclusive discounts. Limited time only!
            </p>
          </div>

          <!-- Deals Categories -->
          <div class="flex flex-wrap justify-center gap-4 mb-12">
            <button 
              v-for="category in categories" 
              :key="category.id"
              @click="selectedCategory = category.id"
              :class="[
                'px-6 py-2 rounded-full font-medium transition-all',
                selectedCategory === category.id 
                  ? 'bg-gradient-to-r from-lime-600 to-green-700 text-white shadow-lg' 
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
              ]"
            >
              {{ category.name }}
            </button>
          </div>

          <!-- Deals Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div 
              v-for="deal in filteredDeals" 
              :key="deal.id"
              class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div class="relative">
                <img :src="deal.image" :alt="deal.title" class="w-full h-48 object-cover">
                <div class="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {{ deal.discount }}% OFF
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-lg font-bold text-gray-900 mb-2">{{ deal.title }}</h3>
                <p class="text-gray-600 mb-4">{{ deal.description }}</p>
                <div class="flex items-center justify-between">
                  <div>
                    <span class="text-lg font-bold text-gray-900">${{ deal.price }}</span>
                    <span class="text-sm text-gray-500 line-through ml-2">${{ deal.originalPrice }}</span>
                  </div>
                  <button class="bg-gradient-to-r from-lime-600 to-green-700 text-white px-4 py-2 rounded-lg hover:from-lime-700 hover:to-green-800 transition-all">
                    Shop Now
                  </button>
                </div>
                <div class="mt-4 flex items-center text-sm text-gray-500">
                  <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                  </svg>
                  Ends in: {{ deal.timeLeft }}
                </div>
              </div>
            </div>
          </div>

          <!-- Special Banner -->
          <div class="bg-gradient-to-r from-lime-600 to-green-800 rounded-2xl p-8 md:p-12 text-white text-center mb-16">
            <h2 class="text-2xl md:text-3xl font-bold mb-4">Exclusive VIP Deal</h2>
            <p class="text-lime-100 mb-6 max-w-2xl mx-auto">
              Sign up for our newsletter and get an additional 10% off your next purchase!
            </p>
            <div class="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                class="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              >
              <button class="bg-white text-lime-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all">
                Subscribe
              </button>
            </div>
          </div>

          <!-- Recently Viewed -->
          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Recently Viewed Deals</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div v-for="item in recentlyViewed" :key="item.id" class="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow">
                <img :src="item.image" :alt="item.title" class="w-full h-24 object-cover rounded mb-3">
                <h3 class="text-sm font-medium text-gray-900 truncate">{{ item.title }}</h3>
                <p class="text-sm font-bold text-lime-600">${{ item.price }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </app-layout>
</template>

<script setup>
import { ref, computed } from 'vue';
import AppLayout from '@/layouts/applayout.vue';

const selectedCategory = ref('all');
const categories = ref([
  { id: 'all', name: 'All Deals' },
  { id: 'electronics', name: 'Electronics' },
  { id: 'fashion', name: 'Fashion' },
  { id: 'home', name: 'Home & Garden' },
  { id: 'beauty', name: 'Beauty' },
]);

const deals = ref([
  {
    id: 1,
    title: 'Wireless Bluetooth Headphones',
    description: 'Premium quality with noise cancellation',
    price: 79.99,
    originalPrice: 149.99,
    discount: 47,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'electronics',
    timeLeft: '2 days 14 hours'
  },
  {
    id: 2,
    title: 'Summer Fashion Collection',
    description: 'Trendy clothes for the season',
    price: 39.99,
    originalPrice: 79.99,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'fashion',
    timeLeft: '5 days 3 hours'
  },
  {
    id: 3,
    title: 'Smart Home Security Camera',
    description: 'HD video with night vision',
    price: 59.99,
    originalPrice: 99.99,
    discount: 40,
    image: 'https://images.unsplash.com/photo-1558002038-1055e2d9d3d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'home',
    timeLeft: '1 day 8 hours'
  },
  {
    id: 4,
    title: 'Organic Skincare Set',
    description: 'Complete facial care routine',
    price: 49.99,
    originalPrice: 89.99,
    discount: 44,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'beauty',
    timeLeft: '3 days 12 hours'
  },
  {
    id: 5,
    title: 'Gaming Mechanical Keyboard',
    description: 'RGB backlit with tactile switches',
    price: 89.99,
    originalPrice: 149.99,
    discount: 40,
    image: 'https://images.unsplash.com/photo-1587202372775-e229f1725c07?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'electronics',
    timeLeft: '4 days 6 hours'
  },
  {
    id: 6,
    title: 'Luxury Throw Pillows',
    description: 'Set of 2 decorative pillows',
    price: 29.99,
    originalPrice: 49.99,
    discount: 40,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'home',
    timeLeft: '6 days 2 hours'
  }
]);

const recentlyViewed = ref([
  {
    id: 101,
    title: 'Fitness Tracker Watch',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 102,
    title: 'Leather Crossbody Bag',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1584917875440-2029922e80c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 103,
    title: 'Ceramic Plant Pot Set',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d9d674ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 104,
    title: 'Moisturizing Face Cream',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  }
]);

const filteredDeals = computed(() => {
  if (selectedCategory.value === 'all') {
    return deals.value;
  }
  return deals.value.filter(deal => deal.category === selectedCategory.value);
});
</script>