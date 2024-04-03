<script setup>
import { useCartStore } from "@/stores/cartStore";

const cartStore = useCartStore();

const subtotal = computed(() => {
  return cartStore.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
});

const shippingTaxRate = 0.1;
const shippingTax = computed(() => {
  return subtotal.value * shippingTaxRate;
});

const total = computed(() => {
  return subtotal.value + shippingTax.value;
});
</script>
<template>
  <div class="container mx-auto p-12">
    <div class="mx-auto flex w-full flex-col px-0 md:flex-row">
      <div class="flex flex-col md:w-full">
        <h2 class="text-heading mb-4 font-bold text-lime-900 md:text-xl">
          Shipping Address
        </h2>
        <form class="mx-auto w-full justify-center" method="post">
          <div class="">
            <div class="space-x-0 lg:flex lg:space-x-4">
              <div class="w-full lg:w-1/2">
                <label
                  for="firstName"
                  class="mb-3 block text-sm font-semibold text-lime-700"
                  >First Name</label
                >
                <input
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  class="w-full rounded border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 lg:text-sm"
                />
              </div>
              <div class="w-full lg:w-1/2">
                <label
                  for="firstName"
                  class="mb-3 block text-sm font-semibold text-lime-700"
                  >Last Name</label
                >
                <input
                  name="Last Name"
                  type="text"
                  placeholder="Last Name"
                  class="w-full rounded border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 lg:text-sm"
                />
              </div>
            </div>
            <div class="mt-4">
              <div class="w-full">
                <label for="Email" class="mb-3 block text-sm font-semibold text-lime-700"
                  >Email</label
                >
                <input
                  name="Last Name"
                  type="text"
                  placeholder="Email"
                  class="w-full rounded border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 lg:text-sm"
                />
              </div>
            </div>
            <div class="mt-4">
              <div class="w-full">
                <label
                  for="Address"
                  class="mb-3 block text-sm font-semibold text-lime-700"
                  >Address</label
                >
                <textarea
                  class="w-full rounded border border-gray-300 px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-blue-600 lg:text-sm"
                  name="Address"
                  cols="20"
                  rows="4"
                  placeholder="Address"
                ></textarea>
              </div>
            </div>
            <div class="space-x-0 lg:flex lg:space-x-4">
              <div class="w-full lg:w-1/2">
                <label for="city" class="mb-3 block text-sm font-semibold text-lime-700"
                  >City</label
                >
                <input
                  name="city"
                  type="text"
                  placeholder="City"
                  class="w-full rounded border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 lg:text-sm"
                />
              </div>
              <div class="w-full lg:w-1/2">
                <label
                  for="postcode"
                  class="mb-3 block text-sm font-semibold text-lime-700"
                >
                  Postcode</label
                >
                <input
                  name="postcode"
                  type="text"
                  placeholder="Post Code"
                  class="w-full rounded border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 lg:text-sm"
                />
              </div>
            </div>
            <div class="mt-4 flex items-center">
              <label class="text-heading group flex items-center text-sm">
                <input
                  type="checkbox"
                  class="h-5 w-5 rounded border border-gray-300 text-lime-600 focus:outline-none focus:ring-1"
                />
                <span class="ml-2">Save this information for next time</span></label
              >
            </div>
            <div class="relative pt-3 xl:pt-6">
              <label for="note" class="mb-3 block text-sm font-semibold text-lime-600">
                Notes (Optional)</label
              ><textarea
                name="note"
                class="flex w-full items-center rounded border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                rows="4"
                placeholder="Notes for delivery"
              ></textarea>
            </div>

            <div class="mt-4">
              <router-link :to="{ name: 'transaction' }">
                <button class="w-full bg-lime-800 px-6 py-2 text-white hover:bg-lime-500">
                  Process
                </button>
              </router-link>
            </div>
          </div>
        </form>
      </div>
      <div class="ml-0 flex w-full flex-col lg:ml-12 lg:w-2/5">
        <div class="pt-12 md:pt-0 2xl:ps-4">
          <h2 class="text-xl font-bold text-lime-800">Order Summary</h2>
          <div class="mt-8">
            <div
              v-for="(item, index) in cartStore.cartItems"
              :key="index"
              class="flex space-x-4"
            >
              <div>
                <img :src="item.image" alt="image" class="w-60" />
              </div>
              <div>
                <h2 class="text-xl font-bold text-lime-800">
                  {{ item.title }}
                </h2>
                <p class="text-sm text-lime-800">{{ item.description }}</p>
                <span class="text-red-600">Price</span> ₦{{ item.price }}
              </div>
              <div class="cursor-pointer">
                <!-- You can also add a method to remove an item from the cart -->
                <svg
                  @click="removeItem(index)"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="mt-4 flex p-4">
            <h2 class="text-xl font-bold text-lime-800">
              ITEMS {{ cartStore.cartItems.length }}
            </h2>
          </div>
          <div class="subtotal">Subtotal: ₦{{ subtotal.toFixed(2) }}</div>
          <div class="shipping-tax">Shipping Tax: ₦{{ shippingTax.toFixed(2) }}</div>
          <div class="total">Total: ₦{{ total.toFixed(2) }}</div>

          <!-- <div
            class="text-heading flex w-full items-center border-b border-gray-300 py-4 text-sm font-semibold text-lime-700 last:border-b-0 last:pb-0 last:text-base lg:px-3 lg:py-5"
          >
            Subtotal<span class="ml-2">$40.00</span>
          </div>
          <div
            class="text-heading flex w-full items-center border-b border-gray-300 py-4 text-sm font-semibold text-lime-700 last:border-b-0 last:pb-0 last:text-base lg:px-3 lg:py-5"
          >
            Shipping Tax<span class="ml-2">$10</span>
          </div>
          <div
            class="text-heading flex w-full items-center border-b border-gray-300 py-4 text-sm font-semibold text-lime-700 last:border-b-0 last:pb-0 last:text-base lg:px-3 lg:py-5"
          >
            Total<span class="ml-2">$50.00</span>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
