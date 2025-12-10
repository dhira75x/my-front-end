<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
    <!-- Decorative elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-lime-100 opacity-50 blur-3xl"></div>
      <div class="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-green-100 opacity-50 blur-3xl"></div>
    </div>
    
    <div class="relative z-10 w-full max-w-6xl">
      <div class="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl overflow-hidden">
        <!-- Left Panel -->
        <div class="w-full md:w-1/2 bg-gradient-to-br from-lime-600 to-green-800 p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
          <!-- Decorative pattern -->
          <div class="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="1" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#pattern)" />
            </svg>
          </div>
          
          <div class="relative z-10">
            <div class="flex items-center space-x-3 mb-10">
              <div class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                </svg>
              </div>
              <img src="@/assets/ovo.svg" alt="Ovo Market" class="h-10" />
            </div>

            <h1 class="text-3xl md:text-4xl font-bold text-white mb-4">
              Reset Your Password
            </h1>
            <p class="text-lime-100 mb-10">
              Create a new secure password for your account. Make sure it's strong and unique.
            </p>

            <div class="space-y-6">
              <div class="flex items-center space-x-4 p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                <div class="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-white font-medium">Secure & Private</h3>
                  <p class="text-lime-100 text-sm">Your information is protected</p>
                </div>
              </div>
              
              <div class="flex items-center space-x-4 p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                <div class="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-white font-medium">Quick & Easy</h3>
                  <p class="text-lime-100 text-sm">Reset in just a few steps</p>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-12 text-lime-200 text-sm">
            © {{ new Date().getFullYear() }} Ovo Market. All rights reserved.
          </div>
        </div>

        <!-- Right Panel -->
        <div class="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div class="max-w-md mx-auto w-full">
            <!-- Back Button -->
            <button
              @click="$router.go(-1)"
              class="flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </button>

            <!-- Form -->
            <form @submit.prevent="resetPassword" class="space-y-6">
              <div>
                <label for="newPassword" class="block text-sm font-medium text-gray-700 mb-1">
                  New Password
                </label>
                <div class="relative">
                  <input
                    v-model="reset.new_password"
                    id="newPassword"
                    :type="showNewPassword ? 'text' : 'password'"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-all"
                    placeholder="Enter your new password"
                    required
                  />
                  <button
                    type="button"
                    @click="toggleNewPasswordVisibility"
                    class="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    <svg
                      v-if="showNewPassword"
                      class="h-5 w-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <svg
                      v-else
                      class="h-5 w-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  </button>
                </div>
              </div>

              <div>
                <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-1">
                  Confirm New Password
                </label>
                <div class="relative">
                  <input
                    v-model="reset.confirm_password"
                    id="confirmPassword"
                    :type="showConfirmPassword ? 'text' : 'password'"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-all"
                    placeholder="Confirm your new password"
                    required
                  />
                  <button
                    type="button"
                    @click="toggleConfirmPasswordVisibility"
                    class="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    <svg
                      v-if="showConfirmPassword"
                      class="h-5 w-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <svg
                      v-else
                      class="h-5 w-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Password Requirements -->
              <div class="bg-gray-50 rounded-lg p-4">
                <h3 class="text-sm font-medium text-gray-700 mb-3">Password Requirements:</h3>
                <ul class="space-y-2">
                  <li class="flex items-center">
                    <div :class="['w-5 h-5 rounded-full flex items-center justify-center mr-2', 
                      reset.new_password.length >= 8 ? 'bg-green-500' : 'bg-gray-300']">
                      <svg v-if="reset.new_password.length >= 8" class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span :class="['text-sm', reset.new_password.length >= 8 ? 'text-green-600' : 'text-gray-500']">
                      At least 8 characters
                    </span>
                  </li>
                  <li class="flex items-center">
                    <div :class="['w-5 h-5 rounded-full flex items-center justify-center mr-2', 
                      hasUppercase ? 'bg-green-500' : 'bg-gray-300']">
                      <svg v-if="hasUppercase" class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span :class="['text-sm', hasUppercase ? 'text-green-600' : 'text-gray-500']">
                      At least one uppercase letter
                    </span>
                  </li>
                  <li class="flex items-center">
                    <div :class="['w-5 h-5 rounded-full flex items-center justify-center mr-2', 
                      hasLowercase ? 'bg-green-500' : 'bg-gray-300']">
                      <svg v-if="hasLowercase" class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span :class="['text-sm', hasLowercase ? 'text-green-600' : 'text-gray-500']">
                      At least one lowercase letter
                    </span>
                  </li>
                  <li class="flex items-center">
                    <div :class="['w-5 h-5 rounded-full flex items-center justify-center mr-2', 
                      hasSpecialCharacter ? 'bg-green-500' : 'bg-gray-300']">
                      <svg v-if="hasSpecialCharacter" class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span :class="['text-sm', hasSpecialCharacter ? 'text-green-600' : 'text-gray-500']">
                      At least one special character
                    </span>
                  </li>
                </ul>
              </div>

              <!-- Password Match Indicator -->
              <div v-if="reset.confirm_password" class="flex items-center">
                <div :class="['w-5 h-5 rounded-full flex items-center justify-center mr-2', 
                  reset.new_password === reset.confirm_password ? 'bg-green-500' : 'bg-red-500']">
                  <svg v-if="reset.new_password === reset.confirm_password" class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <svg v-else class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span :class="['text-sm', 
                  reset.new_password === reset.confirm_password ? 'text-green-600' : 'text-red-600']">
                  {{ reset.new_password === reset.confirm_password ? 'Passwords match' : 'Passwords do not match' }}
                </span>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                :disabled="!isFormValid"
                :class="[
                  'w-full py-3 px-4 rounded-lg font-medium transition-all',
                  isFormValid 
                    ? 'bg-gradient-to-r from-lime-600 to-green-700 text-white hover:from-lime-700 hover:to-green-800 shadow-md hover:shadow-lg transform hover:-translate-y-0.5' 
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                ]"
              >
                <span v-if="isSubmitting" class="flex items-center justify-center">
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Resetting...
                </span>
                <span v-else>Reset Password</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useToast } from "vue-toastification";

const router = useRouter();
const route = useRoute();
const toast = useToast();

const showNewPassword = ref(false);
const showConfirmPassword = ref(false);
const isSubmitting = ref(false);

const toggleNewPasswordVisibility = () => {
  showNewPassword.value = !showNewPassword.value;
};

const toggleConfirmPasswordVisibility = () => {
  showConfirmPassword.value = !showConfirmPassword.value;
};

const reset = ref({
  new_password: "",
  confirm_password: "",
});

const token = ref(route.query.token);

const hasUppercase = computed(() => /[A-Z]/.test(reset.value.new_password));
const hasLowercase = computed(() => /[a-z]/.test(reset.value.new_password));
const hasNumbers = computed(() => /\d/.test(reset.value.new_password));
const hasSpecialCharacter = computed(() =>
  /[!@#$%^&*(),.?":{}|<>]/.test(reset.value.new_password)
);

const isFormValid = computed(() => {
  return (
    reset.value.new_password.length >= 8 &&
    hasUppercase.value &&
    hasLowercase.value &&
    hasSpecialCharacter.value &&
    reset.value.new_password === reset.value.confirm_password
  );
});

const isValidPasswordFormat = (password) => {
  const minLength = 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  return (
    password.length >= minLength && hasUppercase && hasLowercase && hasSpecialCharacter
  );
};

const resetPassword = async () => {
  if (!token.value) {
    toast.error("Invalid or missing token.");
    return;
  }

  if (reset.value.new_password !== reset.value.confirm_password) {
    toast.error("Passwords do not match.");
    return;
  }

  if (!isValidPasswordFormat(reset.value.new_password)) {
    toast.error("The new password does not meet the required format.");
    return;
  }

  isSubmitting.value = true;

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In a real app, this would be:
    // const response = await userService.post("/auth/reset-password", {
    //   token: token.value,
    //   new_password: reset.value.new_password,
    //   confirm_password: reset.value.confirm_password,
    // });

    console.log("Password reset successful");
    toast.success("Password successfully reset.");
    router.push("/user-login");
  } catch (error) {
    console.error("Error resetting password:", error);
    if (error.response && error.response.data && error.response.data.message) {
      toast.error(`Failed to reset password: ${error.response.data.message}`);
    } else {
      toast.error("Failed to reset password due to an unexpected error.");
    }
  } finally {
    isSubmitting.value = false;
  }
};
</script>