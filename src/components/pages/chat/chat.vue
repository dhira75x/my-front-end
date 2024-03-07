<template>
  <div class="h-full bg-gray-200 p-4 rounded-md">
    <div class="flex flex-col h-full">
      <div class="flex-1 overflow-y-auto">
        <!-- Chat messages will be displayed here -->
        <ChatMessage v-for="(message, index) in chatMessages" :key="index" :message="message" />
      </div>
      <div class="flex items-center p-2">
        <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Type your message..." class="flex-1 p-2 border rounded-md" />
        <button @click="sendMessage" class="ml-2 bg-blue-500 text-white p-2 rounded-md">Send</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ChatMessage from './ChatMessage.vue';

const chatMessages = ref([
  { sender: 'user', content: 'Hi, when will my order be delivered?' },
  { sender: 'dispatcher', content: 'Your order will be delivered within 2 hours.' },
  // Add more initial messages as needed
]);

const newMessage = ref('');

const sendMessage = () => {
  if (newMessage.trim() !== '') {
    chatMessages.value.push({ sender: 'user', content: newMessage });
    // Simulate dispatcher response
    chatMessages.value.push({ sender: 'dispatcher', content: 'Thanks for your message. I will update you shortly.' });
    newMessage.value = ''; // Clear input field
  }
};
</script>

<style>
/* Add component-specific styles here */
</style>
