<template>
  <section class="my-4 bg-lime-800 p-8 text-white">
    <div class="container mx-auto text-center">
      <h2 class="mb-4 text-2xl font-semibold">Shop Now!</h2>
      <p class="mb-4">Discover amazing deals on your favorite products.</p>
      <button
        @click="scrollToProducts"
        class="rounded-full bg-white px-6 py-2 text-lime-900"
      >
        Explore Products
      </button>
    </div>
  </section>
</template>
<script setup>
const scrollToProducts = () => {
  // Add logic to scroll to the products section
  document
    .getElementById("featured-products-section")
    .scrollIntoView({ behavior: "smooth" });
};
</script>
