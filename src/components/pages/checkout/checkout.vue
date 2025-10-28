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
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-lime-500 focus:border-lime-500" 
                  placeholder="John"
                >
              </div>
              <div>
                <label for="lastName" class="block mb-2 text-sm font-medium text-gray-700">Last Name</label>
                <input 
                  type="text" 
                  id="lastName" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-lime-500 focus:border-lime-500" 
                  placeholder="Doe"
                >
              </div>
              <div class="md:col-span-2">
                <label for="address" class="block mb-2 text-sm font-medium text-gray-700">Address</label>
                <input 
                  type="text" 
                  id="address" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-lime-500 focus:border-lime-500" 
                  placeholder="123 Main St"
                >
              </div>
              <div>
                <label for="city" class="block mb-2 text-sm font-medium text-gray-700">City</label>
                <input 
                  type="text" 
                  id="city" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-lime-500 focus:border-lime-500" 
                  placeholder="Lagos"
                >
              </div>
              <div>
                <label for="state" class="block mb-2 text-sm font-medium text-gray-700">State</label>
                <select 
                  id="state" 
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
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-lime-500 focus:border-lime-500" 
                  placeholder="100001"
                >
              </div>
              <div>
                <label for="phone" class="block mb-2 text-sm font-medium text-gray-700">Phone</label>
                <input 
                  type="tel" 
                  id="phone" 
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
                <input type="radio" id="standard" name="shipping" class="w-4 h-4 text-lime-600 border-gray-300 focus:ring-lime-500" checked>
                <label for="standard" class="flex items-center justify-between flex-1 ml-3">
                  <div>
                    <div class="font-medium text-gray-800">Standard Delivery</div>
                    <div class="text-sm text-gray-500">5-7 business days</div>
                  </div>
                  <div class="font-medium text-gray-800">₦2,000.00</div>
                </label>
              </div>
              <div class="flex items-center p-4 border border-gray-300 rounded-lg">
                <input type="radio" id="express" name="shipping" class="w-4 h-4 text-lime-600 border-gray-300 focus:ring-lime-500">
                <label for="express" class="flex items-center justify-between flex-1 ml-3">
                  <div>
                    <div class="font-medium text-gray-800">Express Delivery</div>
                    <div class="text-sm text-gray-500">2-3 business days</div>
                  </div>
                  <div class="font-medium text-gray-800">₦5,000.00</div>
                </label>
              </div>
              <div class="flex items-center p-4 border border-gray-300 rounded-lg">
                <input type="radio" id="overnight" name="shipping" class="w-4 h-4 text-lime-600 border-gray-300 focus:ring-lime-500">
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
                <input type="radio" id="card" name="payment" class="w-4 h-4 text-lime-600 border-gray-300 focus:ring-lime-500" checked>
                <label for="card" class="flex items-center flex-1 ml-3">
                  <svg class="w-6 h-6 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                  </svg>
                  <span class="font-medium text-gray-800">Credit/Debit Card</span>
                </label>
              </div>
              <div class="flex items-center p-4 border border-gray-300 rounded-lg">
                <input type="radio" id="bank" name="payment" class="w-4 h-4 text-lime-600 border-gray-300 focus:ring-lime-500">
                <label for="bank" class="flex items-center flex-1 ml-3">
                  <svg class="w-6 h-6 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                  <span class="font-medium text-gray-800">Bank Transfer</span>
                </label>
              </div>
              <div class="flex items-center p-4 border border-gray-300 rounded-lg">
                <input type="radio" id="cash" name="payment" class="w-4 h-4 text-lime-600 border-gray-300 focus:ring-lime-500">
                <label for="cash" class="flex items-center flex-1 ml-3">
                  <svg class="w-6 h-6 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                  <span class="font-medium text-gray-800">Cash on Delivery</span>
                </label>
              </div>
            </div>

            <!-- Card Details (shown when card payment is selected) -->
            <div class="mt-6 p-4 bg-gray-50 rounded-lg">
              <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div class="md:col-span-2">
                  <label for="cardNumber" class="block mb-2 text-sm font-medium text-gray-700">Card Number</label>
                  <input 
                    type="text" 
                    id="cardNumber" 
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-lime-500 focus:border-lime-500" 
                    placeholder="1234 5678 9012 3456"
                  >
                </div>
                <div>
                  <label for="expiry" class="block mb-2 text-sm font-medium text-gray-700">Expiry Date</label>
                  <input 
                    type="text" 
                    id="expiry" 
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-lime-500 focus:border-lime-500" 
                    placeholder="MM/YY"
                  >
                </div>
                <div>
                  <label for="cvv" class="block mb-2 text-sm font-medium text-gray-700">CVV</label>
                  <input 
                    type="text" 
                    id="cvv" 
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-lime-500 focus:border-lime-500" 
                    placeholder="123"
                  >
                </div>
                <div class="md:col-span-2">
                  <label for="nameOnCard" class="block mb-2 text-sm font-medium text-gray-700">Name on Card</label>
                  <input 
                    type="text" 
                    id="nameOnCard" 
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-lime-500 focus:border-lime-500" 
                    placeholder="John Doe"
                  >
                </div>
              </div>
            </div>

            <div class="mt-6">
              <button 
                @click="placeOrder" 
                class="w-full py-3 font-semibold text-white transition-colors bg-lime-600 rounded-lg hover:bg-lime-700"
              >
                Place Order
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
                class="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-lime-500 focus:border-lime-500" 
                placeholder="Enter promo code"
              >
              <button class="px-4 py-2 font-medium text-white bg-lime-600 rounded-r-lg hover:bg-lime-700">
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
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

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
  return subtotal.value > 50000 ? '0.00' : '2000.00';
});

const tax = computed(() => {
  return (parseFloat(subtotal.value) * 0.075).toFixed(2); // 7.5% VAT
});

const total = computed(() => {
  return (parseFloat(subtotal.value) + parseFloat(shipping.value) + parseFloat(tax.value)).toFixed(2);
});

const placeOrder = () => {
  // In a real app, this would process the order
  console.log('Placing order...');
  alert('Order placed successfully!');
  router.push('/order-confirmation');
};
</script>