<template>
  <div>
    <Bar />
    <Slider />
    <Mobile class="mt-6" />
    <Slider class="mt-6" />
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
</script>

<style>
/* Global styles */
</style>
