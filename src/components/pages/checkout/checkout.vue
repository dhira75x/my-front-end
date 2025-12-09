<!-- Checkout.vue -->
<template>
  <div class="min-h-screen py-8 bg-gray-50">
    <div class="container px-4 mx-auto">
      <h1 class="mb-8 text-3xl font-bold text-gray-800">Checkout</h1>

      <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <!-- Checkout Form -->
        <div class="lg:col-span-2">
          <!-- Progress Steps -->
          <div class="mb-8">
            <div class="flex items-center">
              <div class="flex items-center text-lime-600">
                <div class="flex items-center justify-center w-8 h-8 text-white bg-lime-600 rounded-full">1</div>
                <span class="ml-2 font-medium">Information</span>
              </div>
              <div class="ml-4 h-1 flex-1 bg-lime-600"></div>
              <div class="flex items-center ml-4 text-gray-500">
                <div class="flex items-center justify-center w-8 h-8 text-white bg-gray-300 rounded-full">2</div>
                <span class="ml-2 font-medium">Shipping</span>
              </div>
              <div class="ml-4 h-1 flex-1 bg-gray-300"></div>
              <div class="flex items-center ml-4 text-gray-500">
                <div class="flex items-center justify-center w-8 h-8 text-white bg-gray-300 rounded-full">3</div>
                <span class="ml-2 font-medium">Payment</span>
              </div>
            </div>
          </div>

          <!-- Contact Information -->
          <div class="p-6 mb-6 bg-white rounded-lg shadow-md">
            <h2 class="mb-4 text-lg font-semibold text-gray-800">Contact Information</h2>
            <div class="mb-4">
              <label for="email" class="block mb-2 text-sm font-medium text-gray-700">Email</label>
              <input 
                type="email" 
                id="email" 
                v-model="customerInfo.email"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-lime-500 focus:border-lime-500" 
                placeholder="you@example.com"
              >
            </div>
            <div class="flex items-center">
              <input type="checkbox" id="newsletter" class="w-4 h-4 text-lime-600 border-gray-300 rounded focus:ring-lime-500">
              <label for="newsletter" class="ml-2 text-sm text-gray-600">Keep me up to date on news and exclusive offers</label>
            </div>
          </div>

          <!-- Shipping Address -->
          <div class="p-6 mb-6 bg-white rounded-lg shadow-md">
            <h2 class="mb-4 text-lg font-semibold text-gray-800">Shipping Address</h2>
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label for="firstName" class="block mb-2 text-sm font-medium text-gray-700">First Name</label>
                <input 
                  type="text" 
                  id="firstName" 
                  v-model="customerInfo.firstName"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-lime-500 focus:border-lime-500" 
                  placeholder="John"
                >
              </div>
              <div>
                <label for="lastName" class="block mb-2 text-sm font-medium text-gray-700">Last Name</label>
                <input 
                  type="text" 
                  id="lastName" 
                  v-model="customerInfo.lastName"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-lime-500 focus:border-lime-500" 
                  placeholder="Doe"
                >
              </div>
              <div class="md:col-span-2">
                <label for="address" class="block mb-2 text-sm font-medium text-gray-700">Address</label>
                <input 
                  type="text" 
                  id="address" 
                  v-model="customerInfo.address"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-lime-500 focus:border-lime-500" 
                  placeholder="123 Main St"
                >
              </div>
              <div>
                <label for="city" class="block mb-2 text-sm font-medium text-gray-700">City</label>
                <input 
                  type="text" 
                  id="city" 
                  v-model="customerInfo.city"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-lime-500 focus:border-lime-500" 
                  placeholder="Lagos"
                >
              </div>
              <div>
                <label for="state" class="block mb-2 text-sm font-medium text-gray-700">State</label>
                <select 
                  id="state" 
                  v-model="customerInfo.state"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-lime-500 focus:border-lime-500"
                >
                  <option value="">Select a state</option>
                  <option value="lagos">Lagos</option>
                  <option value="abuja">Abuja</option>
                  <option value="rivers">Rivers</option>
                  <option value="kano">Kano</option>
                </select>
              </div>
              <div>
                <label for="zip" class="block mb-2 text-sm font-medium text-gray-700">ZIP Code</label>
                <input 
                  type="text" 
                  id="zip" 
                  v-model="customerInfo.zip"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-lime-500 focus:border-lime-500" 
                  placeholder="100001"
                >
              </div>
              <div>
                <label for="phone" class="block mb-2 text-sm font-medium text-gray-700">Phone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  v-model="customerInfo.phone"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-lime-500 focus:border-lime-500" 
                  placeholder="+234 123 456 7890"
                >
              </div>
            </div>
            <div class="mt-4">
              <input type="checkbox" id="saveAddress" class="w-4 h-4 text-lime-600 border-gray-300 rounded focus:ring-lime-500">
              <label for="saveAddress" class="ml-2 text-sm text-gray-600">Save this information for next time</label>
            </div>
          </div>

          <!-- Shipping Method -->
          <div class="p-6 mb-6 bg-white rounded-lg shadow-md">
            <h2 class="mb-4 text-lg font-semibold text-gray-800">Shipping Method</h2>
            <div class="space-y-3">
              <div class="flex items-center p-4 border border-gray-300 rounded-lg">
                <input type="radio" id="standard" name="shipping" v-model="shippingMethod" value="standard" class="w-4 h-4 text-lime-600 border-gray-300 focus:ring-lime-500" checked>
                <label for="standard" class="flex items-center justify-between flex-1 ml-3">
                  <div>
                    <div class="font-medium text-gray-800">Standard Delivery</div>
                    <div class="text-sm text-gray-500">5-7 business days</div>
                  </div>
                  <div class="font-medium text-gray-800">₦2,000.00</div>
                </label>
              </div>
              <div class="flex items-center p-4 border border-gray-300 rounded-lg">
                <input type="radio" id="express" name="shipping" v-model="shippingMethod" value="express" class="w-4 h-4 text-lime-600 border-gray-300 focus:ring-lime-500">
                <label for="express" class="flex items-center justify-between flex-1 ml-3">
                  <div>
                    <div class="font-medium text-gray-800">Express Delivery</div>
                    <div class="text-sm text-gray-500">2-3 business days</div>
                  </div>
                  <div class="font-medium text-gray-800">₦5,000.00</div>
                </label>
              </div>
              <div class="flex items-center p-4 border border-gray-300 rounded-lg">
                <input type="radio" id="overnight" name="shipping" v-model="shippingMethod" value="overnight" class="w-4 h-4 text-lime-600 border-gray-300 focus:ring-lime-500">
                <label for="overnight" class="flex items-center justify-between flex-1 ml-3">
                  <div>
                    <div class="font-medium text-gray-800">Overnight Delivery</div>
                    <div class="text-sm text-gray-500">Next business day</div>
                  </div>
                  <div class="font-medium text-gray-800">₦10,000.00</div>
                </label>
              </div>
            </div>
          </div>

          <!-- Payment Method -->
          <div class="p-6 bg-white rounded-lg shadow-md">
            <h2 class="mb-4 text-lg font-semibold text-gray-800">Payment Method</h2>
            <div class="space-y-3">
              <div class="flex items-center p-4 border border-gray-300 rounded-lg">
                <input type="radio" id="paystack" name="payment" v-model="selectedPayment" value="paystack" class="w-4 h-4 text-lime-600 border-gray-300 focus:ring-lime-500" checked>
                <label for="paystack" class="flex items-center flex-1 ml-3">
                  <div class="flex items-center">
                    <div class="w-8 h-8 rounded bg-blue-500 flex items-center justify-center mr-2">
                      <span class="text-white font-bold text-xs">PS</span>
                    </div>
                    <span class="font-medium text-gray-800">Paystack</span>
                  </div>
                </label>
              </div>
              <div class="flex items-center p-4 border border-gray-300 rounded-lg">
                <input type="radio" id="flutterwave" name="payment" v-model="selectedPayment" value="flutterwave" class="w-4 h-4 text-lime-600 border-gray-300 focus:ring-lime-500">
                <label for="flutterwave" class="flex items-center flex-1 ml-3">
                  <div class="flex items-center">
                    <div class="w-8 h-8 rounded bg-teal-500 flex items-center justify-center mr-2">
                      <span class="text-white font-bold text-xs">FW</span>
                    </div>
                    <span class="font-medium text-gray-800">Flutterwave</span>
                  </div>
                </label>
              </div>
              <div class="flex items-center p-4 border border-gray-300 rounded-lg">
                <input type="radio" id="cash" name="payment" v-model="selectedPayment" value="cash" class="w-4 h-4 text-lime-600 border-gray-300 focus:ring-lime-500">
                <label for="cash" class="flex items-center flex-1 ml-3">
                  <svg class="w-6 h-6 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                  <span class="font-medium text-gray-800">Cash on Delivery</span>
                </label>
              </div>
            </div>

            <!-- Payment Information -->
            <div class="mt-6 p-4 bg-gray-50 rounded-lg">
              <p class="text-sm text-gray-600">
                <span v-if="selectedPayment === 'paystack'">
                  You will be redirected to Paystack to complete your payment securely.
                </span>
                <span v-else-if="selectedPayment === 'flutterwave'">
                  You will be redirected to Flutterwave to complete your payment securely.
                </span>
                <span v-else>
                  Pay with cash when your order is delivered.
                </span>
              </p>
            </div>

            <div class="mt-6">
              <button 
                @click="placeOrder" 
                :disabled="isProcessing"
                class="w-full py-3 font-semibold text-white transition-colors bg-lime-600 rounded-lg hover:bg-lime-700 disabled:opacity-50"
              >
                <span v-if="isProcessing">Processing...</span>
                <span v-else>Place Order</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Order Summary -->
        <div>
          <div class="p-6 bg-white rounded-lg shadow-md">
            <h2 class="mb-4 text-lg font-semibold text-gray-800">Order Summary</h2>
            
            <div class="space-y-4">
              <div v-for="item in cartItems" :key="item.id" class="flex">
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

            <div class="mt-6 space-y-3">
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
              <div class="pt-3 mt-3 border-t border-gray-200">
                <div class="flex justify-between text-lg font-semibold text-gray-800">
                  <span>Total</span>
                  <span>₦{{ total }}</span>
                </div>
              </div>
            </div>

            <div class="mt-6">
              <div class="flex items-center p-4 bg-lime-50 rounded-lg">
                <svg class="w-5 h-5 text-lime-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="ml-2 text-sm text-lime-700">Free shipping on orders over ₦50,000</span>
              </div>
            </div>
          </div>

          <div class="mt-6 p-6 bg-white rounded-lg shadow-md">
            <h3 class="mb-4 text-lg font-semibold text-gray-800">Have a promo code?</h3>
            <div class="flex">
              <input 
                type="text" 
                v-model="promoCode"
                class="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-lime-500 focus:border-lime-500" 
                placeholder="Enter promo code"
              >
              <button 
                @click="applyPromoCode"
                class="px-4 py-2 font-medium text-white bg-lime-600 rounded-r-lg hover:bg-lime-700"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Customer information
const customerInfo = ref({
  email: '',
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  phone: ''
});

// Payment and shipping
const selectedPayment = ref('paystack');
const shippingMethod = ref('standard');
const promoCode = ref('');
const isProcessing = ref(false);

// Mock cart data - in a real app, this would come from a cart store
const cartItems = ref([
  {
    id: 1,
    name: 'Wireless Headphones',
    price: '₦79,000.00',
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: '₦129,999.00',
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
  }
]);

// Calculate order totals
const subtotal = computed(() => {
  return cartItems.value.reduce((total, item) => {
    return total + parseFloat(item.price.replace('₦', '').replace(',', ''));
  }, 0).toFixed(2);
});

const shipping = computed(() => {
  if (subtotal.value > 50000) return '0.00';
  
  switch (shippingMethod.value) {
    case 'express': return '5000.00';
    case 'overnight': return '10000.00';
    default: return '2000.00';
  }
});

const tax = computed(() => {
  return (parseFloat(subtotal.value) * 0.075).toFixed(2); // 7.5% VAT
});

const total = computed(() => {
  return (parseFloat(subtotal.value) + parseFloat(shipping.value) + parseFloat(tax.value)).toFixed(2);
});

// Generate a unique reference for transactions
const generateReference = () => {
  return `TX-${Date.now()}-${Math.floor(Math.random() * 1000000)}`;
};

// Initialize Paystack payment
const initializePaystack = () => {
  const handler = PaystackPop.setup({
    key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
    email: customerInfo.value.email,
    amount: parseFloat(total.value) * 100,
    currency: 'NGN',
    ref: generateReference(),
    metadata: {
      custom_fields: [
        {
          display_name: "Customer Name",
          variable_name: "customer_name",
          value: `${customerInfo.value.firstName} ${customerInfo.value.lastName}`
        },
        {
          display_name: "Phone Number",
          variable_name: "phone_number",
          value: customerInfo.value.phone
        }
      ]
    },
    callback: function(response) {
      // Payment successful
      console.log('Paystack payment successful:', response);
      completeOrder(response.reference, 'paystack');
    },
    onClose: function() {
      // User closed payment modal
      isProcessing.value = false;
      console.log('Payment closed');
    }
  });
  
  handler.openIframe();
};

// Initialize Flutterwave payment
const initializeFlutterwave = () => {
  FlutterwaveCheckout({
    public_key: 'FLWPUBK_TEST-xxxxxxxxxxxxxxxxxxxxxxxx-X', // Replace with your Flutterwave public key
    tx_ref: generateReference(),
    amount: parseFloat(total.value),
    currency: 'NGN',
    payment_options: 'card, banktransfer, ussd',
    customer: {
      email: customerInfo.value.email,
      phone_number: customerInfo.value.phone,
      name: `${customerInfo.value.firstName} ${customerInfo.value.lastName}`
    },
    customizations: {
      title: 'Ovo Market Payment',
      description: 'Payment for items in cart',
      logo: 'https://your-logo-url.com/logo.png'
    },
    callback: function(response) {
      // Payment successful
      console.log('Flutterwave payment successful:', response);
      completeOrder(response.tx_ref, 'flutterwave');
    },
    onclose: function() {
      // User closed payment modal
      isProcessing.value = false;
      console.log('Payment closed');
    }
  });
};

// Complete the order after successful payment
const completeOrder = (reference, paymentMethod) => {
  // In a real app, you would send this data to your backend
  const orderData = {
    reference,
    paymentMethod,
    customer: customerInfo.value,
    items: cartItems.value,
    shipping: shippingMethod.value,
    subtotal: subtotal.value,
    shippingCost: shipping.value,
    tax: tax.value,
    total: total.value
  };
  
  console.log('Order data:', orderData);
  
  // Simulate API call
  setTimeout(() => {
    isProcessing.value = false;
    alert('Order placed successfully!');
    router.push('/order-confirmation');
  }, 1500);
};

// Apply promo code
const applyPromoCode = () => {
  if (!promoCode.value) return;
  
  // In a real app, you would validate the promo code with your backend
  console.log('Applying promo code:', promoCode.value);
  alert(`Promo code "${promoCode.value}" applied successfully!`);
  promoCode.value = '';
};

// Place order
const placeOrder = () => {
  // Validate form
  if (!customerInfo.value.email || !customerInfo.value.firstName || !customerInfo.value.lastName || 
      !customerInfo.value.address || !customerInfo.value.city || !customerInfo.value.state || 
      !customerInfo.value.zip || !customerInfo.value.phone) {
    alert('Please fill in all required fields');
    return;
  }
  
  isProcessing.value = true;
  
  // Process payment based on selected method
  if (selectedPayment.value === 'paystack') {
    initializePaystack();
  } else if (selectedPayment.value === 'flutterwave') {
    initializeFlutterwave();
  } else if (selectedPayment.value === 'cash') {
    // For cash on delivery, complete order without payment
    completeOrder(generateReference(), 'cash');
  }
};

// Load payment scripts
onMounted(() => {
  // Load Paystack script
  const paystackScript = document.createElement('script');
  paystackScript.src = 'https://js.paystack.co/v1/inline.js';
  paystackScript.onload = () => {
    console.log('Paystack script loaded');
  };
  document.head.appendChild(paystackScript);
  
  // Load Flutterwave script
  const flutterwaveScript = document.createElement('script');
  flutterwaveScript.src = 'https://checkout.flutterwave.com/v3.js';
  flutterwaveScript.onload = () => {
    console.log('Flutterwave script loaded');
  };
  document.head.appendChild(flutterwaveScript);
});
</script>