<template>
  <div class="container mx-auto p-4">
    <h2 class="text-3xl font-semibold mb-4">Customer List</h2>

    <!-- Search and Filter Bar -->
    <div class="flex justify-end mb-4">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search by Customer Name"
        class="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
      />
      <button
        @click="filterCustomers"
        class="ml-2 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
      >
        Filter
      </button>
    </div>

    <!-- Customer Table -->
    <table class="min-w-full bg-gray-800 text-lime-800">
      <thead>
        <tr>
          <th class="py-2 px-4">Customer ID</th>
          <th class="py-2 px-4">Customer Name</th>
          <th class="py-2 px-4">Address</th>
          <th class="py-2 px-4">Phone Number</th>
          <th class="py-2 px-4">Email Address</th>
          <th class="py-2 px-4">Status</th>
          <th class="py-2 px-4">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in displayedCustomers" :key="customer.id">
          <td class="py-2 px-4">{{ customer.id }}</td>
          <td class="py-2 px-4">{{ customer.name }}</td>
          <td class="py-2 px-4">{{ customer.address }}</td>
          <td class="py-2 px-4">{{ customer.phone }}</td>
          <td class="py-2 px-4">{{ customer.email }}</td>
          <td class="py-2 px-4">
            <span
              :class="{ 'text-green-500': customer.status === 'active', 'text-red-500': customer.status === 'inactive' }"
            >
              {{ customer.status }}
            </span>
          </td>
          <td class="py-2 px-4">
            <button
              @click="viewCustomerDetails(customer)"
              class="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded-md mr-2"
            >
              View
            </button>
            <button
              @click="deleteCustomer(customer.id)"
              class="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded-md"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Pagination -->
    <div class="mt-4">
      <pagination :total="totalPages" v-model="currentPage" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Sample data, replace this with your actual customer data
const customers = ref([
  { id: 1, name: 'Customer 1', address: 'Address 1', phone: '1234567890', email: 'customer1@example.com', status: 'active' },
  { id: 2, name: 'Customer 2', address: 'Address 2', phone: '9876543210', email: 'customer2@example.com', status: 'inactive' },
  // Add more customer data as needed
]);

const searchQuery = ref('');
const currentPage = ref(1);
const pageSize = 5; // Number of items per page

const filteredCustomers = computed(() => {
  const query = searchQuery.value.toLowerCase();
  return customers.value.filter(
    (customer) =>
      customer.name.toLowerCase().includes(query) ||
      customer.address.toLowerCase().includes(query) ||
      customer.phone.includes(query) ||
      customer.email.toLowerCase().includes(query)
  );
});

const totalPages = computed(() => Math.ceil(filteredCustomers.value.length / pageSize));

const displayedCustomers = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  const end = start + pageSize;
  return filteredCustomers.value.slice(start, end);
});

const filterCustomers = () => {
  // Implement your filter logic here
  // This 
