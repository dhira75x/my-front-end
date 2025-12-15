<!-- ProductDetail.vue -->
<template>
  <div class="min-h-screen py-8 bg-gray-50 animate__animated animate__fadeIn">
    <div class="container px-4 mx-auto">
      <!-- Breadcrumb -->
      <nav class="flex mb-8">
        <ol class="flex items-center space-x-2">
          <li>
            <router-link to="/" class="text-gray-600 hover:text-lime-600">Home</router-link>
          </li>
          <li class="text-gray-400">/</li>
          <li>
            <router-link to="/products" class="text-gray-600 hover:text-lime-600">Products</router-link>
          </li>
          <li class="text-gray-400">/</li>
          <li class="text-gray-800">{{ product.name }}</li>
        </ol>
      </nav>

      <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <!-- Product Images -->
        <div class="space-y-4">
          <div class="overflow-hidden bg-white rounded-lg shadow-md animate__animated animate__fadeIn">
            <img 
              :src="selectedImage" 
              :alt="product.name" 
              class="object-cover w-full h-96"
            />
          </div>
          <div class="flex space-x-2 overflow-x-auto">
            <div 
              v-for="(image, index) in product.gallery" 
              :key="index"
              @click="selectedImage = image"
              class="flex-shrink-0 w-20 h-20 overflow-hidden bg-white rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
              :class="{'ring-2 ring-lime-500': selectedImage === image}"
            >
              <img :src="image" :alt="`${product.name} ${index + 1}`" class="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        <!-- Product Details -->
        <div class="bg-white p-6 rounded-lg shadow-md animate__animated animate__fadeIn">
          <div class="flex items-center justify-between mb-4">
            <h1 class="text-2xl font-bold text-gray-800">{{ product.name }}</h1>
            <button class="p-2 text-gray-500 hover:text-red-500">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </button>
          </div>

          <div class="flex items-center mb-4">
            <div class="flex text-yellow-400">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
              <svg class="w-5 h-5 text-gray-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
            </div>
            <span class="ml-2 text-sm text-gray-600">(24 reviews)</span>
          </div>

          <div class="mb-6">
            <p class="text-2xl font-bold text-lime-600">{{ product.price }}</p>
            <p class="text-sm text-gray-500 line-through" v-if="product.originalPrice">{{ product.originalPrice }}</p>
          </div>

          <div class="mb-6">
            <p class="text-gray-600">{{ product.description }}</p>
          </div>

          <div class="mb-6">
            <h3 class="mb-2 font-semibold text-gray-800">Key Features</h3>
            <ul class="space-y-1 text-gray-600">
              <li class="flex items-start">
                <svg class="w-5 h-5 mr-2 text-lime-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Premium quality materials
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 mr-2 text-lime-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                1 year warranty included
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 mr-2 text-lime-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Free shipping on orders over ₦50,000
              </li>
            </ul>
          </div>

          <div class="mb-6">
            <h3 class="mb-2 font-semibold text-gray-800">Quantity</h3>
            <div class="flex items-center w-32 border border-gray-300 rounded">
              <button @click="decreaseQuantity" class="px-3 py-2 text-gray-600 hover:bg-gray-100">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                </svg>
              </button>
              <span class="flex-1 text-center">{{ quantity }}</span>
              <button @click="increaseQuantity" class="px-3 py-2 text-gray-600 hover:bg-gray-100">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </button>
            </div>
          </div>

          <div class="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
            <button 
              @click="addToCart" 
              class="flex items-center justify-center px-6 py-3 font-semibold text-white transition bg-lime-600 rounded-lg hover:bg-lime-700 duration-300 hover:scale-105 focus:ring-2 focus:ring-lime-500"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              Add to Cart
            </button>
            <button 
              @click="buyNow" 
              class="flex items-center justify-center px-6 py-3 font-semibold text-white transition bg-gray-800 rounded-lg hover:bg-gray-900 duration-300 hover:scale-105 focus:ring-2 focus:ring-gray-700"
            >
              Buy Now
            </button>
          </div>

          <div class="mt-6 pt-6 border-t border-gray-200">
            <div class="flex items-center mb-4">
              <svg class="w-6 h-6 mr-2 text-lime-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="text-gray-600">In stock and ready to ship</span>
            </div>
            <div class="flex items-center">
              <svg class="w-6 h-6 mr-2 text-lime-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span class="text-gray-600">Fast delivery within 2-3 business days</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Product Details Tabs -->
      <div class="mt-12 bg-white rounded-lg shadow-md animate__animated animate__fadeIn">
        <div class="border-b border-gray-200">
          <nav class="flex -mb-px">
            <button 
              @click="activeTab = 'description'" 
              class="px-6 py-3 font-medium text-center border-b-2"
              :class="activeTab === 'description' ? 'text-lime-600 border-lime-600' : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'"
            >
              Description
            </button>
            <button 
              @click="activeTab = 'specifications'" 
              class="px-6 py-3 font-medium text-center border-b-2"
              :class="activeTab === 'specifications' ? 'text-lime-600 border-lime-600' : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'"
            >
              Specifications
            </button>
            <button 
              @click="activeTab = 'reviews'" 
              class="px-6 py-3 font-medium text-center border-b-2"
              :class="activeTab === 'reviews' ? 'text-lime-600 border-lime-600' : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'"
            >
              Reviews (24)
            </button>
          </nav>
        </div>

        <div class="p-6">
          <Transition mode="out-in" enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
            <div :key="activeTab">
              <div v-if="activeTab === 'description'">
                <h3 class="mb-4 text-lg font-semibold">Product Description</h3>
                <p class="text-gray-600">
                  {{ product.fullDescription }}
                </p>
              </div>

              <div v-else-if="activeTab === 'specifications'">
                <h3 class="mb-4 text-lg font-semibold">Product Specifications</h3>
                <div class="overflow-hidden border border-gray-200 rounded-lg">
                  <table class="min-w-full divide-y divide-gray-200">
                    <tbody class="bg-white divide-y divide-gray-200">
                      <tr v-for="(spec, index) in product.specifications" :key="index">
                        <td class="px-6 py-4 text-sm font-medium text-gray-900 bg-gray-50">{{ spec.name }}</td>
                        <td class="px-6 py-4 text-sm text-gray-500">{{ spec.value }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div v-else>
                <h3 class="mb-4 text-lg font-semibold">Customer Reviews</h3>
                <div class="space-y-6">
                  <div v-for="(review, index) in product.reviews" :key="index" class="pb-6 border-b border-gray-200">
                    <div class="flex items-center mb-2">
                      <div class="flex text-yellow-400">
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                      </div>
                      <span class="ml-2 text-sm font-medium text-gray-900">{{ review.author }}</span>
                      <span class="ml-2 text-sm text-gray-500">{{ review.date }}</span>
                    </div>
                    <p class="text-gray-600">{{ review.comment }}</p>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>

      <!-- Related Products -->
      <div class="mt-12">
        <h2 class="mb-6 text-2xl font-bold text-gray-800">Related Products</h2>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div v-for="relatedProduct in relatedProducts" :key="relatedProduct.id" class="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-1 animate__animated animate__fadeInUp">
            <img :src="relatedProduct.image" alt="" class="object-cover w-full h-48">
            <div class="p-4">
              <h3 class="mb-1 font-semibold text-gray-800">{{ relatedProduct.name }}</h3>
              <p class="text-sm text-gray-600">{{ relatedProduct.description }}</p>
              <div class="flex items-center justify-between mt-3">
                <span class="font-bold text-lime-600">{{ relatedProduct.price }}</span>
                <button @click="viewProduct(relatedProduct.id)" class="p-2 text-white transition-colors rounded-full bg-lime-500 hover:bg-lime-600 transition-transform duration-300 hover:scale-110 focus:ring-2 focus:ring-lime-400">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const activeTab = ref('description');
const selectedImage = ref('');
const quantity = ref(1);
const product = ref({}); // Initialize as empty object

// Mock product data - in a real app, this would come from an API
const mockProducts = [
  {
    id: 1,
    name: 'Wireless Headphones',
    description: 'Premium sound quality with active noise cancellation',
    fullDescription: 'Experience premium sound quality with our wireless headphones. Featuring advanced active noise cancellation technology, these headphones provide an immersive listening experience. With up to 30 hours of battery life and quick charge capability, you can enjoy your music all day long. The comfortable over-ear design and premium materials ensure long-lasting comfort during extended listening sessions.',
    price: '₦79,000.00',
    originalPrice: '₦99,000.00',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    ],
    specifications: [
      { name: 'Brand', value: 'SoundMax' },
      { name: 'Model', value: 'WH-1000XM4' },
      { name: 'Color', value: 'Black' },
      { name: 'Connectivity', value: 'Bluetooth 5.0' },
      { name: 'Battery Life', value: 'Up to 30 hours' },
      { name: 'Noise Cancellation', value: 'Active' },
      { name: 'Weight', value: '254g' }
    ],
    reviews: [
      {
        author: 'John Doe',
        date: 'May 15, 2023',
        rating: 5,
        comment: 'These headphones are amazing! The sound quality is incredible and the noise cancellation works perfectly.'
      },
      {
        author: 'Sarah Miller',
        date: 'April 28, 2023',
        rating: 5,
        comment: 'Best headphones I\'ve ever owned. Comfortable for long periods and the battery life is impressive.'
      },
      {
        author: 'Robert Johnson',
        date: 'April 10, 2023',
        rating: 4,
        comment: 'Great sound quality and features. The only downside is they\'re a bit pricey, but worth it if you can afford them.'
      }
    ]
  },
  {
    id: 2,
    name: 'Smart Watch',
    description: 'Track your fitness',
    fullDescription: 'Stay connected and track your fitness goals with our advanced smartwatch. Features include heart rate monitoring, GPS tracking, sleep analysis, and water resistance up to 50 meters. Compatible with both iOS and Android devices.',
    price: '₦129,999.00',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1544117519-31a4b719223d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    ],
    specifications: [
      { name: 'Brand', value: 'TechFit' },
      { name: 'Model', value: 'TF-2000' },
      { name: 'Display', value: '1.3" AMOLED' },
      { name: 'Battery Life', value: 'Up to 7 days' },
      { name: 'Water Resistance', value: '5ATM' },
      { name: 'Compatibility', value: 'iOS 12+, Android 6+' }
    ],
    reviews: [
      {
        author: 'Mike Wilson',
        date: 'June 2, 2023',
        rating: 5,
        comment: 'This smartwatch has exceeded my expectations. The battery life is incredible and the fitness tracking is very accurate.'
      },
      {
        author: 'Lisa Chen',
        date: 'May 20, 2023',
        rating: 4,
        comment: 'Great features and design. The only issue is that some third-party apps are not fully supported.'
      }
    ]
  },
  {
    id: 3,
    name: 'Running Shoes',
    description: 'Comfortable and durable',
    fullDescription: 'Experience ultimate comfort and performance with our running shoes. Designed with advanced cushioning technology and breathable materials, these shoes provide the perfect balance of support and flexibility for runners of all levels.',
    price: '₦18,999.00',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1542291021-7eeb1f4c920d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    ],
    specifications: [
      { name: 'Brand', value: 'RunFast' },
      { name: 'Model', value: 'RF-3000' },
      { name: 'Material', value: 'Mesh upper, rubber sole' },
      { name: 'Weight', value: '280g' },
      { name: 'Drop', value: '8mm' },
      { name: 'Usage', value: 'Road running, daily training' }
    ],
    reviews: [
      {
        author: 'David Thompson',
        date: 'June 15, 2023',
        rating: 5,
        comment: 'These are the most comfortable running shoes I\'ve ever worn. Great for long distance running.'
      },
      {
        author: 'Jennifer Lee',
        date: 'May 30, 2023',
        rating: 4,
        comment: 'Good shoes overall, but they took a bit longer to break in than expected.'
      }
    ]
  },
  {
    id: 4,
    name: 'Backpack',
    description: 'Perfect for travel',
    fullDescription: 'Our versatile backpack is designed for travelers and commuters alike. With multiple compartments, laptop sleeve, and water-resistant materials, it keeps your belongings organized and protected in any weather.',
    price: '₦19,900.00',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1542291021-7eeb1f4c920d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    ],
    specifications: [
      { name: 'Brand', value: 'TravelPro' },
      { name: 'Capacity', value: '25L' },
      { name: 'Material', value: 'Nylon polyester' },
      { name: 'Laptop Compartment', value: 'Up to 15.6"' },
      { name: 'Water Resistance', value: 'Water-resistant' },
      { name: 'Weight', value: '1.2kg' }
    ],
    reviews: [
      {
        author: 'Alex Johnson',
        date: 'June 10, 2023',
        rating: 5,
        comment: 'This backpack has been perfect for my daily commute. The laptop compartment is well-padded and there are plenty of pockets.'
      },
      {
        author: 'Maria Garcia',
        date: 'May 25, 2023',
        rating: 4,
        comment: 'Good quality and design. The only improvement would be adding more organization to the smaller compartments.'
      }
    ]
  },
  {
    id: 5,
    name: 'Laptop',
    description: 'High performance',
    fullDescription: 'Experience powerful performance with our latest laptop. Featuring the latest processor, high-resolution display, and long battery life, it\'s perfect for work, gaming, and creativity.',
    price: '₦450,000.00',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1593642634317-6f71e1d307ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    ],
    specifications: [
      { name: 'Brand', value: 'TechPro' },
      { name: 'Model', value: 'TP-5000' },
      { name: 'Processor', value: 'Intel Core i7 11th Gen' },
      { name: 'Memory', value: '16GB DDR4' },
      { name: 'Storage', value: '512GB SSD' },
      { name: 'Display', value: '15.6" 4K UHD' }
    ],
    reviews: [
      {
        author: 'Tom Wilson',
        date: 'June 5, 2023',
        rating: 5,
        comment: 'This laptop is incredibly fast and the display is stunning. Perfect for my video editing work.'
      },
      {
        author: 'Nina Patel',
        date: 'May 18, 2023',
        rating: 4,
        comment: 'Great performance but the battery life could be better. Still very satisfied with the purchase.'
      }
    ]
  },
  {
    id: 6,
    name: 'Sunglasses',
    description: 'Stylish protection',
    fullDescription: 'Protect your eyes in style with our premium sunglasses. Featuring UV400 protection, polarized lenses, and a lightweight frame, these sunglasses offer both comfort and protection.',
    price: '₦12,500.00',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1542291021-7eeb1f4c920d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    ],
    specifications: [
      { name: 'Brand', value: 'SunStyle' },
      { name: 'Model', value: 'SS-100' },
      { name: 'Frame Material', value: 'Acetate' },
      { name: 'Lens Material', value: 'Polycarbonate' },
      { name: 'Protection', value: 'UV400' },
      { name: 'Polarization', value: 'Yes' }
    ],
    reviews: [
      {
        author: 'Chris Evans',
        date: 'June 1, 2023',
        rating: 5,
        comment: 'These sunglasses are stylish and the polarization really makes a difference in bright sunlight.'
      },
      {
        author: 'Amy Rodriguez',
        date: 'May 15, 2023',
        rating: 4,
        comment: 'Great quality and fit. The only minor issue is that they smudge easily, but the cleaning cloth helps.'
      }
    ]
  },
  {
    id: 7,
    name: 'Smartphone',
    description: 'Latest technology',
    fullDescription: 'Stay connected with our latest smartphone featuring a powerful processor, stunning display, and advanced camera system. With 5G connectivity and all-day battery life, it\'s designed for modern life.',
    price: '₦250,000.00',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1593642634317-6f71e1d307ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1593642634317-6f71e1d307ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    ],
    specifications: [
      { name: 'Brand', value: 'TechMobile' },
      { name: 'Model', value: 'TM-5000' },
      { name: 'Display', value: '6.7" OLED' },
      { name: 'Processor', value: 'Octa-core 2.8GHz' },
      { name: 'Memory', value: '8GB RAM' },
      { name: 'Storage', value: '256GB' }
    ],
    reviews: [
      {
        author: 'Ryan Kim',
        date: 'May 28, 2023',
        rating: 5,
        comment: 'This phone is incredibly fast and the camera quality is amazing. The battery easily lasts a full day with heavy use.'
      },
      {
        author: 'Sophie Turner',
        date: 'May 12, 2023',
        rating: 4,
        comment: 'Great phone overall. The display is beautiful and performance is smooth. The only downside is the lack of a headphone jack.'
      }
    ]
  },
  {
    id: 8,
    name: 'Perfume',
    description: 'Luxury fragrance',
    fullDescription: 'Indulge in our luxury fragrance, crafted with the finest ingredients to create a captivating scent that lasts all day. Perfect for special occasions or everyday wear.',
    price: '₦35,000.00',
    image: '/perfume.webp',
    gallery: [
      '/perfume.webp',
      'https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1542291021-7eeb1f4c920d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    ],
    specifications: [
      { name: 'Brand', value: 'LuxScent' },
      { name: 'Fragrance Family', value: 'Floral Oriental' },
      { name: 'Size', value: '100ml' },
      { name: 'Longevity', value: '8-10 hours' },
      { name: 'Notes', value: 'Rose, Jasmine, Vanilla, Amber' },
      { name: 'Occasion', value: 'Day & Night' }
    ],
    reviews: [
      {
        author: 'Emma Watson',
        date: 'May 22, 2023',
        rating: 5,
        comment: 'This fragrance is absolutely divine. I receive compliments every time I wear it. Worth every penny!'
      },
      {
        author: 'James Brown',
        date: 'May 8, 2023',
        rating: 4,
        comment: 'Great scent that lasts all day. The bottle design is also very elegant. Would definitely purchase again.'
      }
    ]
  },
  {
    id: 9,
    name: 'Regal Wine',
    description: 'Premium brandy wine',
    fullDescription: 'Experience the rich, complex flavors of our premium brandy wine. Aged to perfection in oak barrels, this wine offers notes of dried fruit, vanilla, and spices with a smooth, warm finish.',
    price: '₦79,000.00',
    image: '/regal.jpg',
    gallery: [
      '/regal.jpg',
      'https://images.unsplash.com/photo-1560474847-929b9d1b4f41?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1607834837845-292c04910753?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    ],
    specifications: [
      { name: 'Brand', value: 'Regal Estates' },
      { name: 'Type', value: 'Brandy' },
      { name: 'Age', value: '12 years' },
      { name: 'Region', value: 'Cognac, France' },
      { name: 'Alcohol', value: '40%' },
      { name: 'Volume', value: '750ml' }
    ],
    reviews: [
      {
        author: 'William Davis',
        date: 'June 8, 2023',
        rating: 5,
        comment: 'Exceptional brandy with a smooth, complex flavor profile. Perfect for special occasions or as a gift.'
      },
      {
        author: 'Olivia Martinez',
        date: 'May 25, 2023',
        rating: 4,
        comment: 'Very smooth and enjoyable. The packaging is also very elegant. Would recommend to brandy enthusiasts.'
      }
    ]
  },
  {
    id: 10,
    name: 'Gallantry',
    description: 'Premium cognac',
    fullDescription: 'Discover the sophistication of our premium cognac, meticulously crafted using traditional methods and the finest grapes. With its deep amber color and complex aroma, it offers a truly luxurious drinking experience.',
    price: '₦129,999.00',
    image: '/gallantry.jpg',
    gallery: [
      '/gallantry.jpg',
      'https://images.unsplash.com/photo-1607834837845-292c04910753?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1560474847-929b9d1b4f41?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    ],
    specifications: [
      { name: 'Brand', value: 'Gallantry' },
      { name: 'Type', value: 'Cognac XO' },
      { name: 'Age', value: '20 years' },
      { name: 'Region', value: 'Grande Champagne, France' },
      { name: 'Alcohol', value: '40%' },
      { name: 'Volume', value: '700ml' }
    ],
    reviews: [
      {
        author: 'Benjamin Clark',
        date: 'June 12, 2023',
        rating: 5,
        comment: 'Outstanding cognac with incredible depth and complexity. The long aging process really shows in the flavor profile.'
      },
      {
        author: 'Isabella Taylor',
        date: 'May 30, 2023',
        rating: 5,
        comment: 'This is by far the best cognac I\'ve ever tasted. Worth every penny for special celebrations.'
      }
    ]
  },
  {
    id: 11,
    name: 'Camera Lens',
    description: 'Sharp and clear images',
    fullDescription: 'Capture stunning photos with our professional camera lens. Designed for photographers who demand the best in image quality, this lens offers exceptional sharpness and beautiful bokeh.',
    price: '₦189,999.00',
    image: '/lens-max.png',
    gallery: [
      '/lens-max.png',
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1560474847-929b9d1b4f41?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    ],
    specifications: [
      { name: 'Brand', value: 'PhotoPro' },
      { name: 'Focal Length', value: '50mm' },
      { name: 'Aperture', value: 'f/1.2' },
      { name: 'Mount', value: 'Canon EF' },
      { name: 'Elements', value: '12' },
      { name: 'Weight', value: '820g' }
    ],
    reviews: [
      {
        author: 'Daniel Wilson',
        date: 'June 7, 2023',
        rating: 5,
        comment: 'This lens has transformed my photography. The sharpness and bokeh are absolutely beautiful.'
      },
      {
        author: 'Sophia Anderson',
        date: 'May 22, 2023',
        rating: 4,
        comment: 'Excellent lens for portrait photography. The only minor issue is the weight, but the image quality makes up for it.'
      }
    ]
  },
  {
    id: 12,
    name: 'Basket',
    description: 'Perfect for travel',
    fullDescription: 'Our versatile basket is perfect for picnics, shopping, or home organization. Handcrafted from sustainable materials, it combines functionality with beautiful design.',
    price: '₦19,900.00',
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1542291021-7eeb1f4c920d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    ],
    specifications: [
      { name: 'Material', value: 'Water Hyacinth' },
      { name: 'Dimensions', value: '40cm x 30cm x 25cm' },
      { name: 'Weight', value: '800g' },
      { name: 'Color', value: 'Natural' },
      { name: 'Care', value: 'Wipe clean with damp cloth' },
      { name: 'Origin', value: 'Handmade in Indonesia' }
    ],
    reviews: [
      {
        author: 'Michael Johnson',
        date: 'June 3, 2023',
        rating: 5,
        comment: 'Beautifully crafted basket. Perfect for our weekend picnics and looks great in our home.'
      },
      {
        author: 'Emily Chen',
        date: 'May 18, 2023',
        rating: 4,
        comment: 'Great quality and design. The basket is sturdy and the perfect size for carrying groceries.'
      }
    ]
  }
];

// Function to get product by ID
const getProductById = (id) => {
  return mockProducts.find(product => product.id === parseInt(id));
};

// Mock related products function
const getRelatedProducts = (currentProductId) => {
  // Return 3 random products excluding the current one
  const related = mockProducts
    .filter(product => product.id !== currentProductId)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);
  
  return related;
};

const relatedProducts = ref([]);

const increaseQuantity = () => {
  quantity.value++;
};

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

const addToCart = () => {
  // In a real app, this would add the product to the cart
  console.log(`Added ${quantity.value} of ${product.value.name} to cart`);
  // Show a success message or notification
  alert(`${quantity.value} ${product.value.name}(s) added to cart!`);
};

const buyNow = () => {
  // In a real app, this would add the product to the cart and navigate to checkout
  console.log(`Buying ${quantity.value} of ${product.value.name}`);
  router.push('/checkout');
};

const viewProduct = (productId) => {
  // Navigate to the product detail page
  router.push(`/product/${productId}`);
};

onMounted(() => {
  // Get the product ID from the route
  const productId = route.params.id;
  
  // Find the product by ID
  const foundProduct = getProductById(productId);
  
  if (foundProduct) {
    product.value = foundProduct;
    selectedImage.value = foundProduct.image;
    
    // Get related products
    relatedProducts.value = getRelatedProducts(foundProduct.id);
  } else {
    // Handle product not found
    console.error(`Product with ID ${productId} not found`);
    // Redirect to products page or show error message
    router.push('/products');
  }
});
</script>
