<template>
  <!-- sidebar -->
  <aside
    class="fixed left-0 top-0 h-screen w-[260px] overflow-y-auto bg-[#0F151F] px-4 py-12"
  >
    <!-- sidebar head -->
    <div class="sidebar-head p-4">
      <router-link to="/" exact class="flex">
        <img class="mt-1 w-8" src="../../../assets/login.svg" alt="logo ovo" />
        <h2
          class="ml-3 mt-2 text-2xl font-normal text-lime-800 dark:text-lime-600"
          translate="no"
        >
          OVO MARKET<span class="text-primary">.</span>
        </h2>
      </router-link>
      <div
        class="absolute mt-3 hidden rounded-md bg-gray-700 px-2 py-1 text-xs text-gray-200 dark:block"
      >
        Lifestyle
      </div>
      <button
        class="float-right -mt-7 block lg:hidden dark:text-gray-400"
        @click="$emit('sidebarToggle')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="25px"
          height="25px"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 32 32"
        >
          <path
            fill="currentColor"
            d="M7.219 5.781L5.78 7.22L14.563 16L5.78 24.781l1.44 1.439L16 17.437l8.781 8.782l1.438-1.438L17.437 16l8.782-8.781L24.78 5.78L16 14.563z"
          />
        </svg>
      </button>
    </div>
    <div class="-mx-2 mt-6 flex flex-col items-center">
      <router-link to="">
        <img
          class="mx-2 h-24 w-24 rounded-full object-cover"
          src="../../../assets/avatar-profile.svg"
          alt="avatar"
        />
      </router-link>

      <h4 class="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">
        Hannah Daniel
      </h4>
      <p class="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
        hannah@ovo.com
      </p>
    </div>
    <!-- sidebar list -->
    <div class="sidebar-list mt-4 divide-y p-4 dark:divide-gray-700">
      <div class="pb-5">
        <p class="font-medium text-lime-700 dark:text-lime-800"></p>
        <div class="wrap-item mt-4 dark:text-gray-500">
          <div class="item">
            <router-link
              to="/views/dashboard"
              exact
              class="box-border flex w-full rounded-md p-3 text-left hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <span class="mr-3 text-xl"><Icon icon="bxs:dashboard" /></span>
              <span class="w-full"> Workspace </span>
            </router-link>
          </div>
          <div class="item mt-3">
            <menu-accordion>
              <template v-slot:icon>
                <Icon icon="gg:components" />
              </template>
              <template v-slot:title>Schedules </template>
              <template v-slot:content>
                <router-link
                  to="/component/alert"
                  class="block w-full rounded-md p-3 text-left hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Task
                </router-link>
                <router-link
                  to="/component/accordion"
                  class="block w-full rounded-md p-3 text-left hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Approvals
                </router-link>
                <router-link
                  to="/component/badge"
                  class="block w-full rounded-md p-3 text-left hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Request
                </router-link>
                <router-link
                  to="/component/breadcumb"
                  class="block w-full rounded-md p-3 text-left hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Close-out
                </router-link>
                <router-link
                  to="/component/button"
                  class="block w-full rounded-md p-3 text-left hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Policies
                </router-link>
              </template>
            </menu-accordion>
          </div>
          <div class="item mt-3">
            <menu-accordion>
              <template v-slot:icon>
                <Icon icon="ri:layout-2-fill" />
              </template>
              <template v-slot:title> Customers </template>
              <template v-slot:content>
                <router-link
                  to="/molecules/customer"
                  class="block w-full rounded-md p-3 text-left hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Users
                </router-link>

                <router-link
                  to="/pages/collaboration"
                  class="block w-full rounded-md p-3 text-left hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Collaborations
                </router-link>
                <router-link
                  to="/views/team"
                  class="block w-full rounded-md p-3 text-left hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Customer Messenger
                </router-link>
                <router-link
                  to=""
                  class="block w-full rounded-md p-3 text-left hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Vouchers
                </router-link>
              </template>
            </menu-accordion>
          </div>
          <div class="item mt-3">
            <menu-accordion>
              <template v-slot:icon>
                <Icon icon="ri:layout-2-fill" />
              </template>
              <template v-slot:title> Vendors </template>
              <template v-slot:content>
                <router-link
                  to="/pages/vendor"
                  class="block w-full rounded-md p-3 text-left hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Vendor List
                </router-link>
                <router-link
                  to="/views/team"
                  class="block w-full rounded-md p-3 text-left hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Vendor Messenger
                </router-link>
                <router-link
                  to=""
                  class="block w-full rounded-md p-3 text-left hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Activities
                </router-link>

                <router-link
                  to="/component/button"
                  class="block w-full rounded-md p-3 text-left hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Vouchers
                </router-link>
              </template>
            </menu-accordion>
          </div>
          <div class="item mt-3">
            <menu-accordion>
              <template v-slot:icon>
                <Icon icon="ri:pages-fill" />
              </template>
              <template v-slot:title> Services </template>
              <template v-slot:content>
                <div class="">
                  <router-link
                    to="/blank"
                    class="block w-full rounded-md p-3 text-left hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    Support
                  </router-link>
                  <menu-accordion>
                    <template v-slot:title> Products </template>
                    <template v-slot:content>
                      <router-link
                        to="/404page"
                        class="block w-full rounded-md p-3 text-left hover:bg-gray-200 dark:hover:bg-gray-700"
                      >
                        Restocked Products
                      </router-link>
                      <router-link
                        to="/500"
                        class="block w-full rounded-md p-3 text-left hover:bg-gray-200 dark:hover:bg-gray-700"
                      >
                        Unavailable Products
                      </router-link>
                      <router-link
                        to="/pages/order"
                        class="block w-full rounded-md p-3 text-left hover:bg-gray-200 dark:hover:bg-gray-700"
                      >
                        Available Products
                      </router-link>
                    </template>
                  </menu-accordion>
                  <menu-accordion>
                    <template v-slot:title> Authentication </template>
                    <template v-slot:content>
                      <router-link
                        to="/auth/login"
                        class="block w-full rounded-md p-3 text-left hover:bg-gray-200 dark:hover:bg-gray-700"
                      >
                        Flagged Vendors
                      </router-link>
                      <router-link
                        to="/auth/register"
                        class="block w-full rounded-md p-3 text-left hover:bg-gray-200 dark:hover:bg-gray-700"
                      >
                        Flagged Customers
                      </router-link>
                    </template>
                  </menu-accordion>
                </div>
              </template>
            </menu-accordion>
          </div>
        </div>
      </div>
      <div class="pb-5">
        <p class="mt-4 font-medium text-lime-700 dark:text-lime-800">
          Notifications
        </p>

        <div class="item mt-3">
          <menu-accordion>
            <template v-slot:icon>
              <Icon icon="ant-design:form-outlined" />
            </template>
            <template v-slot:title> Team Messenger </template>
            <template v-slot:content>
              <router-link
                to="/auth/register"
                class="dark:hover:bg-gray-700text-gray-800 block w-full rounded-md p-3 text-left hover:bg-gray-200 dark:text-lime-700"
              >
                View Team
              </router-link>
              <router-link
                to="/views/team"
                class="dark:hover:bg-gray-700text-gray-800 block w-full rounded-md p-3 text-left hover:bg-gray-200 dark:text-lime-700"
              >
                Message Team
              </router-link>
            </template>
          </menu-accordion>
        </div>

        <div class="item mt-3">
          <router-link to="/tables">
            <button
              class="box-border flex w-full rounded-md bg-transparent p-3 text-left text-lime-700 hover:bg-gray-200 dark:text-lime-700 dark:hover:bg-gray-700"
            >
              <span class="mr-3 text-xl"><Icon icon="bi:table" /></span>
              <span class="w-full"> Calendar </span>
              <span class="mt-1 box-border text-lime-700"> </span>
            </button>
          </router-link>
        </div>
        <div class="item mt-3">
          <router-link to="/tables">
            <button
              class="box-border flex w-full rounded-md bg-transparent p-3 text-left text-lime-700 hover:bg-gray-200 dark:text-lime-700 dark:hover:bg-gray-700"
            >
              <span class="mr-3 text-xl"><Icon icon="settings" /></span>
              <span class="w-full"> Setting </span>
              <span class="mt-1 box-border text-lime-700"> </span>
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import MenuAccordion from "../Menu/MenuAccordion.vue";
import { ref } from "vue";

const toggleSidebar = () => {
  // Emit an event to notify the parent component to toggle the sidebar
  $emit("sidebarToggle");
};
</script>
