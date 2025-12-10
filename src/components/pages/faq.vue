<template>
  <app-layout>
    <template v-slot:main-content>
      <div class="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8 animate__animated animate__fadeIn">
        <!-- Decorative elements -->
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-lime-100 opacity-50 blur-3xl blob-1"></div>
          <div class="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-green-100 opacity-50 blur-3xl blob-2"></div>
        </div>
        
        <div class="relative max-w-4xl mx-auto">
          <!-- Header -->
          <div class="text-center mb-16 animate__animated animate__fadeInDown">
            <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Frequently Asked <span class="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-green-800">Questions</span>
            </h1>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our products, services, and policies.
            </p>
          </div>

          <!-- Search Bar -->
          <div class="max-w-xl mx-auto mb-12 animate__animated animate__fadeIn">
            <div class="relative">
              <input 
                type="text" 
                v-model="searchQuery"
                placeholder="Search for answers..."
                class="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
              >
              <svg class="absolute left-4 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>

          <!-- FAQ Categories -->
          <div class="flex flex-wrap justify-center gap-4 mb-12 animate__animated animate__fadeInUp">
            <button 
              v-for="category in categories" 
              :key="category.id"
              @click="selectedCategory = category.id"
              :class="[
                'px-6 py-2 rounded-full font-medium transition-all transition-transform duration-200 hover:scale-105 focus:ring-2 focus:ring-lime-500',
                selectedCategory === category.id 
                  ? 'bg-gradient-to-r from-lime-600 to-green-700 text-white shadow-lg' 
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
              ]"
            >
              {{ category.name }}
            </button>
          </div>

          <!-- FAQ Items -->
          <div class="space-y-4 mb-16">
            <div 
              v-for="faq in filteredFaqs" 
              :key="faq.id"
              class="bg-white rounded-xl shadow-md overflow-hidden animate__animated animate__fadeInUp"
            >
              <button 
                @click="toggleFaq(faq.id)"
                class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 class="text-lg font-medium text-gray-900">{{ faq.question }}</h3>
                <svg 
                  :class="[
                    'w-5 h-5 text-lime-600 transform transition-transform',
                    openFaqId === faq.id ? 'rotate-180' : ''
                  ]"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div 
                v-show="openFaqId === faq.id"
                class="px-6 py-4 border-t border-gray-100 text-gray-600"
                :class="openFaqId === faq.id ? 'animate__animated animate__fadeIn' : ''"
              >
                <p>{{ faq.answer }}</p>
              </div>
            </div>
          </div>

          <!-- Still Have Questions -->
          <div class="bg-gradient-to-r from-lime-600 to-green-800 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 class="text-2xl md:text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p class="text-lime-100 mb-6 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our support team is ready to help.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <router-link 
                to="/contact"
                class="bg-white text-lime-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all text-center"
              >
                Contact Support
              </router-link>
              <a 
                href="mailto:support@ovomarket.com" 
                class="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-lime-700 transition-all text-center"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </template>
  </app-layout>
</template>

<script setup>
import { ref, computed } from 'vue';
import AppLayout from '@/layouts/applayout.vue';

const searchQuery = ref('');
const selectedCategory = ref('all');
const openFaqId = ref(null);

const categories = ref([
  { id: 'all', name: 'All Topics' },
  { id: 'orders', name: 'Orders & Shipping' },
  { id: 'returns', name: 'Returns & Refunds' },
  { id: 'products', name: 'Products' },
  { id: 'account', name: 'Account' },
  { id: 'payment', name: 'Payments' },
]);

const faqs = ref([
  {
    id: 1,
    question: 'What is Ovo Market?',
    answer: 'Ovo Market is a marketplace platform that connects consumers with local vendors. You browse products and services via our website/app, choose a vendor, pay, and receive delivery or service from that vendor..',
    category: 'orders'
  },
  {
    id: 2,
    question: 'How do I place an order?',
    answer: 'You select the item, confirm the vendor, proceed to checkout, choose payment method, then wait for confirmation and delivery',
    category: 'orders'
  },
  {
    id: 3,
    question: 'How long does shipping take?',
    answer: 'Standard shipping typically takes 3-5 business days. Express shipping options are available at checkout for 1-2 business day delivery.',
    category: 'orders'
  },
  {
    id: 4,
    question: 'What is your return policy?',
    answer: 'We offer a 7-days return policy for most items. Products must unused, in original condition and packaging, unless the product is defective or the vendor failed to meet the required purpose.',
    category: 'returns'
  },
  {
    id: 5,
    question: 'How do I track my order?',
    answer: 'After payment and confirmation, you will receive an order status update via email/SMS/app. You may also log into your account to monitor status and estimated delivery time.',
    category: 'orders'
  },
  {
    id: 6,
    question: 'What if the vendor fails to deliver on time?',
    answer: 'If the agreed delivery time is not met and no acceptable explanation is offered, you may contact our customer support. We will assess whether a refund, vendor replacement or other remedy is applicable.',
    category: 'orders'
  },
  {
    id: 7,
    question: 'How can I reset my password?',
    answer: 'Click on "Forgot Password" on the login page and enter your email address. You\'ll receive instructions to reset your password.',
    category: 'account'
  },
  {
    id: 8,
    question: 'What if the product is defective or not as described?',
    answer: 'If the product is defective, damaged, or fails to perform for the stated purpose, you may request a return or refund. The vendor or Ovo Market will assess and decide accordingly.',
    category: 'products'
  },
  {
    id: 9,
    question: 'What payment methods do you accept?',
    answer: 'We accept [list accepted methods: e.g., bank transfers, card payments, mobile payments]. Payment must clear before order fulfillment begins.',
    category: 'payment'
  },
  {
    id: 10,
    question: 'How do I cancel an order?',
    answer: 'You can cancel an order within 1 hour of placement by contacting our support team. After that time, we begin processing your order immediately.',
    category: 'orders'
  },
  {
    id: 11,
    question: 'Are vendors individually responsible for their listings?',
    answer: 'Yes. Each vendor is responsible for accuracy of their product/service description, pricing, availability, and fulfilment. Ovo Market acts as a facilitator of the marketplace.',
    category: 'products'
  }
]);

const filteredFaqs = computed(() => {
  let result = faqs.value;
  
  // Filter by category
  if (selectedCategory.value !== 'all') {
    result = result.filter(faq => faq.category === selectedCategory.value);
  }
  
  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(faq => 
      faq.question.toLowerCase().includes(query) || 
      faq.answer.toLowerCase().includes(query)
    );
  }
  
  return result;
});

const toggleFaq = (id) => {
  if (openFaqId.value === id) {
    openFaqId.value = null;
  } else {
    openFaqId.value = id;
  }
};
</script>

<style scoped>
.blob-1 {
  animation: floatBlob1 12s ease-in-out infinite;
}
.blob-2 {
  animation: floatBlob2 14s ease-in-out infinite;
}
@keyframes floatBlob1 {
  0% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(8px, -6px) scale(1.03); }
  50% { transform: translate(0, 0) scale(1.06); }
  75% { transform: translate(-8px, 6px) scale(1.03); }
  100% { transform: translate(0, 0) scale(1); }
}
@keyframes floatBlob2 {
  0% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(-6px, 8px) scale(1.02); }
  50% { transform: translate(0, 0) scale(1.04); }
  75% { transform: translate(6px, -8px) scale(1.02); }
  100% { transform: translate(0, 0) scale(1); }
}
</style>