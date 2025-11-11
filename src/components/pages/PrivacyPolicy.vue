<template>
  <app-layout>
    <template v-slot:main-content>
      <div class="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <!-- Decorative elements -->
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-lime-100 opacity-50 blur-3xl"></div>
          <div class="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-green-100 opacity-50 blur-3xl"></div>
        </div>
        
        <div class="relative max-w-4xl mx-auto">
          <!-- Header -->
          <div class="text-center mb-16">
            <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Privacy <span class="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-green-800">Policy</span>
            </h1>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </div>

          <!-- Last Updated -->
          <div class="bg-white rounded-xl shadow-md p-6 mb-8 text-center">
            <p class="text-gray-600">Last updated: {{ lastUpdated }}</p>
          </div>

          <!-- Policy Sections -->
          <div class="space-y-8 mb-16">
            <!-- Information We Collect -->
            <div class="bg-white rounded-xl shadow-md p-6 md:p-8">
              <div class="flex items-start mb-4">
                <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-lime-100 flex items-center justify-center">
                  <svg class="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                  </svg>
                </div>
                <h2 class="ml-4 text-xl font-bold text-gray-900">Information We Collect</h2>
              </div>
              <div class="ml-14 space-y-4">
                <div>
                  <h3 class="font-medium text-gray-900 mb-2">Personal Information</h3>
                  <p class="text-gray-600">When you create an account, make a purchase, or contact us, we may collect:</p>
                  <ul class="list-disc pl-5 mt-2 text-gray-600 space-y-1">
                    <li>Name and contact information (email, phone number, shipping address)</li>
                    <li>Payment information (processed securely through our payment partners)</li>
                    <li>Account credentials (username, password)</li>
                    <li>Location data: only where required for delivery/vendor matching.</li>
                  </ul>
                </div>
                <div>
                  <h3 class="font-medium text-gray-900 mb-2">Automatically Collected Information</h3>
                  <p class="text-gray-600">When you visit our website, we automatically collect:</p>
                  <ul class="list-disc pl-5 mt-2 text-gray-600 space-y-1">
                    <li>Usage data: IP address, browser type, mobile device info, interaction logs.</li>
                    <li>Device information and operating system</li>
                    <li>Pages visited and time spent on our site</li>
                    <li>Referring websites and search terms</li>
                  </ul>
                </div>
                <div>
                  <h3 class="font-medium text-gray-900 mb-2">Cookies and Tracking Technologies</h3>
                  <p class="text-gray-600">We use cookies and similar technologies to:</p>
                  <ul class="list-disc pl-5 mt-2 text-gray-600 space-y-1">
                    <li>Remember your preferences and login status</li>
                    <li>Analyze site traffic and usage patterns</li>
                    <li>Personalize your experience and show relevant content</li>
                    <li>Track the effectiveness of our marketing campaigns</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- How We Use Your Information -->
            <div class="bg-white rounded-xl shadow-md p-6 md:p-8">
              <div class="flex items-start mb-4">
                <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-lime-100 flex items-center justify-center">
                  <svg class="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                <h2 class="ml-4 text-xl font-bold text-gray-900">How We Use Your Information</h2>
              </div>
              <div class="ml-14 space-y-4">
                <p class="text-gray-600">We use the information we collect to:</p>
                <ul class="list-disc pl-5 text-gray-600 space-y-2">
                  <li><span class="font-medium">Process and fulfill your orders</span> - including payment processing, shipping, and customer service</li>
                  <li><span class="font-medium">Communicate with you</span> - about your orders, account, and customer service inquiries</li>
                  <li><span class="font-medium">Improve our website and services</span> - by analyzing usage data and feedback</li>
                  <li><span class="font-medium">Personalize your experience</span> - with product recommendations and relevant content</li>
                  <li><span class="font-medium">Send marketing communications</span> - with your explicit consent</li>
                  <li><span class="font-medium">Prevent fraud and ensure security</span> - of our website and services</li>
                  <li><span class="font-medium">Comply with legal obligations</span> - and protect our rights</li>
                </ul>
              </div>
            </div>

            <!-- Information Sharing -->
            <div class="bg-white rounded-xl shadow-md p-6 md:p-8">
              <div class="flex items-start mb-4">
                <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-lime-100 flex items-center justify-center">
                  <svg class="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                  </svg>
                </div>
                <h2 class="ml-4 text-xl font-bold text-gray-900">Information Sharing</h2>
              </div>
              <div class="ml-14 space-y-4">
                <p class="text-gray-600">We do not sell your personal information. We only share your information in the following circumstances:</p>
                <ul class="list-disc pl-5 text-gray-600 space-y-2">
                  <li><span class="font-medium">Service Providers</span> - We share information with companies that perform services on our behalf, such as payment processing, shipping, data analysis, and email delivery. These companies are obligated to protect your information.</li>
                  <li><span class="font-medium">Business Transfers</span> - If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
                  <li><span class="font-medium">Legal Requirements</span> - We may disclose your information if required by law or in response to valid legal requests.</li>
                  <li><span class="font-medium">With Your Consent</span> - We may share your information with third parties when you give us explicit consent to do so.</li>
                </ul>
              </div>
            </div>

            <!-- Data Security -->
            <div class="bg-white rounded-xl shadow-md p-6 md:p-8">
              <div class="flex items-start mb-4">
                <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-lime-100 flex items-center justify-center">
                  <svg class="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <h2 class="ml-4 text-xl font-bold text-gray-900">Data Security</h2>
              </div>
              <div class="ml-14 space-y-4">
                <p class="text-gray-600">We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These include:</p>
                <ul class="list-disc pl-5 text-gray-600 space-y-2">
                  <li>SSL/TLS encryption for data transmission</li>
                  <li>Secure storage of sensitive information</li>
                  <li>Regular security assessments and updates</li>
                  <li>Employee training on data protection practices</li>
                  <li>Restricted access to personal information</li>
                </ul>
                <p class="text-gray-600">However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.</p>
              </div>
            </div>

            <!-- Your Rights -->
            <div class="bg-white rounded-xl shadow-md p-6 md:p-8">
              <div class="flex items-start mb-4">
                <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-lime-100 flex items-center justify-center">
                  <svg class="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <h2 class="ml-4 text-xl font-bold text-gray-900">Your Rights</h2>
              </div>
              <div class="ml-14 space-y-4">
                <p class="text-gray-600">Depending on your location, you may have the following rights regarding your personal information:</p>
                <ul class="list-disc pl-5 text-gray-600 space-y-2">
                  <li><span class="font-medium">Access</span> - Request a copy of your personal information</li>
                  <li><span class="font-medium">Correction</span> - Update or correct inaccurate information</li>
                  <li><span class="font-medium">Deletion</span> - Request deletion of your personal information</li>
                  <li><span class="font-medium">Portability</span> - Receive your information in a portable format</li>
                  <li><span class="font-medium">Opt-out</span> - From marketing communications</li>
                  <li><span class="font-medium">Object</span> - To certain processing of your information</li>
                </ul>
                <p class="text-gray-600">To exercise these rights, please contact us using the information provided at the end of this policy.</p>
              </div>
            </div>

            <!-- Children's Privacy -->
            <div class="bg-white rounded-xl shadow-md p-6 md:p-8">
              <div class="flex items-start mb-4">
                <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-lime-100 flex items-center justify-center">
                  <svg class="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                </div>
                <h2 class="ml-4 text-xl font-bold text-gray-900">Children's Privacy</h2>
              </div>
              <div class="ml-14">
                <p class="text-gray-600">Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete that information.</p>
                <p class="text-gray-600 mt-2">If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can delete such information.</p>
              </div>
            </div>

            <!-- Changes to This Policy -->
            <div class="bg-white rounded-xl shadow-md p-6 md:p-8">
              <div class="flex items-start mb-4">
                <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-lime-100 flex items-center justify-center">
                  <svg class="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                  </svg>
                </div>
                <h2 class="ml-4 text-xl font-bold text-gray-900">Changes to This Policy</h2>
              </div>
              <div class="ml-14">
                <p class="text-gray-600">We may update this privacy policy from time to time to reflect changes in our practices or for operational, legal, or regulatory reasons. The updated policy will be effective when posted on our website, and We will notify you of significant changes via mail.</p>
                <p class="text-gray-600 mt-2">We encourage you to review this policy periodically for the latest information on our privacy practices.</p>
              </div>
            </div>
          </div>

          <!-- Contact Information -->
          <div class="bg-gradient-to-r from-lime-600 to-green-800 rounded-2xl p-8 text-white text-center">
            <h2 class="text-2xl font-bold mb-4">Questions About Our Privacy Policy?</h2>
            <p class="text-lime-100 mb-6 max-w-2xl mx-auto">
              If you have any questions or concerns about this privacy policy or our data practices, please contact us.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:privacy@ovomarket.ng" 
                class="bg-white text-lime-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all"
              >
                privacy@ovomarket.ng
              </a>
              <router-link 
                to="/contact"
                class="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-lime-700 transition-all"
              >
                Contact Form
              </router-link>
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

const lastUpdated = ref(new Date().toLocaleDateString('en-US', { 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
}));
</script>