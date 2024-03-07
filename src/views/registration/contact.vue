<!-- VendorContactPage.vue -->
<template>
  <div
    class="mx-auto mt-8 max-w-md rounded-md rounded-r-md bg-white p-6 shadow-md"
  >
    <h1 class="mb-4 text-2xl font-semibold text-lime-950">
      Vendor Registration
    </h1>
    <form @submit.prevent="submitForm">
      <!-- Country Dropdown -->
      <div class="mb-4">
        <label for="country" class="block text-sm font-medium text-gray-600"
          >Country</label
        >
        <select
          v-model="selectedCountry"
          id="country"
          name="country"
          class="mt-1 w-full rounded-md border p-2"
        >
          <option value="" disabled>Select Country</option>
          <option
            v-for="country in countries"
            :key="country.code"
            :value="country.code"
          >
            {{ country.name }}
          </option>
        </select>
      </div>

      <!-- State Dropdown -->
      <div class="mb-4">
        <label for="state" class="block text-sm font-medium text-gray-600"
          >State</label
        >
        <select
          v-model="selectedState"
          id="state"
          name="state"
          class="mt-1 w-full rounded-md border p-2"
        >
          <option value="" disabled>Select State</option>
          <option v-for="state in states" :key="state.code" :value="state.code">
            {{ state.name }}
          </option>
        </select>
      </div>

      <!-- City Input -->
      <div class="mb-4">
        <label for="city" class="block text-sm font-medium text-gray-600"
          >City</label
        >
        <input
          v-model="city"
          type="text"
          id="city"
          name="city"
          class="mt-1 w-full rounded-md border p-2"
        />
      </div>

      <!-- Zip Code Input -->
      <div class="mb-4">
        <label for="zipCode" class="block text-sm font-medium text-gray-600"
          >Zip Code</label
        >
        <input
          v-model="zipCode"
          type="text"
          id="zipCode"
          name="zipCode"
          class="mt-1 w-full rounded-md border p-2"
        />
      </div>

      <!-- Address Textarea -->
      <div class="mb-4">
        <label for="address" class="block text-sm font-medium text-gray-600"
          >Address</label
        >
        <textarea
          v-model="address"
          id="address"
          name="address"
          rows="4"
          class="mt-1 w-full rounded-md border p-2"
        ></textarea>
      </div>

      <!-- Submit Button -->
      <button
        @click="submitForm"
        class="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const countries = [
  { code: "us", name: "United States" },
  { code: "ca", name: "Canada" },
  // Add more countries as needed
];

const states = [
  { code: "ny", name: "New York" },
  { code: "ca", name: "California" },
  // Add more states as needed
];

const selectedCountry = ref("");
const selectedState = ref("");
const city = ref("");
const zipCode = ref("");
const address = ref("");

const submitForm = () => {
  // Add logic to handle form submission
  console.log("Form submitted:", {
    country: selectedCountry.value,
    state: selectedState.value,
    city: city.value,
    zipCode: zipCode.value,
    address: address.value,
  });
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
