<template>
    <AppLayout>
        <template v-slot:main-content>
            <div class="min-h-screen py-12 bg-gray-50">
                <div class="container px-4 mx-auto">
                    <div class="max-w-4xl mx-auto">
                        <h1 class="mb-8 text-3xl font-bold text-gray-800">My Orders</h1>

                        <div v-if="loading" class="flex flex-col items-center justify-center py-20">
                            <div
                                class="w-12 h-12 mb-4 border-4 border-t-deepsaffron border-gray-200 rounded-full animate-spin">
                            </div>
                            <p class="text-gray-600">Loading your orders...</p>
                        </div>

                        <div v-else-if="orders.length === 0" class="p-12 text-center bg-white rounded-xl shadow-sm">
                            <div
                                class="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-full">
                                <svg class="w-10 h-10 text-gray-400" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M16 11V7a4 4 0 118 0m-4 8v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2m14 0V9a2 2 0 00-2-2M5 11V7a4 4 0 00-8 0m8 4v10a2 2 0 002 2h10a2 2 0 002-2V11m-4 8l-4-4m0 0l-4 4m4-4v12" />
                                </svg>
                            </div>
                            <h2 class="mb-2 text-xl font-semibold text-gray-800">No orders yet</h2>
                            <p class="mb-8 text-gray-600">Looks like you haven't placed any orders yet. Start shopping
                                now!</p>
                            <router-link to="/"
                                class="px-8 py-3 font-semibold text-white transition-colors rounded-lg bg-deepsaffron hover:bg-deepsaffron/90">
                                Go Shopping
                            </router-link>
                        </div>

                        <div v-else class="space-y-6">
                            <div v-for="order in orders" :key="order._id"
                                class="overflow-hidden bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                                @click="viewOrderDetails(order._id)">
                                <div class="p-6">
                                    <div class="flex flex-wrap items-center justify-between mb-4 gap-4">
                                        <div>
                                            <p class="text-xs font-bold tracking-wider text-gray-400 uppercase">Order
                                                Number</p>
                                            <h3 class="text-lg font-bold text-gray-800">#{{ order.orderNumber ||
                                                order._id.slice(-8).toUpperCase() }}</h3>
                                        </div>
                                        <div class="text-right">
                                            <p class="text-xs font-bold tracking-wider text-gray-400 uppercase">Placed
                                                On</p>
                                            <p class="font-semibold text-gray-800">{{ formatDate(order.createdAt) }}</p>
                                        </div>
                                        <div>
                                            <span :class="getStatusClass(order.status)"
                                                class="px-4 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full">
                                                {{ order.status }}
                                            </span>
                                        </div>
                                    </div>

                                    <div class="flex items-center pt-4 border-t border-gray-50">
                                        <div class="flex -space-x-3 overflow-hidden">
                                            <img v-for="(item, idx) in order.items.slice(0, 3)" :key="idx"
                                                :src="item.productId?.img?.[0]?.imgData || '/placeholder.png'"
                                                class="inline-block w-12 h-12 rounded-full ring-2 ring-white object-cover" />
                                            <div v-if="order.items.length > 3"
                                                class="flex items-center justify-center w-12 h-12 text-xs font-bold text-gray-600 bg-gray-100 rounded-full ring-2 ring-white">
                                                +{{ order.items.length - 3 }}
                                            </div>
                                        </div>
                                        <div class="ml-6 flex-1">
                                            <p class="text-sm font-medium text-gray-600">
                                                {{ order.items.length }} Item{{ order.items.length > 1 ? 's' : '' }}
                                            </p>
                                        </div>
                                        <div class="text-right">
                                            <p class="text-xs font-bold tracking-wider text-gray-400 uppercase">Total
                                                Amount</p>
                                            <p class="text-xl font-black text-deepsaffron uppercase">₦{{
                                                Number(order.total + (order.tax || 0)).toLocaleString() }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </AppLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import AppLayout from '@/layouts/applayout.vue';
import { Order } from '@/classes/order.class';
import { useUserStore } from '@/stores/userStore';

const router = useRouter();
const userStore = useUserStore();
const orderService = new Order();

const orders = ref([]);
const loading = ref(true);

const fetchOrders = async () => {
    try {
        loading.value = true;
        // Ensure user is loaded
        if (!userStore.user) {
            await userStore.checkAuth();
        }

        const userId = userStore.user?._id;
       
        if (!userId) {
            console.error('No user ID found, redirecting to login');
            router.push({ name: 'user-login' });
            return;
        }

        const response = await orderService.getUserOrders(userId);
        console.log(response,"response");
        orders.value = response.payload || [];
    } catch (error) {
        console.error('Failed to fetch orders:', error);
    } finally {
        loading.value = false;
    }
};

const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
        case 'pending': return 'bg-yellow-100 text-yellow-700';
        case 'processing': return 'bg-blue-100 text-blue-700';
        case 'shipped': return 'bg-purple-100 text-purple-700';
        case 'completed': return 'bg-green-100 text-green-700';
        case 'cancelled': return 'bg-red-100 text-red-700';
        default: return 'bg-gray-100 text-gray-700';
    }
};

const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

const viewOrderDetails = (orderId) => {
    router.push({ name: 'order-details', params: { id: orderId } });
};

onMounted(() => {
    fetchOrders();
});
</script>
