<!-- TrackingPage.vue -->
<template>
  <div class="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8 animate__animated animate__fadeIn">
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-deepsaffron/10 opacity-50 blur-3xl blob-1"></div>
      <div class="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-deepforest/10 opacity-50 blur-3xl blob-2"></div>
    </div>

    <div class="relative container mx-auto">
      <h1 class="mb-8 text-3xl font-extrabold text-gray-900 text-center animate__animated animate__fadeInDown">Order Tracking</h1>

      <div v-if="purchasedProducts.length === 0" class="text-gray-600 text-center">
        No products have been purchased.
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="product in purchasedProducts"
          :key="product.id"
          class="bg-white rounded-xl shadow-md p-4 animate__animated animate__fadeInUp transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div class="relative">
            <img :src="product.image" alt="Product" class="w-full h-40 object-cover rounded-lg" />
            <div class="absolute top-3 left-3 bg-deepsaffron/10 text-deepsaffron text-xs font-bold px-2 py-1 rounded">In Transit</div>
          </div>
          <h2 class="mt-3 mb-1 text-lg font-semibold text-gray-900">{{ product.name }}</h2>
          <p class="text-gray-600 text-sm">{{ product.description }}</p>
          <div class="mt-3 flex items-center justify-between">
            <span class="text-sm font-medium text-gray-800">{{ product.price }}</span>
            <button class="px-3 py-1 text-sm rounded-full bg-deepsaffron text-white transition-transform duration-200 hover:scale-105 focus:ring-2 focus:ring-deepsaffron">Details</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const purchasedProducts = ref([
  {
    id: 1,
    name: "Product 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$19.99",
    image: "https://placekitten.com/300/200",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
    price: "$29.99",
    image: "https://placekitten.com/300/201",
  },
  // Add more purchased products as needed
]);
</script>

<style scoped>
.blob-1 { animation: floatBlob1 12s ease-in-out infinite; }
.blob-2 { animation: floatBlob2 14s ease-in-out infinite; }
@keyframes floatBlob1 {
  0% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(8px, -6px) scale(1.03); }
  50% { transform: translate(0, 0) scale(1.06); }
  75% { transform: translate(-8px, 6px) scale(1.03); }
  100% { transform: translate(0, 0) scale(1); }
}
@keyframes floatBlob2 {
  0% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(-6px, 8px) scale(1.02); }
  50% { transform: translate(0, 0) scale(1.04); }
  75% { transform: translate(6px, -8px) scale(1.02); }
  100% { transform: translate(0, 0) scale(1); }
}
</style>
