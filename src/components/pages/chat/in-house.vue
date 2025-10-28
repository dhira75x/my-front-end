<script setup>
import { ref } from "vue";

const chatData = ref([
  { name: "John Doe", message: "Lorem Ipsum...", time: "12m", unread: 3 },
  { name: "Jane Smith", message: "Lorem Ipsum...", time: "5m", unread: 1 },
  // Add more chat entries here
]);

const searchText = ref("");

function searchChat() {
  return chatData.value.filter((chat) =>
    chat.name.toLowerCase().includes(searchText.value.toLowerCase())
  );
}

const filteredChatData = ref(chatData.value);

watch(searchText, () => {
  filteredChatData.value = searchChat();
});
</script>
<template>
  <main class="p-10">
    <section class="mt-6 ml-auto flex flex-row-reverse items-center text-sm">
      <button class="border border-secondary rounded-md py-2 px-4 shadow">
        End Chat
      </button>
      <div class="flex items-center mx-4">
        <input
          type="search"
          placeholder="Search"
          v-model="searchText"
          class="p-2 rounded-l-md focus:outline-none border border-secondary border-r-0 w-[230px]"
        />
        <button
          class="bg-green-700 h-full py-2.5 px-3 border border-secondary rounded-r-md"
          @click="searchChat"
        >
          <img src="../../assets/search-white.svg" alt="Search" />
        </button>
      </div>
    </section>
    <section class="flex border border-t-0 border-gray-300 text-sm">
      <div class="w-72 h-[574px] flex-shrink-0 flex flex-col bg-white">
        <div class="h-full overflow-y-scroll">
          <div
            v-for="(item, index) in filteredChatData"
            :key="index"
            class="flex items-center border-b border-gray-300 py-7 pl-3 pr-9 relative"
          >
            <div
              class="flex-shrink-0 mr-4 grid h-[40px] w-[40px] place-content-center rounded-full bg-secondary-gray text-2xl font-semibold text-white"
            ></div>
            <div>
              <h2 class="font-semibold mb-1 line-clamp-1">{{ item.name }}</h2>
              <p class="line-clamp-1">{{ item.message }}</p>
            </div>
            <div class="absolute top-3 right-3 text-xs">{{ item.time }}</div>
            <div
              class="absolute top-11 right-3 min-w-[20px] h-5 bg-green-700 text-white text-xs grid place-content-center rounded-full p-1"
            >
              {{ item.unread }}
            </div>
          </div>
        </div>
      </div>
      <div class="w-full h-[575px] flex flex-col">
        <div class="h-full"></div>
        <div
          class="h-14 bg-white flex-shrink-0 flex items-center border-t border-l border-secondary-gray px-3 rounded-sm"
        >
          <textarea
            placeholder="Write a message"
            class="w-full bg-transparent py-2 px-2 resize-none focus:outline-none"
          ></textarea>
          <button class="bg-green-700 text-white py-2 px-6 rounded-md flex-shrink-0">
            Send
          </button>
        </div>
      </div>
    </section>
  </main>
</template>
