<template>
  <app-layout>
    <template v-slot:main-content>
      <div class="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8 animate__animated animate__fadeIn">
        <!-- Decorative elements -->
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-deepsaffron/10 opacity-50 blur-3xl blob-1"></div>
          <div class="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-deepforest/10 opacity-50 blur-3xl blob-2"></div>
        </div>
        
        <div class="relative max-w-4xl mx-auto">
          <!-- Header -->
          <div class="text-center mb-16 animate__animated animate__fadeInDown">
            <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Return <span class="text-transparent bg-clip-text bg-gradient-to-r from-deepsaffron to-deepforest">Policy</span>
            </h1>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Our hassle-free return policy ensures you can shop with confidence. This policy applies to all purchases made through Ovo Market.
            </p>
            <p class="text-sm text-gray-500 mt-2">Effective date: Current</p>
          </div>

          <!-- Policy Summary Card -->
          <div class="bg-gradient-to-r from-deepsaffron to-deepforest rounded-2xl p-8 text-white mb-12 animate__animated animate__fadeInUp">
            <div class="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h2 class="text-2xl font-bold mb-2">7-Day Return Window</h2>
                <p class="text-white/80">Return items within 7 days of delivery if defective, damaged, or not as described</p>
              </div>
              <div class="mt-4 md:mt-0">
                <div class="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 text-center">
                  <p class="text-sm">FCCPA Compliant</p>
                  <p class="text-xs">Nigerian Consumer Protection</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Policy Sections -->
          <div class="space-y-8 mb-16">
            <!-- Eligibility -->
            <div class="bg-white rounded-xl shadow-md p-6 md:p-8 animate__animated animate__fadeInUp">
              <div class="flex items-start mb-4">
                <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-deepsaffron/10 flex items-center justify-center">
                  <svg class="w-6 h-6 text-deepsaffron" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h2 class="ml-4 text-xl font-bold text-gray-900">Return Eligibility</h2>
              </div>
              <ul class="space-y-3 text-gray-600 ml-14">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-deepsaffron mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Items must be defective, damaged, or not as described</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-deepsaffron mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Items that do not perform for the purpose made known at time of purchase</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-deepsaffron mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Items must be in resalable condition with original packaging</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                  </svg>
                  <span>Change-of-mind returns handled at vendor's discretion</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                  </svg>
                  <span>Used, altered, or missing original packaging items may be rejected</span>
                </li>
              </ul>
            </div>

            <!-- Return Process -->
            <div class="bg-white rounded-xl shadow-md p-6 md:p-8 animate__animated animate__fadeInUp">
              <div class="flex items-start mb-4">
                <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-lime-100 flex items-center justify-center">
                  <svg class="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                  </svg>
                </div>
                <h2 class="ml-4 text-xl font-bold text-gray-900">How to Request a Return</h2>
              </div>
              <div class="space-y-4 ml-14">
                <div class="flex">
                <div class="flex-shrink-0 w-8 h-8 rounded-full bg-deepsaffron/10 flex items-center justify-center text-deepsaffron font-bold mr-4">1</div>
                  <div>
                    <h3 class="font-medium text-gray-900">Log into Your Account</h3>
                    <p class="text-gray-600">Select your order and click "Request Return".</p>
                  </div>
                </div>
                <div class="flex">
                <div class="flex-shrink-0 w-8 h-8 rounded-full bg-deepsaffron/10 flex items-center justify-center text-deepsaffron font-bold mr-4">2</div>
                  <div>
                    <h3 class="font-medium text-gray-900">Provide Return Details</h3>
                    <p class="text-gray-600">Include the reason for return and supporting photos if needed.</p>
                  </div>
                </div>
                <div class="flex">
                <div class="flex-shrink-0 w-8 h-8 rounded-full bg-deepsaffron/10 flex items-center justify-center text-deepsaffron font-bold mr-4">3</div>
                  <div>
                    <h3 class="font-medium text-gray-900">Wait for Review</h3>
                    <p class="text-gray-600">Your request will be reviewed by the vendor or Ovo Market.</p>
                  </div>
                </div>
                <div class="flex">
                <div class="flex-shrink-0 w-8 h-8 rounded-full bg-deepsaffron/10 flex items-center justify-center text-deepsaffron font-bold mr-4">4</div>
                  <div>
                    <h3 class="font-medium text-gray-900">Follow Instructions</h3>
                    <p class="text-gray-600">The vendor or Ovo Market will provide instructions on shipping/collection of the item.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Refund Options -->
            <div class="bg-white rounded-xl shadow-md p-6 md:p-8 animate__animated animate__fadeInUp">
              <div class="flex items-start mb-4">
                <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  <!-- Nigerian Naira Sign SVG -->
                 <div class="flex items-center">₦</div>
                </div>
                <h2 class="ml-4 text-xl font-bold text-gray-900">Refunds & Credits</h2>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 ml-14">
                <div class="border border-gray-200 rounded-lg p-4">
                  <h3 class="font-medium text-gray-900 mb-2">Refund Options</h3>
                  <p class="text-gray-600 text-sm">If approved, you will receive either a refund to your original payment method or credit in your account, depending on the vendor's policy.</p>
                </div>
                <div class="border border-gray-200 rounded-lg p-4">
                  <h3 class="font-medium text-gray-900 mb-2">Processing Time</h3>
                  <p class="text-gray-600 text-sm">Refunds will be processed within 14 days of return approval and receipt of the returned item.</p>
                </div>
              </div>
              <div class="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4 ml-14">
                <h3 class="font-medium text-blue-800 mb-2">Nigerian Consumer Rights</h3>
                <p class="text-blue-700 text-sm">In Nigeria, under the FCCPA, consumers may be entitled to full refunds in certain circumstances (e.g., goods are defective or fail to meet required purpose) regardless of a vendor's "no refund" clause.</p>
              </div>
            </div>

            <!-- Exceptions -->
            <div class="bg-white rounded-xl shadow-md p-6 md:p-8 animate__animated animate__fadeInUp">
              <div class="flex items-start mb-4">
                <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-yellow-50 flex items-center justify-center">
                  <svg class="w-6 h-6 text-deepsaffron" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                  </svg>
                </div>
                <h2 class="ml-4 text-xl font-bold text-gray-900">Exceptions</h2>
              </div>
              <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4 ml-14">
                <h3 class="font-medium text-yellow-800 mb-2">Non-Returnable Items</h3>
                <ul class="text-yellow-700 text-sm space-y-1">
                  <li>• Products clearly marked as non-returnable at time of purchase</li>
                  <li>• Perishable goods (unless defective)</li>
                  <li>• Custom-made items (unless defective)</li>
                  <li>• Items marked as "Final Sale"</li>
                </ul>
                <div class="mt-3 pt-3 border-t border-yellow-200">
                  <h4 class="font-medium text-yellow-800 mb-1">Return Shipping Costs</h4>
                  <p class="text-yellow-700 text-sm">Shipping costs for return may be borne by the buyer, unless the return is due to defect or mis-fulfillment.</p>
                </div>
              </div>
            </div>

            <!-- Vendor Accountability -->
            <div class="bg-white rounded-xl shadow-md p-6 md:p-8">
              <div class="flex items-start mb-4">
                <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-deepforest/10 flex items-center justify-center">
                  <svg class="w-6 h-6 text-deepforest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h2 class="ml-4 text-xl font-bold text-gray-900">Vendor Accountability</h2>
              </div>
              <div class="bg-deepforest/10 border border-deepforest/20 rounded-lg p-4 ml-14">
                <h3 class="font-medium text-deepforest mb-2">Transparency Requirements</h3>
                <p class="text-deepforest text-sm">Vendors must state any exclusions or additional terms at the point of sale. Lack of clarity may render exclusions unenforceable under Nigerian consumer protection laws.</p>
              </div>
            </div>
          </div>

          <!-- Contact Support -->
          <div class="bg-white rounded-xl shadow-md p-8 text-center animate__animated animate__fadeInUp">
            <h2 class="text-xl font-bold text-gray-900 mb-2">Need Help With a Return?</h2>
            <p class="text-gray-600 mb-6">Our customer service team is here to assist you with any questions about your return.</p>
            <router-link 
              to="/contact"
              class="inline-block bg-gradient-to-r from-deepsaffron to-deepforest text-white px-6 py-3 rounded-lg font-medium hover:from-deepsaffron hover:to-deepforest transition-all transition-transform duration-200 hover:scale-105 focus:ring-2 focus:ring-deepsaffron"
            >
              Contact Support
            </router-link>
          </div>
        </div>
      </div>
    </template>
  </app-layout>
</template>

<script setup>
import AppLayout from '@/layouts/applayout.vue';
</script>

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
</style>
