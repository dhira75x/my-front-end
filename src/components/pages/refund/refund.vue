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
              Request a <span class="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-green-800">Refund</span>
            </h1>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              We're sorry to hear you're not satisfied. Let us help you process your refund quickly and easily.
            </p>
          </div>

          <!-- Order Lookup Form -->
          <div v-if="!orderData" class="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <form @submit.prevent="lookupOrder" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="orderId" class="block text-sm font-medium text-gray-700 mb-1">
                    Order ID
                  </label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="orderId"
                      v-model="lookupForm.orderId"
                      class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-all"
                      placeholder="e.g. OVO-12345"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      id="email"
                      v-model="lookupForm.email"
                      class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-all"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                :disabled="isLookingUp"
                class="w-full bg-gradient-to-r from-lime-600 to-green-700 text-white py-3 px-4 rounded-lg font-medium hover:from-lime-700 hover:to-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500 disabled:opacity-70 transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
              >
                <span v-if="isLookingUp" class="flex items-center justify-center">
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Looking up...
                </span>
                <span v-else>Find My Order</span>
              </button>
            </form>

            <!-- Error Message -->
            <div v-if="lookupError" class="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p class="text-red-800 flex items-center">
                <svg class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
                {{ lookupError }}
              </p>
            </div>
          </div>

          <!-- Refund Request Form -->
          <div v-if="orderData" class="bg-white rounded-2xl shadow-xl overflow-hidden">
            <!-- Order Header -->
            <div class="bg-gradient-to-r from-lime-600 to-green-800 p-6 text-white">
              <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 class="text-2xl font-bold mb-1">Order #{{ orderData.orderId }}</h2>
                  <p class="text-lime-100">Placed on {{ formatDate(orderData.orderDate) }}</p>
                </div>
                <div class="mt-4 md:mt-0">
                  <span class="px-4 py-2 rounded-full text-sm font-bold bg-white/20">
                    {{ orderData.status }}
                  </span>
                </div>
              </div>
            </div>

            <div class="p-6 md:p-8">
              <!-- Order Items -->
              <div class="mb-10">
                <h3 class="text-xl font-bold text-gray-900 mb-6">Select Items for Refund</h3>
                <div class="space-y-4">
                  <div 
                    v-for="item in orderData.items" 
                    :key="item.id"
                    class="flex items-center p-4 border border-gray-200 rounded-lg"
                  >
                    <input
                      type="checkbox"
                      :id="`item-${item.id}`"
                      v-model="selectedItems"
                      :value="item.id"
                      class="h-5 w-5 text-lime-600 rounded focus:ring-lime-500"
                    />
                    <img :src="item.image" :alt="item.name" class="w-16 h-16 rounded-lg object-cover mx-4">
                    <div class="flex-grow">
                      <h4 class="font-medium text-gray-900">{{ item.name }}</h4>
                      <p class="text-sm text-gray-600">Qty: {{ item.quantity}}</p>
                    </div>
                    <div class="text-right">
                      <p class="font-medium text-gray-900">${{ (item.price * item.quantity).toFixed(2) }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Refund Reason -->
              <div class="mb-10">
                <h3 class="text-xl font-bold text-gray-900 mb-6">Reason for Refund</h3>
                <div class="space-y-4">
                  <div 
                    v-for="reason in refundReasons" 
                    :key="reason.id"
                    class="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                    @click="selectedReason = reason.id"
                  >
                    <input
                      type="radio"
                      :id="`reason-${reason.id}`"
                      v-model="selectedReason"
                      :value="reason.id"
                      class="h-5 w-5 text-lime-600 focus:ring-lime-500"
                    />
                    <label :for="`reason-${reason.id}`" class="ml-3 flex-grow cursor-pointer">
                      <div class="font-medium text-gray-900">{{ reason.title }}</div>
                      <div class="text-sm text-gray-600">{{ reason.description }}</div>
                    </label>
                  </div>
                </div>
              </div>

              <!-- Additional Details -->
              <div class="mb-10">
                <label for="details" class="block text-sm font-medium text-gray-700 mb-1">
                  Additional Details (Optional)
                </label>
                <textarea
                  id="details"
                  v-model="refundDetails"
                  rows="4"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-all"
                  placeholder="Please provide any additional information that might help us process your refund..."
                ></textarea>
              </div>

              <!-- Refund Method -->
              <div class="mb-10">
                <h3 class="text-xl font-bold text-gray-900 mb-6">Refund Method</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div 
                    class="border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50"
                    :class="{ 'ring-2 ring-lime-500': refundMethod === 'original' }"
                    @click="refundMethod = 'original'"
                  >
                    <div class="flex items-center">
                      <input
                        type="radio"
                        id="method-original"
                        v-model="refundMethod"
                        value="original"
                        class="h-5 w-5 text-lime-600 focus:ring-lime-500"
                      />
                      <label for="method-original" class="ml-3 cursor-pointer">
                        <div class="font-medium text-gray-900">Original Payment Method</div>
                        <div class="text-sm text-gray-600">Refund to your original payment method</div>
                      </label>
                    </div>
                  </div>
                  <div 
                    class="border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50"
                    :class="{ 'ring-2 ring-lime-500': refundMethod === 'store_credit' }"
                    @click="refundMethod = 'store_credit'"
                  >
                    <div class="flex items-center">
                      <input
                        type="radio"
                        id="method-store-credit"
                        v-model="refundMethod"
                        value="store_credit"
                        class="h-5 w-5 text-lime-600 focus:ring-lime-500"
                      />
                      <label for="method-store-credit" class="ml-3 cursor-pointer">
                        <div class="font-medium text-gray-900">Store Credit</div>
                        <div class="text-sm text-gray-600">Receive store credit + 10% bonus</div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Refund Summary -->
              <div class="bg-gray-50 rounded-lg p-6 mb-10">
                <h3 class="text-lg font-bold text-gray-900 mb-4">Refund Summary</h3>
                <div class="space-y-2">
                  <div class="flex justify-between text-gray-600">
                    <span>Items Subtotal</span>
                    <span>${{ refundSubtotal.toFixed(2) }}</span>
                  </div>
                  <div class="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>${{ orderData.shipping.toFixed(2) }}</span>
                  </div>
                  <div class="flex justify-between text-gray-600">
                    <span>Tax</span>
                    <span>${{ refundTax.toFixed(2) }}</span>
                  </div>
                  <div v-if="refundMethod === 'store_credit'" class="flex justify-between text-green-600">
                    <span>Store Credit Bonus (10%)</span>
                    <span>+${{ (refundSubtotal * 0.1).toFixed(2) }}</span>
                  </div>
                  <div class="flex justify-between font-bold text-gray-900 pt-2 border-t border-gray-200">
                    <span>Total Refund</span>
                    <span>${{ totalRefund.toFixed(2) }}</span>
                  </div>
                </div>
              </div>

              <!-- Submit Button -->
              <button
                @click="submitRefund"
                :disabled="!isRefundFormValid || isSubmitting"
                :class="[
                  'w-full py-3 px-4 rounded-lg font-medium transition-all',
                  isRefundFormValid && !isSubmitting
                    ? 'bg-gradient-to-r from-lime-600 to-green-700 text-white hover:from-lime-700 hover:to-green-800 shadow-md hover:shadow-lg transform hover:-translate-y-0.5' 
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                ]"
              >
                <span v-if="isSubmitting" class="flex items-center justify-center">
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
                <span v-else>Submit Refund Request</span>
              </button>
            </div>
          </div>

          <!-- Refund Policy Section -->
          <div class="mt-16 bg-white rounded-2xl shadow-xl p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Refund Policy</h2>
            <div class="space-y-6">
              <div>
                <h3 class="text-lg font-bold text-gray-900 mb-2">Eligibility</h3>
                <p class="text-gray-600">
                  You may request a refund within 30 days of delivery. Items must be in original condition with tags attached. 
                  Some exclusions apply for personalized items, perishable goods, and digital downloads.
                </p>
              </div>
              
              <div>
                <h3 class="text-lg font-bold text-gray-900 mb-2">Process</h3>
                <ol class="list-decimal list-inside space-y-2 text-gray-600">
                  <li>Submit your refund request using the form above</li>
                  <li>We'll review your request within 1-2 business days</li>
                  <li>If approved, we'll provide instructions for returning the items</li>
                  <li>Once we receive and inspect the returned items, your refund will be processed</li>
                  <li>Refunds typically appear in your account within 5-7 business days</li>
                </ol>
              </div>
              
              <div>
                <h3 class="text-lg font-bold text-gray-900 mb-2">Return Shipping</h3>
                <p class="text-gray-600">
                  We provide prepaid return shipping labels for eligible items. For items being returned due to our error 
                  (wrong item, defective product), return shipping is free. For other returns, a small shipping fee may apply.
                </p>
              </div>
              
              <div>
                <h3 class="text-lg font-bold text-gray-900 mb-2">Questions?</h3>
                <p class="text-gray-600">
                  If you have any questions about our refund policy or process, please contact our support team. 
                  We're here to help make your return experience as smooth as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </app-layout>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
import AppLayout from '@/layouts/applayout.vue';
import { useToast } from 'vue-toastification';

const toast = useToast();

// Form data
const lookupForm = reactive({
  orderId: '',
  email: ''
});

const isLookingUp = ref(false);
const lookupError = ref('');
const orderData = ref(null);

// Refund form data
const selectedItems = ref([]);
const selectedReason = ref('');
const refundDetails = ref('');
const refundMethod = ref('original');
const isSubmitting = ref(false);

// Refund reasons
const refundReasons = ref([
  {
    id: 'damaged',
    title: 'Item arrived damaged or defective',
    description: 'The product was broken or not working when received'
  },
  {
    id: 'wrong',
    title: 'Wrong item received',
    description: 'I received a different item than what I ordered'
  },
  {
    id: 'not_as_described',
    title: 'Not as described',
    description: 'The product doesn\'t match the description or images'
  },
  {
    id: 'changed_mind',
    title: 'Changed my mind',
    description: 'I no longer want or need this item'
  },
  {
    id: 'other',
    title: 'Other reason',
    description: 'Please provide details in the comments section'
  }
]);

// Computed properties
const isRefundFormValid = computed(() => {
  return selectedItems.value.length > 0 && selectedReason.value && refundMethod.value;
});

const refundSubtotal = computed(() => {
  if (!orderData.value) return 0;
  return orderData.value.items
    .filter(item => selectedItems.value.includes(item.id))
    .reduce((sum, item) => sum + (item.price * item.quantity), 0);
});

const refundTax = computed(() => {
  if (!orderData.value) return 0;
  const taxRate = orderData.value.tax / orderData.value.subtotal;
  return refundSubtotal.value * taxRate;
});

const totalRefund = computed(() => {
  let total = refundSubtotal.value + refundTax.value;
  if (refundMethod.value === 'store_credit') {
    total += refundSubtotal.value * 0.1; // 10% bonus
  }
  return total;
});

// Methods
const lookupOrder = async () => {
  isLookingUp.value = true;
  lookupError.value = '';
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Mock data - in a real app, this would come from an API
  if (lookupForm.orderId === 'OVO-12345' && lookupForm.email === 'customer@example.com') {
    orderData.value = {
      orderId: 'OVO-12345',
      orderDate: new Date('2023-06-15'),
      status: 'Delivered',
      subtotal: 159.97,
      shipping: 9.99,
      tax: 13.60,
      items: [
        {
          id: 1,
          name: 'Wireless Bluetooth Headphones',
          quantity: 1,
          price: 79.99,
          image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        },
        {
          id: 2,
          name: 'Smart Home Security Camera',
          quantity: 1,
          price: 79.98,
          image: 'https://images.unsplash.com/photo-1558002038-1055e2d9d3d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        }
      ]
    };
  } else {
    lookupError.value = 'Order not found. Please check your Order ID and email address.';
  }
  
  isLookingUp.value = false;
};

const submitRefund = async () => {
  if (!isRefundFormValid.value) return;
  
  isSubmitting.value = true;
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // In a real app, this would submit to your backend
  console.log('Refund request submitted:', {
    orderId: orderData.value.orderId,
    items: selectedItems.value,
    reason: selectedReason.value,
    details: refundDetails.value,
    method: refundMethod.value,
    amount: totalRefund.value
  });
  
  toast.success('Your refund request has been submitted successfully!');
  
  // Reset form
  selectedItems.value = [];
  selectedReason.value = '';
  refundDetails.value = '';
  refundMethod.value = 'original';
  orderData.value = null;
  
  isSubmitting.value = false;
};

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
</script>