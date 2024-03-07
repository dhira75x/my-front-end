<script setup>
import sidebar from "../components/atoms/Bars/sidebar.vue";
</script>

<template>
  <main class="flex items-start pb-24">
    <sidebar />
    <main class="w-full">
      <slot name="main-content" />
    </main>
  </main>
</template>
