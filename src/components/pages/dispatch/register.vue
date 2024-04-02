<script setup>
import { ref } from "vue";

const showDrop = ref(false);
const showDown = ref(false);
const toggleDrop = () => {
  showDrop.value = !showDrop.value;
};
const toggleDown = () => {
  showDown.value = !showDown.value;
};
</script>
<template>
  <section class="bg-white dark:bg-[F5F5F5]">
    <div class="flex min-h-screen justify-center">
      <div
        class="hidden bg-cover lg:block lg:w-2/5"
        style="
          background-image: url('https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80');
        "
      ></div>

      <div class="mx-auto flex w-full max-w-3xl items-center p-8 lg:w-3/5 lg:px-12">
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
          <h1
            class="text-2xl font-semibold capitalize tracking-wider text-gray-800 dark:text-white"
          >
            Get your account up and running.
          </h1>

          <p class="mt-4 text-lime-800 dark:text-lime-900">
            Let’s get you all set up so you can verify your personal details account and
            begin your journey.
          </p>

          <div class="mt-6">
            <h1 class="text-lime-800 dark:text-lime-900">Select type of account</h1>

            <div class="mt-3 md:-mx-2 md:flex md:items-center">
              <button
                @click="toggleDrop"
                class="flex w-full justify-center rounded-lg bg-lime-700 px-6 py-3 text-white focus:outline-none md:mx-2 md:w-auto"
              >
                <img src="../../../assets/svgviewer-output.svg" alt="" />

                <span class="mx-2"> Rider/Driver </span>
              </button>

              <button
                @click="toggleDown"
                class="mt-4 flex w-full justify-center rounded-lg border border-lime-500 px-6 py-3 text-lime-800 focus:outline-none md:mx-2 md:mt-0 md:w-auto dark:border-lime-500 dark:text-lime-700"
              >
                <img src="../../../assets/svgviewer-out.svg" alt="" />

                <span class="mx-2"> Handy Man </span>
              </button>
            </div>
          </div>

          <form class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2" v-if="showDrop">
            <div>
              <label class="mb-2 block text-sm text-lime-950 dark:text-lime-600"
                >First Name</label
              >
              <input
                type="text"
                placeholder="John"
                class="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-200 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
              />
            </div>

            <div>
              <label class="mb-2 block text-sm text-lime-950 dark:text-lime-600"
                >Last name</label
              >
              <input
                type="text"
                placeholder="Snow"
                class="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-200 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
              />
            </div>

            <div>
              <label class="mb-2 block text-sm text-lime-950 dark:text-lime-600"
                >Phone number</label
              >
              <input
                type="text"
                placeholder="XXX-XX-XXXX-XXX"
                class="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-200 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
              />
            </div>

            <div>
              <label class="mb-2 block text-sm text-lime-950 dark:text-lime-600"
                >Email address</label
              >
              <input
                type="email"
                placeholder="johnsnow@example.com"
                class="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-200 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
              />
            </div>

            <div>
              <label class="mb-2 block text-sm text-lime-950 dark:text-lime-600"
                >Means of Identification</label
              >
              <select id="means" name="means" class="mt-1 w-full rounded-md border p-2">
                <option value="" selected disabled class="text-gray-400">
                  Select a Means of Identification
                </option>
                <option value="">National Identification Card</option>
                <option value="">International Passport</option>
                <option value="">Voter's Card</option>
              </select>
            </div>

            <div>
              <label class="mb-2 block text-sm text-lime-950 dark:text-lime-600"
                >Upload MOI</label
              >
              <div class="max-w-sm">
                <div class="relative z-0 mt-0.5 flex w-full -space-x-px">
                  <input
                    id="moifile"
                    type="file"
                    class="block w-full cursor-pointer appearance-none rounded-l-md border border-lime-100 bg-white px-3 py-2 text-sm transition focus:z-10 focus:border-lime-700 focus:outline-none focus:ring-1 focus:ring-lime-600 disabled:cursor-not-allowed disabled:bg-lime-100 disabled:opacity-75"
                  />
                  <button
                    type="submit"
                    class="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded-r border border-lime-100 bg-lime-700 px-3 py-2 text-sm font-medium text-lime-950 transition hover:border-lime-500 hover:bg-lime-100 focus:z-10 focus:border-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>

            <div>
              <label class="mb-2 block text-sm text-lime-950 dark:text-lime-600"
                >Driver's Licenses</label
              >
              <div class="max-w-sm">
                <div class="relative z-0 mt-0.5 flex w-full -space-x-px">
                  <input
                    id="moifile"
                    type="file"
                    class="block w-full cursor-pointer appearance-none rounded-l-md border border-lime-100 bg-white px-3 py-2 text-sm transition focus:z-10 focus:border-lime-700 focus:outline-none focus:ring-1 focus:ring-lime-600 disabled:cursor-not-allowed disabled:bg-lime-100 disabled:opacity-75"
                  />
                  <button
                    type="submit"
                    class="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded-r border border-lime-100 bg-lime-700 px-3 py-2 text-sm font-medium text-lime-950 transition hover:border-lime-500 hover:bg-lime-100 focus:z-10 focus:border-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>

            <div>
              <label class="mb-2 block text-sm text-lime-950 dark:text-lime-600"
                >Address</label
              >
              <input
                type="email"
                placeholder="143 Buhari way"
                class="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-200 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
              />
            </div>
            <div>
              <label class="mb-2 block text-sm text-lime-950 dark:text-lime-600"
                >Role</label
              >
              <select id="means" name="means" class="mt-1 w-full rounded-md border p-2">
                <option value="" selected disabled class="text-gray-400">
                  Select a Role
                </option>
                <option value="">Biker</option>
                <option value="">Driver</option>
              </select>
            </div>

            <div>
              <label class="mb-2 block text-sm text-lime-950 dark:text-lime-600"
                >Years of Experience</label
              >
              <input
                type="number"
                placeholder="Years of Experience"
                class="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-900 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-200 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
              />
            </div>

            <div>
              <label class="mb-2 block text-sm text-lime-950 dark:text-lime-600"
                >Password</label
              >
              <input
                type="password"
                placeholder="Enter your password"
                class="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-black placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-200 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
              />
            </div>

            <div>
              <label class="mb-2 block text-sm text-lime-950 dark:text-lime-600"
                >Confirm password</label
              >
              <input
                type="password"
                placeholder="Enter your password"
                class="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-200 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
              />
            </div>
            <router-link to="/pages/login">
              <button
                class="flex w-full transform items-center justify-between rounded-lg bg-lime-700 px-6 py-3 text-sm capitalize tracking-wide text-white transition-colors duration-300 hover:bg-lime-600 focus:outline-none focus:ring focus:ring-lime-500 focus:ring-opacity-50"
              >
                <span>Sign Up </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 rtl:-scale-x-100"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </router-link>
          </form>
          <div v-if="showDown">
            <form class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label class="mb-2 block text-sm text-lime-950 dark:text-lime-600"
                  >First Name</label
                >
                <input
                  type="text"
                  placeholder="John"
                  class="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-200 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
                />
              </div>

              <div>
                <label class="mb-2 block text-sm text-lime-950 dark:text-lime-600"
                  >Last name</label
                >
                <input
                  type="text"
                  placeholder="Snow"
                  class="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-200 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
                />
              </div>

              <div>
                <label class="mb-2 block text-sm text-lime-950 dark:text-lime-600"
                  >Phone number</label
                >
                <input
                  type="text"
                  placeholder="XXX-XX-XXXX-XXX"
                  class="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-200 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
                />
              </div>

              <div>
                <label class="mb-2 block text-sm text-lime-950 dark:text-lime-600"
                  >Email address</label
                >
                <input
                  type="email"
                  placeholder="johnsnow@example.com"
                  class="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-200 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
                />
              </div>
              <div>
                <label class="mb-2 block text-sm text-lime-950 dark:text-lime-600"
                  >Role</label
                >
                <input
                  type="role"
                  placeholder="Plumber"
                  class="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-200 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
                />
              </div>
              <div>
                <label class="mb-2 block text-sm text-lime-950 dark:text-lime-600"
                  >Description</label
                >
                <input
                  type="description"
                  placeholder="few details on work"
                  class="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-200 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
                />
              </div>
              <div>
                <label class="mb-2 block text-sm text-lime-950 dark:text-lime-600"
                  >Means of Identification</label
                >
                <select id="means" name="means" class="mt-1 w-full rounded-md border p-2">
                  <option value="" selected disabled class="text-gray-400">
                    Select a Means of Identification
                  </option>
                  <option value="">National Identification Card</option>
                  <option value="">International Passport</option>
                  <option value="">Voter's Card</option>
                </select>
              </div>
              <div>
                <label class="mb-2 block text-sm text-lime-950 dark:text-lime-600"
                  >Upload MOI</label
                >
                <div class="max-w-sm">
                  <div class="relative z-0 mt-0.5 flex w-full -space-x-px">
                    <input
                      id="means of identification"
                      type="file"
                      class="block w-full cursor-pointer appearance-none rounded-l-md border border-lime-100 bg-white px-3 py-2 text-sm transition focus:z-10 focus:border-lime-700 focus:outline-none focus:ring-1 focus:ring-lime-600 disabled:cursor-not-allowed disabled:bg-lime-100 disabled:opacity-75"
                    />
                    <button
                      type="submit"
                      class="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded-r border border-lime-100 bg-lime-700 px-3 py-2 text-sm font-medium text-lime-950 transition hover:border-lime-500 hover:bg-lime-100 focus:z-10 focus:border-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-500"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <label class="mb-2 block text-sm text-lime-950 dark:text-lime-600"
                  >Certification</label
                >
                <input
                  type="certification"
                  placeholder="prove of work"
                  class="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-200 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
                />
              </div>
              <div>
                <label class="mb-2 block text-sm text-lime-950 dark:text-lime-600"
                  >Upload Certification(optional)</label
                >
                <div class="max-w-sm">
                  <div class="relative z-0 mt-0.5 flex w-full -space-x-px">
                    <input
                      id="means of identification"
                      type="file"
                      class="block w-full cursor-pointer appearance-none rounded-l-md border border-lime-100 bg-white px-3 py-2 text-sm transition focus:z-10 focus:border-lime-700 focus:outline-none focus:ring-1 focus:ring-lime-600 disabled:cursor-not-allowed disabled:bg-lime-100 disabled:opacity-75"
                    />
                    <button
                      type="submit"
                      class="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded-r border border-lime-100 bg-lime-700 px-3 py-2 text-sm font-medium text-lime-950 transition hover:border-lime-500 hover:bg-lime-100 focus:z-10 focus:border-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-500"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label class="mb-2 block text-sm text-lime-950 dark:text-lime-600"
                  >Years of Experience</label
                >
                <input
                  type="number"
                  placeholder="Years of Experience"
                  class="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-200 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
                />
              </div>

              <div>
                <label class="mb-2 block text-sm text-lime-950 dark:text-lime-600"
                  >Address</label
                >
                <input
                  type="email"
                  placeholder="143 Buhari way"
                  class="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-200 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
                />
              </div>

              <div>
                <label class="mb-2 block text-sm text-lime-950 dark:text-lime-600"
                  >Password</label
                >
                <input
                  type="password"
                  placeholder="Enter your password"
                  class="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-200 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
                />
              </div>

              <div>
                <label class="mb-2 block text-sm text-lime-950 dark:text-lime-600"
                  >Confirm password</label
                >
                <input
                  type="password"
                  placeholder="Enter your password"
                  class="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-200 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
                />
              </div>
              <router-link to="/pages/login">
                <button
                  class="flex w-full transform items-center justify-between rounded-lg bg-lime-700 px-6 py-3 text-sm capitalize tracking-wide text-white transition-colors duration-300 hover:bg-lime-600 focus:outline-none focus:ring focus:ring-lime-500 focus:ring-opacity-50"
                >
                  <span>Sign Up </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 rtl:-scale-x-100"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </router-link>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
