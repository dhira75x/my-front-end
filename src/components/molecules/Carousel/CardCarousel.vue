<template>
  <div class="relative overflow-hidden">
    <div class="flex transition duration-500 ease-in-out" :style="{ transform: `translateX(-${current * 100}%)` }">
      <div v-for="(slide, sIdx) in slides" :key="sIdx" class="flex-shrink-0 w-full">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="item in slide" :key="item.id">
            <slot :item="item" />
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-6 space-x-2">
      <button v-for="(_, index) in slides" :key="index" @click="goTo(index)" class="w-3 h-3 rounded-full" :class="current === index ? 'bg-deepsaffron' : 'bg-gray-300'"></button>
    </div>
    <button @click="prev" class="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white bg-opacity-60 rounded-full hover:bg-opacity-90">◀</button>
    <button @click="next" class="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white bg-opacity-60 rounded-full hover:bg-opacity-90">▶</button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  items: { type: Array, default: () => [] },
  perSlide: { type: Number, default: 3 },
  autoplay: { type: Boolean, default: true },
  intervalMs: { type: Number, default: 5000 },
})

const current = ref(0)
const slides = computed(() => {
  const out = []
  for (let i = 0; i < props.items.length; i += props.perSlide) {
    out.push(props.items.slice(i, i + props.perSlide))
  }
  return out
})

let timer
const next = () => { current.value = (current.value + 1) % slides.value.length }
const prev = () => { current.value = (current.value - 1 + slides.value.length) % slides.value.length }
const goTo = (idx) => { current.value = idx }

onMounted(() => {
  if (props.autoplay) {
    timer = setInterval(next, props.intervalMs)
  }
})

onUnmounted(() => { if (timer) clearInterval(timer) })
</script>
