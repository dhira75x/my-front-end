<!-- OrderDetails.vue -->
<template>
  <AppLayout>
    <template v-slot:main-content>
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

                <div class="space-y-6">
                  <div v-for="item in orderItems" :key="item.id"
                    class="flex flex-col border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <div class="flex">
                      <div class="flex-shrink-0 w-20 h-20 overflow-hidden bg-gray-200 rounded-lg">
                        <img :src="item.image" alt="" class="object-cover w-full h-full">
                      </div>
                      <div class="flex-1 ml-4">
                        <h3 class="text-base font-semibold text-gray-800">{{ item.name }}</h3>
                        <p class="text-sm text-gray-500">Qty: {{ item.quantity }}</p>
                        <p class="text-sm text-gray-500 font-mono">SKU: {{ item.sku }}</p>
                      </div>
                      <div class="text-base font-bold text-gray-800">₦{{ Number(item.price).toLocaleString() }}</div>
                    </div>

                    <!-- Rating Section (Only for completed orders) -->
                    <div v-if="orderStatus.toLowerCase() === 'completed'"
                      class="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                      <div class="flex items-center justify-between mb-3">
                        <span class="text-sm font-bold text-gray-700 uppercase tracking-wider">Rate this product</span>
                        <div class="flex space-x-1">
                          <button v-for="star in 5" :key="star" @click="setRating(item.productId, star)"
                            class="transition-colors duration-200">
                            <svg class="w-6 h-6"
                              :class="getRating(item.productId) >= star ? 'text-yellow-400' : 'text-gray-300'"
                              fill="currentColor" viewBox="0 0 20 20">
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <textarea v-model="reviews[item.productId]"
                        placeholder="Share your experience with this product..."
                        class="w-full p-3 text-sm border border-gray-200 rounded-md focus:ring-2 focus:ring-deepsaffron focus:border-transparent outline-none transition-all"
                        rows="2"></textarea>
                      <button @click="submitReview(item.productId)" :disabled="submittingReview === item.productId"
                        class="mt-3 px-4 py-2 text-xs font-bold text-white uppercase tracking-widest bg-gray-800 rounded-md hover:bg-black transition-colors disabled:opacity-50">
                        {{ submittingReview === item.productId ? 'Submitting...' : 'Submit Review' }}
                      </button>
                    </div>
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
                      <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z">
                        </path>
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
                    <div :class="status.completed ? 'bg-lime-500' : 'bg-gray-200'"
                      class="flex items-center justify-center w-10 h-10 rounded-full">
                      <svg v-if="status.completed" class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <svg v-else class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
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
              <button @click="printOrder"
                class="flex items-center justify-center px-6 py-3 font-semibold text-gray-800 transition-colors bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z">
                  </path>
                </svg>
                Print Order
              </button>
              <button v-if="orderStatus !== 'Cancelled'" @click="cancelOrder"
                class="flex items-center justify-center px-6 py-3 font-semibold text-white transition-colors bg-red-600 rounded-lg hover:bg-red-700">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                Cancel Order
              </button>
              <router-link to="/account/orders"
                class="flex items-center justify-center px-6 py-3 font-semibold text-gray-800 transition-colors bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                Back to Orders
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
import { formatDate } from '@/helpers/utils';
import { Order } from '@/classes/order.class';
import { Rating } from '@/classes/rating.class';
import { useUserStore } from '@/stores/userStore';

const route = useRoute();
const router = useRouter();
const userStore = useUserStore();
const orderService = new Order();
const ratingService = new Rating();

const loading = ref(true);
const orderNumber = ref('');
const orderDate = ref(null);
const paymentDate = ref(null);
const orderStatus = ref('');
const orderItems = ref([]);
const shippingAddress = ref({ name: '', address: '', city: '', state: '', zip: '', country: '', phone: '' });
const paymentMethod = ref({ type: '', last4: '' });
const subtotalVal = ref(0);
const taxVal = ref(0);
const totalVal = ref(0);

// Rating state
const ratings = ref({}); // { productId: starCount }
const reviews = ref({}); // { productId: reviewText }
const submittingReview = ref(null);

const setRating = (productId, count) => {
  ratings.value[productId] = count;
};

const getRating = (productId) => ratings.value[productId] || 0;

const submitReview = async (productId) => {
  const ratingCount = ratings.value[productId];
  const reviewText = reviews.value[productId];

  if (!ratingCount) {
    alert('Please select a star rating.');
    return;
  }

  try {
    submittingReview.value = productId;
    await ratingService.addProductRating(
      productId,
      ratingCount,
      reviewText,
      userStore.user._id
    );
    alert('Thank you for your review!');
    // Optional: Refresh or hide rating UI
  } catch (error) {
    console.error('Failed to submit review:', error);
    alert('Failed to submit review. Please try again.');
  } finally {
    submittingReview.value = null;
  }
};

const fetchOrderDetails = async () => {
  try {
    loading.value = true;
    const response = await orderService.findOrder(route.params.id);
    const data = response.payload;

    orderNumber.value = data.orderNumber || data._id.slice(-8).toUpperCase();
    orderDate.value = new Date(data.createdAt);
    paymentDate.value = new Date(data.createdAt); // Assumption
    orderStatus.value = data.status;

    orderItems.value = data.items.map(item => ({
      id: item._id,
      productId: item.productId?._id || item.productId,
      name: item.title,
      price: item.price,
      quantity: item.count,
      sku: 'N/A', // SKU might not be directly in order items nested
      image: item.productId?.img?.[0]?.imgData || '/placeholder.png'
    }));

    shippingAddress.value = {
      name: data.createdBy.firstname + ' ' + data.createdBy.lastname,
      address: data.shippingAddress.address,
      city: data.shippingAddress.city,
      state: data.shippingAddress.state,
      zip: data.shippingAddress.zipCode,
      country: 'Nigeria', // Assuming Nigeria for now or add to model
      phone: data.createdBy.phone
    };

    paymentMethod.value = {
      type: data.paymentMethod.toUpperCase(),
      last4: '****' // No last4 in current modal
    };

    subtotalVal.value = data.total;
    taxVal.value = data.tax || 0;
    totalVal.value = data.total + (data.tax || 0);

  } catch (error) {
    console.error('Failed to fetch order details:', error);
  } finally {
    loading.value = false;
  }
};

// Print order
const printOrder = () => {
  window.print();
};

// Cancel order
const cancelOrder = async () => {
  if (confirm('Are you sure you want to cancel this order? This action cannot be undone.')) {
    try {
      await http.patch(`/orders/${route.params.id}`, { status: 'cancelled' });
      orderStatus.value = 'Cancelled';
      alert('Order has been cancelled successfully.');
    } catch (error) {
      console.error('Failed to cancel order:', error);
      alert('Failed to cancel order. Please try again.');
    }
  }
};

// Fetch order data on mount
onMounted(() => {
  fetchOrderDetails();
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

  button,
  .router-link-active {
    display: none;
  }
}
</style>