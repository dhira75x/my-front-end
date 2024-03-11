<template>
  <div class="col-span-1 p-12 lg:col-span-6">
    <h4 class="mb-5 text-3xl text-lime-950">Payment information</h4>
    <div class="rounded-md bg-white p-10 shadow-md">
      <div class="mb-6">
        <label class="mb-3 block text-gray-600" for="">Name on card</label>
        <input
          type="text"
          class="inline-block w-full rounded-md border border-gray-500 px-3 py-2 tracking-wider text-gray-600"
        />
      </div>
      <div class="mb-6">
        <label class="mb-3 block text-gray-600" for="">Card number</label>
        <input
          type="tel"
          class="inline-block w-full rounded-md border border-gray-500 px-3 py-2 tracking-widest text-gray-600"
        />
      </div>
      <div class="-mx-3w-full mb-6 flex flex-wrap">
        <div class="w-2/3 px-3">
          <label class="mb-3 block text-gray-600" for="">Expiraion date</label>
          <div class="flex">
            <select
              class="mr-6 inline-block w-full rounded-md border border-gray-500 px-3 py-2 tracking-widest text-gray-600"
            >
              <option disabled value="">Month</option>
              <option v-for="month in months" :key="month" :value="month">
                {{ month }}
              </option>
            </select>
            <select
              class="inline-block w-full rounded-md border border-gray-500 px-3 py-2 tracking-widest text-gray-600"
            >
              <option disabled value="">Year</option>
              <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
            </select>
          </div>
        </div>
        <div class="w-1/3 px-3">
          <label class="mb-3 block text-gray-600" for="">CVC</label>
          <input
            type="tel"
            class="inline-block w-full rounded-md border border-gray-500 px-3 py-2 tracking-widest text-gray-600"
          />
        </div>
      </div>
      <div class="mb-6 text-right">
        <span class="text-right font-bold">{{ total }}USD</span>
      </div>
      <div>
        <button
          @click="finishPayment"
          class="text-center w-full rounded-md bg-lime-800 px-4 py-3 font-semibold text-white shadow-md"
        >
          Confirm payment
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { defineProps } from "vue";

const props = defineProps(["total"]);

const selectedMonth = ref("");
const selectedYear = ref("");

const finishPayment = () => {
  emit("change-parent");
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const currentYear = new Date().getFullYear();
const years = Array.from({ length: 20 }, (_, index) => currentYear + index);
</script>
