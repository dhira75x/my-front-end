<!-- CartPage.vue -->
<template>
  <div class="mx-auto mt-8 max-w-3xl pb-8">
    <h1 class="mb-4 text-3xl font-semibold">Shopping Cart</h1>
    <div v-if="cartItems.length === 0" class="text-gray-600">
      Your cart is empty.
    </div>
    <div v-else>
      <div
        v-for="item in cartItems"
        :key="item.id"
        class="mb-4 rounded border p-4"
      >
        <h2 class="mb-2 text-xl font-semibold">{{ item.name }}</h2>
        <p class="text-gray-600">{{ item.description }}</p>
        <p class="mt-2 text-lg font-bold">{{ item.price }}</p>
        <img :src="item.image" alt="Product" class="mt-2 rounded-lg" />
        <button
          @click="removeFromCart(item)"
          class="mt-2 text-red-500 hover:text-red-600"
        >
          Remove from Cart
        </button>
      </div>
      <div class="mt-4 flex items-center justify-between">
        <button
          @click="emptyCart"
          class="rounded-md bg-lime-800 px-4 py-2 text-white hover:bg-lime-600"
        >
          Empty Cart
        </button>
        <router-link to="/views/checkout">
          <button
            @click="checkout"
            class="rounded-md bg-lime-800 px-4 py-2 text-white hover:bg-lime-600"
          >
            Checkout
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const cartItems = ref([
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
  // Add more cart items as needed
]);

const removeFromCart = (item) => {
  // Add logic to remove the item from the cart
  const index = cartItems.value.findIndex((i) => i.id === item.id);
  if (index !== -1) {
    cartItems.value.splice(index, 1);
  }
};

const emptyCart = () => {
  // Add logic to empty the cart
  cartItems.value = [];
};

const checkout = () => {
  // Add logic to navigate to the checkout page
  console.log("Proceeding to checkout:", cartItems.value);
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
