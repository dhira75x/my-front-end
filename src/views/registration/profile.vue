<template>
  <div
    class="mx-auto mt-8 max-w-md rounded-md rounded-r-md bg-white p-6 shadow-md"
  >
    <h1 class="mb-6 text-2xl font-semibold text-lime-950">
      Vendor Registration
    </h1>

    <div>
      <form @submit.prevent="submitForm">
        <!-- Owner's Name -->
        <div class="mb-4">
          <label for="ownerName" class="block text-sm font-medium text-lime-700"
            >Owner's Name</label
          >
          <input
            v-model="ownerName"
            type="text"
            id="ownerName"
            name="ownerName"
            class="mt-1 w-full rounded-md border p-2"
          />
        </div>

        <!-- Business Name -->
        <div class="mb-4">
          <label
            for="businessName"
            class="block text-sm font-medium text-lime-700"
            >Business Name</label
          >
          <input
            v-model="businessName"
            type="text"
            id="businessName"
            name="businessName"
            class="mt-1 w-full rounded-md border p-2"
          />
        </div>

        <!-- Username -->
        <div class="mb-4">
          <label for="username" class="block text-sm font-medium text-lime-700"
            >Username</label
          >
          <input
            v-model="username"
            type="text"
            id="username"
            name="username"
            class="mt-1 w-full rounded-md border p-2"
          />
        </div>

        <!-- Business Category Dropdown -->
        <div class="mb-4">
          <label
            for="businessCategory"
            class="block text-sm font-medium text-lime-700"
            >Business Category</label
          >
          <select
            v-model="businessCategory"
            id="businessCategory"
            name="businessCategory"
            class="mt-1 w-full rounded-md border p-2"
          >
            <option value="" disabled selected>Select a category</option>
            <option value="Clothing">Clothing</option>
            <option value="Electronics">Electronics</option>
            <option value="Home & Living">Home & Living</option>
            <!-- Add more categories as needed -->
          </select>
        </div>

        <!-- Business Description -->
        <div class="mb-4">
          <label
            for="businessDescription"
            class="block text-sm font-medium text-lime-900"
            >Business Description</label
          >
          <textarea
            v-model="businessDescription"
            id="businessDescription"
            name="businessDescription"
            rows="4"
            class="mt-1 w-full rounded-md border p-2"
          ></textarea>
        </div>

        <!-- Submit Button -->
        <button
          @click="submitForm"
          class="mb-2 rounded-md bg-lime-800 px-4 py-2 text-white hover:bg-lime-500"
        >
          Submit
        </button>

        <!-- Payment Button (Simulated) -->
        <!-- <button
      @click="simulatePayment"
      class="rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600"
    >
      Proceed to Payment
    </button> -->
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const ownerName = ref("");
const businessName = ref("");
const username = ref("");
const businessCategory = ref("");
const businessDescription = ref("");

const submitForm = () => {
  // Add logic to submit the form data (e.g., send to server)
  console.log("Form submitted:", {
    ownerName,
    businessName,
    username,
    businessCategory,
    businessDescription,
  });
};

// const simulatePayment = () => {
//   // Add logic to simulate the payment process
//   console.log("Payment button clicked. Simulating payment...");
// };
</script>

<style scoped>
/* Add any additional styles here */
</style>
