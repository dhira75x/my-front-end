<!-- CartPage.vue -->
<template>
  <div class="mx-auto mt-8 max-w-3xl pb-8 animate__animated animate__fadeIn">
    <h1 class="mb-4 text-3xl font-semibold">Shopping Cart</h1>
    <div v-if="cartStore.cartItems.length === 0" class="text-gray-600">
      Your cart is empty.
    </div>
    <div v-else>
      <div
        v-for="item in cartStore.cartItems"
        :key="item.id"
        class="mb-4 rounded border p-4 bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md animate__animated animate__fadeInUp"
      >
        <h2 class="mb-2 text-xl font-semibold">{{ item.name }}</h2>
        <p class="text-gray-600">{{ item.description }}</p>
        <p class="mt-2 text-lg font-bold">{{ item.price }}</p>
        <img :src="item.image" alt="Product" class="mt-2 rounded-lg" />
        <button
          @click="removeFromCart(item)"
          class="mt-2 text-red-500 hover:text-red-600 transition-transform duration-200 hover:scale-105 focus:ring-2 focus:ring-red-400"
        >
          Remove from Cart
        </button>
      </div>
      <div class="mt-4 flex items-center justify-between">
        <button
          @click="emptyCart"
          class="rounded-md bg-lime-800 px-4 py-2 text-white hover:bg-lime-600 transition-transform duration-200 hover:scale-105 focus:ring-2 focus:ring-lime-500"
        >
          Empty Cart
        </button>
        <button
          @click="checkout"
          class="rounded-md bg-lime-800 px-4 py-2 text-white hover:bg-lime-600 transition-transform duration-200 hover:scale-105 focus:ring-2 focus:ring-lime-500"
        >
          Checkout
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useCartStore } from "@/stores/cartStore.js";

const cartStore = useCartStore();
const router = useRouter();
const cartItems = ref([]);

const removeFromCart = (productToRemove) => {
  cartStore.cartItems = cartStore.cartItems.filter(
    (product) => product.id !== productToRemove.id
  );
};

const subtotal = computed(() => {
  return cartStore.cartItems.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );
});

const shippingTax = 1500;

const total = computed(() => {
  return subtotal.value + shippingTax;
});

const emptyCart = () => {
  cartStore.cartItems = [];
};

const checkout = () => {
  console.log("Checking out", cartItems.value);
  router.push({ name: "checkout" });
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
