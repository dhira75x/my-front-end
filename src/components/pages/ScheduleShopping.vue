<template>
  <section class="min-h-screen bg-gray-50">
    <Header />
    <div class="container px-4 py-16 mx-auto">
      <!-- Header Section -->
      <div class="max-w-3xl mx-auto text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">Schedule Your Shopping</h1>
        <p class="text-lg text-gray-600">
          Plan your purchase in advance. Select your items, choose a delivery date and
          time, and we'll handle the rest.
        </p>
      </div>

      <div class="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <form @submit.prevent="submitSchedule">
          <!-- Step 1: What are you scheduling? -->
          <div class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">1. Select Items</h2>

            <!-- Scheduling Type Toggle -->
            <div class="flex mb-6 bg-gray-100 p-1 rounded-lg">
              <button
                type="button"
                @click="schedulingType = 'product'"
                :class="[
                  'flex-1 py-2 px-4 rounded-md font-medium transition-colors',
                  schedulingType === 'product'
                    ? 'bg-white text-deepsaffron shadow-sm'
                    : 'text-gray-600 hover:text-gray-800',
                ]"
              >
                Schedule a Product
              </button>
              <button
                type="button"
                @click="schedulingType = 'list'"
                :class="[
                  'flex-1 py-2 px-4 rounded-md font-medium transition-colors',
                  schedulingType === 'list'
                    ? 'bg-white text-deepsaffron shadow-sm'
                    : 'text-gray-600 hover:text-gray-800',
                ]"
              >
                Build a Shopping List
              </button>
            </div>

            <!-- Product Scheduling -->
            <div v-if="schedulingType === 'product'">
              <div
                v-if="scheduledProduct"
                class="flex items-center p-4 border rounded-lg"
              >
                <img
                  :src="scheduledProduct.image"
                  :alt="scheduledProduct.name"
                  class="object-cover w-20 h-20 rounded-md mr-4"
                />
                <div>
                  <h3 class="font-semibold text-gray-800">{{ scheduledProduct.name }}</h3>
                  <p class="text-deepsaffron font-bold">{{ scheduledProduct.price }}</p>
                </div>
              </div>
              <p v-else class="text-gray-500">
                No product selected.
                <router-link to="/" class="text-deepsaffron hover:underline">
                  Go to homepage to choose a product.
                </router-link>
              </p>
            </div>

            <!-- Shopping List Scheduling -->
            <div v-if="schedulingType === 'list'">
              <div class="flex mb-4">
                <input
                  v-model="newItemName"
                  type="text"
                  placeholder="e.g., 2kg of Rice, 1L of Olive Oil"
                  class="flex-1 p-2 border border-gray-300 rounded-l-md focus:ring-deepsaffron focus:border-deepsaffron"
                  @keyup.enter="addToList"
                />
                <button
                  type="button"
                  @click="addToList"
                  class="px-4 py-2 font-semibold text-white bg-deepsaffron rounded-r-md hover:bg-opacity-90"
                >
                  Add
                </button>
              </div>
              <ul v-if="shoppingList.length > 0" class="space-y-2">
                <li
                  v-for="item in shoppingList"
                  :key="item.id"
                  class="flex justify-between items-center p-3 bg-gray-50 rounded-md"
                >
                  <span>{{ item.name }}</span>
                  <button
                    type="button"
                    @click="removeFromList(item.id)"
                    class="text-red-500 hover:text-red-700"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      ></path>
                    </svg>
                  </button>
                </li>
              </ul>
              <p v-else class="text-gray-500">Your shopping list is empty.</p>
            </div>
          </div>

          <!-- Step 2: When do you want it? -->
          <div class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">
              2. Choose Date & Time
            </h2>
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label for="date" class="block text-sm font-medium text-gray-700 mb-2"
                  >Delivery Date</label
                >
                <input
                  v-model="selectedDate"
                  type="date"
                  id="date"
                  :min="minDate"
                  required
                  class="w-full p-2 border border-gray-300 rounded-md focus:ring-deepsaffron focus:border-deepsaffron"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2"
                  >Preferred Time Slot</label
                >
                <select
                  v-model="selectedTimeSlot"
                  required
                  class="w-full p-2 border border-gray-300 rounded-md focus:ring-deepsaffron focus:border-deepsaffron"
                >
                  <option value="" disabled>Select a time</option>
                  <option v-for="slot in timeSlots" :key="slot" :value="slot">
                    {{ slot }}
                  </option>
                </select>
              </div>
            </div>
          </div>

          <!-- Step 3: Delivery Address -->
          <div class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">3. Delivery Address</h2>
            <div class="grid md:grid-cols-2 gap-4">
              <input
                v-model="deliveryAddress.street"
                type="text"
                placeholder="Street Address"
                required
                class="p-2 border border-gray-300 rounded-md focus:ring-deepsaffron focus:border-deepsaffron"
              />
              <input
                v-model="deliveryAddress.city"
                type="text"
                placeholder="City"
                required
                class="p-2 border border-gray-300 rounded-md focus:ring-deepsaffron focus:border-deepsaffron"
              />
              <input
                v-model="deliveryAddress.state"
                type="text"
                placeholder="State"
                required
                class="p-2 border border-gray-300 rounded-md focus:ring-deepsaffron focus:border-deepsaffron"
              />
              <input
                v-model="deliveryAddress.zipCode"
                type="text"
                placeholder="ZIP Code"
                required
                class="p-2 border border-gray-300 rounded-md focus:ring-deepsaffron focus:border-deepsaffron"
              />
            </div>
          </div>

          <!-- Step 4: Contact Information -->
          <div class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">
              4. Contact Information
            </h2>
            <div class="grid md:grid-cols-2 gap-4">
              <input
                v-model="contactInfo.name"
                type="text"
                placeholder="Full Name"
                required
                class="p-2 border border-gray-300 rounded-md focus:ring-deepsaffron focus:border-deepsaffron"
              />
              <input
                v-model="contactInfo.phone"
                type="tel"
                placeholder="Phone Number"
                required
                class="p-2 border border-gray-300 rounded-md focus:ring-deepsaffron focus:border-deepsaffron"
              />
            </div>
            <input
              v-model="contactInfo.email"
              type="email"
              placeholder="Email Address"
              required
              class="w-full mt-4 p-2 border border-gray-300 rounded-md focus:ring-deepsaffron focus:border-deepsaffron"
            />
          </div>

          <!-- Form Message -->
          <div
            v-if="formMessage"
            :class="['text-center p-3 rounded-md', formMessageClass]"
          >
            {{ formMessage }}
          </div>

          <!-- Submit Button -->
          <div class="text-center">
            <button
              type="submit"
              :disabled="!isFormValid || isSubmitting"
              class="px-8 py-3 font-semibold text-white transition-colors rounded-lg bg-deepsaffron hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="isSubmitting">Scheduling...</span>
              <span v-else>Confirm Schedule</span>
            </button>
          </div>
        </form>
      </div>
    </div>
    <Footer />
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import Header from "@/components/molecules/Header/Header.vue";
import Footer from "@/components/molecules/Footer/footer.vue";

const route = useRoute();
const router = useRouter();

// --- State ---
const schedulingType = ref("list"); // 'product' or 'list'
const scheduledProduct = ref(null);
const shoppingList = ref([]);
const newItemName = ref("");

const selectedDate = ref("");
const selectedTimeSlot = ref("");

const deliveryAddress = ref({
  street: "",
  city: "",
  state: "",
  zipCode: "",
});

const contactInfo = ref({
  name: "",
  email: "",
  phone: "",
});

const isSubmitting = ref(false);
const formMessage = ref("");
const formMessageClass = ref("");

// --- Constants ---
const timeSlots = [
  "9:00 AM - 12:00 PM",
  "12:00 PM - 3:00 PM",
  "3:00 PM - 6:00 PM",
  "6:00 PM - 9:00 PM",
];

// --- Computed Properties ---
const minDate = computed(() => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1); // Allow scheduling for tomorrow onwards
  return tomorrow.toISOString().split("T")[0];
});

const isFormValid = computed(() => {
  const hasItems =
    schedulingType.value === "product"
      ? scheduledProduct.value
      : shoppingList.value.length > 0;
  return (
    hasItems &&
    selectedDate.value &&
    selectedTimeSlot.value &&
    deliveryAddress.value.street &&
    deliveryAddress.value.city &&
    deliveryAddress.value.state &&
    deliveryAddress.value.zipCode &&
    contactInfo.value.name &&
    contactInfo.value.email &&
    contactInfo.value.phone
  );
});

// --- Methods ---
const addToList = () => {
  if (newItemName.value.trim()) {
    shoppingList.value.push({
      id: Date.now(),
      name: newItemName.value.trim(),
    });
    newItemName.value = "";
  }
};

const removeFromList = (id) => {
  shoppingList.value = shoppingList.value.filter((item) => item.id !== id);
};

const submitSchedule = async () => {
  if (!isFormValid.value) return;

  isSubmitting.value = true;
  formMessage.value = "";

  const payload = {
    type: schedulingType.value,
    items:
      schedulingType.value === "product" ? [scheduledProduct.value] : shoppingList.value,
    deliveryDate: selectedDate.value,
    timeSlot: selectedTimeSlot.value,
    address: deliveryAddress.value,
    contact: contactInfo.value,
  };

  console.log("Submitting Schedule:", payload);

  // --- Simulate API Call ---
  setTimeout(() => {
    // Simulate success
    formMessage.value =
      "Your shopping has been scheduled successfully! We will send you a confirmation.";
    formMessageClass.value = "text-green-600 bg-green-100";
    isSubmitting.value = false;

    // Redirect after a short delay
    setTimeout(() => {
      router.push("/");
    }, 3000);

    // In case of error:
    // formMessage.value = "There was an error scheduling your shopping. Please try again.";
    // formMessageClass.value = "text-red-600 bg-red-100";
    // isSubmitting.value = false;
  }, 1500);
};

// --- Lifecycle Hooks ---
onMounted(() => {
  // Check if a product ID was passed in the query string
  if (route.query.productId) {
    // In a real app, you would fetch this product from your store/API
    // For this example, we'll use mock data
    const mockProducts = {
      1: {
        id: 1,
        name: "Wireless Headphones",
        price: "₦79,000.00",
        image:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      },
      2: {
        id: 2,
        name: "Smart Watch",
        price: "₦129,999.00",
        image:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      },
    };

    const product = mockProducts[route.query.productId];
    if (product) {
      scheduledProduct.value = product;
      schedulingType.value = "product";
    }
  }
});
</script>

<style scoped>
/* No custom styles needed, using Tailwind CSS */
</style>
