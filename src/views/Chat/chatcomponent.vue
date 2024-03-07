<template>
  <div :class="messageClass">
    <div class="flex items-center space-x-2">
      <img
        :src="message.avatar"
        class="h-8 w-8 rounded-full"
        alt="User Avatar"
      />
      <div>
        <div class="font-semibold">{{ message.sender }}</div>
        <div>{{ message.text }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const message = ref({
  sender: "John Doe",
  text: "Hello!",
  avatar: "https://randomuser.me/api/portraits/men/1.jpg",
});

const messageClass = ref("flex justify-end");
</script>

<style scoped>
/* Styling for chat message */
/* You can add Tailwind classes here for further customization */
</style>
