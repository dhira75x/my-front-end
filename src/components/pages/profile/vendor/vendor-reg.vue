<template>
    <section class="bg-white dark:bg-[F5F5F5]">
    <div class="flex justify-center min-h-screen">
        <div class="hidden bg-cover lg:block lg:w-2/5" style="background-image: url('https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80')">
        </div>

        <div class="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
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
                <h1 class="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                    Get your account up and running.
                </h1>

                <p class="mt-4 text-lime-800 dark:text-lime-900">
                    Let’s get you all set up so you can verify your personal details account and begin your journey.
                </p>

                <div class="mt-6">
                    <h1 class="text-lime-800 dark:text-lime-900">Vendor Account Registration</h1>
                </div>

                <form class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
                 @submit.prevent="submitForm"
                >
                    <div>
                        <label class="block mb-2 text-sm text-lime-950 dark:text-lime-600">First Name</label>
                        <input type="text" placeholder="John" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-200 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div>
                        <label class="block mb-2 text-sm text-lime-950 dark:text-lime-600">Last name</label>
                        <input type="text" placeholder="Snow" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-200 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div>
                        <label class="block mb-2 text-sm text-lime-950 dark:text-lime-600">Phone number</label>
                        <input type="text" placeholder="XXX-XX-XXXX-XXX" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-200 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div>
                        <label class="block mb-2 text-sm text-lime-950 dark:text-lime-600">Email address</label>
                        <input type="email" placeholder="johnsnow@example.com" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-200 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div>
                        <label class="block mb-2 text-sm text-lime-950 dark:text-lime-600">Means of Identification</label>
                        <select id="means" name="means" class="mt-1 w-full rounded-md border p-2">
                          <option value="" selected disabled class="text-gray-400">Select a Means of Identification</option>
                          <option value="">National Identification Card</option>
                          <option value="">International Passport</option>
                          <option value="">Voter's Card</option>
                       </select>
                    </div>

                    <div>
                        <label class="block mb-2 text-sm text-lime-950 dark:text-lime-600">Upload MOI</label>
                        <div class="max-w-sm">
                         <div class="relative z-0 mt-0.5 flex w-full -space-x-px">
                        <input id="moifile" type="file" class="block w-full cursor-pointer appearance-none rounded-l-md border border-lime-100 bg-white px-3 py-2 text-sm transition focus:z-10 focus:border-lime-700 focus:outline-none focus:ring-1 focus:ring-lime-600 disabled:cursor-not-allowed disabled:bg-lime-100 disabled:opacity-75">
                         <button type="submit" class="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded-r border border-lime-100 bg-lime-700 px-3 py-2 text-sm font-medium text-lime-950 transition hover:border-lime-500 hover:bg-lime-100 focus:z-10 focus:border-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-500">Save</button>
                        </div>
                    </div>
                    </div>

                    <div>
                        <label class="block mb-2 text-sm text-lime-950 dark:text-lime-600">Name of Business</label>
                        <input type="text" placeholder="Ovo Market Limited" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-200 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    <div>
                        <label class="block mb-2 text-sm text-lime-950 dark:text-lime-600">CAC License Number</label>
                        <input type="text" placeholder="AW-J/00985-09" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-200 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    <div>
                        <label class="block mb-2 text-sm text-lime-950 dark:text-lime-600">CAC Verification</label>
                        <div class="max-w-sm">
                         <div class="relative z-0 mt-0.5 flex w-full -space-x-px">
                        <input id="cac" type="file" class="block w-full cursor-pointer appearance-none rounded-l-md border border-lime-100 bg-white px-3 py-2 text-sm transition focus:z-10 focus:border-lime-700 focus:outline-none focus:ring-1 focus:ring-lime-600 disabled:cursor-not-allowed disabled:bg-lime-100 disabled:opacity-75">
                         <button type="submit" class="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded-r border border-lime-100 bg-lime-700 px-3 py-2 text-sm font-medium text-lime-950 transition hover:border-lime-500 hover:bg-lime-100 focus:z-10 focus:border-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-500">Save</button>
                        </div>
                    </div>
                    </div>

                    <div>
                        <label class="block mb-2 text-sm text-lime-950 dark:text-lime-600">Address</label>
                        <input type="email" placeholder="johnsnow@example.com" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-200 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div>
                        <label class="block mb-2 text-sm text-lime-950 dark:text-lime-600">Password</label>
                        <input type="password" placeholder="Enter your password" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-200 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div>
                        <label class="block mb-2 text-sm text-lime-950 dark:text-lime-600">Confirm password</label>
                        <input type="password" placeholder="Enter your password" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-200 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                   <router-link to="/pages/login">
                    <button
                        type="submit"
                        class="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-lime-700 rounded-lg hover:bg-lime-600 focus:outline-none focus:ring focus:ring-lime-500 focus:ring-opacity-50">
                        <span>Sign Up </span>

                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                </router-link>
                </form>
                <div v-if="showAlert"  class="alert-modal flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
    <div class="flex items-center justify-center w-12 bg-lime-600">
        <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
        </svg>
    </div>

    <div class="px-4 py-2 -mx-3">
        <div class="mx-3">
            <span class="font-semibold text-lime-600 dark:text-lime-500">Authentication</span>
            <p class="text-sm text-gray-600 dark:text-gray-200">An authentication Id will be sent to you after validation</p>
        </div>
    </div>
</div>
            </div>
        </div>
    </div>
</section>
</template>
<script setup>
import { ref } from 'vue';

const showAlert = ref(false);
const alertMessage = ref('Form submitted successfully!');

const submitForm = () => {

  showAlert.value = true;
  
  setTimeout(() => {
    showAlert.value = false;
  }, 3000);
};
</script>
