<template>
  <div class="lg:relative">
    <div
      class="lg:grid md:grid md:grid-cols-2 lg:grid-cols-2 bg-world bg-opacity-90 background"
    >
      <div class="hidden h-auto w-full rounded-l-lg bg-green-200 bg-cover lg:block">
        <div
          @click="$router.go(-1)"
          class="flex space-x-3 border border-gray-400 rounded-full px-4 p-1.5 justify-start items-center w-36"
        >
          <img src="/left-arrow.svg" alt="" class="cursor-pointer" />
          <p class="text-sm">Back Home</p>
        </div>
        <img class="h-full w-full object-cover" src="../../assets/login.jpeg" alt="img" />
      </div>
      <div class="bg-[#FFFFFF] px-10 py-10 text-sm text-black-200 col-span-1">
        <div class="lg:w-full rounded-md sm:shadow-md md:p-6 bg-[#f9f9f9] mt-5">
          <form @submit.prevent="resetPassword" class="w-full p-2">
            <section class="mt-5">
              <div class="flex flex-col col-span-1 gap-4">
                <label for="newPassword">New Password:*</label>
                <div
                  class="flex justify-between space-y-2 text-center border bg-white border-gray-300 py-1 rounded-md px-2.5"
                >
                  <input
                    v-model="reset.new_password"
                    id="newPassword"
                    :type="showNewPassword ? 'text' : 'password'"
                    class="w-full p-2"
                    placeholder="New Password"
                  />
                  <img
                    src="/password.svg"
                    alt=""
                    class="w-6 h-6"
                    @click="toggleNewPasswordVisibility"
                  />
                </div>
              </div>
              <div class="flex flex-col col-span-1 gap-4 mt-3">
                <label for="confirmPassword">Confirm New Password:*</label>
                <div
                  class="flex justify-between space-y-2 text-center border bg-white border-gray-300 py-1 rounded-md px-2.5"
                >
                  <input
                    v-model="reset.confirm_password"
                    id="confirmPassword"
                    :type="showConfirmPassword ? 'text' : 'password'"
                    class="w-full p-2"
                    placeholder="Confirm Password"
                  />
                  <img
                    src="/password.svg"
                    class="w-6 h-6"
                    alt=""
                    @click="toggleConfirmPasswordVisibility"
                  />
                  <div class="card flex justify-center"></div>
                </div>
              </div>
              <p class="text-sm text-neutral-400 mt-3">
                Password must be more than 8 characters, and include at least 1 uppercase,
                lowercase, and special character.
              </p>
              <div class="mb-4 flex flex-col mt-5 p-2 text-neutral-400">
                <label class="flex items-center mb-1">
                  <input
                    type="radio"
                    class="mr-2"
                    :checked="hasUppercase"
                    disabled
                    :class="{ 'bg-green-900': hasUppercase }"
                  />
                  Uppercase
                </label>
                <label class="flex items-center mb-1">
                  <input
                    type="radio"
                    class="mr-2"
                    :checked="hasLowercase"
                    disabled
                    :class="{ 'text-green-900': hasLowercase }"
                  />
                  Lowercase
                </label>
                <label class="flex items-center mb-1">
                  <input
                    type="radio"
                    class="mr-2"
                    :checked="hasNumbers"
                    disabled
                    :class="{ 'text-green-900': hasNumbers }"
                  />
                  Numbers
                </label>
                <label class="flex items-center">
                  <input
                    type="radio"
                    class="mr-2"
                    :checked="hasSpecialCharacter"
                    disabled
                    :class="{ 'text-green-900': hasSpecialCharacter }"
                  />
                  Symbols
                </label>
              </div>
            </section>
            <div class="flex justify-end items-center mt-8 space-x-6">
              <button
                type="submit"
                id="resetButton"
                class="bg-lime-700 text-white px-6 py-2 rounded-md"
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useToast } from "vue-toastification";

const router = useRouter();
const route = useRoute();
const toast = useToast();

const showNewPassword = ref(false);
const showConfirmPassword = ref(false);

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

  try {
    const response = await userService.post("/auth/reset-password", {
      token: token.value,
      new_password: reset.value.new_password,
      confirm_password: reset.value.confirm_password,
    });

    console.log("Server response:", response.data);
    toast.success("Password successfully reset.");
    router.push("/login");
  } catch (error) {
    console.error("Error resetting password:", error);
    if (error.response && error.response.data && error.response.data.message) {
      toast.error(`Failed to reset password: ${error.response.data.message}`);
    } else {
      toast.error("Failed to reset password due to an unexpected error.");
    }
  }
};
// const resetPassword = async () => {
//   if (!new_Password.value || !confirm_password.value) {
//     alert("Please fill in both password fields.");
//     return;
//   }

//   if (new_Password.value !== confirm_password.value) {
//     alert("Passwords do not match.");
//     return;
//   }

//   const token = route.query.token;
//   if (!token) {
//     alert("Invalid token.");
//     return;
//   }

//   try {
//     const response = await userService.post("/auth/reset-password", {
//       token: token,
//       new_password: newPassword.value,
//     });

//     console.log(response.data);
//     alert("Password successfully reset. You can now log in with your new password.");
//     router.push("/login");
//   } catch (error) {
//     console.error(error);
//     alert("Failed to reset password.");
//   }
// };
// const props = defineProps({
//   description: {
//     type: String,
//     required: true,
//     default: "Ensure to input appropriate details to enable you to reset your password.",
//   },
// });
</script>

<style scoped>
.bg-world {
  background-image: url("@/assets/cbg.jpg");
  background-size: cover;
}
</style>
