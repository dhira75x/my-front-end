<!-- OrderConfirmation.vue -->
<template>
  <AppLayout>
    <template v-slot:main-content>
      <div class="min-h-screen py-8 bg-gray-50">
        <div class="container px-4 mx-auto">
          <div class="max-w-3xl mx-auto">
            <!-- Success Message -->
            <div class="p-6 mb-8 text-center bg-white rounded-lg shadow-md">
              <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full">
                <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h1 class="mb-2 text-2xl font-bold text-gray-800">Order Confirmed!</h1>
              <p class="text-gray-600">Thank you for your purchase. Your order has been received and is being processed.
              </p>
              <p class="mt-2 text-gray-600">Order #{{ orderIdParam || orderNumber }}</p>
            </div>

            <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
              <!-- Order Details -->
              <div class="p-6 bg-white rounded-lg shadow-md">
                <h2 class="mb-4 text-lg font-semibold text-gray-800">Order Details</h2>

                <div class="space-y-4">
                  <div v-for="item in orderItems" :key="item.id" class="flex">
                    <div class="flex-shrink-0 w-16 h-16 overflow-hidden bg-gray-200 rounded-md">
                      <img :src="item.image" alt="" class="object-cover w-full h-full">
                    </div>
                    <div class="flex-1 ml-4">
                      <h3 class="text-sm font-medium text-gray-800">{{ item.name }}</h3>
                      <p class="text-sm text-gray-500">Qty: {{ item.quantity }}</p>
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

              <!-- Shipping Information -->
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
                      <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z">
                        </path>
                      </svg>
                    </div>
                    <div>
                      <p class="font-medium text-gray-800">Online Payment</p>
                      <p class="text-sm text-gray-600">Success</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Order Status -->
            <div class="p-6 mt-8 bg-white rounded-lg shadow-md">
              <h2 class="mb-4 text-lg font-semibold text-gray-800">Order Status</h2>
              <div class="relative">
                <div class="absolute top-5 left-0 h-1 bg-gray-200" style="width: 100%;"></div>
                <div class="absolute top-5 left-0 h-1 bg-lime-500" style="width: 25%;"></div>
                <div class="relative flex justify-between">
                  <div class="flex flex-col items-center">
                    <div class="flex items-center justify-center w-10 h-10 bg-lime-500 rounded-full">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span class="mt-2 text-sm font-medium text-gray-800">Order Placed</span>
                    <span class="text-xs text-gray-500">{{ formatDate(orderDate) }}</span>
                  </div>
                  <div class="flex flex-col items-center">
                    <div class="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
                      <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z">
                        </path>
                      </svg>
                    </div>
                    <span class="mt-2 text-sm font-medium text-gray-800">Processing</span>
                    <span class="text-xs text-gray-500">Est. {{ formatDate(estimatedDates.processing) }}</span>
                  </div>
                  <div class="flex flex-col items-center">
                    <div class="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
                      <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                      </svg>
                    </div>
                    <span class="mt-2 text-sm font-medium text-gray-800">Shipped</span>
                    <span class="text-xs text-gray-500">Est. {{ formatDate(estimatedDates.shipped) }}</span>
                  </div>
                  <div class="flex flex-col items-center">
                    <div class="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
                      <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <span class="mt-2 text-sm font-medium text-gray-800">Delivered</span>
                    <span class="text-xs text-gray-500">Est. {{ formatDate(estimatedDates.delivered) }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Next Steps -->
            <div class="p-6 mt-8 bg-white rounded-lg shadow-md">
              <h2 class="mb-4 text-lg font-semibold text-gray-800">What's Next?</h2>
              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-1 bg-lime-100 rounded-full">
                    <svg class="w-4 h-4 text-lime-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-gray-600">You'll receive an order confirmation email shortly with all the details
                    of your purchase.</p>
                </div>
                <div class="flex items-start">
                  <div class="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-1 bg-lime-100 rounded-full">
                    <svg class="w-4 h-4 text-lime-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-gray-600">We'll notify you when your order ships and provide tracking information.
                  </p>
                </div>
                <div class="flex items-start">
                  <div class="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-1 bg-lime-100 rounded-full">
                    <svg class="w-4 h-4 text-lime-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-gray-600">You can track your order status anytime in your account dashboard.</p>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-col mt-8 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <router-link to="/"
                class="flex items-center justify-center px-6 py-3 font-semibold text-white transition-colors bg-lime-600 rounded-lg hover:bg-lime-700">
                Continue Shopping
              </router-link>
              <router-link v-if="orderIdParam" :to="`/account/orders/${orderIdParam}`"
                class="flex items-center justify-center px-6 py-3 font-semibold text-gray-800 transition-colors bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                View Order Details
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </template>
  </AppLayout>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AppLayout from '@/layouts/applayout.vue';
import { Order } from '@/classes/order.class.js';
import { useUserStore } from '@/stores/userStore.js';

const route = useRoute();
const router = useRouter();
const orderService = new Order();
const userStore = useUserStore();

const orderIdParam = computed(() => route.query.id);

// Order state
const orderNumber = ref('');
const orderDate = ref(new Date());
const orderItems = ref([]);
const shippingAddress = ref({
  name: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  country: 'Nigeria',
  phone: ''
});
const paymentMethod = ref({
  type: 'Online Payment',
  last4: ''
});
const loadingOrder = ref(false);
const subtotal = ref('0.00');
const shipping = ref('0.00');
const tax = ref('0.00');
const total = ref('0.00');

// Estimated dates for order status
const estimatedDates = ref({
  processing: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), // 1 day from now
  shipped: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
  delivered: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000) // 5 days from now
});

// Format date function
const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

const generateOrderNumber = () => {
  const timestamp = Date.now().toString();
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  orderNumber.value = `ORD-${timestamp.slice(-6)}${random}`;
};

// Fetch order details
const fetchOrderDetails = async () => {
  if (!orderIdParam.value) {
    generateOrderNumber();
    return;
  }

  loadingOrder.value = true;
  try {
    const res = await orderService.findOrder(orderIdParam.value);
    if (res.status === 'OK') {
      const order = res.payload;
      orderNumber.value = order.orderNumber || order._id;
      orderDate.value = new Date(order.createdAt);

      orderItems.value = order.items.map(item => ({
        id: item.productId?._id,
        name: item.productId?.title,
        price: `₦${parseFloat(item.productId?.price || 0).toLocaleString()}`,
        quantity: item.count,
        image: item.productId?.img?.[0]?.imgData || '/placeholder.png'
      }));

      shippingAddress.value = {
        name: userStore.user?.names || 'Customer',
        address: order.shippingAddress?.address,
        city: order.shippingAddress?.city,
        state: order.shippingAddress?.state,
        zip: order.shippingAddress?.zipCode,
        country: 'Nigeria',
        phone: userStore.user?.phone || ''
      };

      // Recalculate totals based on order data if possible, or just use what's there
      // For now, simple calculation
      const itemTotal = order.items.reduce((acc, item) => acc + (parseFloat(item.productId?.price || 0) * item.count), 0);
      subtotal.value = itemTotal.toFixed(2);
      shipping.value = order.shippingFee ? order.shippingFee.toFixed(2) : (itemTotal > 50000 ? '0.00' : '2000.00');
      tax.value = (itemTotal * 0.075).toFixed(2);
      total.value = (parseFloat(subtotal.value) + parseFloat(shipping.value) + parseFloat(tax.value)).toFixed(2);

      paymentMethod.value.type = order.paymentMethod || 'Online Payment';
    }
  } catch (err) {
    console.error("Error fetching order details:", err);
    generateOrderNumber(); // Fallback to random if fetch fails
  } finally {
    loadingOrder.value = false;
  }
};

onMounted(() => {
  fetchOrderDetails();
});
</script>