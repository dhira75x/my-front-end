<template>
  <div class="flex items-center">
    <input
      v-model="newMessage"
      @keydown.enter="sendMessage"
      class="flex-grow rounded-l-lg px-4 py-2"
      type="text"
      placeholder="Type your message..."
    />
    <button
      @click="sendMessage"
      class="rounded-r-lg bg-lime-700 px-4 py-2 text-white"
    >
      Send
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const newMessage = ref("");

const sendMessage = () => {
  if (newMessage.value.trim() !== "") {
    // Simulate sending message to backend (you'll handle this with actual API calls)
    console.log("Message sent:", newMessage.value);

    // Clear the input field after sending
    newMessage.value = "";
  }
};
</script>
