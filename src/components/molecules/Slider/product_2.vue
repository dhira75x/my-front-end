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

import heinkenImage from "@/assets/heinken.jpg";
import hennesyImage from "@/assets/hennesy.jpg";
import jamesonImage from "@/assets/jameson.jpg";
import jackImage from "@/assets/jack.jpg";
import kginImage from "@/assets/k-gin.jpg";
import glenImage from "@/assets/glen.jpg";
import moetImage from "@/assets/moet.jpg";
import absoluteImage from "@/assets/absolute.jpg";

import { useRouter } from "vue-router";

const router = useRouter();




const featuredProducts = ref([
  {
    id: 1,
    name: "Heineken Beer",
    description: "Heineken is a harmonious blend of pure water, premium malts. ",
    price: " ₦9000.99",
    image: heinkenImage,
  },
  {
    id: 2,
    name: "Hennessy Beer",
    description: " Crafted for those who appreciate the finer things in life.",
    price: " ₦69000.99",
    image: hennesyImage,
  },
  {
    id: 3,
    name: "Jack Daniel's Tennessee Whiskey",
    description:
      "Unravel the legend in every sip and discover why Jack Daniel's remains a symbol.",
    price: " ₦30000.00",
    image: jackImage,
  },
  {
    id: 4,
    name: "Moët & Chandon",
    description: "A prestigious champagne that shows the grandeur of French winemaking.",
    price: "₦99999.99",
    image: moetImage,
  },
  {
    id: 5,
    name: "Jameson Irish Whiskey",
    description:
      "Experience the spirit of Ireland with every sip of Jameson Irish Whiskey.",
    price: "₦43599.99",
    image: jamesonImage,
  },
  {
    id: 6,
    name: "Glenfiddich Single Malt Scotch Whisky",
    description: "The purest Robbie Dhu spring water and aged in the finest oak barrels.",
    price: "₦50000.99",
    image: glenImage,
  },
  {
    id: 7,
    name: "Harmony Korean Gin",
    description: "Exquisite journey through the heart of Korea’s lush landscapes.",
    price: "₦100000.99",
    image: kginImage,
  },
  {
    id: 8,
    name: "Absolute Vodka",
    description: "it's a declaration of excellence and tradition.",
    price: "₦18099.99",
    image: absoluteImage,
  },
]);

const cartItems = ref([]);

const addToCart = (product) => {
  cartItems.value.push(product);
  router.push({ name: "cart" });
};
</script>
