<template>
  <main class="pl-[150px]">
    <section>
      <nav
        class="mx-10 my-7 flex items-center bg-white p-3 font-semibold text-gray-600"
      >
        <div
          class="btn mx-4 text-center capitalize"
          v-for="item in adminNavItems"
          :key="item.id"
        >
          <button
            :class="{
              'text-primary': activeTab === item.id,
            }"
            @click="switchTab(item.id)"
          >
            {{ item.label }}
          </button>
        </div>
      </nav>
    </section>
    <section class="mx-20">
      <Profile v-if="activeTab == 1" />
      <Contact v-if="activeTab == 2" />
      <Business v-if="activeTab == 3" />
      <Bank v-if="activeTab == 4" />
    </section>
  </main>
</template>
<script setup>
import { ref } from "vue";
import Profile from "./profile.vue";
import Contact from "./contact.vue";
import Business from "./shop.vue";
import Bank from "./bank.vue";

const activeTab = ref(1);
const adminNavItems = [
  { id: 1, label: "Profile Information" },
  { id: 2, label: "Contact" },
  { id: 3, label: "Business" },
  { id: 4, label: "Bank" },
];

const switchTab = (value) => {
  activeTab.value = value;
};
</script>
