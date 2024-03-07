<template>
  <div class="col-gap-6 mb-5 grid grid-cols-8 overflow-hidden">
    <img class="col-span-3 block h-20 w-full rounded bg-gray-600" src alt />
    <div class="col-span-5">
      <div class="flex">
        <h6 class="mx-4 flex-grow text-sm font-semibold text-gray-800">
          {{ item.title }}
        </h6>
        <button>
          <svg
            class="w-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
            />
          </svg>
        </button>
      </div>
      <p class="mx-6 truncate text-xs text-gray-600">{{ item.description }}</p>
      <span class="mx-8 text-sm text-gray-800">{{ item.price }} USD</span>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps(["item"]);
</script>
