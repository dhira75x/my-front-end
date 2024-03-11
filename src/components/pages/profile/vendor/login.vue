<template>
  <div class="max-h-screen">
    <section
      class="border-lime-500 bg-white min-h-screen flex items-center justify-center"
    >
      <div class="bg-white p-5 flex rounded-2xl shadow-lg max-w-3xl">
        <div class="md:w-1/2 px-5 border-r-2 border-lime-500">
          <h2 class="text-2xl font-bold text-lime-900">Login</h2>
          <p class="text-sm mt-4 text-lime-800">If you have an account, please login</p>
          <form class="mt-6" @submit="handleSubmit">
            <div>
              <label class="block text-lime-900">Login ID</label>
              <input
                v-model="loginId"
                type="text"
                placeholder="Enter Login Id"
                class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-lime-600 focus:bg-white focus:outline-none"
                autofocus
                required
              />
            </div>

            <div class="mt-4">
              <label class="block text-lime-900">Password</label>
              <input
                v-model="password"
                type="password"
                placeholder="Enter Password"
                minlength="6"
                class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-lime-600 focus:bg-white focus:outline-none"
                required
              />
            </div>

            <div class="text-right mt-2">
              <a
                href="#"
                class="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                >Forgot Password?</a
              >
            </div>
            <router-link to="/views/home"></router-link>
            <button
              type="submit"
              class="w-full block bg-lime-700 hover:bg-lime-500 focus:bg-lime-500 text-white font-semibold rounded-lg px-4 py-3 mt-6"
            >
              Log In
            </button>
            <div class="mt-4 text-center">
              <p class="text-sm">
                Don't have an account yet?
                <router-link
                  to="/registration"
                  class="mx-2 text-lime-700 hover:underline"
                >
                  Register.</router-link
                >
              </p>
            </div>
          </form>

          <div class="mt-7 grid grid-cols-3 items-center text-gray-500">
            <hr class="border-gray-500" />
            <p class="text-center text-sm">OR</p>
            <hr class="border-gray-500" />
          </div>

          <button
            class="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="w-6 h-6"
              viewBox="0 0 48 48"
            >
              <defs>
                <path
                  id="a"
                  d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                />
              </defs>
              <clipPath id="b">
                <use xlink:href="#a" overflow="visible" />
              </clipPath>
              <path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
              <path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
              <path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
              <path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
            </svg>
            <span class="ml-4">Login with Google</span>
          </button>
        </div>

        <div class="w-1/2 md:block hidden">
          <img
            src="../../../../assets/sideven.png"
            class="mt-28 bg-white"
            alt="page img"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const loginId = ref("");
const password = ref("");

const router = useRouter();

const login = async () => {
  try {
    if (loginId.value === "user" && password.value === "pass") {
      console.log("Login successful");

      router.push("/");
    } else {
      alert("Invalid login ID or password");
    }
  } catch (error) {
    console.error("Login error:", error);
    alert("Login failed");
  }
};

const handleSubmit = (e) => {
  e.preventDefault();
  login();
};
</script>
