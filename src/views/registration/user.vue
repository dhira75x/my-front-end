<template>
  <div class="mx-auto mt-8 max-w-md rounded-md bg-white p-6 shadow-md">
    <h1 class="mb-4 text-2xl font-semibold">Update Your Profile</h1>

    <form @submit.prevent="submitForm">
      <div class="mb-4">
        <label for="firstName" class="block text-sm font-medium text-gray-600"
          >First Name</label
        >
        <input
          v-model="formData.firstName"
          type="text"
          id="firstName"
          name="firstName"
          class="mt-1 w-full rounded-md border p-2"
        />
      </div>

      <div class="mb-4">
        <label for="lastName" class="block text-sm font-medium text-gray-600"
          >Last Name</label
        >
        <input
          v-model="formData.lastName"
          type="text"
          id="lastName"
          name="lastName"
          class="mt-1 w-full rounded-md border p-2"
        />
      </div>

      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-600"
          >Email Address</label
        >
        <input
          v-model="formData.email"
          type="email"
          id="email"
          name="email"
          class="mt-1 w-full rounded-md border p-2"
        />
      </div>

      <div class="mb-4">
        <label for="phone" class="block text-sm font-medium text-gray-600"
          >Phone Number</label
        >
        <div class="flex">
          <input
            v-model="formData.phone"
            type="tel"
            id="phone"
            name="phone"
            class="mt-1 w-2/3 rounded-md border p-2"
          />
          <select
            v-model="formData.countryCode"
            class="ml-2 mt-1 w-1/3 rounded-md border p-2"
          >
            <option value="+1">+1 (USA)</option>
            <option value="+44">+44 (UK)</option>
            <!-- Add more country codes as needed -->
          </select>
        </div>
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

const formData = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  countryCode: "+1", // Default country code
});

const submitForm = () => {
  // Add logic to submit the form data (e.g., send it to a server)
  console.log("Form data submitted:", formData.value);
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
