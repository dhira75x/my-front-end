<script setup>
import Header from "@/components/molecules/Header/Header.vue";
import Footer from "@/components/molecules/Footer/footer.vue";
</script>

<template>
    <Header/>
  <main class="flex items-start pb-24">
    <main class="w-full">
      <slot name="main-content" />
    </main>
  </main>
  <Footer/>
</template>
