<template>
  <div :class="{ 'ml-auto': message.sender === 'dispatcher', 'mr-auto': message.sender === 'user' }" class="mb-2">
    <div v-if="message.sender === 'dispatcher'" class="bg-blue-500 text-white p-2 rounded-md">
      {{ message.content }}
    </div>
    <div v-else class="bg-gray-300 p-2 rounded-md">
      {{ message.content }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: Object,
  },
};
</script>

<style scoped>
/* Add component-specific styles here */
</style>
