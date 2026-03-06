<!-- CartPage.vue -->
<template>
  <div class="mx-auto mt-8 max-w-3xl pb-8 animate__animated animate__fadeIn">
    <h1 class="mb-4 text-3xl font-semibold">Shopping Cart</h1>

    <div v-if="cartStore.loading" class="flex justify-center p-12">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-lime-600"></div>
    </div>

    <div v-else-if="cartStore.cartItems.length === 0" class="text-center py-12 bg-white rounded-lg shadow-sm border">
      <p class="text-gray-600 mb-4">Your cart is empty.</p>
      <router-link to="/landing" class="text-lime-600 font-medium hover:underline">Continue Shopping</router-link>
    </div>

    <div v-else>
      <div v-for="item in cartStore.cartItems" :key="item._id"
        class="mb-4 rounded-lg border p-4 bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md animate__animated animate__fadeInUp flex gap-4">
        <div class="w-24 h-24 flex-shrink-0">
          <img :src="item.productId?.image_url || '/placeholder.png'" alt="Product"
            class="w-full h-full object-cover rounded-md" />
        </div>

        <div class="flex-1">
          <h2 class="text-xl font-semibold text-gray-800">{{ item.productId?.title }}</h2>
          <p class="text-gray-600 text-sm line-clamp-2">{{ item.productId?.description }}</p>
          <div class="mt-2 flex items-center justify-between">
            <p class="text-lg font-bold text-lime-600">₦{{ Number(item.productId?.price).toLocaleString() }} x {{
              item.count }}</p>
            <button @click="cartStore.removeFromCart(item.productId?._id)"
              class="text-red-500 hover:text-red-600 transition-transform duration-200 hover:scale-105">
              Remove
            </button>
          </div>
        </div>
      </div>

      <div class="mt-6 p-6 bg-white rounded-lg shadow-sm border">
        <div class="flex justify-between mb-2">
          <span class="text-gray-600">Subtotal</span>
          <span class="font-semibold">₦{{ Number(cartStore.cartTotal).toLocaleString() }}</span>
        </div>
        <div class="flex justify-between mb-4 pb-4 border-b">
          <span class="text-gray-600">Shipping</span>
          <span class="text-gray-500 italic text-sm">Calculated at checkout</span>
        </div>
        <div class="flex justify-between items-center mb-6">
          <span class="text-xl font-bold">Total</span>
          <span class="text-2xl font-bold text-lime-600">₦{{ Number(cartStore.cartTotal).toLocaleString() }}</span>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 justify-between">
          <button @click="cartStore.emptyCart"
            class="rounded-md border border-gray-300 px-6 py-2 text-gray-700 hover:bg-gray-50 transition-colors">
            Empty Cart
          </button>
          <button @click="router.push({ name: 'checkout' })"
            class="rounded-md bg-lime-600 px-8 py-3 text-white font-semibold hover:bg-lime-700 transition-transform duration-200 hover:scale-105">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useCartStore } from "@/stores/cartStore.js";

const cartStore = useCartStore();
const router = useRouter();

onMounted(() => {
  cartStore.initializeCart();
});
</script>

<style scoped>
/* Add any additional styles here */
</style>
