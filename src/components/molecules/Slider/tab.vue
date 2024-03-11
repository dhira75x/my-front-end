<template>
  <footer class="bg-lime-950 text-white p-4 text-center">
    <a href="/" class="mr-4 hover:text-gray-300">Home</a>
    <router-link :to="{ name: 'contact' }">
      <button class="mr-4 hover:text-gray-300">Contact</button>
    </router-link>
    <a href="/about-us" class="mr-4 hover:text-gray-300">About Us</a>
    <router-link :to="{ name: 'help-page' }">
      <button class="mr-4 hover:text-gray-300">Help</button>
    </router-link>
    <router-link :to="{ name: 'faq' }">
      <button class="mr-4 hover:text-gray-300">FAQ</button>
    </router-link>
  </footer>
</template>

<script setup>
// Vue 3 <script setup> syntax
</script>

<style scoped>
/* Additional styling here */
</style>
