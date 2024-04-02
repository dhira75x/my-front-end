<template>
  <section class="container mx-auto mt-8">
    <h2 class="mb-4 text-2xl font-semibold">Featured Products</h2>
    <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <!-- Product Card (Repeat as needed) -->
      <div
        v-for="product in featuredProducts"
        :key="product.id"
        class="bg-white p-4 shadow-md"
      >
        <img
          :src="product.image"
          alt="Product Image"
          class="mb-4 h-40 w-full object-cover"
        />
        <h3 class="text-lg font-semibold">{{ product.name }}</h3>
        <p class="text-gray-600">{{ product.description }}</p>
        <p class="text-primary mt-2">{{ product.price }}</p>
        <div class="mx-2 items-center justify-center">
          <button
            @click="addToCart(product)"
            class="mx-4 mt-4 items-center rounded-full bg-lime-800 px-4 py-2 text-white"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";

import gameImage from "@/assets/game.png";
import headphoneImage from "@/assets/headphone.png";
import lensImage from "@/assets/lens.png";
import colorImage from "@/assets/color.png";

const featuredProducts = ref([
  {
    id: 1,
    name: "Phantom Edge Gaming Pad",
    description: "Elevate your gaming experience with the Phantom Edge Gaming Pad. ",
    price: " ₦69000.99",
    image: gameImage,
  },
  {
    id: 2,
    name: "SonicBliss Wireless Headphone",
    description: "Where cutting-edge technology meets impeccable sound quality.",
    price: " ₦2900.99",
    image: headphoneImage,
  },
  {
    id: 3,
    name: "CrystalClear Pro Lens",
    description: "Introducing our latest innovation in photography.",
    price: " ₦1900.00",
    image: lensImage,
  },
  {
    id: 4,
    name: "Product 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "₦999.99",
    image: colorImage,
  },
]);

const addToCart = (product) => {
  console.log("Product added to cart:", product);
};
</script>
