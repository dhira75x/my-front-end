<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="min-h-screen w-full bg-[#F5F5F5] pl-[260px]">
        <NavBar />
        <section class="p-10">
          <section
            class="my-14 grid w-full grid-cols-4 flex-nowrap gap-6 overflow-x-scroll overscroll-x-contain"
          >
            <div
              class="grid w-[250px] place-content-center rounded bg-lime-950 py-6 text-white"
            >
              <div class="text-start text-[35px] font-bold">1550</div>
              <h2 class="text-xl capitalize">Total Product</h2>
              <h6 class="text-sm font-light">Overall Number of Products</h6>
            </div>
            <div
              class="grid w-[250px] place-content-center rounded border border-gray-400 bg-lime-50 py-6 text-black"
            >
              <div class="text-start text-[35px] font-bold">1399</div>
              <h2 class="text-xl capitalize">Total Available Products</h2>
              <h6 class="text-sm font-light">
                Total number of products available.
              </h6>
            </div>
            <div
              class="bg-(F5F5F5) grid w-[250px] place-content-center rounded border border-gray-400 py-6 text-black"
            >
              <div class="text-start text-[35px] font-bold">69</div>
              <h2 class="text-xl capitalize">Total Limited Product</h2>
              <h6 class="text-sm font-light">
                Total number of limitation products.
              </h6>
            </div>
          </section>
          <section
            class="my-12 flex flex-row-reverse items-end justify-between"
          >
            <div class="flex flex-row-reverse items-center">
              <div class="mx-4 flex items-center">
                <input
                  placeholder="Search"
                  class="w-[230px] rounded-l-md border border-r-0 border-secondary p-2 focus:outline-none"
                />
                <button
                  class="h-full rounded-r-md border border-secondary bg-primary-gray px-3 py-2.5"
                >
                  <img src="../../../assets/search-white.svg" alt="" />
                </button>
              </div>
              <div>
                <select
                  class="w-[230px] rounded-md border border-secondary p-2.5 focus:outline-none"
                >
                  <option value="" selected>Search Custom Fields</option>
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                  <option value="name">Name</option>
                </select>
              </div>
            </div>
          </section>
          <div class="container mx-auto p-2">
            <h2 class="mb-4 p-7 text-3xl font-semibold">Available Products</h2>

            <table
              class="mt-4 w-full table-auto rounded-md border border-secondary bg-gray-800 text-sm text-lime-800"
            >
              <thead>
                <tr class="border border-secondary capitalize">
                  <th class="border border-secondary p-3">Product ID</th>
                  <th class="border border-secondary p-3">Product Name</th>
                  <th class="border border-secondary p-3">Price</th>
                  <th class="border border-secondary p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in products" :key="product.id">
                  <td class="border border-secondary p-3 text-center">
                    {{ product.id }}
                  </td>
                  <td class="border border-secondary p-3 text-center">
                    {{ product.name }}
                  </td>
                  <td class="border border-secondary p-3 text-center">
                    {{ product.price }}
                  </td>
                  <td
                    class="flex items-center justify-center border border-secondary p-3 text-center"
                  >
                    <button
                      @click="editProduct(product.id)"
                      class="mr-2 rounded bg-blue-500 px-2 py-1 text-white hover:bg-blue-700"
                    >
                      Edit
                    </button>
                    <button
                      @click="deleteProduct(product.id)"
                      class="rounded bg-red-500 px-2 py-1 text-white hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <pagination
              :total="totalProducts"
              v-model="currentPage"
              :per-page="perPage"
            />
          </div>
        </section>
      </main>
    </template>
  </app-layout>
</template>

<script setup>
import { ref, computed } from "vue";
import NavBar from "../../atoms/Bars/navbar.vue";
import AppLayout from "../../../layouts/applayout.vue";
const products = ref([
  { id: 2378, name: "Product 1", price: 19.99 },
  { id: 450, name: "Product 2", price: 29.99 },
  { id: 106, name: "Product 3", price: 39.99 },
]);

const perPage = 5; // Set the number of products per page
const currentPage = ref(1);

const totalProducts = computed(() => products.value.length);

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  const end = start + perPage;
  return products.value.slice(start, end);
});
const editProduct = (productId) => {
  console.log(`Editing product with ID: ${productId}`);
};

const deleteProduct = (productId) => {
  console.log(`Deleting product with ID: ${productId}`);
};
</script>

<style scoped>
/* Add any additional styling here */
</style>
