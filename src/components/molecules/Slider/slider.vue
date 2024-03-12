<template>
  <Swiper :slides-per-view="6" :space-between="20" loop class="mySwiper mt-3">
    <SwiperSlide v-for="(product, index) in products" :key="index">
      <img :src="product.image" alt="Product" class="h-64 cursor-pointer" />
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import image1 from "@/assets/20210323_091909.jpg";
import image2 from "@/assets/20210621_143343.jpg";
import image3 from "@/assets/20220215_130451.jpg";
import image4 from "@/assets/20220215_130451.jpg";
import image5 from "@/assets/20220215_130451.jpg";
import image6 from "@/assets/20220215_130451.jpg";
import image7 from "@/assets/20220215_130451.jpg";
import image8 from "@/assets/20220215_130451.jpg";
import image9 from "@/assets/20220215_130451.jpg";

const products = ref([
  { image: image1 },
  { image: image2 },
  { image: image3 },
  { image: image4 },
  { image: image5 },
  { image: image6 },
  { image: image7 },
  { image: image8 },
  { image: image9 },
]);
</script>

<style scoped>
/* Additional styling here */
</style>
