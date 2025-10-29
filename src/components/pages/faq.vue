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
              Frequently Asked <span class="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-green-800">Questions</span>
            </h1>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our products, services, and policies.
            </p>
          </div>

          <!-- Search Bar -->
          <div class="max-w-xl mx-auto mb-12">
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
          <div class="flex flex-wrap justify-center gap-4 mb-12">
            <button 
              v-for="category in categories" 
              :key="category.id"
              @click="selectedCategory = category.id"
              :class="[
                'px-6 py-2 rounded-full font-medium transition-all',
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
              class="bg-white rounded-xl shadow-md overflow-hidden"
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
]);

const faqs = ref([
  {
    id: 1,
    question: 'How long does shipping take?',
    answer: 'Standard shipping typically takes 3-5 business days. Express shipping options are available at checkout for 1-2 business day delivery.',
    category: 'orders'
  },
  {
    id: 2,
    question: 'What is your return policy?',
    answer: 'We offer a 30-day return policy for most items. Products must be in original condition with tags attached. Some exclusions apply for personalized items.',
    category: 'returns'
  },
  {
    id: 3,
    question: 'How do I track my order?',
    answer: 'Once your order ships, you\'ll receive a tracking number via email. You can also track your order by logging into your account and viewing your order history.',
    category: 'orders'
  },
  {
    id: 4,
    question: 'Do you offer international shipping?',
    answer: 'Yes, we ship to over 50 countries worldwide. International shipping rates and delivery times vary by destination.',
    category: 'orders'
  },
  {
    id: 5,
    question: 'How can I reset my password?',
    answer: 'Click on "Forgot Password" on the login page and enter your email address. You\'ll receive instructions to reset your password.',
    category: 'account'
  },
  {
    id: 6,
    question: 'Are your products authentic?',
    answer: 'Absolutely! We only sell authentic products directly from manufacturers or authorized distributors.',
    category: 'products'
  },
  {
    id: 7,
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, Apple Pay, Google Pay, and select buy-now-pay-later services.',
    category: 'orders'
  },
  {
    id: 8,
    question: 'How do I cancel an order?',
    answer: 'You can cancel an order within 1 hour of placement by contacting our support team. After that time, we begin processing your order immediately.',
    category: 'orders'
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