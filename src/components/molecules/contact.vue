<template>
  <app-layout>
    <template v-slot:main-content>
      <div class="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <!-- Decorative elements -->
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-lime-100 opacity-50 blur-3xl"></div>
          <div class="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-green-100 opacity-50 blur-3xl"></div>
        </div>
        
        <div class="relative max-w-6xl mx-auto">
          <!-- Header -->
          <div class="text-center mb-16">
            <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Contact <span class="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-green-800">Our Team</span>
            </h1>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions or need assistance? We're here to help and typically respond within 24 hours.
            </p>
          </div>

          <div class="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
            <!-- Left Panel -->
            <div class="w-full lg:w-2/5 bg-gradient-to-br from-lime-600 to-green-900 p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
              <!-- Decorative pattern -->
              <div class="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <circle cx="20" cy="20" r="1" fill="white" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#pattern)" />
                </svg>
              </div>
              
              <div class="relative z-10">
                <div class="flex items-center space-x-3 mb-10">
                  <img src="@/assets/ovo.svg" alt="Ovo Market Support Page" class="h-10" />
                </div>

                <h1 class="text-3xl md:text-4xl font-bold text-white mb-4">
                  We're Here to Help
                </h1>
                <p class="text-lime-100 mb-10">
                  Our dedicated support team is ready to assist you with any questions or concerns you may have.
                </p>

                <div class="space-y-6">
                  <div class="flex items-center space-x-4 p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                    <div class="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-white font-medium">Secure & Private</h3>
                      <p class="text-lime-100 text-sm">Your information is protected</p>
                    </div>
                  </div>
                  
                  <div class="flex items-center space-x-4 p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                    <div class="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-white font-medium">Quick Response</h3>
                      <p class="text-lime-100 text-sm">We reply within 24 hours</p>
                    </div>
                  </div>
                  
                  <div class="flex items-center space-x-4 p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                    <div class="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-white font-medium">Expert Support</h3>
                      <p class="text-lime-100 text-sm">Knowledgeable team members</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-12 text-lime-200 text-sm">
                © {{ new Date().getFullYear() }} Ovo Market Support. All rights reserved.
              </div>
            </div>

            <!-- Right Panel -->
            <div class="w-full lg:w-3/5 p-8 md:p-12">
              <div class="max-w-md mx-auto">
                <!-- Contact Form -->
                <form @submit.prevent="submitForm" class="space-y-6">
                  <div>
                    <label for="name" class="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <div class="relative">
                      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="name"
                        v-model="form.name"
                        class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-all"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <div class="relative">
                      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      <input
                        type="email"
                        id="email"
                        v-model="form.email"
                        class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-all"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <div class="relative">
                      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="subject"
                        v-model="form.subject"
                        class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-all"
                        placeholder="How can we help?"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label for="message" class="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      v-model="form.message"
                      rows="4"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-all"
                      placeholder="Please describe your question or issue in detail..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    :disabled="isSubmitting"
                    class="w-full bg-gradient-to-r from-lime-600 to-green-700 text-white py-3 px-4 rounded-lg font-medium hover:from-lime-700 hover:to-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500 disabled:opacity-70 transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                  >
                    <span v-if="isSubmitting" class="flex items-center justify-center">
                      <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                    <span v-else>Send Message</span>
                  </button>
                </form>

                <!-- Success Message -->
                <div v-if="formSubmitted" class="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start">
                  <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <p class="text-green-800">
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Contact Information Section -->
          <div class="mt-16 pt-8 border-t border-gray-200">
            <h2 class="text-2xl font-bold text-gray-800 mb-8 text-center">Other Ways to Reach Us</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <!-- Phone Support -->
              <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div class="flex items-center mb-4">
                  <div class="flex-shrink-0 w-12 h-12 rounded-lg bg-lime-100 flex items-center justify-center">
                    <PhoneIcon class="h-6 w-6 text-lime-600" />
                  </div>
                  <h3 class="ml-4 text-lg font-medium text-gray-800">Phone Support</h3>
                </div>
                <p class="text-gray-600 mb-2">+1 (555) 123-4567</p>
                <p class="text-sm text-gray-500">Mon-Fri 9AM-5PM EST</p>
              </div>

              <!-- Email Support -->
              <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div class="flex items-center mb-4">
                  <div class="flex-shrink-0 w-12 h-12 rounded-lg bg-lime-100 flex items-center justify-center">
                    <EnvelopeIcon class="h-6 w-6 text-lime-600" />
                  </div>
                  <h3 class="ml-4 text-lg font-medium text-gray-800">Email Support</h3>
                </div>
                <p class="text-gray-600 mb-2">support@ovomarket.com</p>
                <p class="text-sm text-gray-500">We respond within 24 hours</p>
              </div>

              <!-- Visit Our Office -->
              <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div class="flex items-center mb-4">
                  <div class="flex-shrink-0 w-12 h-12 rounded-lg bg-lime-100 flex items-center justify-center">
                    <MapPinIcon class="h-6 w-6 text-lime-600" />
                  </div>
                  <h3 class="ml-4 text-lg font-medium text-gray-800">Visit Our Office</h3>
                </div>
                <p class="text-gray-600 mb-1">123 Commerce Street</p>
                <p class="text-gray-600">New York, NY 10001</p>
              </div>
            </div>

            <!-- Business Hours -->
            <div class="mt-12 bg-white p-6 rounded-xl shadow-md max-w-md mx-auto">
              <h3 class="text-lg font-medium text-gray-800 mb-4 text-center">Business Hours</h3>
              <div class="space-y-3">
                <div class="flex justify-between items-center py-2 border-b border-gray-100">
                  <span class="text-gray-600">Monday - Friday</span>
                  <span class="font-medium text-gray-800">24hrs</span>
                </div>
                <div class="flex justify-between items-center py-2 border-b border-gray-100">
                  <span class="text-gray-600">Saturday</span>
                  <span class="font-medium text-gray-800">24hrs</span>
                </div>
                <div class="flex justify-between items-center py-2">
                  <span class="text-gray-600">Sunday</span>
                  <span class="font-medium text-gray-800">24hrs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </app-layout>
</template>

<script setup>
import { ref } from 'vue';
import AppLayout from '@/layouts/applayout.vue';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  CheckCircleIcon 
} from '@heroicons/vue/24/outline';

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const isSubmitting = ref(false);
const formSubmitted = ref(false);

const submitForm = async () => {
  isSubmitting.value = true;
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  console.log('Form submitted:', form.value);
  isSubmitting.value = false;
  formSubmitted.value = true;
  
  // Reset form
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  
  // Hide success message after 5 seconds
  setTimeout(() => {
    formSubmitted.value = false;
  }, 5000);
};
</script>