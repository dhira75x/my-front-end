<template>
  <div
    v-if="visible"
    :class="[userPosition, userColor]"
    class="w-full border-l-4 p-4 lg:w-3/12"
    role="alert"
  >
    <p class="font-bold">{{ title }}</p>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
import "animate.css";
import { defineProps } from "vue";

const props = defineProps([
  "visible",
  "position",
  "title",
  "description",
  "color",
]);
let userPosition = "";
let userColor = "";

const watch = {
  visible() {
    switch (color.value) {
      case "success":
        userColor = success();
        break;
      case "error":
        userColor = error();
        break;
      case "warning":
        userColor = warning();
        break;
      default:
        userColor = success();
    }

    switch (position.value) {
      case "top-right":
        userPosition = topRight();
        break;
      case "bottom-right":
        userPosition = bottomRight();
        break;
      case "top-left":
        userPosition = topLeft();
        break;
      case "bottom-left":
        userPosition = bottomLeft();
        break;
      default:
        userPosition = topRight();
    }
  },
};

const computed = {
  topRight() {
    return "top-0 right-0 mt-5 mr-5 lg:absolute animate__animated animate__fadeInRight";
  },
  topLeft() {
    return "top-0 left-0 mt-5 ml-5 lg:absolute animate__animated animate__fadeInLeft";
  },
  bottomRight() {
    return "bottom-0 right-0 mb-5 mr-5 lg:absolute animate__animated animate__fadeInRight";
  },
  bottomLeft() {
    return "bottom-0 left-0 mb-5 ml-5 lg:absolute animate__animated animate__fadeInLeft";
  },
  success() {
    return "bg-green-100 border-green-500 text-green-700";
  },
  error() {
    return "bg-red-100 border-red-500 text-red-700";
  },
  warning() {
    return "bg-yellow-100 border-yellow-500 text-yellow-700";
  },
};
</script>
