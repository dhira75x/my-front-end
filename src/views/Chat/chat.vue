<template>
  <div class="container mx-auto p-4">
    <div class="mx-auto max-w-2xl rounded bg-white p-6 shadow">
      <h2 class="mb-4 text-2xl font-semibold">Send Message to All Employees</h2>

      <!-- Email form -->
      <form @submit.prevent="sendEmail">
        <div class="mb-4">
          <label for="subject" class="block text-sm font-medium text-gray-700"
            >Subject:</label
          >
          <input
            v-model="email.subject"
            type="text"
            id="subject"
            name="subject"
            class="w-full rounded border border-gray-300 p-2"
          />
        </div>
        <div class="mb-4">
          <label for="message" class="block text-sm font-medium text-gray-700"
            >Message:</label
          >
          <textarea
            v-model="email.message"
            id="message"
            name="message"
            rows="4"
            class="w-full rounded border border-gray-300 p-2"
          ></textarea>
        </div>
        <div class="flex justify-end">
          <button type="submit" class="rounded bg-lime-700 p-2 text-white">
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Email data
const email = ref({
  subject: "",
  message: "",
});

// Function to send email (placeholder logic)
const sendEmail = () => {
  // Implement email sending logic here
  console.log("Sending email:", email.value);
  // Reset the form after sending
  email.value.subject = "";
  email.value.message = "";
};
</script>

<style scoped>
/* Add any additional styling here */
</style>
