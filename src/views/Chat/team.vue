<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="min-h-screen w-full bg-[#F5F5F5] pl-[260px]">
        <section class="p-10">
          <div class="flex h-screen flex-col">
            <div class="border-b p-4">
              <h1 class="text-xl font-bold text-lime-900">CAT</h1>
            </div>
            <div class="flex-1 overflow-y-auto p-4">
              <div
                v-for="(message, index) in messages"
                :key="index"
                class="mb-4"
              >
                <div v-if="message.type === 'sent'" class="flex justify-end">
                  <div class="max-w-xs rounded-lg bg-lime-600 p-2 text-white">
                    {{ message.text }}
                  </div>
                </div>
                <div v-else class="flex">
                  <div class="max-w-xs rounded-lg bg-lime-500 p-2">
                    {{ message.text }}
                  </div>
                </div>
              </div>
            </div>
            <div class="border-t p-4">
              <div class="flex items-center">
                <input
                  v-model="newMessage"
                  type="text"
                  placeholder="Type a message..."
                  class="flex-1 rounded border p-2"
                />
                <button
                  @click="sendMessage"
                  class="ml-2 rounded bg-lime-700 px-4 py-2 text-white"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </template>
  </app-layout>
</template>
<script setup>
import { ref } from "vue";
import AppLayout from "../../layouts/applayout.vue";

const messages = ref([
  { text: "Hello!", type: "received" },
  { text: "Hi there!", type: "sent" },
]);
const newMessage = ref("");

const sendMessage = () => {
  if (newMessage.value.trim() !== "") {
    messages.value.push({ text: newMessage.value, type: "sent" });
    newMessage.value = "";
  }
};
</script>
