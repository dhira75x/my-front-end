<template>
  <div class="container mx-auto shadow-2xl">
    <div class="flex h-screen items-center justify-center px-6">
      <!-- Row -->
      <div class="flex w-full shadow-2xl lg:w-11/12 xl:w-3/4">
        <!-- Col -->
        <div
          class="hidden h-auto w-full rounded-l-lg bg-gray-400 bg-cover lg:block lg:w-1/2"
        >
          <img
            class="h-full w-full object-cover"
            src="../../assets/login.jpeg"
            alt="img"
          />
        </div>
        <!-- Col -->
        <div class="w-full rounded-lg bg-white p-5 lg:w-1/2 lg:rounded-l-none">
          <div class="mb-4 px-8 text-center">
            <h3 class="mb-2 pt-4 text-2xl text-lime-900">Forgot Your Password?</h3>
            <p class="mb-4 text-sm text-lime-900">
              We get it, stuff happens. Just enter your email address below and we'll send
              you a link to reset your password!
            </p>
          </div>
          <form
            @submit.prevent="resetPassword"
            class="mb-4 rounded bg-white px-8 pb-8 pt-6"
          >
            <div class="mb-4">
              <label class="mb-2 block text-sm font-bold text-gray-700" for="email">
                Email
              </label>
              <input
                class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 text-sm leading-tight text-gray-700 shadow focus:outline-none"
                id="email"
                type="email"
                placeholder="Enter Email Address..."
              />
            </div>
            <div class="mb-6 text-center">
              <button
                class="focus:shadow-outline w-full rounded-full bg-lime-700 px-4 py-2 font-bold text-white hover:bg-lime-900 focus:outline-none"
                type="submit"
                id="resetButton"
              >
                Reset Password
              </button>
            </div>
            <hr class="mb-6 border-t" />
            <div class="text-center">
              <router-link
                to="/user-reg"
                class="inline-block align-baseline text-sm text-lime-700 hover:text-lime-900"
              >
                Create an Account!</router-link>
            </div>
            <div class="text-center">
              <router-link
                to="/user-login"
                class="inline-block align-baseline text-sm text-lime-700 hover:text-lime-900"
              >
                Already have an account? Login!</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const reset = ref({
  email: "",
});

// const resetPassword = async () => {
//   if (!reset.value.email) {
//     alert("Please enter an email address.");
//     return;
//   }

//   try {
//     const response = await passwordApi.get("", {
//       params: {
//         email: reset.value.email,
//       },
//     });

//     console.log(response.data);

//     const token = response.data.token;
//     router.push({ path: "/reset-password", query: { token: token } });
//   } catch (error) {
//     console.error(error);
//     alert("Failed to send reset link.");
//   }
// };
function resetPassword() {
  router.push({ name: "reset-password" });
}
</script>
