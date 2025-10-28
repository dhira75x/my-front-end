<
<template>
  <div class="modal">
    <paystack
      buttonClass="'button-class btn btn-primary'"
      buttonText="Pay Online"
      :publicKey="publicKey"
      :email="email"
      :amount="amount"
      :reference="reference"
      :onSuccess="onSuccessfulPayment"
      :onCanel="onCancelledPayment"
    >
    </paystack>
    <button @click="closeModal">Close</button>
  </div>
</template>
<script setup>
import paystack from "vue3-paystack";
import { defineEmits } from "vue";

const emit = defineEmits(["close"]);

const closeModal = () => {
  emit("close");
};
</script>
