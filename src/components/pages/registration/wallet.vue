<script setup>
import { ref } from "vue";
import withdrawalRequest from "@/services/withdrawalRequest.js";

const withdrawals = ref([]);

const fetchWithdrawals = async () => {
  try {
    const data = await withdrawalRequest.getWithdrawals({});
    withdrawals.value = data.docs;
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <div>
    <div v-if="withdrawals.length">
      <ul>
        <li v-for="withdrawal in withdrawals" :key="withdrawal._id">
          {{ withdrawal.amount }}
        </li>
      </ul>
    </div>
    <button @click="fetchWithdrawals">Load Withdrawals</button>
  </div>
</template>
