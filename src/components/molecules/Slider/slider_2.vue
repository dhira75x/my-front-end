<template>
  <div class="flex overflow-x-auto snap-x snap-mandatory">
    <div
      v-for="(product, index) in products"
      :key="index"
      class="flex-none w-full max-w-md snap-center relative cursor-pointer"
      @click="handleAddToCart(product)"
    >
      <img :src="product.image" alt="Product" class="w-full h-64 object-cover" />
      <div class="absolute bottom-0 left-0 bg-gray-900 bg-opacity-75 text-white p-4">
        <h3 class="text-lg">{{ product.name }}</h3>
        <p class="text-sm">${{ product.price }}</p>
        <p class="text-xs">{{ product.description }}</p>
      </div>
      <div
        v-if="index === activeIndex"
        class="absolute inset-0 bg-black bg-opacity-25"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useCartStore } from "@/stores/cartStore";
import { useRouter } from "vue-router";
import gallantryImage from "@/assets/gallantry.jpg";
import redLabelImage from "@/assets/redlabel.jpg";
import coronaImage from "@/assets/corona.jpg";
import carlsImage from "@/assets/carls.jpg";

const router = useRouter();
const cartStore = useCartStore();

const products = ref([
  {
    name: "Gallantry Whiskey",
    price: 87000,
    image: gallantryImage,
    description: "A smooth blend of the finest whiskeys.",
  },
  {
    name: "Red Label",
    price: 25000,
    image: redLabelImage,
    description: "A bold and spicy whiskey with a rich heritage.",
  },
  {
    name: "Corona",
    price: 25000,
    image: coronaImage,
    description: "A bold and spicy whiskey with a rich heritage.",
  },
  {
    name: "Carls",
    price: 25000,
    image: carlsImage,
    description: "A bold and spicy whiskey with a rich heritage.",
  },
]);

const activeIndex = ref(0);

onMounted(() => {
  setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % products.value.length;
  }, 3000);
});

const cartItems = ref([]);

const handleAddToCart = (product) => {
  cartStore.addToCart(product);
  router.push({ name: "cart" });
};
</script>

<style scoped>
/* Additional styling here */
</style>
