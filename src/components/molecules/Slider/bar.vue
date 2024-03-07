<template>
    <nav class="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div class="flex items-center">
        <img src="/path-to-your-logo.png" alt="Logo" class="h-8 mr-4" />
        <a href="/" class="mr-4 hover:text-gray-300">Home</a>
        <div class="relative group">
          <button class="mr-4 hover:text-gray-300">Categories</button>
          <div class="absolute hidden group-hover:block bg-gray-700 p-4">
            <a href="#" class="block hover:text-gray-300">Category 1</a>
            <a href="#" class="block hover:text-gray-300">Category 2</a>
            <!-- Add more categories as needed -->
          </div>
        </div>
      </div>
      <div class="flex items-center">
        <div class="relative group">
          <button class="hover:text-gray-300">Login</button>
          <div class="absolute hidden group-hover:block bg-gray-700 p-4">
            <a href="#" class="block hover:text-gray-300">User</a>
            <a href="#" class="block hover:text-gray-300">Vendor</a>
            <a href="#" class="block hover:text-gray-300">Dispatch</a>
          </div>
        </div>
        <div class="relative group ml-4">
          <button class="hover:text-gray-300">Register</button>
          <div class="absolute hidden group-hover:block bg-gray-700 p-4">
            <a href="#" class="block hover:text-gray-300">User</a>
            <a href="#" class="block hover:text-gray-300">Vendor</a>
            <a href="#" class="block hover:text-gray-300">Dispatch</a>
          </div>
        </div>
        <img src="/path-to-cart-icon.png" alt="Cart" class="h-6 ml-4" />
      </div>
    </nav>
  </template>
  
  <script setup>
  // Vue 3 <script setup> syntax
  </script>
  
  <style scoped>
  /* Additional styling here */
  </style>
  