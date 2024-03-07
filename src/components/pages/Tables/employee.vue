<template>
  <div class="container mx-auto p-4">
    <!-- Search and filter bar -->
    <div class="mb-4 flex justify-end">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search employees..."
        class="mr-2 rounded border border-gray-300 p-2"
      />
      <select
        v-model="selectedRole"
        class="mr-2 rounded border border-gray-300 p-2"
      >
        <option value="">All Roles</option>
        <option value="admin">Admin</option>
        <option value="manager">Manager</option>
        <option value="staff">Staff</option>
      </select>
      <button @click="resetFilters" class="rounded bg-gray-300 p-2">
        Reset
      </button>
    </div>

    <!-- Staff list table -->
    <table class="min-w-full rounded border border-gray-300 bg-white shadow">
      <thead>
        <tr>
          <th class="px-4 py-2">Employee ID</th>
          <th class="px-4 py-2">Employee Name</th>
          <th class="px-4 py-2">Address</th>
          <th class="px-4 py-2">Phone Number</th>
          <th class="px-4 py-2">Email Address</th>
          <th class="px-4 py-2">Status</th>
          <th class="px-4 py-2">Role</th>
          <th class="px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in filteredEmployees" :key="employee.id">
          <td class="px-4 py-2">{{ employee.id }}</td>
          <td class="px-4 py-2">{{ employee.name }}</td>
          <td class="px-4 py-2">{{ employee.address }}</td>
          <td class="px-4 py-2">{{ employee.phone }}</td>
          <td class="px-4 py-2">{{ employee.email }}</td>
          <td class="px-4 py-2">
            {{ employee.status ? "Active" : "Inactive" }}
          </td>
          <td class="px-4 py-2">{{ employee.role }}</td>
          <td class="px-4 py-2">
            <button
              @click="viewEmployee(employee)"
              class="mr-2 text-blue-500 hover:underline"
            >
              View
            </button>
            <button
              @click="openUpdateForm(employee)"
              class="mr-2 text-green-500 hover:underline"
            >
              Update
            </button>
            <button
              @click="deleteEmployee(employee)"
              class="text-red-500 hover:underline"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Pagination -->
    <div class="mt-4 flex justify-end">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="mr-2 rounded bg-gray-300 p-2"
      >
        Previous
      </button>
      <span class="p-2">{{ currentPage }}</span>
      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="ml-2 rounded bg-gray-300 p-2"
      >
        Next
      </button>
    </div>
  </div>
  <div
    v-if="isUpdateFormOpen"
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div class="w-1/3 rounded bg-white p-8 shadow-lg">
      <h2 class="mb-4 text-2xl font-semibold">Update Employee</h2>
      <form @submit.prevent="updateEmployee">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700"
            >Name:</label
          >
          <input
            v-model="updateFormData.name"
            type="text"
            id="name"
            name="name"
            class="w-full rounded border border-gray-300 p-2"
          />
        </div>
        <div class="mb-4">
          <label for="address" class="block text-sm font-medium text-gray-700"
            >Address:</label
          >
          <input
            v-model="updateFormData.address"
            type="text"
            id="address"
            name="address"
            class="w-full rounded border border-gray-300 p-2"
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Email:</label
          >
          <input
            v-model="updateFormData.email"
            type="email"
            id="email"
            name="email"
            class="w-full rounded border border-gray-300 p-2"
          />
        </div>
        <div class="mb-4">
          <label for="phone" class="block text-sm font-medium text-gray-700"
            >Phone Number:</label
          >
          <input
            v-model="updateFormData.phone"
            type="tel"
            id="phone"
            name="phone"
            class="w-full rounded border border-gray-300 p-2"
          />
        </div>
        <div class="flex justify-end">
          <button
            type="button"
            @click="closeUpdateForm"
            class="mr-2 rounded bg-gray-300 p-2"
          >
            Cancel
          </button>
          <button type="submit" class="rounded bg-green-500 p-2 text-white">
            Update
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from "vue";

// Sample data, replace this with your actual employee data
const employees = ref([
  {
    id: 1,
    name: "John Doe",
    address: "123 Main St",
    phone: "123-456-7890",
    email: "john@example.com",
    status: true,
    role: "admin",
  },
  {
    id: 2,
    name: "Jane Doe",
    address: "456 Oak St",
    phone: "987-654-3210",
    email: "jane@example.com",
    status: false,
    role: "staff",
  },
  // ... add more employees
]);

const searchQuery = ref("");
const selectedRole = ref("");
const currentPage = ref(1);
const pageSize = 5; // Number of employees per page

// Filtered employees based on search and role
const filteredEmployees = ref([]);

// Watch for changes in searchQuery and selectedRole to update filteredEmployees
watch([searchQuery, selectedRole], () => {
  filteredEmployees.value = employees.value
    .filter((employee) =>
      employee.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
    .filter(
      (employee) => !selectedRole.value || employee.role === selectedRole.value
    );
});

// Pagination
const totalPages = Math.ceil(employees.value.length / pageSize);

const nextPage = () => {
  if (currentPage.value < totalPages) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

// Reset filters
const resetFilters = () => {
  searchQuery.value = "";
  selectedRole.value = "";
  currentPage.value = 1;
};

// Actions
const viewEmployee = (employee) => {
  // Implement view logic here
  console.log("View employee:", employee);
};

const deleteEmployee = (employee) => {
  // Implement delete logic here
  console.log("Delete employee:", employee);
};
const isUpdateFormOpen = ref(false);
const updateFormData = reactive({
  id: null,
  name: "",
  address: "",
  email: "",
  phone: "",
});

const openUpdateForm = (employee) => {
  isUpdateFormOpen.value = true;
  updateFormData.id = employee.id;
  updateFormData.name = employee.name;
  updateFormData.address = employee.address;
  updateFormData.email = employee.email;
  updateFormData.phone = employee.phone;
};

const closeUpdateForm = () => {
  isUpdateFormOpen.value = false;
  // Reset form data
  updateFormData.id = null;
  updateFormData.name = "";
  updateFormData.address = "";
  updateFormData.email = "";
  updateFormData.phone = "";
};

const updateEmployee = () => {
  // Implement update logic here
  // Use updateFormData.id and updateFormData to update the employee
  console.log("Updating employee:", updateFormData);
  // Close the update form after updating
  closeUpdateForm();
};
</script>

<style scoped>
/* Add any additional styling here */
</style>
