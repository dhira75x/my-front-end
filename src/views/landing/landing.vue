<template>
  <section class="p-10">
    <div>
      <!-- Header Section -->
      <header class="bg-gray-900 p-4 text-white">
        <div class="container mx-auto">
          <p class="mt-2 justify-center text-center">
            Discover the best products online!
          </p>

          <div class="mr-10 flex flex-row-reverse gap-4">
            <button
              class="h-[51px] w-[121px] rounded-md border-lime-950 pb-3.5 pl-7 pr-7 pt-3.5 text-black"
              type="dropdown"
            >
              <router-link
                to="/help-page"
                class="rounded bg-lime-800 px-4 py-2 text-white hover:bg-lime-900"
                >Login</router-link
              >
            </button>
            <div class="flex flex-row">
                <div class="relative inline-block text-left">
                    <button class="h-[51px] w-[121px] rounded-md border-lime-950 pb-3.5 pl-7 pr-7 pt-3.5 text-black">Register</button>
                  <div
                    class="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabindex="-1"
                  >
                    <div class="py-1" role="none">
                      
                      <router-link :to="{ name: 'registration' }">
                      <a
                        href="#"
                        class="block border-b border-gray-200 px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-0"
                        >User</a
                      >
                    </router-link>
                    <router-link :to="{ name: 'vendor-reg' }">
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-1"
                        >Vendor</a
                      >
                      </router-link>
                      <router-link :to="{ name: 'register' }">
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-1"
                        >Dispatch</a
                      >
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </header>
      <!-- <Carousel /> -->
      <section class="my-12 w-full bg-white dark:bg-gray-900">
        <div class="container mx-auto px-6 py-10">
          <h1
            class="mx-auto h-2 w-40 rounded-lg bg-gray-200 dark:bg-gray-700"
          ></h1>

          <p
            class="mx-auto mt-6 h-2 w-64 rounded-lg bg-gray-200 dark:bg-gray-700"
          ></p>
          <p
            class="mx-auto mt-4 h-2 w-48 rounded-lg bg-gray-200 dark:bg-gray-700"
          ></p>

          <div
            class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-16 xl:grid-cols-4"
          >
            <div class="flex flex-col items-center p-8">
              <p
                class="h-32 w-32 cursor-pointer rounded-full bg-gray-200 ring-4 ring-gray-300 dark:bg-gray-700 dark:ring-gray-600"
              >
                <img
                  src="../../assets/20220215_130451.jpg"
                  alt=""
                  class="h-32 w-32 rounded-full ring-4"
                />
              </p>
              <h1
                class="mx-auto mt-6 h-2 w-40 rounded-lg bg-gray-200 dark:bg-gray-700"
              ></h1>

              <p
                class="mx-auto mt-4 h-2 w-32 rounded-lg bg-gray-200 dark:bg-gray-700"
              ></p>

              <p
                class="mx-auto mr-5 mt-4 h-2 w-40 rounded-lg bg-gray-200 dark:bg-gray-700"
              ></p>
            </div>

            <div class="flex flex-col items-center p-8">
              <p
                class="h-32 w-32 cursor-pointer rounded-full bg-gray-200 ring-4 ring-gray-300 dark:bg-gray-700 dark:ring-gray-600"
              >
                <img
                  src="../../assets/20220215_130451.jpg"
                  alt=""
                  class="h-32 w-32 rounded-full ring-4"
                />
              </p>
              <h1
                class="mx-auto mt-6 h-2 w-40 cursor-pointer rounded-lg bg-gray-200 dark:bg-gray-700"
              ></h1>

              <p
                class="mx-auto mt-4 h-2 w-32 rounded-lg bg-gray-200 dark:bg-gray-700"
              ></p>

              <p
                class="mx-auto mr-5 mt-4 h-2 w-40 rounded-lg bg-gray-200 dark:bg-gray-700"
              ></p>
            </div>

            <div class="flex flex-col items-center p-8">
              <p
                class="h-32 w-32 cursor-pointer rounded-full bg-gray-200 ring-4 ring-gray-300 dark:bg-gray-700 dark:ring-gray-600"
              >
                <img
                  src="../../assets/20210717_152948.jpg"
                  alt=""
                  class="h-32 w-32 rounded-full ring-4"
                />
              </p>
              <h1
                class="mx-auto mt-6 h-2 w-40 rounded-lg bg-gray-200 dark:bg-gray-700"
              ></h1>

              <p
                class="mx-auto mt-4 h-2 w-32 rounded-lg bg-gray-200 dark:bg-gray-700"
              ></p>

              <p
                class="mx-auto mr-5 mt-4 h-2 w-40 rounded-lg bg-gray-200 dark:bg-gray-700"
              ></p>
            </div>

            <div class="flex flex-col items-center p-8">
              <p
                class="h-32 w-32 cursor-pointer rounded-full bg-gray-200 ring-4 ring-gray-300 dark:bg-gray-700 dark:ring-gray-600"
              >
                <img
                  src="../../assets/20220113_182450.jpg"
                  alt=""
                  class="h-32 w-32 rounded-full ring-4"
                />
              </p>
              <h1
                class="mx-auto mt-6 h-2 w-40 rounded-lg bg-gray-200 dark:bg-gray-700"
              ></h1>

              <p
                class="mx-auto mt-4 h-2 w-32 rounded-lg bg-gray-200 dark:bg-gray-700"
              ></p>

              <p
                class="mx-auto mr-5 mt-4 h-2 w-40 rounded-lg bg-gray-200 dark:bg-gray-700"
              ></p>
            </div>

            <div class="flex flex-col items-center p-8">
              <p
                class="h-32 w-32 cursor-pointer rounded-full bg-gray-200 ring-4 ring-gray-300 dark:bg-gray-700 dark:ring-gray-600"
              >
                <img
                  src="../../assets/20210323_091909.jpg"
                  alt=""
                  class="h-32 w-32 rounded-full ring-4"
                />
              </p>
              <h1
                class="mx-auto mt-6 h-2 w-40 rounded-lg bg-gray-200 dark:bg-gray-700"
              ></h1>

              <p
                class="mx-auto mt-4 h-2 w-32 rounded-lg bg-gray-200 dark:bg-gray-700"
              ></p>

              <p
                class="mx-auto mr-5 mt-4 h-2 w-40 rounded-lg bg-gray-200 dark:bg-gray-700"
              ></p>
            </div>

            <div class="flex flex-col items-center p-8">
              <p
                class="h-32 w-32 cursor-pointer rounded-full bg-gray-200 ring-4 ring-gray-300 dark:bg-gray-700 dark:ring-gray-600"
              >
                <img
                  src="../../assets/20210621_143343.jpg"
                  alt=""
                  class="h-32 w-32 rounded-full ring-4"
                />
              </p>
              <h1
                class="mx-auto mt-6 h-2 w-40 rounded-lg bg-gray-200 dark:bg-gray-700"
              ></h1>

              <p
                class="mx-auto mt-4 h-2 w-32 rounded-lg bg-gray-200 dark:bg-gray-700"
              ></p>

              <p
                class="mx-auto mr-5 mt-4 h-2 w-40 rounded-lg bg-gray-200 dark:bg-gray-700"
              ></p>
            </div>

            <div class="flex flex-col items-center p-8">
              <p
                class="h-32 w-32 cursor-pointer rounded-full bg-gray-200 ring-4 ring-gray-300 dark:bg-gray-700 dark:ring-gray-600"
              >
                <img
                  src="../../assets/20220215_130451.jpg"
                  alt=""
                  class="h-32 w-32 rounded-full ring-4"
                />
              </p>
              <h1
                class="mx-auto mt-6 h-2 w-40 rounded-lg bg-gray-200 dark:bg-gray-700"
              ></h1>

              <p
                class="mx-auto mt-4 h-2 w-32 rounded-lg bg-gray-200 dark:bg-gray-700"
              ></p>

              <p
                class="mx-auto mr-5 mt-4 h-2 w-40 rounded-lg bg-gray-200 dark:bg-gray-700"
              ></p>
            </div>

            <div class="flex flex-col items-center p-8">
              <p
                class="h-32 w-32 cursor-pointer rounded-full bg-gray-200 ring-4 ring-gray-300 dark:bg-gray-700 dark:ring-gray-600"
                @click="showProductModal = !showProductModal"
              >
                <img
                  src="../../assets/20210323_091909.jpg"
                  alt=""
                  class="h-32 w-32 rounded-full ring-4"
                />
              </p>
              <h1
                class="mx-auto mt-6 h-2 w-40 rounded-lg bg-gray-200 dark:bg-gray-700"
              ></h1>

              <p
                class="mx-auto mt-4 h-2 w-32 rounded-lg bg-gray-200 dark:bg-gray-700"
              ></p>

              <p
                class="mx-auto mr-5 mt-4 h-2 w-40 rounded-lg bg-gray-200 dark:bg-gray-700"
              ></p>
            </div>
            <AppModal
              v-if="showProductModal"
              @click="showProductModal = !showProductModal"
            >
              <template #modal-content>
                <Product />
              </template>
            </AppModal>
          </div>
        </div>
      </section>

      <!-- Featured Products Section -->
      <section class="container mx-auto mt-8">
        <h2 class="mb-4 text-2xl font-semibold">Featured Products</h2>
        <div
          class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          <!-- Product Card (Repeat as needed) -->
          <div
            v-for="product in featuredProducts"
            :key="product.id"
            class="bg-white p-4 shadow-md"
          >
            <img
              :src="product.image"
              alt="Product Image"
              class="mb-4 h-40 w-full object-cover"
            />
            <h3 class="text-lg font-semibold">{{ product.name }}</h3>
            <p class="text-gray-600">{{ product.description }}</p>
            <p class="mt-2 text-primary">{{ product.price }}</p>
            <div class="mx-2 items-center justify-center">
              <button
                @click="addToCart(product)"
                class="mx-4 mt-4 items-center rounded-full bg-lime-800 px-4 py-2 text-white"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="my-10 bg-white dark:bg-gray-900">
        <div class="container mx-auto px-6 py-10">
          <h1 class="mx-auto h-2 w-48 rounded-lg bg-gray-200 dark:bg-gray-700">
            Buy at Affordable Prices
          </h1>

          <p
            class="mx-auto mt-4 h-2 w-64 rounded-lg bg-gray-200 dark:bg-gray-700"
          >
            Shopping to Your Heart's Content
          </p>
          <p
            class="mx-auto mt-4 h-2 w-64 rounded-lg bg-gray-200 sm:w-80 dark:bg-gray-700"
          ></p>

          <div
            class="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:mt-12 xl:grid-cols-4 xl:gap-12"
          >
            <div class="w-full">
              <div class="h-64 w-full rounded-lg bg-gray-300 dark:bg-gray-600">
                <img
                  src="../../assets/20210323_091909.jpg"
                  alt=""
                  class="h-64 w-full rounded-lg"
                />
              </div>

              <h1
                class="mt-4 h-2 w-56 rounded-lg bg-gray-200 dark:bg-gray-700"
              ></h1>
              <p
                class="mt-4 h-2 w-24 rounded-lg bg-gray-200 dark:bg-gray-700"
              ></p>
            </div>

            <div class="w-full">
              <div class="h-64 w-full rounded-lg bg-gray-300 dark:bg-gray-600">
                <img
                  src="../../assets/20210323_091909.jpg"
                  alt=""
                  class="h-64 w-full rounded-lg"
                />
              </div>

              <h1
                class="mt-4 h-2 w-56 rounded-lg bg-gray-200 dark:bg-gray-700"
              ></h1>
              <p
                class="mt-4 h-2 w-24 rounded-lg bg-gray-200 dark:bg-gray-700"
              ></p>
            </div>

            <div class="w-full">
              <div class="h-64 w-full rounded-lg bg-gray-300 dark:bg-gray-600">
                <img
                  src="../../assets/20210323_091909.jpg"
                  alt=""
                  class="h-64 w-full rounded-lg"
                />
              </div>

              <h1
                class="mt-4 h-2 w-56 rounded-lg bg-gray-200 dark:bg-gray-700"
              ></h1>
              <p
                class="mt-4 h-2 w-24 rounded-lg bg-gray-200 dark:bg-gray-700"
              ></p>
            </div>

            <div class="w-full">
              <div class="h-64 w-full rounded-lg bg-gray-300 dark:bg-gray-600">
                <img
                  src="../../assets/20210323_091909.jpg"
                  alt=""
                  class="h-64 w-full rounded-lg"
                />
              </div>

              <h1
                class="mt-4 h-2 w-56 rounded-lg bg-gray-200 dark:bg-gray-700"
              ></h1>
              <p
                class="mt-4 h-2 w-24 rounded-lg bg-gray-200 dark:bg-gray-700"
              ></p>
            </div>

            <div class="w-full">
              <div class="h-64 w-full rounded-lg bg-gray-300 dark:bg-gray-600">
                <img
                  src="../../assets/20210323_091909.jpg"
                  alt=""
                  class="h-64 w-full rounded-lg"
                />
              </div>

              <h1
                class="mt-4 h-2 w-56 rounded-lg bg-gray-200 dark:bg-gray-700"
              ></h1>
              <p
                class="mt-4 h-2 w-24 rounded-lg bg-gray-200 dark:bg-gray-700"
              ></p>
            </div>

            <div class="w-full">
              <div class="h-64 w-full rounded-lg bg-gray-300 dark:bg-gray-600">
                <img
                  src="../../assets/20210717_152948.jpg"
                  alt=""
                  class="h-64 w-full rounded-lg"
                />
              </div>

              <h1
                class="mt-4 h-2 w-56 rounded-lg bg-gray-200 dark:bg-gray-700"
              ></h1>
              <p
                class="mt-4 h-2 w-24 rounded-lg bg-gray-200 dark:bg-gray-700"
              ></p>
            </div>

            <div class="w-full">
              <div class="h-64 w-full rounded-lg bg-gray-300 dark:bg-gray-600">
                <img
                  src="../../assets/20210323_091909.jpg"
                  alt=""
                  class="h-64 w-full rounded-lg"
                />
              </div>

              <h1
                class="mt-4 h-2 w-56 rounded-lg bg-gray-200 dark:bg-gray-700"
              ></h1>
              <p
                class="mt-4 h-2 w-24 rounded-lg bg-gray-200 dark:bg-gray-700"
              ></p>
            </div>

            <div class="w-full">
              <div class="h-64 w-full rounded-lg bg-gray-300 dark:bg-gray-600">
                <img
                  src="../../assets/20210717_152948.jpg"
                  alt=""
                  class="h-64 w-full rounded-lg"
                />
              </div>

              <h1
                class="mt-4 h-2 w-56 rounded-lg bg-gray-200 dark:bg-gray-700"
              ></h1>
              <p
                class="mt-4 h-2 w-24 rounded-lg bg-gray-200 dark:bg-gray-700"
              ></p>
            </div>

            <div class="w-full">
              <div class="h-64 w-full rounded-lg bg-gray-300 dark:bg-gray-600">
                <img
                  src="../../assets/20210621_143231.jpg"
                  alt=""
                  class="h-64 w-full rounded-lg"
                />
              </div>

              <h1 class="mt-4 h-2 w-56 rounded-lg bg-gray-200 dark:bg-gray-700">
                SNEAKERS UNISEX
              </h1>
              <p class="mt-4 h-2 w-24 rounded-lg bg-gray-200 dark:bg-gray-700">
                #30,000
              </p>
            </div>

            <div class="w-full">
              <div class="h-64 w-full rounded-lg bg-gray-300 dark:bg-gray-600">
                <img
                  src="../../assets/20210323_091909.jpg"
                  alt=""
                  class="h-64 w-full rounded-lg"
                />
              </div>

              <h1
                class="mt-4 h-2 w-56 rounded-lg bg-gray-200 dark:bg-gray-700"
              ></h1>
              <p
                class="mt-4 h-2 w-24 rounded-lg bg-gray-200 dark:bg-gray-700"
              ></p>
            </div>

            <div class="w-full">
              <div class="h-64 w-full rounded-lg bg-gray-300 dark:bg-gray-600">
                <img
                  src="../../assets/20210323_091909.jpg"
                  alt=""
                  class="h-64 w-full rounded-lg"
                />
              </div>

              <h1
                class="mt-4 h-2 w-56 rounded-lg bg-gray-200 dark:bg-gray-700"
              ></h1>
              <p
                class="mt-4 h-2 w-24 rounded-lg bg-gray-200 dark:bg-gray-700"
              ></p>
            </div>

            <div class="w-full">
              <div class="h-64 w-full rounded-lg bg-gray-300 dark:bg-gray-600">
                <img
                  src="../../assets/20210323_091909.jpg"
                  alt=""
                  class="h-64 w-full rounded-lg"
                />
              </div>

              <h1
                class="mt-4 h-2 w-56 rounded-lg bg-gray-200 dark:bg-gray-700"
              ></h1>
              <p
                class="mt-4 h-2 w-24 rounded-lg bg-gray-200 dark:bg-gray-700"
              ></p>
            </div>
          </div>
        </div>
      </section>

      <!-- Call to Action Section -->
      <section class="my-4 bg-lime-800 p-8 text-white">
        <div class="container mx-auto text-center">
          <h2 class="mb-4 text-2xl font-semibold">Shop Now!</h2>
          <p class="mb-4">Discover amazing deals on your favorite products.</p>
          <button
            @click="scrollToProducts"
            class="rounded-full bg-white px-6 py-2 text-primary"
          >
            Explore Products
          </button>
        </div>
      </section>

      <section
        class="container mx-auto flex flex-col items-center bg-white p-5 xl:flex-row dark:bg-gray-900"
      >
        <div class="flex justify-center xl:w-1/2">
          <img
            class="h-80 w-80 flex-shrink-0 rounded-full object-cover sm:h-[28rem] sm:w-[28rem]"
            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
            alt=""
          />
        </div>

        <div
          class="mt-6 flex flex-col items-center xl:mt-0 xl:w-1/2 xl:items-start"
        >
          <h2
            class="text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white"
          >
            Download our free mobile app
          </h2>

          <p class="mt-4 block max-w-2xl text-gray-500 dark:text-gray-300">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
            corporis esse dolorum, illum, consectetur earum provident alias
            dolore omnis quis tempore voluptatum excepturi ea numquam? Aperiam
            fugiat consequuntur nostrum odio.
          </p>

          <div class="mt-6 sm:-mx-2">
            <a
              href="#"
              class="inline-flex w-full items-center justify-center overflow-hidden rounded-lg bg-gray-900 px-4 py-2.5 text-sm text-white shadow transition-colors duration-300 hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80 sm:mx-2 sm:w-auto dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <svg
                class="mx-2 h-5 w-5 fill-current"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                xml:space="preserve"
              >
                <!-- SVG Path for App Store -->
              </svg>
              <span class="mx-2"> Get it on the App Store </span>
            </a>

            <a
              href="#"
              class="mt-4 inline-flex w-full items-center justify-center overflow-hidden rounded-lg bg-blue-600 px-4 py-2.5 text-sm text-white shadow transition-colors duration-300 hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80 sm:mx-2 sm:mt-0 sm:w-auto"
            >
              <svg
                class="mx-2 h-5 w-5 fill-current"
                viewBox="-28 0 512 512.00075"
                xmlns="http://www.w3.org/2000/svg"
              >
                <!-- SVG Path for Google Play -->
              </svg>
              <span class="mx-2"> Get it on Google Play </span>
            </a>
          </div>
        </div>
      </section>

      <!-- Footer Section -->
      <footer class="mt-6 bg-lime-800 p-4 py-6 text-white">
        <div class="container mx-auto flex justify-between text-center">
          <div class="flex space-x-10">
            <button
              class="focus:shadow-outline-lime my-3 mt-4 block w-full rounded-lg border border-transparent bg-lime-700 px-4 py-2 text-center text-sm font-medium leading-5 text-white transition-colors duration-150 hover:bg-lime-700 focus:outline-none active:bg-lime-600"
            >
              <router-link :to="{ name: 'help-page' }">Help </router-link>
            </button>

            <button
              div
              class="focus:shadow-outline-lime my-3 mt-4 block w-full rounded-lg border border-transparent bg-lime-700 px-4 py-2 text-center text-sm font-medium leading-5 text-white transition-colors duration-150 hover:bg-lime-700 focus:outline-none active:bg-lime-600"
            >
              Frequently Asked Questions
            </button>
            <button
              class="focus:shadow-outline-lime my-3 mt-4 block w-full rounded-lg border border-transparent bg-lime-700 px-4 py-2 text-center text-sm font-medium leading-5 text-white transition-colors duration-150 hover:bg-lime-700 focus:outline-none active:bg-lime-600"
            >
              Track Your Products
            </button>
          </div>

          <!-- Additional content or columns can be added here -->

          <div class="flex flex-row gap-4">
            <h3 class="mb-4 text-lg font-semibold">Contact Us</h3>
            <p>Email: ovomarket@ovomarket.ng</p>
            <p>Phone: +234 *** **** ***</p>
          </div>
        </div>
        <div class="flex flex-row items-center justify-center">
          <p>&copy; 2024 Ovo Market. All rights reserved.</p>
        </div>
      </footer>
    </div>
  </section>
</template>

<script setup>
import Product from "../../components/pages/Product/product.vue";
import Carousel from "./carousel.vue";
import AppModal from "../../components/atoms/AppModal.vue";
import { ref } from "vue";
const showProductModal = ref(false);

const featuredProducts = ref([
  {
    id: 1,
    name: "Product 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$19.99",
    image: "https://placekitten.com/300/200",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
    price: "$29.99",
    image: "https://placekitten.com/300/201",
  },
  {
    id: 3,
    name: "Product 3",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
    price: "$29.99",
    image: "https://placekitten.com/300/201",
  },
  {
    id: 4,
    name: "Product 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$19.99",
    image: "https://placekitten.com/300/200",
  },
  // Add more products as needed
]);

const addToCart = (product) => {
  // Add logic to handle adding the product to the cart
  console.log("Product added to cart:", product);
};

const scrollToProducts = () => {
  // Add logic to scroll to the products section
  document
    .getElementById("featured-products-section")
    .scrollIntoView({ behavior: "smooth" });
};
</script>

<style></style>
