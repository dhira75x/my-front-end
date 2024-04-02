<template>
  <div class="bg-white">
    <div class="px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
      <div class="hero">
        <div
          class="hero-headline flex flex-col items-center justify-center pt-24 text-center"
        >
          <h1 class="font-bold text-3xl text-gray-900">Affordable & Quality Goods</h1>
          <p class="font-base text-base text-gray-600">
            High quality products sold by our talented community.
          </p>
        </div>
        <div class="box pt-6">
          <div class="box-wrapper">
            <div
              class="bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200"
            >
              <button @click="getImages" class="outline-none focus:outline-none">
                <svg
                  class="w-5 text-gray-600 h-5 cursor-pointer"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
              <input
                type="search"
                placeholder="search for images"
                v-model="q"
                @keydown.enter="getImages"
                class="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"
              />
              <div class="select">
                <select
                  v-model="image_type"
                  class="text-sm outline-none focus:outline-none bg-transparent"
                >
                  <option value="all" selected>All</option>
                  <option value="photo">Photo</option>
                  <option value="illustration">Illustration</option>
                  <option value="vector">Vector</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <!-- <section id="photos" class="my-5 grid grid-cols-1 md:grid-cols-4 gap-4">
          <a
            v-for="image in images"
            :key="image.id"
            :href="image.largeImageURL"
            class="hover:opacity-75"
            target="_blank"
          >
            <img
              :src="image.largeImageURL"
              :alt="image.tags"
              class="w-full h-64 object-cover"
            />
          </a>
        </section> -->
      </div>
    </div>

    <!-- <footer class="p-5 text-sm text-gray-600 text-center inline-flex items-center">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="heart"
        class="svg-inline--fa fa-heart fa-w-16 text-red-600 w-4 h-4 mr-4 align-middle"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
        ></path>
      </svg>
      <span
        >Made by
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          class="text-teal-600 font-semibold"
          >tailwindcss</a
        >
        &
        <a
          href="https://github.com/vuejs/vue"
          target="_blank"
          class="text-teal-600 font-semibold"
          >Vue.js</a
        ></span
      >
    </footer> -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const images = ref([]);
const q = ref("woman girl food");
const image_type = ref("all");

const getImages = async () => {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?key=15819227-ef2d84d1681b9442aaa9755b8&q=${encodeURIComponent(
        q.value
      )}&image_type=${image_type.value}&per_page=52`
    );
    images.value = response.data.hits;
  } catch (error) {
    console.error("Error fetching images:", error);
  }
};

getImages();
</script>
