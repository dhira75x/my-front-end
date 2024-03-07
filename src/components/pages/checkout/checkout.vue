<template>
  <div class="container mx-auto mt-8">
    <h1 class="mb-6 text-3xl font-semibold">Checkout</h1>

    <div v-if="cartItems.length === 0" class="text-lg text-gray-600">
      Your cart is empty.
    </div>

    <div v-else>
      <!-- Order Summary -->
      <div class="mb-8 flex">
        <div class="flex-grow">
          <h2 class="text-lg font-semibold">Order Summary</h2>
          <div
            v-for="(item, index) in cartItems"
            :key="index"
            class="mt-2 flex items-center"
          >
            <span class="mr-2">{{ item.name }}</span>
            <span>x{{ item.quantity }}</span>
          </div>
        </div>
        <div>
          <p class="text-lg font-semibold">Total: ${{ calculateTotal() }}</p>
        </div>
      </div>

      <!-- Shipping Information Form -->
      <div class="mb-8">
        <h2 class="mb-4 text-lg font-semibold">Shipping Information</h2>
        <form @submit.prevent="placeOrder">
          <div class="mb-4">
            <label for="name" class="block text-sm font-semibold text-gray-700"
              >Full Name</label
            >
            <input
              v-model="shippingInfo.name"
              type="text"
              id="name"
              class="w-full rounded-md border p-2 focus:outline-none"
            />
          </div>
          <div class="mb-4">
            <label
              for="address"
              class="block text-sm font-semibold text-gray-700"
              >Address</label
            >
            <textarea
              v-model="shippingInfo.address"
              id="address"
              class="w-full rounded-md border p-2 focus:outline-none"
            ></textarea>
          </div>
          <!-- Add more shipping fields as needed (e.g., city, country, etc.) -->
          <button
            type="submit"
            class="rounded bg-blue-500 px-4 py-2 text-white"
          >
            Place Order
          </button>
        </form>
      </div>

      <!-- Payment Information Section (Placeholder) -->
      <div>
        <h2 class="mb-4 text-lg font-semibold">Payment Information</h2>
        <!-- Add payment gateway integration or form as needed -->
        <p class="text-sm text-gray-600">
          Payment information section (placeholder)
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const cartItems = ref([
  {
    name: 'Product 1',
    description: 'Lorem ipsum dolor sit amet.',
    image: 'path/to/product1.jpg',
    price: 50,
    quantity: 2,
  },
  {
    name: 'Product 2',
    description: 'Consectetur adipiscing elit.',
    image: 'path/to/product2.jpg',
    price: 30,
    quantity: 1,
  },
  // Add more products as needed
])

const shippingInfo = ref({
  name: '',
  address: '',
  // Add more shipping fields as needed (e.g., city, country, etc.)
})

const calculateTotal = () => {
  return cartItems.value.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )
}

const placeOrder = () => {
  // Implement order placement logic, e.g., send order to server
  console.log('Order placed:', {
    cartItems: cartItems.value,
    shippingInfo: shippingInfo.value,
  })
}
</script>

<style>
/* Add any custom styles specific to this component */
</style>
