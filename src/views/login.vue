<template>
  <div class="flex min-h-screen items-center bg-gray-50 animate__animated animate__fadeIn">
    <div class="mx-auto h-full max-w-4xl flex-1 rounded-lg bg-white shadow-xl">
      <div class="flex flex-col md:flex-row">
        <div class="h-32 md:h-auto md:w-1/2">
          <img
            class="h-full w-full object-cover"
            src="../assets/login.jpeg"
            alt="img"
          />
        </div>
        <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
          <div class="w-full">
            <div class="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#40826D"
                  d="M27.5,34c1.9,0,3.5,1.6,3.5,3.5S29.4,41,27.5,41S24,39.4,24,37.5S25.6,34,27.5,34z M12.5,34c1.9,0,3.5,1.6,3.5,3.5S14.4,41,12.5,41S9,39.4,9,37.5S10.6,34,12.5,34z M0,6c5.3,5,11.5,7.1,22.8,7.1s25.2-0.6,25.2,3c0,1.8-1.9,3.5-5.3,6.5C39.4,25.6,33,31,33,31c0-1.5,9.1-9.3,9.1-11.7c0-3.2-13.1-2.7-19-2.8C13,16.3,4.7,14.9,0,6z"
                ></path>
              </svg>
            </div>
            <h1 class="my-2 mb-4 text-center text-2xl font-bold text-deepsaffron animate__animated animate__fadeInDown">
              Login to Your Account
            </h1>
            <div class="my-2">
              <label class="block text-sm"> Email </label>
              <input
                v-model="email"
                type="email"
                class="w-full rounded-md border px-4 py-2 text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder=""
              />
            </div>
            <label class="mt-4 block text-sm"> Password </label>
            <div class="relative mt-2 flex items-center">
              <button
                class="absolute right-0 focus:outline-none rtl:left-0 rtl:right-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="mx-4 h-6 w-6 text-gray-400 transition-colors duration-300 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
                >
                  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                  <path
                    fill-rule="evenodd"
                    d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>

              <input
                v-model="password"
                class="w-full rounded-md border px-4 py-2 text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder=""
                type="password"
              />
            </div>
            <p class="mt-4">
              <router-link
                to="/forgot-password"
                class="text-sm text-deepsaffron hover:underline"
                >Forgot your password?</router-link
              >
            </p>
            <button
              @click="login"
              class="my-3 mt-4 block w-full rounded-lg border border-transparent bg-deepsaffron px-4 py-2 text-center text-sm font-medium leading-5 text-white transition duration-150 hover:bg-deepsaffron focus:outline-none active:bg-deepsaffron hover:scale-105 focus:ring-2 focus:ring-deepsaffron"
            >
              Log in
            </button>
            <div class="mt-4 text-center">
              <p class="text-sm">
                Don't have an account yet?
                <router-link
                  to="/user-reg"
                  class="mx-2 text-deepsaffron hover:underline"
                >
                  Register.</router-link
                >
              </p>
            </div>
            <hr class="my-8" />

            <div class="flex items-center justify-center gap-4">
              <button
                class="flex w-full items-center justify-center gap-2 rounded-lg border border-transparent bg-[#1877F2] px-4 py-2 text-sm transition-colors duration-300 hover:bg-[#1877F2]/80"
              >
                <svg
                  class="h-5 w-5 sm:h-6 sm:w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_3033_94669)">
                    <path
                      d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3033_94669">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Facebook
              </button>
              <button
                class="text-gray-70 flex w-full items-center justify-center rounded-lg border border-gray-300 px-4 py-2 text-sm hover:border-gray-500 focus:border-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  class="mr-2 h-4 w-4"
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
                  <path
                    clip-path="url(#b)"
                    fill="#FBBC05"
                    d="M0 37V11l17 13z"
                  />
                  <path
                    clip-path="url(#b)"
                    fill="#EA4335"
                    d="M0 11l17 13 7-6.1L48 14V0H0z"
                  />
                  <path
                    clip-path="url(#b)"
                    fill="#34A853"
                    d="M0 37l30-23 7.9 1L48 0v48H0z"
                  />
                  <path
                    clip-path="url(#b)"
                    fill="#4285F4"
                    d="M48 48L17 24l-4-3 35-10z"
                  /></svg
                >Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();

const login = () => {
  router.push({ name: "landing" });
};
</script>
