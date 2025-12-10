<script setup>
import AppLayout from '@/layouts/applayout.vue';
import { ref } from 'vue';
import { CheckIcon } from '@heroicons/vue/24/solid';

const teamMembers = ref([
  {
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    name: 'Michael Chen',
    role: 'Product Director',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    name: 'Emma Rodriguez',
    role: 'Customer Experience Lead',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
  }
]);
</script>

<template>
  <app-layout>
    <template v-slot:main-content>
  <div class="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 animate__animated animate__fadeIn">
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-deepsaffron/10 opacity-50 blur-3xl blob-1"></div>
      <div class="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-deepforest/10 opacity-50 blur-3xl blob-2"></div>
    </div>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-12 animate__animated animate__fadeInDown">
        <h1 class="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
          About Our Store
        </h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our story and commitment to bringing you the best products
        </p>
      </div>

      <!-- Content Sections -->
      <div class="space-y-12">
        <!-- Our Story Section -->
        <section class="bg-white rounded-xl shadow-md p-8 animate__animated animate__fadeInUp">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
          <p class="text-gray-600 leading-relaxed mb-4">
            Founded in 2015, our store began with a simple mission: to provide high-quality products at fair prices. 
            What started as a small family operation has grown into a trusted e-commerce destination serving customers nationwide.
          </p>
          <p class="text-gray-600 leading-relaxed">
            We're passionate about curating products that combine functionality, style, and sustainability. 
            Every item in our collection is carefully selected to meet our high standards of quality and value.
          </p>
        </section>

        <!-- Mission Section -->
        <section class="bg-white rounded-xl shadow-md p-8 animate__animated animate__fadeInUp">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p class="text-gray-600 leading-relaxed mb-4">
            To create a seamless shopping experience that delights our customers while making a positive impact on the world.
          </p>
          <ul class="space-y-3 text-gray-600">
            <li class="flex items-start">
              <CheckIcon class="h-5 w-5 text-deepsaffron mr-2 mt-0.5" />
              <span>Sustainable sourcing and ethical production</span>
            </li>
            <li class="flex items-start">
              <CheckIcon class="h-5 w-5 text-deepsaffron mr-2 mt-0.5" />
              <span>Exceptional customer service and support</span>
            </li>
            <li class="flex items-start">
              <CheckIcon class="h-5 w-5 text-deepsaffron mr-2 mt-0.5" />
              <span>Continuous innovation in product selection</span>
            </li>
          </ul>
        </section>

        <!-- Team Section -->
        <section class="bg-white rounded-xl shadow-md p-8 animate__animated animate__fadeInUp">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">Meet Our Team</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="member in teamMembers" :key="member.name" class="text-center transition-transform duration-300 hover:-translate-y-1 animate__animated animate__fadeInUp">
              <img 
                :src="member.avatar" 
                :alt="member.name"
                class="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              >
              <h3 class="text-lg font-semibold text-gray-800">{{ member.name }}</h3>
              <p class="text-gray-600">{{ member.role }}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
  </template>
  </app-layout>
</template>

<style scoped>
.blob-1 { animation: floatBlob1 12s ease-in-out infinite; }
.blob-2 { animation: floatBlob2 14s ease-in-out infinite; }
@keyframes floatBlob1 {
  0% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(8px, -6px) scale(1.03); }
  50% { transform: translate(0, 0) scale(1.06); }
  75% { transform: translate(-8px, 6px) scale(1.03); }
  100% { transform: translate(0, 0) scale(1); }
}
@keyframes floatBlob2 {
  0% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(-6px, 8px) scale(1.02); }
  50% { transform: translate(0, 0) scale(1.04); }
  75% { transform: translate(6px, -8px) scale(1.02); }
  100% { transform: translate(0, 0) scale(1); }
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>


