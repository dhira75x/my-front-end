<template>
  <app-layout>
    <template v-slot:main-content>
      <section class="animate__animated animate__fadeIn">
        <div class="brand-gradient text-white py-16">
          <div class="container px-4 mx-auto text-center">
            <h1 class="text-4xl md:text-5xl font-extrabold mb-4">Help Center</h1>
            <p class="text-lg opacity-90 max-w-2xl mx-auto">Find answers or get in touch with our support team</p>
          </div>
        </div>
        <div class="bg-white -mt-8 rounded-t-3xl">
          <div class="container px-4 mx-auto py-8">
            <div class="max-w-2xl mx-auto">
              <div class="relative">
                <input v-model="searchQuery" @input="search" type="text" placeholder="What can we help you with today?" class="w-full rounded-xl border border-gray-200 px-5 py-4 shadow-sm focus:ring-2 focus:ring-deepsaffron focus:border-deepsaffron" />
                <button class="absolute right-2 top-2 rounded-lg bg-deepsaffron text-white p-3">
                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.875 17.25C13.2242 17.25 16.75 13.7242 16.75 9.375C16.75 5.02576 13.2242 1.5 8.875 1.5C4.52576 1.5 1 5.02576 1 9.375C1 13.7242 4.52576 17.25 8.875 17.25Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14.4434 14.9453L18.9996 19.5016" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>
              <div class="flex items-center justify-center gap-2 mt-4 flex-wrap">
                <span class="text-gray-500 text-sm">Popular topics:</span>
                <button class="px-3 py-1 rounded-full bg-deepsaffron/10 text-deepsaffron text-sm">Delivery</button>
                <button class="px-3 py-1 rounded-full bg-deepsaffron/10 text-deepsaffron text-sm">Returns</button>
                <button class="px-3 py-1 rounded-full bg-deepsaffron/10 text-deepsaffron text-sm">Payment</button>
                <button class="px-3 py-1 rounded-full bg-deepsaffron/10 text-deepsaffron text-sm">Account</button>
              </div>
            </div>

            <div class="mt-12">
              <h2 class="text-2xl font-bold text-center text-gray-900 mb-8">Browse Help Categories</h2>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="rounded-2xl p-6 bg-gradient-to-br from-lime-50 to-lime-100 border-l-4 border-lime-500 shadow-sm">
                  <div class="text-4xl mb-2">📦</div>
                  <div class="font-semibold text-gray-800">Delivery Service</div>
                  <div class="text-sm text-gray-600">Track orders, delivery times, shipping options</div>
                </div>
                <div class="rounded-2xl p-6 bg-gradient-to-br from-rose-50 to-rose-100 border-l-4 border-rose-500 shadow-sm">
                  <div class="text-4xl mb-2">↩️</div>
                  <div class="font-semibold text-gray-800">Returns</div>
                  <div class="text-sm text-gray-600">Return policy and process</div>
                </div>
                <div class="rounded-2xl p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 border-l-4 border-emerald-500 shadow-sm">
                  <div class="text-4xl mb-2">📋</div>
                  <div class="font-semibold text-gray-800">Orders & Cancellations</div>
                  <div class="text-sm text-gray-600">Manage orders and cancellations</div>
                </div>
                <div class="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 border-l-4 border-indigo-500 shadow-sm">
                  <div class="text-4xl mb-2">💰</div>
                  <div class="font-semibold text-gray-800">Collection Refunds</div>
                  <div class="text-sm text-gray-600">Refunds and collection points</div>
                </div>
                <div class="rounded-2xl p-6 bg-gradient-to-br from-amber-50 to-amber-100 border-l-4 border-amber-500 shadow-sm">
                  <div class="text-4xl mb-2">💳</div>
                  <div class="font-semibold text-gray-800">Promo & Payments</div>
                  <div class="text-sm text-gray-600">Payment methods, promotions, billing</div>
                </div>
                <div class="rounded-2xl p-6 bg-gradient-to-br from-lime-50 to-lime-100 border-l-4 border-lime-600 shadow-sm">
                  <div class="text-4xl mb-2">🎟️</div>
                  <div class="font-semibold text-gray-800">Vouchers & Coupon</div>
                  <div class="text-sm text-gray-600">Using and managing discount codes</div>
                </div>
                <div class="rounded-2xl p-6 bg-gradient-to-br from-sky-50 to-sky-100 border-l-4 border-sky-500 shadow-sm">
                  <div class="text-4xl mb-2">🛒</div>
                  <div class="font-semibold text-gray-800">Product & Stock</div>
                  <div class="text-sm text-gray-600">Availability, sizes, information</div>
                </div>
                <div class="rounded-2xl p-6 bg-gradient-to-br from-pink-50 to-pink-100 border-l-4 border-pink-500 shadow-sm">
                  <div class="text-4xl mb-2">🔒</div>
                  <div class="font-semibold text-gray-800">Data & Privacy</div>
                  <div class="text-sm text-gray-600">Protecting your data and privacy</div>
                </div>
              </div>
            </div>

            <div class="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div class="bg-white rounded-2xl p-8 shadow-md text-center">
                <div class="text-4xl mb-3">💬</div>
                <div class="text-xl font-bold text-gray-900 mb-2">Still need help?</div>
                <div class="text-gray-600 mb-6">Our support team is ready to assist you</div>
                <router-link to="/contact" class="brand-button-primary px-6 py-3 rounded-lg font-semibold inline-block">Contact Support</router-link>
              </div>
              <div class="bg-white rounded-2xl p-8 shadow-md text-center">
                <div class="text-4xl mb-3">❓</div>
                <div class="text-xl font-bold text-gray-900 mb-2">Frequently Asked Questions</div>
                <div class="text-gray-600 mb-6">Find quick answers to common questions</div>
                <router-link to="/faqs" class="brand-button-secondary px-6 py-3 rounded-lg font-semibold inline-block">View FAQs</router-link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </template>
  </app-layout>
</template>

<script setup>
import { ref } from "vue";
import AppLayout from '@/layouts/applayout.vue';

const searchQuery = ref("");

const search = () => {
  console.log(`Search query: ${searchQuery.value}`);
};
</script>

<style scoped>
</style>
