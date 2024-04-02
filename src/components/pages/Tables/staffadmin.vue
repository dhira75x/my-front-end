<template>
  <div class="container mx-auto p-4">
    <h2 class="mb-4 text-3xl font-semibold">Staff Roles</h2>

    <!-- Create button -->
    <button
      @click="showCreateForm = true"
      class="float-right mb-4 rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-700"
    >
      Create
    </button>

    <!-- Staff Roles Table -->
    <table class="min-w-full bg-gray-800 text-lime-800">
      <thead>
        <tr>
          <th class="px-4 py-2">Staff ID</th>
          <th class="px-4 py-2">Staff Name</th>
          <th class="px-4 py-2">Role</th>
          <th class="px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="staffRole in staffRoles" :key="staffRole.id">
          <td class="px-4 py-2">{{ staffRole.id }}</td>
          <td class="px-4 py-2">{{ staffRole.name }}</td>
          <td class="px-4 py-2">{{ staffRole.role }}</td>
          <td class="flex px-4 py-2">
            <button
              @click="editStaffRole(staffRole.id)"
              class="text-blue-500 hover:text-blue-700 focus:outline-none"
            >
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
                  d="M2 10c0-3.5 3.5-7 7-7s7 3.5 7 7v2c0 4.5-3.5 8-7 8s-7-3.5-7-8v-2z"
                ></path>
              </svg>
            </button>
            <button
              @click="deleteStaffRole(staffRole.id)"
              class="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
            >
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
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Create Staff Role Form Popup -->
    <div
      v-if="showCreateForm"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div class="w-96 rounded-md bg-white p-6">
        <h3 class="mb-4 text-lg font-semibold">Create Staff Role</h3>
        <!-- Your form inputs go here -->

        <!-- Close button -->
        <button
          @click="showCreateForm = false"
          class="text-gray-500 hover:text-gray-700 focus:outline-none"
        >
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
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const staffRoles = ref([
  { id: 1, name: "John Doe", role: "Manager" },
  { id: 2, name: "Jane Doe", role: "Developer" },
  // Add more staff roles as needed
]);

const showCreateForm = ref(false);

const editStaffRole = (staffRoleId) => {
  
  console.log(`Editing staff role with ID: ${staffRoleId}`);
};

const deleteStaffRole = (staffRoleId) => {
 
  console.log(`Deleting staff role with ID: ${staffRoleId}`);
};
</script>

<style scoped>

</style>
