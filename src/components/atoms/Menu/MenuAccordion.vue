<template>
  <button
    @click="toggleAccordion()"
    class="box-border flex w-full rounded-md bg-transparent p-3 text-left text-gray-800 hover:bg-gray-200 dark:text-gray-500 dark:hover:bg-gray-700"
    :aria-expanded="isOpen"
    :aria-controls="`collapse${_uid}`"
    :class="{
      'bg-gray-200  dark:bg-gray-700': isOpen,
      'bg-transparent': !isOpen,
    }"
  >
    <span class="mr-3 text-xl">
      <slot name="icon"></slot>
    </span>
    <span class="w-full">
      <slot name="title" />
    </span>
    <span
      class="mt-1 box-border text-gray-500 transition-all dark:text-gray-500"
      :class="{
        'rotate-180': isOpen,
        'rotate-0': !isOpen,
      }"
    >
      <span class="float-right">
        <Icon icon="fa6-solid:angle-down" />
      </span>
    </span>
  </button>

  <div
    class="mt-2 rounded-md bg-gray-100 p-2 transition-all dark:bg-gray-900"
    v-show="isOpen"
    :class="{ 'h-auto': isOpen, 'h-0': !isOpen }"
    :id="`collapse${_uid}`"
  >
    <slot name="content" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const isOpen = ref(false);

const toggleAccordion = () => {
  isOpen.value = !isOpen.value;
};
</script>
