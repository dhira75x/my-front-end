<template>
  <div>
    <Bar />
    <Product class="mt-10" />
    <Search class="mt-4" />
    <Product_2 class="mt-8" />
    <Mobile class="mt-6" />
    <Slider class="mt-6" />
    <Product_3 class="mt-8" />
    <Call class="mt-6" />
    <Tab />
  </div>
</template>

<script setup>
import Bar from "../Slider/bar.vue";
import Slider from "./slider.vue";
import Tab from "./tab.vue";
import Mobile from "../../../views/mobile.vue";
import Call from "../call.vue";
import Product from "./product.vue";
import Product_2 from "./product_2.vue";
import Product_3 from "./product_3.vue";
import Search from "./search.vue";
</script>

<style>
/* Global styles */
</style>
