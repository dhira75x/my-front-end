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
        <label for="bankName" class="block text-sm font-medium text-gray-600"
          >Bank Name</label
        >
        <input
          v-model="bankName"
          type="text"
          id="bankName"
          name="bankName"
          class="mt-1 w-full rounded-md border p-2"
        />
      </div>
      <div class="mb-4">
        <label
          for="accountNumber"
          class="block text-sm font-medium text-gray-600"
          >Account Number</label
        >
        <input
          v-model="accountNumber"
          type="text"
          id="accountNumber"
          name="accountNumber"
          class="mt-1 w-full rounded-md border p-2"
        />
      </div>
      <div class="mb-4">
        <label for="bankCode" class="block text-sm font-medium text-gray-600"
          >Bank Code</label
        >
        <input
          v-model="bankCode"
          type="text"
          id="bankCode"
          name="bankCode"
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
      <button
        type="submit"
        class="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const bankName = ref("");
const accountNumber = ref("");
const bankCode = ref("");
const email = ref("");

const submitForm = () => {
  // Add logic to handle form submission
  console.log("Form submitted with data:", {
    bankName,
    accountNumber,
    bankCode,
    email,
  });
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
