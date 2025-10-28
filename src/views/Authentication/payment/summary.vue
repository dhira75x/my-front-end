<template>
  <div class="order-first col-span-1 lg:order-last lg:col-span-4">
    <h4 class="mb-5 text-3xl text-gray-700">Order Summary</h4>
    <div class="rounded-md bg-white p-10 shadow-md">
      <template v-for="(item, i) in items" :key="i">
        <Product v-if="item && item.isProduct" :item="item" />
        <Slider v-if="item && !item.isProduct" :item="item" />
      </template>
    </div>
  </div>
</template>

<script setup>
import Product from "./product.vue";
import Slider from "@/components/molecules/Slider/slider.vue";

const { items } = defineProps(["items"]);
</script>
