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

import danoneImage from "@/assets/danone.jpg";
import delightImage from "@/assets/delight.jpg";
import fritzImage from "@/assets/fritz.jpg";
import homeImage from "@/assets/homemade.jpg";
import icecreamBarImage from "@/assets/icecream-bar.jpg";
import icecreamImage from "@/assets/icecream-parlour.jpg";
import nobiloImage from "@/assets/nobilo.jpg";
import regalImage from "@/assets/regal.jpg";

import { useRouter } from "vue-router";

const router = useRouter();

const featuredProducts = ref([
  {
    id: 1,
    name: "Danone Yoghurt",
    description: "A harmonious blend of rich taste and smooth texture. ",
    price: " ₦3000.99",
    image: danoneImage,
  },
  {
    id: 2,
    name: " Delight Iced Coffee",
    description: "Infused with just the right touch of sweetness.",
    price: " ₦2900.99",
    image: delightImage,
  },
  {
    id: 3,
    name: " Nobilo White Wine",
    description: "This wine is a celebration of purity and balance.",
    price: " ₦48000.00",
    image: nobiloImage,
  },
  {
    id: 4,
    name: "HomeMade Fresh Farm Yoghurt",
    description: "The epitome of natural goodness and wholesome nutrition.",
    price: "₦2999.99",
    image: homeImage,
  },
  {
    id: 5,
    name: "Fritz Bottle Water",
    description: "Each bottle of Fritz Water is a testament of our commitment.",
    price: "₦134.99",
    image: fritzImage,
  },
  {
    id: 6,
    name: "Ice Cream Bar",
    description: "Classic Ice Cream Bar is the perfect treat to satisfy your cravings.",
    price: "₦999.99",
    image: icecreamBarImage,
  },
  {
    id: 7,
    name: "Ice Lab",
    description: "Ice cream parlour filled with colorful flavours",
    price: "₦500 - ₦3500",
    image: icecreamImage,
  },
  {
    id: 8,
    name: "Chivas Regal",
    description: "Is an emblem of elegance and refinement in the world of Scotch whisky.",
    price: "₦90000.00",
    image: regalImage,
  },
]);

const cartItems = ref([]);

const addToCart = (product) => {
  cartItems.value.push(product);
  router.push({ name: "cart" });
};
</script>
