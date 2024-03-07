<template>
  <div class="container mx-auto p-4">
    <h2 class="mb-4 text-3xl font-semibold">Executive Roles</h2>

    <!-- Search and Filter Bar -->
    <div class="mb-4 flex items-center justify-end space-x-4">
      <!-- Search Input -->
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search roles..."
        class="rounded-md border px-4 py-2 focus:border-blue-300 focus:outline-none focus:ring"
      />

      <!-- Filter Button -->
      <button
        @click="filterRoles"
        class="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 focus:border-blue-300 focus:outline-none focus:ring"
      >
        Filter Roles
      </button>
    </div>

    <!-- Executive Roles Table -->
    <table class="min-w-full bg-gray-800 text-lime-800">
      <thead>
        <tr>
          <th class="px-4 py-2">Executive ID</th>
          <th class="px-4 py-2">Executive Name</th>
          <th class="px-4 py-2">Role</th>
          <th class="px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="executive in paginatedExecutives" :key="executive.id">
          <td class="px-4 py-2">{{ executive.id }}</td>
          <td class="px-4 py-2">{{ executive.name }}</td>
          <td class="px-4 py-2">{{ executive.role }}</td>
          <td class="px-4 py-2">
            <!-- Edit Button -->
            <button
              @click="editExecutive(executive.id)"
              class="mr-2 rounded bg-blue-500 px-2 py-1 text-white hover:bg-blue-700"
            >
              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M13 3a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2h6zm-1 2a1 1 0 100 2 1 1 0 000-2zM7 13a1 1 0 100 2h6a1 1 0 110 2H7z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>

            <!-- Delete Button -->
            <button
              @click="deleteExecutive(executive.id)"
              class="mr-2 rounded bg-red-500 px-2 py-1 text-white hover:bg-red-700"
            >
              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 3a2 2 0 012-2h6a2 2 0 012 2h3a1 1 0 011 1v12a2 2 0 01-2 2H4a2 2 0 01-2-2V4a1 1 0 011-1h3zm2 0a1 1 0 012 0h4a1 1 0 012 0h1a1 1 0 011 1v12h-1a1 1 0 01-1 1H6a1 1 0 01-1-1H4a1 1 0 01-1-1V4a1 1 0 011-1h1zM7 9a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>

            <!-- Change Password Button -->
            <button
              @click="changePassword(executive.id)"
              class="rounded bg-green-500 px-2 py-1 text-white hover:bg-green-700"
            >
              Change Password
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Pagination -->
    <div class="mt-4 flex justify-end">
      <button
        @click="goToPage('prev')"
        :disabled="currentPage === 1"
        class="mr-2 rounded-md bg-gray-500 px-4 py-2 text-white hover:bg-gray-700"
      >
        Prev
      </button>
      <button
        @click="goToPage('next')"
        :disabled="currentPage === totalPages"
        class="rounded-md bg-gray-500 px-4 py-2 text-white hover:bg-gray-700"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// Sample data, replace this with your actual executive roles data
const executives = ref([
  { id: 1, name: "Executive 1", role: "Role A" },
  { id: 2, name: "Executive 2", role: "Role B" },
  { id: 3, name: "Executive 3", role: "Role C" },
  // ... (more data)
]);

const searchQuery = ref("");
const filteredExecutives = ref([]);

// Pagination
const pageSize = 5; // Adjust the number of items per page
const currentPage = ref(1);

const paginatedExecutives = computed(() => {
  const startIndex = (currentPage.value - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return filteredExecutives.value.slice(startIndex, endIndex);
});

const totalPages = computed(() =>
  Math.ceil(filteredExecutives.value.length / pageSize)
);

const filterRoles = () => {
  filteredExecutives.value = executives.value.filter((executive) =>
    executive.role.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
  currentPage.value = 1; // Reset to the first page when filtering
};

const editExecutive = (executiveId) => {
  // Implement your edit logic here
  console.log(`Editing executive with ID: ${executiveId}`);
};

const deleteExecutive = (executiveId) => {
  // Implement your delete logic here
  console.log(`Deleting executive with ID: ${executiveId}`);
};

const changePassword = (executiveId) => {
  // Implement your change password logic here
  console.log(`Changing password for executive with ID: ${executiveId}`);
};

const goToPage = (direction) => {
  if (direction === "prev" && currentPage.value > 1) {
    currentPage.value--;
  } else if (direction === "next" && currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};
</script>

<style scoped>
/* Add any additional styling here */
</style>
