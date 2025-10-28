<template>
  <div
    :class="isCard ? '' : 'lg:h-screen'"
    class="row-gap-12 lg:col-gap-10 container mx-auto grid grid-cols-1 p-6 lg:grid-cols-10 lg:pt-12"
  >
    <Payment @handle-card="handleCard" @change-parent="handleAlert" :total="total" />
    <Summary :items="items" />
    <Alert
      :visible="alertVisible"
      position="top-right"
      color="success"
      title="Success"
      description="Your payment has been successfully processed."
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Payment from "./payment.vue";
import Summary from "./summary.vue";
import Alert from "./alert.vue";

const items = ref([
  {
    title: "Title 1",
    description: "lorem impsu liwe",
    price: 550,
  },
  {
    title: "Title 2",
    description: "lorem impsu liwe",
    price: 250,
  },
  {
    title: "Title 3",
    description: "lorem impsu liwe",
    price: 150,
  },
]);

let total = 0;
let alertVisible = false;
let isCard = false;

const getTotal = (items) => {
  if (Array.isArray(items)) {
    items.forEach((item) => {
      total += item.price;
    });
  } else {
    console.error("items is not an array");
  }
};

const handleAlert = () => {
  alertVisible = true;
  setTimeout(() => {
    alertVisible = false;
  }, 4000);
};

const handleCard = () => {
  isCard = true;
};

onMounted(() => {
  getTotal(items.value);
});
</script>
