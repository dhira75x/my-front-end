<template>
  <app-layout>
    <template v-slot:main-content>
      <div class="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <!-- Decorative elements -->
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-lime-100 opacity-50 blur-3xl"></div>
          <div class="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-green-100 opacity-50 blur-3xl"></div>
        </div>
        
        <div class="relative max-w-4xl mx-auto">
          <!-- Header -->
          <div class="text-center mb-16">
            <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Return <span class="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-green-800">Policy</span>
            </h1>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Our hassle-free return policy ensures you can shop with confidence.
            </p>
          </div>

          <!-- Policy Summary Card -->
          <div class="bg-gradient-to-r from-lime-600 to-green-800 rounded-2xl p-8 text-white mb-12">
            <div class="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h2 class="text-2xl font-bold mb-2">30-Day Return Window</h2>
                <p class="text-lime-100">Return most items within 30 days of delivery</p>
              </div>
              <div class="mt-4 md:mt-0">
                <div class="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 text-center">
                  <p class="text-sm">Free Return Shipping</p>
                  <p class="text-xs">On eligible items</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Policy Sections -->
          <div class="space-y-8 mb-16">
            <!-- Eligibility -->
            <div class="bg-white rounded-xl shadow-md p-6 md:p-8">
              <div class="flex items-start mb-4">
                <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-lime-100 flex items-center justify-center">
                  <svg class="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h2 class="ml-4 text-xl font-bold text-gray-900">Return Eligibility</h2>
              </div>
              <ul class="space-y-3 text-gray-600 ml-14">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Items must be in original condition with tags attached</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Original packaging must be included when possible</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Receipt or proof of purchase required</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                  </svg>
                  <span>Personalized items cannot be returned</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                  </svg>
                  <span>Perishable items are non-returnable</span>
                </li>
              </ul>
            </div>

            <!-- Return Process -->
            <div class="bg-white rounded-xl shadow-md p-6 md:p-8">
              <div class="flex items-start mb-4">
                <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-lime-100 flex items-center justify-center">
                  <svg class="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                  </svg>
                </div>
                <h2 class="ml-4 text-xl font-bold text-gray-900">Return Process</h2>
              </div>
              <div class="space-y-4 ml-14">
                <div class="flex">
                  <div class="flex-shrink-0 w-8 h-8 rounded-full bg-lime-100 flex items-center justify-center text-lime-700 font-bold mr-4">1</div>
                  <div>
                    <h3 class="font-medium text-gray-900">Initiate Return</h3>
                    <p class="text-gray-600">Log into your account and go to "Order History" to select the item you wish to return.</p>
                  </div>
                </div>
                <div class="flex">
                  <div class="flex-shrink-0 w-8 h-8 rounded-full bg-lime-100 flex items-center justify-center text-lime-700 font-bold mr-4">2</div>
                  <div>
                    <h3 class="font-medium text-gray-900">Print Return Label</h3>
                    <p class="text-gray-600">We'll provide a prepaid return shipping label. Print it and attach to your package.</p>
                  </div>
                </div>
                <div class="flex">
                  <div class="flex-shrink-0 w-8 h-8 rounded-full bg-lime-100 flex items-center justify-center text-lime-700 font-bold mr-4">3</div>
                  <div>
                    <h3 class="font-medium text-gray-900">Ship the Item</h3>
                    <p class="text-gray-600">Drop off the package at any authorized shipping location.</p>
                  </div>
                </div>
                <div class="flex">
                  <div class="flex-shrink-0 w-8 h-8 rounded-full bg-lime-100 flex items-center justify-center text-lime-700 font-bold mr-4">4</div>
                  <div>
                    <h3 class="font-medium text-gray-900">Receive Refund</h3>
                    <p class="text-gray-600">Once we receive and inspect the item, your refund will be processed within 5-7 business days.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Refund Options -->
            <div class="bg-white rounded-xl shadow-md p-6 md:p-8">
              <div class="flex items-start mb-4">
                <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-lime-100 flex items-center justify-center">
                  <svg class="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h2 class="ml-4 text-xl font-bold text-gray-900">Refund Options</h2>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 ml-14">
                <div class="border border-gray-200 rounded-lg p-4">
                  <h3 class="font-medium text-gray-900 mb-2">Original Payment Method</h3>
                  <p class="text-gray-600 text-sm">Refund to your original payment method (credit card, PayPal, etc.). This is our standard option.</p>
                </div>
                <div class="border border-gray-200 rounded-lg p-4">
                  <h3 class="font-medium text-gray-900 mb-2">Store Credit</h3>
                  <p class="text-gray-600 text-sm">Receive store credit for your return amount, plus an additional 10% bonus credit.</p>
                </div>
              </div>
            </div>

            <!-- Exceptions -->
            <div class="bg-white rounded-xl shadow-md p-6 md:p-8">
              <div class="flex items-start mb-4">
                <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-lime-100 flex items-center justify-center">
                  <svg class="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                  </svg>
                </div>
                <h2 class="ml-4 text-xl font-bold text-gray-900">Exceptions</h2>
              </div>
              <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4 ml-14">
                <h3 class="font-medium text-yellow-800 mb-2">Non-Returnable Items</h3>
                <ul class="text-yellow-700 text-sm space-y-1">
                  <li>• Personalized or custom-made items</li>
                  <li>• Perishable goods (food, flowers, plants)</li>
                  <li>• Digital downloads or software</li>
                  <li>• Items marked as "Final Sale"</li>
                  <li>• Gift cards</li>
                  <li>• Underwear and swimwear for hygiene reasons</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Contact Support -->
          <div class="bg-white rounded-xl shadow-md p-8 text-center">
            <h2 class="text-xl font-bold text-gray-900 mb-2">Need Help With a Return?</h2>
            <p class="text-gray-600 mb-6">Our customer service team is here to assist you with any questions about your return.</p>
            <router-link 
              to="/contact"
              class="inline-block bg-gradient-to-r from-lime-600 to-green-700 text-white px-6 py-3 rounded-lg font-medium hover:from-lime-700 hover:to-green-800 transition-all"
            >
              Contact Support
            </router-link>
          </div>
        </div>
      </div>
    </template>
  </app-layout>
</template>

<script setup>
import AppLayout from '@/layouts/applayout.vue';
</script>