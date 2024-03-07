<template>
  <div class="rounded-lg bg-white p-6 shadow-md hover:shadow-lg">
    <h2 class="mb-4 text-xl font-semibold">{{ title }}</h2>
    <button @click="viewAll" class="text-blue-500 hover:underline">
      View All
    </button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps(["title"]); // Define props using defineProps
const emits = defineEmits(["viewAll"]); // Define emits using defineEmits

const viewAll = () => {
  emits("viewAll"); // Emit the 'viewAll' event
};
</script>

<style scoped></style>
