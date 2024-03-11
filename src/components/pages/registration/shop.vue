<!-- VendorRegistration.vue -->
<template>
  <div
    class="mx-auto mt-8 max-w-md rounded-md rounded-r-md bg-white p-6 shadow-md"
  >
    <h1 class="mb-4 text-2xl font-semibold text-lime-950">
      Vendor Registration
    </h1>
    <form @submit.prevent="submitForm">
      <div class="mb-4">
        <label for="location" class="block text-sm font-medium text-gray-600"
          >Location</label
        >
        <input
          v-model="location"
          type="text"
          id="location"
          name="location"
          class="mt-1 w-full rounded-md border p-2"
        />
      </div>
      <div class="mb-4">
        <label for="number" class="block text-sm font-medium text-gray-600"
          >Number</label
        >
        <input
          v-model="number"
          type="text"
          id="number"
          name="number"
          class="mt-1 w-full rounded-md border p-2"
        />
      </div>
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-600"
          >Email Address</label
        >
        <input
          v-model="email"
          type="email"
          id="email"
          name="email"
          class="mt-1 w-full rounded-md border p-2"
        />
      </div>
      <div class="mb-4">
        <label for="facebook" class="block text-sm font-medium text-gray-600"
          >Facebook Link</label
        >
        <input
          v-model="facebook"
          type="text"
          id="facebook"
          name="facebook"
          class="mt-1 w-full rounded-md border p-2"
        />
      </div>
      <div class="mb-4">
        <label for="instagram" class="block text-sm font-medium text-gray-600"
          >Instagram Link</label
        >
        <input
          v-model="instagram"
          type="text"
          id="instagram"
          name="instagram"
          class="mt-1 w-full rounded-md border p-2"
        />
      </div>
      <div class="mb-4">
        <label for="website" class="block text-sm font-medium text-gray-600"
          >Website</label
        >
        <input
          v-model="website"
          type="text"
          id="website"
          name="website"
          class="mt-1 w-full rounded-md border p-2"
        />
      </div>
      <div>
        <button
          type="submit"
          class="rounded-md bg-lime-800 px-4 py-2 text-white hover:bg-lime-500"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const location = ref("");
const number = ref("");
const email = ref("");
const facebook = ref("");
const instagram = ref("");
const website = ref("");

const submitForm = () => {
  // Add logic to handle form submission (e.g., sending data to a server)
  console.log("Form submitted:", {
    location,
    number,
    email,
    facebook,
    instagram,
    website,
  });
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
