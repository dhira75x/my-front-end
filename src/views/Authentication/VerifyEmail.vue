<script setup>
import { reactive, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/userStore.js";
import Button from "../../components/atoms/Button/button.vue";

const router = useRouter();
const userStore = useUserStore();

const verifyForm = reactive({
  otp: "",
  email: "", // We'll get this from store or local storage
  processing: false,
});

const showAlert = ref(false);
const isError = ref(false);
const alertTitle = ref('');
const alertMessage = ref('');

onMounted(() => {
  // Try to get email from user store or previous registration state
  if (userStore.user?.email) {
    verifyForm.email = userStore.user.email;
  }
  // If not in store, maybe it was just registered, check if we passed it via router
  // For now, let's assume it's in the store or needs to be provided
});

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

const submit = async () => {
  if (verifyForm.otp.length !== 6) {
    showNotification("Validation Error", "Please enter a valid 6-digit code", true);
    return;
  }

  verifyForm.processing = true;
  try {
    const emailToVerify = localStorage.getItem('registeredEmail') || verifyForm.email;
    console.log(emailToVerify, verifyForm.otp);
    const response = await userStore.verifyOTP(emailToVerify, verifyForm.otp);
    if (response.status === "OK") {
      showNotification("Success", "Email verified successfully!");
      localStorage.removeItem('registeredEmail');
      setTimeout(() => {
        router.push({ name: "Home" }); // Or wherever you want to send them
      }, 2000);
    } else {
      showNotification("Error", response.msg || "Verification failed", true);
    }
  } catch (error) {
    showNotification("Error", error.response?.data?.msg || "An error occurred. Please try again.", true);
  } finally {
    verifyForm.processing = false;
  }
};

const resendOTP = async () => {
  verifyForm.processing = true;
  try {
    const response = await userStore.resendOTP(verifyForm.email);
    if (response.status === "OK") {
      showNotification("Success", "A new verification code has been sent.");
    } else {
      showNotification("Error", response.msg || "Resend failed", true);
    }
  } catch (error) {
    showNotification("Error", error.response?.data?.msg || "An error occurred.", true);
  } finally {
    verifyForm.processing = false;
  }
};
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-xl">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Verify your email</h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Enter the 6-digit code sent to
          <span class="font-medium text-deepsaffron">{{ verifyForm.email || 'your email' }}</span>
        </p>
      </div>

      <form class="mt-8 space-y-6" @submit.prevent="submit">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="otp" class="sr-only">Verification Code</label>
            <input id="otp" name="otp" type="text" required maxlength="6"
              class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-4 text-center text-2xl font-bold tracking-widest text-gray-900 placeholder-gray-500 focus:z-10 focus:border-deepsaffron focus:outline-none focus:ring-deepsaffron sm:text-3xl"
              placeholder="000000" v-model="verifyForm.otp" />
          </div>
        </div>

        <div class="flex flex-col space-y-4">
          <Button type="submit" class="w-full justify-center bg-deepsaffron hover:bg-orange-600"
            :disabled="verifyForm.processing">
            {{ verifyForm.processing ? 'Verifying...' : 'Verify Email' }}
          </Button>

          <div class="text-center">
            <button type="button" @click="resendOTP" class="text-sm font-medium text-blue-600 hover:text-blue-500"
              :disabled="verifyForm.processing">
              Didn't receive a code? Resend
            </button>
          </div>
        </div>
      </form>
    </div>

    <!-- Notification Alert -->
    <div v-if="showAlert"
      class="fixed top-4 right-4 z-50 flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md animate__animated animate__fadeInRight">
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
          <p class="text-sm text-gray-600">{{ alertMessage }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
