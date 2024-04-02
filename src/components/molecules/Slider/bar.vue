<template>
  <nav class="bg-lime-950 text-white p-4 flex justify-between items-center">
    <div class="flex items-center">
      <img
        src="../../../assets/basket.png"
        alt="Logo"
        class="w-20 h-20 mr-4 bg-transparent"
      />
      <a href="/" class="mr-4 hover:text-gray-300">Home</a>
      <div class="flex items-center">
        <div class="relative group" @click="toggleCategoryDropdown">
          <button class="hover:text-gray-300">Categories</button>
          <div v-if="showCategory" class="absolute bg-gray-700 p-4" style="z-index: 100">
            <button class="block hover:text-gray-300">Winery & Bar</button>
            <button class="block hover:text-gray-300">Electronic & Gadget</button>
            <button class="block hover:text-gray-300">Grocery</button>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center">
      <div class="relative group" @click="toggleLoginDropdown">
        <button class="hover:text-gray-300">Login</button>
        <div
          v-if="showLoginDropdown"
          class="absolute bg-gray-700 p-4"
          style="z-index: 100"
        >
          <button
            @click="$router.push({ name: 'user-login' })"
            class="block hover:text-gray-300"
          >
            User
          </button>
          <button
            @click="$router.push({ name: 'vendor-login' })"
            class="block hover:text-gray-300"
          >
            Vendor
          </button>
          <button
            @click="$router.push({ name: 'dispatch-login' })"
            class="block hover:text-gray-300"
          >
            Dispatch
          </button>
        </div>
      </div>

      <div class="relative group ml-4" @click="toggleRegisterDropdown">
        <button class="hover:text-gray-300">Register</button>
        <div
          v-if="showRegisterDropdown"
          class="absolute bg-gray-700 p-4"
          style="z-index: 100"
        >
          <router-link :to="{ name: 'user-reg' }" @click.stop>
            <button class="block hover:text-gray-300">User</button>
          </router-link>
          <router-link :to="{ name: 'vendor-reg' }" @click.stop>
            <button class="block hover:text-gray-300">Vendor</button>
          </router-link>
          <router-link :to="{ name: 'dispatch-reg' }" @click.stop>
            <button class="block hover:text-gray-300">Dispatch</button>
          </router-link>
        </div>
      </div>
      <div class="h-2 ml-4 cursor-pointer">
        <svg
          @click="$router.push({ name: 'cart' })"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="20"
          height="20"
          viewBox="0 0 48 48"
        >
          <path
            fill="#40826D"
            d="M27.5,34c1.9,0,3.5,1.6,3.5,3.5S29.4,41,27.5,41S24,39.4,24,37.5S25.6,34,27.5,34z M12.5,34c1.9,0,3.5,1.6,3.5,3.5S14.4,41,12.5,41S9,39.4,9,37.5S10.6,34,12.5,34z M0,6c5.3,5,11.5,7.1,22.8,7.1s25.2-0.6,25.2,3c0,1.8-1.9,3.5-5.3,6.5C39.4,25.6,33,31,33,31c0-1.5,9.1-9.3,9.1-11.7c0-3.2-13.1-2.7-19-2.8C13,16.3,4.7,14.9,0,6z"
          ></path>
        </svg>
      </div>
      <!-- <img src="../../../assets/svgviewer-output.svg" alt="Cart" class="" /> -->
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const showLoginDropdown = ref(false);
const showCategory = ref(false);
const showRegisterDropdown = ref(false);

const toggleLoginDropdown = () => {
  showLoginDropdown.value = !showLoginDropdown.value;
  if (showRegisterDropdown.value) showRegisterDropdown.value = false;
};
const toggleCategoryDropdown = () => {
  showCategory.value = !showCategory.value;
  if (showCategory.value) showCategory.value = false;
};

const toggleRegisterDropdown = () => {
  showRegisterDropdown.value = !showRegisterDropdown.value;
  if (showLoginDropdown.value) showLoginDropdown.value = false;
};
</script>

<style scoped></style>
