<template>
  <div class="flex min-h-screen items-center bg-gray-50">
    <div class="mx-auto h-full max-w-4xl flex-1 rounded-lg bg-white shadow-xl">
      <div class="flex flex-col md:flex-row">
        <div class="hidden md:block md:h-auto md:w-1/2">
          <img class="h-[60%] w-full mt-18 object-cover" src="../assets/login.jpeg" alt="img" />
        </div>
        <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
          <form @submit.prevent="register">
            <div class="w-full">
              <div class="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                  <path fill="#40826D"
                    d="M27.5,34c1.9,0,3.5,1.6,3.5,3.5S29.4,41,27.5,41S24,39.4,24,37.5S25.6,34,27.5,34z M12.5,34c1.9,0,3.5,1.6,3.5,3.5S14.4,41,12.5,41S9,39.4,9,37.5S10.6,34,12.5,34z M0,6c5.3,5,11.5,7.1,22.8,7.1s25.2-0.6,25.2,3c0,1.8-1.9,3.5-5.3,6.5C39.4,25.6,33,31,33,31c0-1.5,9.1-9.3,9.1-11.7c0-3.2-13.1-2.7-19-2.8C13,16.3,4.7,14.9,0,6z">
                  </path>
                </svg>
              </div>
              <h1 class="mb-4 text-center text-2xl font-bold text-deepsaffron">Sign up</h1>

              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm"> First Name </label>
                  <input type="text"
                    class="w-full rounded-md border px-4 py-2 text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    v-model="registerForm.firstname" placeholder="John" required autofocus />
                </div>
                <div>
                  <label class="block text-sm"> Last Name </label>
                  <input type="text"
                    class="w-full rounded-md border px-4 py-2 text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    v-model="registerForm.lastname" placeholder="Doe" required />
                </div>
              </div>

              <div class="mt-4">
                <label class="block text-sm"> Phone Number </label>
                <input type="tel"
                  class="w-full rounded-md border px-4 py-2 text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  v-model="registerForm.phone" placeholder="Enter Your Phone Number" autocomplete="tel" required />
              </div>
              <div class="mt-4">
                <label class="block text-sm"> Email </label>
                <input type="email"
                  class="w-full rounded-md border px-4 py-2 text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  v-model="registerForm.email" placeholder="Email Address" autocomplete="username" required />
              </div>
              <div class="mt-4">
                <label class="block text-sm"> Country </label>
                <input type="text"
                  class="w-full rounded-md border px-4 py-2 text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  v-model="registerForm.country" placeholder="Nigeria" required />
              </div>

              <div class="mt-4">
                <label class="block text-sm"> Home Address </label>
                <textarea
                  class="w-full rounded-md border px-4 py-2 text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  v-model="registerForm.homeAddress" placeholder="Street address, City, State" required></textarea>
              </div>

              <div class="mt-4 text-center">
                <button type="button" @click="registerForm.shippingAddress = registerForm.homeAddress"
                  class="text-xs text-blue-600 hover:underline">
                  Same as home address
                </button>
              </div>

              <div class="mt-2">
                <label class="block text-sm"> Shipping Address </label>
                <textarea
                  class="w-full rounded-md border px-4 py-2 text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  v-model="registerForm.shippingAddress" placeholder="Delivery address" required></textarea>
              </div>

              <div class="mt-4">
                <label class="block text-sm"> Password </label>
                <div class="relative mt-2 flex items-center">
                  <input
                    class="w-full rounded-md border px-4 py-2 text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    v-model="registerForm.password" placeholder="Password" type="password" required
                    autocomplete="new-password" />
                </div>
              </div>

              <div class="mt-4">
                <label class="block text-sm"> Confirm Password </label>
                <div class="relative mt-2 flex items-center">
                  <input
                    class="w-full rounded-md border px-4 py-2 text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    v-model="registerForm.confirmPassword" placeholder="Confirm Password" type="password" required
                    autocomplete="new-password" />
                </div>
              </div>
              <button type="submit"
                class="focus:shadow-outline-blue my-4 mt-4 block w-full rounded-lg border border-transparent bg-deepsaffron px-4 py-2 text-center text-sm font-medium leading-5 text-white transition-colors duration-150 hover:bg-deepsaffron focus:outline-none active:bg-deepsaffron"
                :disabled="registerForm.processing">
                Register
              </button>

              <div class="mt-4 text-center">
                <p class="text-sm">
                  Already have an account yet?
                  <router-link to="/user-login" class="mx-2 text-deepsaffron hover:underline">
                    Log In.</router-link>
                </p>
              </div>
              <div>
                <Label for="terms">
                  <div class="flex items-center">
                    <Checkbox name="terms" id="terms" v-model:checked="registerForm.terms" />

                    <div class="ml-2 text-gray-500">
                      I agree to the
                      <a target="_blank" href="#" class="text-sm text-deepsaffron underline hover:text-deepsaffron">
                        Terms of Service
                      </a>
                      and
                      <a target="_blank" href="/privacy-policy"
                        class="text-sm text-deepsaffron underline hover:text-deepsaffron">
                        Privacy Policy
                      </a>
                    </div>
                  </div>
                </Label>
              </div>
              <hr class="my-8" />
              <div class="flex items-center justify-center gap-4">
                <button
                  class="flex w-full items-center justify-center rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 text-white hover:border-gray-500 focus:border-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    class="mr-2 h-4 w-4" viewBox="0 0 48 48">
                    <defs>
                      <path id="a"
                        d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
                    </defs>
                    <clipPath id="b">
                      <use xlink:href="#a" overflow="visible" />
                    </clipPath>
                    <path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
                    <path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
                    <path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
                    <path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
                  </svg>Google
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Notification Alert -->
    <div v-if="showAlert"
      class="fixed top-4 right-4 z-50 flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md animate__animated animate__fadeInRight dark:bg-gray-800">
      <div :class="['flex items-center justify-center w-12', isError ? 'bg-red-600' : 'bg-lime-600']">
        <svg v-if="!isError" class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
        </svg>
        <svg v-else class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM20.6667 26.6666H19.3334V25.3333H20.6667V26.6666ZM20.6667 23.3333H19.3334V13.3333H20.6667V23.3333Z" />
        </svg>
      </div>
      <div class="px-4 py-2 -mx-3">
        <div class="mx-3">
          <span :class="['font-semibold', isError ? 'text-red-600' : 'text-lime-600']">{{ alertTitle }}</span>
          <p class="text-sm text-gray-600 dark:text-gray-200">{{ alertMessage }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/userStore.js";

const registerForm = reactive({
  firstname: "",
  lastname: "",
  phone: "",
  email: "",
  password: "",
  confirmPassword: "",
  country: "Nigeria",
  homeAddress: "",
  shippingAddress: "",
  terms: false,
  processing: false,
});

const showAlert = ref(false);
const isError = ref(false);
const alertTitle = ref('');
const alertMessage = ref('');

const router = useRouter();
const userStore = useUserStore();


const showNotification = (title, message, error = false) => {
  alertTitle.value = title;
  alertMessage.value = message;
  isError.value = error;
  showAlert.value = true;
  if (!error) {
    setTimeout(() => {
      showAlert.value = false;
    }, 4000);
  }
};

// Register logic
const register = async () => {
  if (registerForm.password !== registerForm.confirmPassword) {
    showNotification("Validation Error", "Passwords do not match", true);
    return;
  }

  // if (!registerForm.terms) {
  //   showNotification("Validation Error", "Please agree to the Terms of Service and Privacy Policy", true);
  //   return;
  // }

  registerForm.processing = true;
  try {
    const { processing, terms, confirmPassword, ...userData } = registerForm;
    const response = await userStore.register(userData, 'users');

    if (response.status === "OK") {
      showNotification("Success", "Registration successful! Please log in.");
      setTimeout(() => {
        router.push({ name: "user-login" });
      }, 2000);
    } else {
      showNotification("Error", response.msg || "Registration failed", true);
    }
  } catch (error) {
    console.error("Registration error:", error);
    showNotification("Error", error.response?.data?.msg || "An error occurred during registration. Please try again.", true);
  } finally {
    registerForm.processing = false;
  }
};

// You can also use ref for individual variables if needed
const someRefVariable = ref("some value");

// Export variables and functions you want to use in the template
{
  registerForm, register, someRefVariable;
}
</script>
