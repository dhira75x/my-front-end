<template>
  <header class="sticky top-0 z-50 bg-white shadow-md">
    <div class="container px-4 py-3 mx-auto">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center cursor-pointer" @click="$router.push({ name: 'landing' })">
          <img src="@/components/icons/ovo logo.jpeg" alt="Ovo Market" class="h-8 md:h-10 w-auto" />
        </div>

        <!-- Search Bar -->
        <div class="items-center hidden w-64 px-4 py-2 bg-gray-100 rounded-full md:flex">
          <svg class="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          <input type="text" placeholder="Search products..." class="w-full bg-transparent focus:outline-none" />
        </div>

        <!-- Navigation -->
        <nav class="hidden space-x-8 md:flex">
          <ul class="flex space-x-8">
            <li @click="$router.push({ name: 'landing' })"
              class="font-medium text-transparent bg-clip-text brand-gradient cursor-pointer">
              Home
            </li>
            <li @click="$router.push({ name: 'categories' })"
              class="font-medium text-transparent bg-clip-text brand-gradient cursor-pointer">
              Categories
            </li>
            <li @click="$router.push({ name: 'deals' })"
              class="font-medium text-transparent bg-clip-text brand-gradient cursor-pointer">
              Deals
            </li>
            <li @click="$router.push({ name: 'schedule-shopping' })"
              class="font-medium text-transparent bg-clip-text brand-gradient cursor-pointer">
              Schedule Shopping
            </li>
            <li @click="$router.push({ name: 'about' })"
              class="font-medium text-transparent bg-clip-text brand-gradient cursor-pointer">
              About
            </li>
          </ul>
        </nav>

        <!-- User Actions -->
        <div class="flex items-center space-x-4">
          <!-- Cart Button with Dropdown -->
          <div class="relative" ref="cartContainer">
            <button @click="toggleCart" class="relative p-2 text-gray-600 transition-colors hover:text-deepsaffron">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z">
                </path>
              </svg>
              <span
                class="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs text-white rounded-full bg-deepsaffron">{{
                  cartStore.totalItems }}</span>
            </button>

            <!-- Cart Dropdown -->
            <div v-if="showCart"
              class="absolute right-0 z-50 mt-2 bg-white rounded-lg shadow-xl w-96 border border-gray-100">
              <div class="flex items-center justify-between p-4 border-b">
                <h3 class="font-semibold text-gray-800">Your Cart ({{ cartStore.totalItems }})</h3>
                <button @click="showCart = false" class="text-gray-400 hover:text-gray-600">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div class="overflow-y-auto max-h-72">
                <div v-if="cartStore.cartItems?.length === 0" class="p-8 text-center text-gray-400">
                  <svg class="w-12 h-12 mx-auto mb-3 text-gray-300" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <p class="text-sm">Your cart is empty</p>
                </div>
                <div v-else>
                  <div v-for="item in cartStore.cartItems" :key="item._id"
                    class="flex items-start gap-3 p-3 border-b hover:bg-gray-50 transition-colors">
                    <!-- Product Image -->
                    <img :src="item.productId?.img?.[0]?.imgData || '/placeholder.png'" alt=""
                      class="object-cover w-14 h-14 rounded-md flex-shrink-0 bg-gray-100" />
                    <!-- Product Info -->
                    <div class="flex-1 min-w-0">
                      <h4 class="text-sm font-medium text-gray-800 truncate">{{ item.productId?.title }}</h4>
                      <p class="text-xs text-gray-500 mt-0.5">
                        ₦{{ Number(item.productId?.price).toLocaleString() }} each
                      </p>
                      <!-- Quantity Controls -->
                      <div class="flex items-center gap-2 mt-2">
                        <button @click="cartStore.removeFromCart(item.productId?._id)"
                          class="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-lime-500 hover:text-lime-600 transition-colors text-sm font-bold"
                          title="Remove one">−</button>

                        <!-- Spinner OR Count Container -->
                        <div class="flex items-center justify-center min-w-[32px]">
                          <svg v-if="cartStore.loadingItems[item.productId?._id]"
                            class="w-4 h-4 text-lime-600 animate-spin flex-shrink-0" viewBox="0 0 24 24" fill="none">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3">
                            </circle>
                            <path class="opacity-75" fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                            </path>
                          </svg>
                          <span v-else class="text-sm font-semibold text-gray-800">{{ item.count }}</span>
                        </div>

                        <button @click="cartStore.addOneToCart(item.productId?._id)"
                          class="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-lime-500 hover:text-lime-600 transition-colors text-sm font-bold"
                          title="Add one">+</button>
                        <span class="ml-auto text-sm font-semibold text-lime-700">
                          ₦{{ Number((item.productId?.price || 0) * item.count).toLocaleString() }}
                        </span>
                      </div>
                    </div>
                    <!-- Delete All of This Product -->
                    <button @click="cartStore.removeAllOfProduct(item.productId?._id)"
                      class="text-gray-300 hover:text-red-500 transition-colors flex-shrink-0 mt-1" title="Remove all">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <!-- Footer -->
              <div v-if="cartStore.cartItems?.length > 0" class="p-4 border-t bg-gray-50 rounded-b-lg">
                <div class="flex justify-between items-center mb-3">
                  <span class="text-sm text-gray-600">Total</span>
                  <span class="font-bold text-gray-800">₦{{ Number(cartStore.cartTotal).toLocaleString() }}</span>
                </div>
                <div class="flex gap-2">
                  <button @click="$router.push({ name: 'cart' }); showCart = false"
                    class="flex-1 py-2 text-sm font-medium text-lime-700 border border-lime-500 rounded-lg hover:bg-lime-50 transition-colors">
                    View Cart
                  </button>
                  <button @click="$router.push({ name: 'checkout' }); showCart = false"
                    class="flex-1 py-2 text-sm font-medium text-white bg-lime-600 rounded-lg hover:bg-lime-700 transition-colors">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Account / Auth Dropdown -->
          <div class="relative" ref="dropdownContainer">
            <button @click="toggleDropdown"
              class="flex items-center px-4 py-2 space-x-1 text-white transition-opacity rounded-full brand-gradient hover:opacity-90">
              <span v-if="userStore.isAuthenticated">Hi, {{ userStore.user?.names }}</span>
              <span v-else>Account</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>

            <div v-if="showDropdown" class="absolute right-0 z-50 w-56 py-1 mt-2 bg-white rounded-md shadow-lg">
              <template v-if="userStore.isAuthenticated">
                <div class="px-4 py-2 text-sm text-gray-700">
                  Signed in as
                  <span class="font-semibold">{{ userStore.user?.names }}</span>
                </div>
                <div class="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  @click="$router.push({ name: 'orders' }); showDropdown = false">
                  My Orders
                </div>
                <button @click="logout"
                  class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Logout
                </button>
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
    <nav class="fixed bottom-0 inset-x-0 z-50 border-t border-gray-200 bg-white md:hidden">
      <div class="grid grid-cols-5 text-xs">
        <button class="flex flex-col items-center justify-center py-2"
          :class="currentRouteName === 'landing' ? 'text-deepsaffron' : 'text-gray-600'"
          @click="$router.push({ name: 'landing' })">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1" />
          </svg>
          <span>Home</span>
        </button>
        <button class="flex flex-col items-center justify-center py-2" :class="currentRouteName === 'categories' ? 'text-deepsaffron' : 'text-gray-600'
          " @click="$router.push({ name: 'categories' })">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
          </svg>
          <span>Categories</span>
        </button>
        <button class="flex flex-col items-center justify-center py-2"
          :class="currentRouteName === 'deals' ? 'text-deepsaffron' : 'text-gray-600'"
          @click="$router.push({ name: 'deals' })">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h10M7 11h10M7 15h10" />
          </svg>
          <span>Deals</span>
        </button>
        <button class="flex flex-col items-center justify-center py-2"
          :class="currentRouteName === 'cart' ? 'text-deepsaffron' : 'text-gray-600'"
          @click="$router.push({ name: 'cart' })">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span>Cart</span>
        </button>
        <button class="flex flex-col items-center justify-center py-2" :class="currentRouteName === 'user-login' ? 'text-deepsaffron' : 'text-gray-600'
          " @click="
            userStore.isAuthenticated
              ? $router.push({ name: 'landing' })
              : $router.push({ name: 'user-login' })
            ">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5.121 17.804A6 6 0 1118.879 6.196M15 11l-4 4m0 0l-4-4m4 4V7" />
          </svg>
          <span>Account</span>
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/userStore.js";
import { useCartStore } from "@/stores/cartStore.js";

const router = useRouter();
const userStore = useUserStore();
const cartStore = useCartStore();

// Dropdown functionality
const showDropdown = ref(false);
const dropdownContainer = ref(null);

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const closeDropdown = (event) => {
  if (
    showDropdown.value &&
    dropdownContainer.value &&
    !dropdownContainer.value.contains(event.target)
  ) {
    showDropdown.value = false;
  }
};

const logout = () => {
  userStore.logout();
  showDropdown.value = false;
};

const currentRouteName = computed(() => router.currentRoute.value.name);

// Cart functionality
const showCart = ref(false);
const cartContainer = ref(null);

const toggleCart = () => {
  showCart.value = !showCart.value;
};

const viewProduct = (productId) => {
  router.push(`/product/${productId}`);
};



// Carousel functionality
const currentSlide = ref(0);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % carouselProducts.value.length;
};

const prevSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + carouselProducts.value.length) %
    carouselProducts.value.length;
};

const goToSlide = (index) => {
  currentSlide.value = index;
};

const getSlideProducts = (slideId) => {
  const startIndex = (slideId - 1) * 4;
  const endIndex = startIndex + 4;
  return allCarouselProducts.value.slice(startIndex, endIndex);
};



// Carousel products
const allCarouselProducts = ref([
  {
    id: 1,
    name: "Wireless Headphones",
    description: "Premium sound quality",
    price: "₦79,000.00",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    isNew: true,
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Track your fitness",
    price: "₦129,999.00",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    isNew: false,
  },
  {
    id: 3,
    name: "Running Shoes",
    description: "Comfortable and durable",
    price: "₦18,999.00",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    isNew: true,
  },
  {
    id: 4,
    name: "Backpack",
    description: "Perfect for travel",
    price: "₦19,900.00",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    isNew: false,
  },
  {
    id: 5,
    name: "Laptop",
    description: "High performance",
    price: "₦450,000.00",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    isNew: true,
  },
  {
    id: 6,
    name: "Sunglasses",
    description: "Stylish protection",
    price: "₦12,500.00",
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    isNew: false,
  },
  {
    id: 7,
    name: "Smartphone",
    description: "Latest technology",
    price: "₦250,000.00",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    isNew: true,
  },
  {
    id: 8,
    name: "Perfume",
    description: "Luxury fragrance",
    price: "₦35,000.00",
    image:
      "https://images.unsplash.com/photo-1523294587484-bae6cc821bf5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    isNew: false,
  },
]);

const carouselProducts = computed(() => {
  // Group products into slides of 4
  const slides = [];
  for (let i = 0; i < allCarouselProducts.value.length; i += 4) {
    slides.push({
      id: Math.floor(i / 4) + 1,
      products: allCarouselProducts.value.slice(i, i + 4),
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
  document.addEventListener("click", closeDropdown);
  // For cart
  document.addEventListener("click", (event) => {
    if (
      showCart.value &&
      cartContainer.value &&
      !cartContainer.value.contains(event.target)
    ) {
      showCart.value = false;
    }
  });

  // Initialize cart from backend
  cartStore.initializeCart();

  // For carousel
  startAutoplay();
});

onUnmounted(() => {
  document.removeEventListener("click", closeDropdown);
  // document.removeEventListener("click", closeCart);
  stopAutoplay();
});
</script>
