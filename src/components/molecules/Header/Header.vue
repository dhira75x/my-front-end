<template>
     <header class="sticky top-0 z-50 bg-white shadow-md">
      <div class="container px-4 py-3 mx-auto">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <div class="flex items-center space-x-2">
            <div
              class="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-lime-50 to-green-50">
              <!-- <span class="text-xl font-bold text-white">O</span> -->
              <img src="@/assets/ovo.svg" alt="OvoMarket Logo" class="w-6 h-6" />
            </div>
            <span class="text-xl font-bold text-gray-800">OvoMarket</span>
          </div>

          <!-- Search Bar -->
          <div class="items-center hidden w-64 px-4 py-2 bg-gray-100 rounded-full md:flex">
            <svg class="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <input type="text" placeholder="Search products..." class="w-full bg-transparent focus:outline-none">
          </div>

          <!-- Navigation -->
          <nav class="hidden space-x-8 md:flex">
           <ul class="flex space-x-8">
            <li @click="$router.push({ name: 'landing' })" class="font-medium text-gray-600 transition-colors hover:text-lime-600 cursor-pointer">Home</li>
             <li @click="$router.push({ name: 'categories' })" class="font-medium text-gray-600 transition-colors hover:text-lime-600 cursor-pointer">Categories</li>
             <li @click="$router.push({ name: 'deals' })" class="font-medium text-gray-600 transition-colors hover:text-lime-600 cursor-pointer">Deals</li>
             <li @click="$router.push({ name: 'about' })" class="font-medium text-gray-600 transition-colors hover:text-lime-600 cursor-pointer">About</li>
           </ul>
          </nav>

          

          <!-- User Actions -->
          <div class="flex items-center space-x-4">
            <!-- Cart Button with Dropdown -->
            <div class="relative" ref="cartContainer">
              <button @click="toggleCart" class="relative p-2 text-gray-600 transition-colors hover:text-lime-600">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z">
                  </path>
                </svg>
                <span
                  class="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs text-white rounded-full bg-lime-500">{{
                  cartItems.length }}</span>
              </button>

              <!-- Cart Dropdown -->
              <div v-if="showCart" class="absolute right-0 z-50 mt-2 bg-white rounded-md shadow-lg w-80">
                <div class="p-4 border-b">
                  <h3 class="font-semibold text-gray-800">Your Cart</h3>
                </div>
                <div class="overflow-y-auto max-h-60">
                  <div v-if="cartItems.length === 0" class="p-4 text-center text-gray-500">
                    Your cart is empty
                  </div>
                  <div v-else>
                    <div v-for="item in cartItems" :key="item.id" class="flex items-center p-4 border-b">
                      <img :src="item.image" alt="" class="object-cover w-16 h-16 rounded">
                      <div class="flex-1 ml-3">
                        <h4 class="text-sm font-medium text-gray-800">{{ item.name }}</h4>
                        <p class="text-sm text-gray-600">{{ item.price }}</p>
                      </div>
                      <button @click="removeFromCart(item.id)" class="text-gray-400 hover:text-red-500">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                          </path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="p-4">
                  <div class="flex justify-between mb-3">
                    <span class="font-medium text-gray-800">Total:</span>
                    <span class="font-semibold text-lime-600">₦{{ cartTotal }}</span>
                  </div>
                  <button
                    class="w-full py-2 font-medium text-white transition-colors rounded-lg bg-lime-500 hover:bg-lime-600">
                    Checkout
                  </button>
                </div>
              </div>
            </div>

            <!-- Account / Auth Dropdown -->
            <div class="relative" ref="dropdownContainer">
              <button @click="toggleDropdown"
                class="flex items-center px-4 py-2 space-x-1 text-white transition-opacity rounded-full bg-gradient-to-r from-lime-500 to-green-500 hover:opacity-90">
                <span v-if="userStore.isAuthenticated">Hi, {{ userStore.user?.names }}</span>
                <span v-else>Account</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              <div v-if="showDropdown" class="absolute right-0 z-50 w-56 py-1 mt-2 bg-white rounded-md shadow-lg">
                <template v-if="userStore.isAuthenticated">
                  <div class="px-4 py-2 text-sm text-gray-700">Signed in as <span class="font-semibold">{{ userStore.user?.names }}</span></div>
                  <button @click="logout" class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</button>
                </template>
                <template v-else>
                  <router-link to="/user-login"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Login</router-link>
                  <router-link :to="{ name: 'user-reg' }"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Register as User</router-link>
                  <router-link :to="{ name: 'vendor-reg' }"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Register as Vendor</router-link>
                  <router-link :to="{ name: 'dispatch-reg' }"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Register as Dispatch</router-link>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/userStore.js";



const router = useRouter();
const userStore = useUserStore();

// Dropdown functionality
const showDropdown = ref(false);
const dropdownContainer = ref(null);

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const closeDropdown = (event) => {
  if (showDropdown.value && dropdownContainer.value && !dropdownContainer.value.contains(event.target)) {
    showDropdown.value = false;
  }
};

const logout = () => {
  userStore.logout();
  showDropdown.value = false;
};

// Cart functionality
const showCart = ref(false);
const cartContainer = ref(null);
const cartItems = ref([]);

const toggleCart = () => {
  showCart.value = !showCart.value;
};

const closeCart = (event) => {
  if (showCart.value && cartContainer.value && !cartContainer.value.contains(event.target)) {
    showCart.value = false;
  }
};

const viewProduct = (productId) => {
  router.push(`/product/${productId}`);
};

const addToCart = (product) => {
  cartItems.value.push(product);
  console.log("Product added to cart:", product);
};

const removeFromCart = (productId) => {
  cartItems.value = cartItems.value.filter(item => item.id !== productId);
};

const cartTotal = computed(() => {
  return cartItems.value.reduce((total, item) => {
    return total + parseFloat(item.price.replace('₦', '').replace(',', ''));
  }, 0).toFixed(2);
});

// Carousel functionality
const currentSlide = ref(0);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % carouselProducts.value.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + carouselProducts.value.length) % carouselProducts.value.length;
};

const goToSlide = (index) => {
  currentSlide.value = index;
};

const getSlideProducts = (slideId) => {
  const startIndex = (slideId - 1) * 4;
  const endIndex = startIndex + 4;
  return allCarouselProducts.value.slice(startIndex, endIndex);
};

// Product data
const featuredProducts = ref([
  {
    id: 1,
    name: "Wireless Headphones",
    description: "Premium sound quality",
    price: "₦79,000.00",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    isNew: true
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Track your fitness",
    price: "₦129,999.00",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    isNew: false
  },
  {
    id: 3,
    name: "Running Shoes",
    description: "Comfortable and durable",
    price: "₦18,999.00",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    isNew: true
  },
  {
    id: 4,
    name: "Backpack",
    description: "Perfect for travel",
    price: "₦19,900.00",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    isNew: false
  }
]);

const hotProducts = ref([
  {
    id: 1,
    name: "Regal Wine",
    description: "Premium brandy wine",
    price: "₦79,000.00",
    image: "https://images.unsplash.com/photo-1560474847-929b9d1b4f41?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    isNew: true
  },
  {
    id: 2,
    name: "Hennesy",
    description: "Premium cognac",
    price: "₦129,999.00",
    image: "https://images.unsplash.com/photo-1607834837845-292c04910753?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    isNew: false
  },
  {
    id: 3,
    name: "Camera Lens",
    description: "Sharp and clear images",
    price: "₦189,999.00",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    isNew: true
  },
  {
    id: 4,
    name: "Basket",
    description: "Perfect for travel",
    price: "₦19,900.00",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    isNew: false
  }
]);

// Carousel products
const allCarouselProducts = ref([
  {
    id: 1,
    name: "Wireless Headphones",
    description: "Premium sound quality",
    price: "₦79,000.00",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    isNew: true
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Track your fitness",
    price: "₦129,999.00",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    isNew: false
  },
  {
    id: 3,
    name: "Running Shoes",
    description: "Comfortable and durable",
    price: "₦18,999.00",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    isNew: true
  },
  {
    id: 4,
    name: "Backpack",
    description: "Perfect for travel",
    price: "₦19,900.00",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    isNew: false
  },
  {
    id: 5,
    name: "Laptop",
    description: "High performance",
    price: "₦450,000.00",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    isNew: true
  },
  {
    id: 6,
    name: "Sunglasses",
    description: "Stylish protection",
    price: "₦12,500.00",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    isNew: false
  },
  {
    id: 7,
    name: "Smartphone",
    description: "Latest technology",
    price: "₦250,000.00",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    isNew: true
  },
  {
    id: 8,
    name: "Perfume",
    description: "Luxury fragrance",
    price: "₦35,000.00",
    image: "https://images.unsplash.com/photo-1523294587484-bae6cc821bf5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    isNew: false
  }
]);

const carouselProducts = computed(() => {
  // Group products into slides of 4
  const slides = [];
  for (let i = 0; i < allCarouselProducts.value.length; i += 4) {
    slides.push({
      id: Math.floor(i / 4) + 1,
      products: allCarouselProducts.value.slice(i, i + 4)
    });
  }
  return slides;
});

// Auto-play carousel
let autoplayInterval;

const startAutoplay = () => {
  autoplayInterval = setInterval(() => {
    nextSlide();
  }, 5000);
};

const stopAutoplay = () => {
  clearInterval(autoplayInterval);
};

onMounted(() => {
  // For dropdown
  document.addEventListener('click', closeDropdown);
  // For cart
  document.addEventListener('click', closeCart);
  // For carousel
  startAutoplay();
});

onUnmounted(() => {
  document.removeEventListener('click', closeDropdown);
  document.removeEventListener('click', closeCart);
  stopAutoplay();
});
</script>
