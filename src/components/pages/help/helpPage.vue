<!-- HelpCenter.vue -->

<template>
  <div class="container mx-auto p-8">
    <!-- Search Bar -->
    <div class="mt-20 flex justify-center">
      <div class="relative">
        <input
          v-model="searchQuery"
          @input="search"
          type="text"
          placeholder="Search..."
          class="h-10 rounded-full border-2 border-gray-300 bg-white px-5 pr-10 text-sm focus:outline-none"
        />
        <div class="absolute right-4 top-1/2 -translate-y-1/2 transform">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-4 w-4 text-gray-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m0 0l-6-6m6 6l-6 6m6-6l6 6"
            />
          </svg>
        </div>
      </div>
    </div>

    <!-- Cards Section -->
    <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      <Card title="Delivery Service" />
      <Card title="Returns" />
      <Card title="Orders & Cancellations" />
      <Card title="Collection Refunds" />
      <Card title="Promo & Payments" />
      <Card title="Vouchers & Coupon" />
      <Card title="Product & Stock" />
      <Card title="Data & Privacy" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
//import Card from "./card.vue";
// Define the Card component
const Card = (props) => {
  const viewAll = () => {
    // Implement logic to navigate to the respective view all page
    console.log(`View All clicked for ${props.title}`);
  };

  return { viewAll };
};

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
