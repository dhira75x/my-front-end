<template>
  <div class="border rounded-lg p-4 shadow">
    <h3>{{ title }}</h3>
    <button @click="viewAll">View All</button>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
  title: String,
});

const viewAll = () => {
  console.log(`View All clicked for ${props.title}`);
};
</script>


<style scoped></style>
