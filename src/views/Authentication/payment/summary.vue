<template>
  <div class="order-first col-span-1 lg:order-last lg:col-span-4">
    <h4 class="mb-5 text-3xl text-gray-700">Order Summary</h4>
    <div class="rounded-md bg-white p-10 shadow-md">
      <Product :key="i" v-for="(item, i) in items" :item="item" />
    </div>
  </div>
</template>

<script setup>
import Product from "./product.vue";

const { items } = defineProps(["items"]);
</script>
