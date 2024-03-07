<template>
    <div class="swiper-container">
      <!-- Additional swiper wrapper and slides HTML here -->
      <swiper :slides-per-view="3" :space-between="50" class="mySwiper">
        <swiper-slide v-for="(product, index) in products" :key="index">
          <img :src="product.image" alt="Product" class="h-48" />
        </swiper-slide>
      </swiper>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue.js';
  import 'swiper/swiper-bundle.css';
 

const products = ref([
  // Populate this array with your products
  { image: 'path/to/image1.jpg' },
  { image: 'path/to/image2.jpg' },
  { image: 'path/to/image3.jpg' },
  // Add more products as needed
]);
  
  </script>
  
  <style scoped>
  /* Additional styling here */
  </style>
  