<!-- TrackingPage.vue -->
<template>
  <div class="container mx-auto mt-8">
    <h1 class="mb-4 text-3xl font-semibold">Order Tracking</h1>
    <div v-if="purchasedProducts.length === 0" class="text-gray-600">
      No products have been purchased.
    </div>
    <div v-else>
      <div
        v-for="product in purchasedProducts"
        :key="product.id"
        class="mb-4 rounded border p-4"
      >
        <h2 class="mb-2 text-xl font-semibold">{{ product.name }}</h2>
        <p class="text-gray-600">{{ product.description }}</p>
        <p class="mt-2 text-sm">{{ product.price }}</p>
        <img :src="product.image" alt="Product" class="mt-2 rounded-lg" />
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
/* Add any additional styles here */
</style>
