<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header Section -->
    <header class="bg-blue-500 text-white p-4">
      <h1 class="text-2xl font-semibold">Product Tracking</h1>
    </header>

    <!-- Main Content Section -->
    <main class="flex-grow flex items-center justify-center">
      <div class="w-full max-w-md p-4">
        <!-- Login and Registration Buttons -->
        <div class="flex justify-between mb-4">
          <button class="px-4 py-2 bg-blue-500 text-white rounded">
            Login
          </button>
          <button class="px-4 py-2 bg-green-500 text-white rounded">
            Register
          </button>
        </div>

        <!-- Tracking Form -->
        <form @submit.prevent="trackProduct" class="mb-4">
          <label for="orderNumber" class="block text-sm font-medium text-gray-600">
            Order Number:
          </label>
          <input
            v-model="orderNumber"
            type="text"
            id="orderNumber"
            name="orderNumber"
            class="mt-1 p-2 w-full border rounded-md"
            required
          />
          <button type="submit" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
            Track Product
          </button>
        </form>

        <!-- Tracking Results -->
        <div v-if="trackingResult" class="bg-gray-100 p-4 rounded">
          <h2 class="text-lg font-semibold mb-2">Tracking Result:</h2>
          <p>{{ trackingResult }}</p>
        </div>
      </div>
    </main>

    <!-- Footer Section -->
    <footer class="bg-gray-200 p-4 text-center">
      <p class="text-sm text-gray-600">&copy; 2022 Your Ecommerce Store. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
const orderNumber = ref('');
const trackingResult = ref('');

const trackProduct = () => {
  // Simulate tracking logic, you can replace this with your actual tracking logic
  trackingResult.value = `Product with order number ${orderNumber.value} is on its way!`;
};
</script>

<style>
/* Add your custom styles or override Tailwind CSS classes here */
</style>
