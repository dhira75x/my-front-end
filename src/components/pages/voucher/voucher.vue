<template>
  <div>
    <h1 class="mb-4 text-2xl font-bold">Voucher List</h1>
    <button @click="openModal" class="mb-4 bg-blue-500 px-4 py-2 text-white">
      Add New Voucher
    </button>

    <!-- Add New Voucher Modal -->
    <div
      v-if="isModalOpen"
      class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"
    >
      <div class="w-96 rounded-md bg-white p-8">
        <h2 class="mb-4 text-2xl font-bold">Add New Voucher</h2>
        <form @submit.prevent="addNewVoucher">
          <div class="mb-4">
            <label
              for="voucherTitle"
              class="block text-sm font-medium text-gray-600"
              >Voucher Title</label
            >
            <input
              v-model="newVoucher.title"
              type="text"
              id="voucherTitle"
              name="voucherTitle"
              class="mt-1 w-full rounded-md border p-2"
            />
          </div>
          <div class="mb-4">
            <label
              for="voucherCode"
              class="block text-sm font-medium text-gray-600"
              >Voucher Code</label
            >
            <input
              v-model="newVoucher.code"
              type="text"
              id="voucherCode"
              name="voucherCode"
              class="mt-1 w-full rounded-md border p-2"
            />
          </div>
          <div class="mb-4">
            <label for="product" class="block text-sm font-medium text-gray-600"
              >Product</label
            >
            <select
              v-model="newVoucher.product"
              id="product"
              name="product"
              class="mt-1 w-full rounded-md border p-2"
            >
              <option value="all">All Products</option>
              <option value="all">Product</option>
              <option value="all">Category</option>
              <option value="all">Sub Category</option>
              <option value="all">Child Category</option>
            </select>
          </div>
          <div class="mb-4">
            <label
              for="voucherType"
              class="block text-sm font-medium text-gray-600"
              >Voucher Type</label
            >
            <select
              v-model="newVoucher.type"
              id="voucherType"
              name="voucherType"
              class="mt-1 w-full rounded-md border p-2"
            >
              <option value="percentage">Percentage</option>
              <option value="amount">Amount</option>
            </select>
          </div>
          <div class="mb-4">
            <label
              for="discount"
              class="block text-sm font-medium text-gray-600"
              >Discount</label
            >
            <input
              v-model="newVoucher.discount"
              type="text"
              id="discount"
              name="discount"
              class="mt-1 w-full rounded-md border p-2"
            />
          </div>
          <div class="mb-4">
            <label
              for="expiryDate"
              class="block text-sm font-medium text-gray-600"
              >Expiry Date</label
            >
            <input
              v-model="newVoucher.expiryDate"
              type="date"
              id="expiryDate"
              name="expiryDate"
              class="mt-1 w-full rounded-md border p-2"
            />
          </div>
          <div class="mb-4">
            <label for="status" class="block text-sm font-medium text-gray-600"
              >Status</label
            >
            <select
              v-model="newVoucher.status"
              id="status"
              name="status"
              class="mt-1 w-full rounded-md border p-2"
            >
              <option value="publish">Publish</option>
              <option value="draft">Draft</option>
            </select>
          </div>
          <div class="flex justify-end">
            <button type="submit" class="bg-lime-800 px-4 py-2 text-white">
              Add Voucher
            </button>
            <button @click="closeModal" class="ml-2 text-gray-500">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>

    <table class="min-w-full border border-gray-300">
      <thead>
        <tr>
          <th class="px-4 py-2">ID</th>
          <th class="px-4 py-2">Title</th>
          <th class="px-4 py-2">Code</th>
          <th class="px-4 py-2">Product</th>
          <th class="px-4 py-2">Type</th>
          <th class="px-4 py-2">Discount</th>
          <th class="px-4 py-2">Expiry Date</th>
          <th class="px-4 py-2">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="voucher in vouchers" :key="voucher.id">
          <td class="border px-4 py-2">{{ voucher.id }}</td>
          <td class="border px-4 py-2">{{ voucher.title }}</td>
          <td class="border px-4 py-2">{{ voucher.code }}</td>
          <td class="border px-4 py-2">{{ voucher.product }}</td>
          <td class="border px-4 py-2">{{ voucher.type }}</td>
          <td class="border px-4 py-2">{{ voucher.discount }}</td>
          <td class="border px-4 py-2">{{ voucher.expiryDate }}</td>
          <td class="border px-4 py-2">{{ voucher.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const vouchers = ref([
  {
    id: 1,
    title: "Voucher001",
    code: "Voucher001",
    product: "all",
    type: "percentage",
    discount: "10%",
    expiryDate: "2024-12-31",
    status: "publish",
  },
  {
    id: 2,
    title: "Voucher002",
    code: "Voucher002",
    product: "all",
    type: "amount",
    discount: "20",
    expiryDate: "2024-12-15",
    status: "draft",
  },
]);

const isModalOpen = ref(false);
const newVoucher = ref({
  title: "",
  code: "",
  product: "all",
  type: "percentage",
  discount: "",
  expiryDate: "",
  status: "publish",
});

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const addNewVoucher = () => {
  // Implement the logic to add a new voucher
  const id = vouchers.value.length + 1;
  const voucher = {
    id,
    title: newVoucher.value.title,
    code: newVoucher.value.code,
    product: newVoucher.value.product,
    type: newVoucher.value.type,
    discount:
      newVoucher.value.type === "percentage"
        ? `${newVoucher.value.discount}%`
        : `$${newVoucher.value.discount}`,
    expiryDate: newVoucher.value.expiryDate,
    status: newVoucher.value.status,
  };

  vouchers.value.push(voucher);

  // Close the modal after adding the voucher
  closeModal();
};
</script>
