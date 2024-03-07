<!-- ProductDescription.vue -->
<template>
  <div class="mx-auto mt-8 max-w-md rounded-md bg-white p-6 shadow-md">
    <img
      :src="product.image"
      alt="Product"
      class="mb-4 h-48 w-full rounded-md object-cover"
    />
    <h1 class="mb-2 text-2xl font-semibold">{{ product.name }}</h1>
    <p class="mb-4 text-gray-600">{{ product.description }}</p>
    <p class="mb-4 text-lg font-bold">{{ product.price }}</p>
    <router-link to="/pages/cart">
      <button
        @click="addToCart"
        class="mb-2 rounded-md bg-lime-800 px-4 py-2 text-white hover:bg-lime-500"
      >
        Add to Cart
      </button>
    </router-link>
    <router-link to="/views/checkout">
      <button
        @click="checkout"
        class="mx-5 rounded-md bg-lime-800 px-4 py-2 text-white hover:bg-green-500"
      >
        Checkout
      </button>
    </router-link>
  </div>
</template>

<script setup>
import { ref } from "vue";

const product = ref({
  id: 1,
  name: "Product 1",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  price: "$19.99",
  image: "https://placekitten.com/300/200",
});

const addToCart = () => {
  // Add logic to handle adding the product to the cart
  console.log("Product added to cart:", product.value);
};

const checkout = () => {
  // Add logic to navigate to the checkout page
  console.log("Proceeding to checkout:", product.value);
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
