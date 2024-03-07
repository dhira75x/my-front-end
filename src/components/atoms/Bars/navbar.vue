<template>
  <div>
    <!-- Navigation Bar -->
    <nav class="flex items-center justify-between bg-gray-800 p-4">
      <!-- Left Side: Welcome Message -->
      <div class="text-white">Welcome, Support Personnel!</div>

      <!-- Right Side: Notification Icon and Dropdown -->
      <div class="relative">
        <!-- Notification Icon -->
        <button @click="toggleNotifications" class="relative z-10 text-white">
          <!-- Notification Icon -->
          <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 22s-8 0-8-5.5 8-10.5 8-10.5 8 5.5 8 10.5z"
            ></path>
            <circle
              cx="12"
              cy="7"
              r="4"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            ></circle>
          </svg>

          <!-- Notification Badge -->
          <span
            v-if="unreadMessages > 0"
            class="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white"
          >
            {{ unreadMessages }}
          </span>
        </button>

        <!-- Dropdown Messages -->
        <div
          x-show="isNotificationsOpen"
          @click.away="isNotificationsOpen = false"
          class="absolute right-0 top-10 mt-2 w-48 overflow-hidden rounded-lg bg-white shadow-xl"
        >
          <!-- Display your notification messages here -->
          <div
            v-for="message in notificationMessages"
            :key="message.id"
            class="border-b p-2"
          >
            {{ message.content }}
          </div>
        </div>
      </div>
    </nav>

    <!-- Vendor List Content (copied from the previous example) -->
    <div class="container mx-auto p-4">
      <!-- ... (rest of your content) ... -->
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Notification data
const notificationMessages = ref([
  { id: 1, content: "New message 1" },
  { id: 2, content: "New message 2" },
  // ... more notification messages
]);

// State for notification dropdown
const isNotificationsOpen = ref(false);

const toggleNotifications = () => {
  isNotificationsOpen.value = !isNotificationsOpen.value;
};

// Dummy data for unread messages badge
const unreadMessages = ref(notificationMessages.value.length);
</script>

<style scoped>
/* Add any additional styling here */
</style>
