<template>
  <div class="h-96 overflow-y-auto">
    <ChatComponent v-for="msg in messages" :key="msg.id" :message="msg" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ChatComponent from "./chatcomponent.vue";

const messages = ref([
  // Mock messages for demonstration
  // You can replace this with actual messages from the backend
  // Ensure each message has a unique 'id' property
  {
    id: 1,
    sender: "John Doe",
    text: "Hello!",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    sender: "Jane Smith",
    text: "Hi there!",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  // Add more messages here as needed
]);
</script>
