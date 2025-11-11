<!-- OrderDetails.vue -->
<template>
  <div class="min-h-screen py-8 bg-gray-50">
    <div class="container px-4 mx-auto">
      <div class="max-w-3xl mx-auto">
        <!-- Page Header -->
        <div class="mb-8">
          <h1 class="text-2xl font-bold text-gray-800">Order Details</h1>
          <p class="text-gray-600">View and manage your order information</p>
        </div>

        <!-- Order Summary Card -->
        <div class="p-6 mb-8 bg-white rounded-lg shadow-md">
          <div class="flex flex-col justify-between md:flex-row md:items-center">
            <div>
              <h2 class="text-lg font-semibold text-gray-800">Order #{{ orderNumber }}</h2>
              <p class="text-gray-600">Placed on {{ formatDate(orderDate) }}</p>
            </div>
            <div class="mt-4 md:mt-0">
              <span :class="statusClass" class="px-3 py-1 text-sm font-medium rounded-full">
                {{ orderStatus }}
              </span>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
          <!-- Order Items -->
          <div class="p-6 bg-white rounded-lg shadow-md">
            <h2 class="mb-4 text-lg font-semibold text-gray-800">Order Items</h2>
            
            <div class="space-y-4">
              <div v-for="item in orderItems" :key="item.id" class="flex">
                <div class="flex-shrink-0 w-16 h-16 overflow-hidden bg-gray-200 rounded-md">
                  <img :src="item.image" alt="" class="object-cover w-full h-full">
                </div>
                <div class="flex-1 ml-4">
                  <h3 class="text-sm font-medium text-gray-800">{{ item.name }}</h3>
                  <p class="text-sm text-gray-500">Qty: {{ item.quantity }}</p>
                  <p class="text-sm text-gray-500">SKU: {{ item.sku }}</p>
                </div>
                <div class="text-sm font-medium text-gray-800">{{ item.price }}</div>
              </div>
            </div>

            <div class="mt-6 pt-4 border-t border-gray-200">
              <div class="flex justify-between text-sm text-gray-600">
                <span>Subtotal</span>
                <span>₦{{ subtotal }}</span>
              </div>
              <div class="flex justify-between text-sm text-gray-600">
                <span>Shipping</span>
                <span>₦{{ shipping }}</span>
              </div>
              <div class="flex justify-between text-sm text-gray-600">
                <span>Tax</span>
                <span>₦{{ tax }}</span>
              </div>
              <div class="flex justify-between mt-2 text-lg font-semibold text-gray-800">
                <span>Total</span>
                <span>₦{{ total }}</span>
              </div>
            </div>
          </div>

          <!-- Shipping & Payment -->
          <div>
            <!-- Shipping Address -->
            <div class="p-6 mb-6 bg-white rounded-lg shadow-md">
              <h2 class="mb-4 text-lg font-semibold text-gray-800">Shipping Information</h2>
              <div class="space-y-2 text-sm text-gray-600">
                <p class="font-medium text-gray-800">{{ shippingAddress.name }}</p>
                <p>{{ shippingAddress.address }}</p>
                <p>{{ shippingAddress.city }}, {{ shippingAddress.state }} {{ shippingAddress.zip }}</p>
                <p>{{ shippingAddress.country }}</p>
                <p>{{ shippingAddress.phone }}</p>
              </div>
            </div>

            <!-- Payment Method -->
            <div class="p-6 bg-white rounded-lg shadow-md">
              <h2 class="mb-4 text-lg font-semibold text-gray-800">Payment Method</h2>
              <div class="flex items-center">
                <div class="flex items-center justify-center w-10 h-10 mr-3 bg-gray-100 rounded-md">
                  <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                  </svg>
                </div>
                <div>
                  <p class="font-medium text-gray-800">{{ paymentMethod.type }}</p>
                  <p class="text-sm text-gray-600">Ending in {{ paymentMethod.last4 }}</p>
                  <p class="text-sm text-gray-600">Paid on {{ formatDate(paymentDate) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Order Timeline -->
        <div class="p-6 mt-8 bg-white rounded-lg shadow-md">
          <h2 class="mb-4 text-lg font-semibold text-gray-800">Order Timeline</h2>
          <div class="relative">
            <div class="absolute top-5 left-0 h-1 bg-gray-200" style="width: 100%;"></div>
            <div class="absolute top-5 left-0 h-1 bg-lime-500" :style="`width: ${progressWidth}%`"></div>
            <div class="relative flex justify-between">
              <div v-for="(status, index) in orderStatuses" :key="index" class="flex flex-col items-center">
                <div :class="status.completed ? 'bg-lime-500' : 'bg-gray-200'" class="flex items-center justify-center w-10 h-10 rounded-full">
                  <svg v-if="status.completed" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <svg v-else class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <span class="mt-2 text-sm font-medium text-gray-800">{{ status.name }}</span>
                <span v-if="status.date" class="text-xs text-gray-500">{{ formatDate(status.date) }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Actions -->
        <div class="flex flex-col mt-8 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <button 
            @click="printOrder" 
            class="flex items-center justify-center px-6 py-3 font-semibold text-gray-800 transition-colors bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path>
            </svg>
            Print Order
          </button>
          <button 
            v-if="orderStatus !== 'Cancelled'"
            @click="cancelOrder" 
            class="flex items-center justify-center px-6 py-3 font-semibold text-white transition-colors bg-red-600 rounded-lg hover:bg-red-700"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
            Cancel Order
          </button>
          <router-link 
            to="/account/orders" 
            class="flex items-center justify-center px-6 py-3 font-semibold text-gray-800 transition-colors bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Back to Orders
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

// Order data - in a real app, this would come from an API based on route.params.id
const orderNumber = ref('ORD-230815123');
const orderDate = ref(new Date('2023-08-15'));
const paymentDate = ref(new Date('2023-08-15'));
const orderStatus = ref('Shipped'); // Possible values: Confirmed, Processing, Shipped, Delivered, Cancelled

// Mock order items
const orderItems = ref([
  {
    id: 1,
    name: 'Wireless Headphones',
    price: '₦79,000.00',
    quantity: 1,
    sku: 'WH-1000XM4',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: '₦129,999.00',
    quantity: 1,
    sku: 'SW-SE42',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
  }
]);

const shippingAddress = ref({
  name: 'John Doe',
  address: '123 Main St',
  city: 'Lagos',
  state: 'Lagos',
  zip: '100001',
  country: 'Nigeria',
  phone: '+234 123 456 7890'
});

const paymentMethod = ref({
  type: 'Credit Card',
  last4: '1234'
});

// Calculate order totals
const subtotal = computed(() => {
  return orderItems.value.reduce((total, item) => {
    return total + parseFloat(item.price.replace('₦', '').replace(',', ''));
  }, 0).toFixed(2);
});

const shipping = computed(() => {
  return subtotal.value > 50000 ? '0.00' : '2000.00';
});

const tax = computed(() => {
  return (parseFloat(subtotal.value) * 0.075).toFixed(2); // 7.5% VAT
});

const total = computed(() => {
  return (parseFloat(subtotal.value) + parseFloat(shipping.value) + parseFloat(tax.value)).toFixed(2);
});

// Status styling
const statusClass = computed(() => {
  switch (orderStatus.value) {
    case 'Confirmed':
      return 'bg-blue-100 text-blue-800';
    case 'Processing':
      return 'bg-yellow-100 text-yellow-800';
    case 'Shipped':
      return 'bg-purple-100 text-purple-800';
    case 'Delivered':
      return 'bg-green-100 text-green-800';
    case 'Cancelled':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
});

// Order statuses with completion status
const orderStatuses = computed(() => {
  const statuses = [
    { name: 'Order Placed', completed: true, date: orderDate.value },
    { name: 'Processing', completed: orderStatus.value !== 'Confirmed', date: orderStatus.value !== 'Confirmed' ? new Date('2023-08-16') : null },
    { name: 'Shipped', completed: ['Shipped', 'Delivered'].includes(orderStatus.value), date: ['Shipped', 'Delivered'].includes(orderStatus.value) ? new Date('2023-08-17') : null },
    { name: 'Delivered', completed: orderStatus.value === 'Delivered', date: orderStatus.value === 'Delivered' ? new Date('2023-08-20') : null }
  ];
  
  return statuses;
});

// Progress bar width
const progressWidth = computed(() => {
  const completedCount = orderStatuses.value.filter(status => status.completed).length;
  return (completedCount / orderStatuses.value.length) * 100;
});

// Format date function
const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric',
    year: 'numeric'
  });
};

// Print order
const printOrder = () => {
  window.print();
};

// Cancel order
const cancelOrder = () => {
  if (confirm('Are you sure you want to cancel this order? This action cannot be undone.')) {
    // In a real app, this would call an API to cancel the order
    orderStatus.value = 'Cancelled';
    alert('Order has been cancelled successfully.');
  }
};

// Fetch order data on mount
onMounted(() => {
  // In a real app, you would fetch the order data based on route.params.id
  // fetchOrderDetails(route.params.id);
});
</script>

<style scoped>
@media print {
  body {
    background-color: white;
  }
  .bg-gray-50 {
    background-color: white;
  }
  button, .router-link-active {
    display: none;
  }
}
</style>