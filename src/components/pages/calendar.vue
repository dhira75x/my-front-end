<template>
  <div class="border-grey-600 mx-20 border-2 border-solid bg-white">
    <section class="pt-4">
      <div class="flex w-full flex-row px-10">
        <div class="w-1/2">
          <div class="text-xl">Schedule New Task</div>
          <div class="text-xs">Fields*</div>
        </div>
      </div>
    </section>
    <section class="pt-4">
      <form class="w-full px-10">
        <div class="-mx-3 mb-6 flex flex-wrap">
          <div class="w-full px-3">
            <label
              class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
              for="grid-password"
            >
              Event Name*
            </label>
            <input
              class="mb-3 block w-full appearance-none rounded border border-gray-600 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="grid-password"
              type="text"
              placeholder=""
              v-model="newTasks.title"
            />
          </div>
        </div>
        <div class="-mx-3 mb-6 flex flex-wrap">
          <div class="w-full px-3">
            <label
              class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
              for="grid-password"
            >
              Event Description*
            </label>
            <textarea
              class="mb-3 block w-full appearance-none rounded border border-gray-600 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="grid-password"
              type="text"
              placeholder=""
              v-model="newTasks.description"
            ></textarea>
          </div>
        </div>

        <div class="-mx-3 mb-6 flex flex-wrap">
          <div class="mb-6 w-full px-3 md:mb-0 md:w-1/2">
            <label
              for="countries"
              class="mb-2 block text-xs font-bold tracking-wide text-gray-700"
              >Type of Event</label
            >
            <select
              id="event_type"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
            >
              <option selected>Meeting</option>
            </select>
          </div>

          <div class="w-full px-3 md:w-1/2">
            <label
              for="countries"
              class="mb-2 block text-xs font-bold tracking-wide text-gray-700"
              >Venue</label
            >
            <select
              v-model="newTasks.venue"
              id="countries"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
            >
              <option selected>Select Venue</option>
              <option></option>
            </select>
          </div>
        </div>
        <div class="-mx-3 mb-6 flex flex-wrap">
          <div class="mb-6 w-full px-3 md:mb-0 md:w-1/2">
            <label
              for="countries"
              class="mb-2 block text-xs font-bold tracking-wide text-gray-700"
              >Start Date</label
            >
            <div class="relative">
              <input
                v-model="newTasks.date"
                name="start"
                type="date"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                placeholder="Select date start"
              />
            </div>
          </div>

          <div class="mb-6 w-full px-3 md:mb-0 md:w-1/2">
            <label
              for="countries"
              class="mb-2 block text-xs font-bold tracking-wide text-gray-700"
              >Start Time</label
            >
            <div class="relative">
              <input
                v-model="newTasks.start_time"
                name="start"
                type="time"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                placeholder="Select date start"
              />
            </div>
          </div>
        </div>

        <div class="-mx-3 mb-6 flex flex-wrap">
          <div class="w-full px-3 md:w-1/2">
            <label
              for="countries"
              class="mb-2 block text-xs font-bold tracking-wide text-gray-700"
              >End Time</label
            >
            <div class="relative">
              <input
                name="start"
                type="time"
                v-model="newTasks.finish_time"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                placeholder="Select date start"
              />
            </div>
          </div>

          <div class="w-full px-3 md:w-1/2">
            <label
              for="countries"
              class="mb-2 block text-xs font-bold tracking-wide text-gray-700"
              >Frequency</label
            >
            <select
              id=""
              v-model="newTasks.frequency"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
        </div>
        <div class="-mx-3 mb-6 flex flex-wrap">
          <div class="w-full px-3">
            <label
              class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
              for="grid-password"
            >
              Send Invitation To*
            </label>

            <MultiSelect
              v-model="selectedTarget"
              :options="
                users.map((e) => {
                  return {
                    code: { email: e.email, fullname: e.name },
                    name: e.name,
                  };
                })
              "
              :filter="true"
              optionLabel="name"
              placeholder="Select Recipient"
              :maxSelectedLabels="10"
              class="flex w-full flex-row rounded-lg border border-gray-300 bg-white p-2.5"
            >
              <template #header>
                <div class="mb-4 flex items-center">
                  <input
                    id="disabled-checkbox"
                    type="checkbox"
                    @click="selectAll"
                    value=""
                    class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                  />
                  <label
                    for="disabled-checkbox"
                    class="test-base ml-2 text-sm font-medium text-gray-600 dark:text-gray-500"
                    >Select All</label
                  >
                </div>
              </template>
              <template #footer>
                <div class="bg-white px-3 py-2">
                  <b>{{ selectedTarget ? selectedTarget.length : 0 }}</b>
                  item{{
                    (selectedTarget ? selectedTarget.length : 0) > 1 ? "s" : ""
                  }}
                  selected.
                </div>
              </template>
            </MultiSelect>
          </div>
        </div>
        <div class="-mx-3 mb-6 flex flex-wrap"></div>
        <div class="-mx-3 mb-6 flex flex-wrap">
          <div class="mb-6 w-full px-3 md:mb-0 md:w-1/2">
            <label
              for="countries"
              class="mb-2 block text-sm font-medium text-gray-900"
              >Priority</label
            >
            <select
              id="countries"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
            >
              <option value="high">High</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
            </select>
          </div>
          <div class="w-full px-3 md:w-1/2">
            <label
              for="countries"
              class="mb-2 block text-sm font-medium text-gray-900"
              >Created By</label
            >
            <div class="relative">
              <input
                name="start"
                type="text"
                class="block w-full rounded-lg border border-gray-300 p-2.5 pl-10 text-sm text-gray-900"
                placeholder=""
              />
            </div>
          </div>
        </div>
        <div class="mb-2 mt-10 flex flex-wrap">Event Agenda*</div>
        <div
          v-for="(agenda, index) in newTasks.agenda"
          :key="index"
          class="-mx-3 flex flex-wrap"
        >
          <div class="w-full px-3">
            <label
              class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
              for="grid-password"
            >
              Agenda {{ index + 1 }}
            </label>
            <input
              v-model="newTasks.agenda[index]"
              class="mb-3 block w-full appearance-none rounded border border-gray-200 px-4 py-3 leading-tight text-gray-700"
              id="grid-password"
              type="text"
            />
          </div>
        </div>

        <div class="mb-6 flex flex-wrap">
          <button
            @click="addAgendaField"
            class="flex flex-row rounded-md bg-primary px-3 py-2 text-xl text-white"
            type="button"
          >
            &nbsp;+
          </button>
          <button
            type="button"
            class="mx-5 rounded-md bg-primary px-3 py-2 text-xl text-white"
            @click="deleteAgenda"
          >
            <img src="@/assets/trash.svg" alt="" />
          </button>
        </div>
        <div class="flex w-full items-end justify-end pb-10">
          <button
            id="submitTaskButton"
            class="mx-1 rounded border bg-red-600 px-6 py-2 font-bold text-white"
          >
            Submit
          </button>
          <button
            class="bg-white-500 rounded border border-gray-700 px-6 py-2 font-bold"
          >
            Cancel
          </button>
        </div>
      </form>
      <!-- {{ selectedTarget }} -->
      <!-- <Select2  :options="options"  /> -->
    </section>
  </div>
</template>
<style>
.p-multiselect-filter,
.p-inputtext,
.p-multiselect-items-wrapper {
  /* max-height: 200px; */
  background: white;
  border: solid 1px;
  /* justify-content: center; */
  padding-left: 20px;
}

/* #countries {
  display: none !important;
} */

/* .p-multiselect-filter-container{
    padding-left: 20px;
    color: black;
  } */
</style>
<script setup>
import { ref, onMounted } from "vue";
import MultiSelect from "primevue/multiselect";
const emit = defineEmits(["switchGenTab"]);

// import Select2 from 'vue3-select2-component';
const selectedCities = ref();
const options = ref(["Batman", "Robin", "Joker"]);
const cities = ref([
  { name: "New York", code: "NY" },
  { name: "Rome", code: "RM" },
  { name: "London", code: "LDN" },
  { name: "Istanbul", code: "IST" },
  { name: "Paris", code: "PRS" },
]);

const selectedTarget = ref([""]);

const newTasks = ref({
  title: "",
  date: "",
  venue: "",
  description: "",
  frequency: "",
  priority: "",
  created_by: "",
  start_time: "",
  finish_time: "",
  group: [],
  agenda: [""],
});

const addAgendaField = () => {
  newTasks.value.agenda.push("");
};

const deleteAgenda = () => {
  newTasks.value.agenda.pop();
};
</script>
