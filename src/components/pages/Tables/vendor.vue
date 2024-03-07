<template>
  <div class="container mx-auto p-4">
    <!-- Search and filter bar -->
    <div class="mb-4 flex items-center justify-between">
      <div class="flex items-center">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search vendors..."
          class="rounded-md border border-gray-300 px-2 py-1"
        />
        <button
          @click="searchVendors"
          class="ml-2 rounded-md bg-blue-500 px-4 py-1 text-white hover:bg-blue-700"
        >
          Search
        </button>
      </div>
      <!-- Add any filter options here -->
    </div>

    <!-- Vendor Table -->
    <table class="min-w-full bg-gray-800 text-lime-800">
      <thead>
        <tr>
          <th class="px-4 py-2">Vendor ID</th>
          <th class="px-4 py-2">Vendor Name</th>
          <th class="px-4 py-2">Address</th>
          <th class="px-4 py-2">Company Name</th>
          <th class="px-4 py-2">Phone Number</th>
          <th class="px-4 py-2">Products</th>
          <th class="px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        <!-- Render vendor data with v-for -->
        <tr v-for="vendor in displayedVendors" :key="vendor.id">
          <td class="px-4 py-2">{{ vendor.id }}</td>
          <td class="px-4 py-2">{{ vendor.name }}</td>
          <td class="px-4 py-2">{{ vendor.address }}</td>
          <td class="px-4 py-2">{{ vendor.companyName }}</td>
          <td class="px-4 py-2">{{ vendor.phoneNumber }}</td>
          <td class="px-4 py-2">{{ vendor.products.join(", ") }}</td>
          <td class="px-4 py-2">
            <button @click="editVendor(vendor.id)" class="text-blue-500">
              <!-- Edit Icon -->
              <svg
                class="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2 12s3 6.5 6 8M22 12s-3 6.5-6 8"
                ></path>
              </svg>
            </button>
            <button @click="deleteVendor(vendor.id)" class="ml-2 text-red-500">
              <!-- Delete Icon -->
              <svg
                class="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <button
              @click="changePassword(vendor.id)"
              class="ml-2 text-green-500"
            >
              <!-- Change Password Icon -->
              <svg
                class="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 20l4-4m0 0l4 4m-4-4v-13"
                ></path>
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Pagination -->
    <div class="mt-4">
      <pagination :page-count="pageCount" v-model="currentPage" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// Sample data, replace this with your actual vendor data
const vendors = ref([
  {
    id: 1,
    name: "Vendor 1",
    address: "123 Main St",
    companyName: "Company A",
    phoneNumber: "123-456-7890",
    products: ["Product A", "Product B"],
  },
  {
    id: 2,
    name: "Vendor 2",
    address: "456 Oak St",
    companyName: "Company B",
    phoneNumber: "987-654-3210",
    products: ["Product C", "Product D"],
  },
  // ... more vendor data
]);

// Pagination
const itemsPerPage = 5;
const currentPage = ref(1);

const pageCount = computed(() =>
  Math.ceil(vendors.value.length / itemsPerPage)
);

const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage);
const endIndex = computed(() => startIndex.value + itemsPerPage);
const displayedVendors = computed(() =>
  vendors.value.slice(startIndex.value, endIndex.value)
);

// Search functionality
const searchQuery = ref("");

const searchVendors = () => {
  // Implement your search logic here
  // For example, you can filter vendors based on the search query
  // and update the displayedVendors computed property
};

// Action buttons
const editVendor = (vendorId) => {
  console.log(`Editing vendor with ID: ${vendorId}`);
};

const deleteVendor = (vendorId) => {
  console.log(`Deleting vendor with ID: ${vendorId}`);
};

const changePassword = (vendorId) => {
  console.log(`Changing password for vendor with ID: ${vendorId}`);
};
</script>

<!-- Add your pagination component here -->
