<!-- HelpCenter.vue -->

<template>
  <div class="container mx-auto p-8">
    <div class="mt-20 flex justify-center">
      <div class="relative">
        <input
          v-model="searchQuery"
          @input="search"
          type="text"
          placeholder="Search..."
          class="h-10 rounded-full border-2 border-gray-300 bg-white px-5 pr-10 text-sm focus:outline-none"
        />
        <div class="absolute right-4 top-1/2 -translate-y-1/2 transform cursor-pointer">
          <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.875 17.25C13.2242 17.25 16.75 13.7242 16.75 9.375C16.75 5.02576 13.2242 1.5 8.875 1.5C4.52576 1.5 1 5.02576 1 9.375C1 13.7242 4.52576 17.25 8.875 17.25Z" stroke="#F9F9F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14.4434 14.9453L18.9996 19.5016" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>

    <div class="mt-40 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
      <Card title="Delivery Service"  class="bg-gray-200"/>
      <Card title="Returns" class="bg-red-200" />
      <Card title="Orders & Cancellations" class="bg-green-200" />
      <Card title="Collection Refunds" class="bg-violet-200" />
      <Card title="Promo & Payments" class="bg-yellow-200" />
      <Card title="Vouchers & Coupon" class="bg-lime-200"/>
      <Card title="Product & Stock" class="bg-blue-200"/>
      <Card title="Data & Privacy" class="bg-pink-200"/>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Card from "../pages/help/card.vue";
// Define the Card component
// const Card = (props) => {
//   const viewAll = () => {
//     // Implement logic to navigate to the respective view all page
//     console.log(`View All clicked for ${props.title}`);
//   };

//   return { viewAll };
// };

// Define the HelpCenter component
const searchQuery = ref("");

const search = () => {
  // Implement search functionality based on the searchQuery
  console.log(`Search query: ${searchQuery.value}`);
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
