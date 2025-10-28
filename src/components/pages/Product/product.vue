<!-- ProductDetail.vue -->
<template>
  <div class="min-h-screen py-8 bg-gray-50">
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
          <div class="overflow-hidden bg-white rounded-lg shadow-md">
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
              class="flex-shrink-0 w-20 h-20 overflow-hidden bg-white rounded-lg cursor-pointer"
              :class="{'ring-2 ring-lime-500': selectedImage === image}"
            >
              <img :src="image" :alt="`${product.name} ${index + 1}`" class="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        <!-- Product Details -->
        <div class="bg-white p-6 rounded-lg shadow-md">
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
              class="flex items-center justify-center px-6 py-3 font-semibold text-white transition-colors bg-lime-600 rounded-lg hover:bg-lime-700"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              Add to Cart
            </button>
            <button 
              @click="buyNow" 
              class="flex items-center justify-center px-6 py-3 font-semibold text-white transition-colors bg-gray-800 rounded-lg hover:bg-gray-900"
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
      <div class="mt-12 bg-white rounded-lg shadow-md">
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
          <!-- Description Tab -->
          <div v-if="activeTab === 'description'">
            <h3 class="mb-4 text-lg font-semibold">Product Description</h3>
            <p class="text-gray-600">
              {{ product.fullDescription }}
            </p>
          </div>

          <!-- Specifications Tab -->
          <div v-if="activeTab === 'specifications'">
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

          <!-- Reviews Tab -->
          <div v-if="activeTab === 'reviews'">
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
      </div>

      <!-- Related Products -->
      <div class="mt-12">
        <h2 class="mb-6 text-2xl font-bold text-gray-800">Related Products</h2>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div v-for="relatedProduct in relatedProducts" :key="relatedProduct.id" class="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
            <img :src="relatedProduct.image" alt="" class="object-cover w-full h-48">
            <div class="p-4">
              <h3 class="mb-1 font-semibold text-gray-800">{{ relatedProduct.name }}</h3>
              <p class="text-sm text-gray-600">{{ relatedProduct.description }}</p>
              <div class="flex items-center justify-between mt-3">
                <span class="font-bold text-lime-600">{{ relatedProduct.price }}</span>
                <button @click="viewProduct(relatedProduct.id)" class="p-2 text-white transition-colors rounded-full bg-lime-500 hover:bg-lime-600">
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

// Mock product data - in a real app, this would come from an API
const product = ref({
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
});

// Mock related products
const relatedProducts = ref([
  {
    id: 2,
    name: 'Smart Watch',
    description: 'Track your fitness',
    price: '₦129,999.00',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    name: 'Running Shoes',
    description: 'Comfortable and durable',
    price: '₦18,999.00',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    name: 'Backpack',
    description: 'Perfect for travel',
    price: '₦19,900.00',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
  }
]);

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
  // Set the selected image to the main product image
  selectedImage.value = product.value.image;
  
  // In a real app, you would fetch the product data based on the route parameter
  // For example: const productId = route.params.id;
  // Then fetch the product data from an API
});
</script>