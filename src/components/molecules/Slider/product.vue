<template>
  <section class="container mx-auto mt-8 animate__animated animate__fadeIn">
    <h2 class="mb-4 text-2xl font-semibold">Featured Products</h2>
    <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <!-- Product Card (Repeat as needed) -->
      <div
        v-for="product in featuredProducts"
        :key="product.id"
        class="bg-white p-4 shadow-md rounded-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg animate__animated animate__fadeInUp"
      >
        <img
          :src="product.image"
          alt="Product Image"
          class="mb-4 h-40 w-full object-cover"
        />
        <h3 class="text-lg font-semibold">{{ product.name }}</h3>
        <p class="text-gray-600">{{ product.description }}</p>
        <p class="mt-2 text-primary">{{ product.price }}</p>
        <div class="mx-2 items-center justify-center">
          <button
            @click="handleAddToCart(product)"
            class="mx-4 mt-4 items-center rounded-full bg-lime-800 px-4 py-2 text-white transition-transform duration-200 hover:scale-105 focus:ring-2 focus:ring-lime-500"
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
import speakerImage from "@/assets/speaker.jpg";
import samsungImage from "@/assets/samsung.jpg";
import iphoneImage from "@/assets/iphone.jpg";
import iwatchImage from "@/assets/iwatch.jpg";
import cameraImage from "@/assets/camera.jpg";
import { useCartStore } from "@/stores/cartStore";
import { useRouter } from "vue-router";

const router = useRouter();
const cartStore = useCartStore();

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
    name: " SonicWave 360",
    description: "A compact yet powerful speaker designed to bring your music to life.",
    price: "₦2999.99",
    image: speakerImage,
  },
  {
    id: 5,
    name: " Apple Phone",
    description: "The new Apple iPhone: where elegance meets intelligence.",
    price: "₦289999.99",
    image: iphoneImage,
  },
  {
    id: 6,
    name: " Apple Wrist-Watch",
    description: "Experience the perfect blend of technology and style.",
    price: "₦20900.99",
    image: iwatchImage,
  },
  {
    id: 7,
    name: " Samsung Galaxy S7 Edge",
    description: "Elevate your smartphone experience with the Samsung Galaxy S7 Edge.",
    price: "₦250000.00",
    image: samsungImage,
  },
  {
    id: 8,
    name: "Canon EOS Rebel T8i",
    description: "Capture your world through the lens of the Canon EOS Rebel T8i.",
    price: "₦450000.00",
    image: cameraImage,
  },
]);

const cartItems = ref([]);

const handleAddToCart = (product) => {
  cartStore.addToCart(product);
  router.push({ name: "cart" });
};
</script>
