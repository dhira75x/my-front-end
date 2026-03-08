<template>
  <section class="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 animate__animated animate__fadeIn">
    <div v-if="showPopup" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div class="relative w-full max-w-md rounded-lg bg-white p-8 shadow-2xl animate__animated animate__zoomIn">
        <button @click="closePopup" class="absolute right-4 top-4 text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 class="mb-4 text-center text-3xl font-bold text-deepsaffron">Coming Soon!</h2>
        <p class="mb-6 text-center text-gray-600">
          Our website is launching soon. Stay tuned!
        </p>

        <div class="mb-6 rounded-lg bg-gray-50 p-4">
          <div class="flex justify-center space-x-4">
            <div class="flex flex-col items-center">
              <span class="text-3xl font-bold text-deepsaffron">{{
                countdown.days
              }}</span>
              <span class="text-sm text-gray-500">Days</span>
            </div>
            <div class="flex flex-col items-center">
              <span class="text-3xl font-bold text-deepsaffron">{{
                countdown.hours
              }}</span>
              <span class="text-sm text-gray-500">Hours</span>
            </div>
            <div class="flex flex-col items-center">
              <span class="text-3xl font-bold text-deepsaffron">{{
                countdown.minutes
              }}</span>
              <span class="text-sm text-gray-500">Minutes</span>
            </div>
            <div class="flex flex-col items-center">
              <span class="text-3xl font-bold text-deepsaffron">{{
                countdown.seconds
              }}</span>
              <span class="text-sm text-gray-500">Seconds</span>
            </div>
          </div>
        </div>

        <form @submit.prevent="submitForm" class="space-y-4">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input v-model="formData.email" type="email" id="email" required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-deepsaffron focus:ring-deepsaffron p-2 border"
              placeholder="your.email@example.com" />
          </div>
          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number</label>
            <input v-model="formData.phone" type="tel" id="phone" required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-deepsaffron focus:ring-deepsaffron p-2 border"
              placeholder="+2348156894789" />
          </div>
          <div v-if="formMessage" :class="['text-center', formMessageClass]">
            {{ formMessage }}
          </div>
          <div class="text-center">
            <button type="submit" :disabled="isSubmitting"
              class="rounded-lg bg-deepsaffron px-6 py-2 font-medium text-white transition hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-deepsaffron focus:ring-offset-2 disabled:opacity-70">
              <span v-if="isSubmitting">Submitting...</span>
              <span v-else>Notify Me</span>
            </button>
          </div>
        </form>
      </div>
    </div>
    <!-- Enhanced Header -->
    <Header />

    <!-- Hero Section Full-Width Carousel -->
    <section class="relative py-16 text-white md:py-24 min-h-[70vh] animate__animated animate__fadeIn">
      <div class="flex transition-transform duration-500 ease-in-out min-h-[70vh]"
        :style="{ transform: `translateX(-${currentHeroSlide * 100}%)` }">
        <div v-for="(slide, index) in heroSlides" :key="index" class="flex-shrink-0 w-full min-h-[70vh]">
          <div class="relative w-full h-full bg-cover bg-center"
            :style="{ backgroundImage: `url(${slide.backgroundImage})` }">
            <div class="absolute inset-0 bg-black bg-opacity-40"></div>
            <div class="container px-4 mx-auto relative z-10 min-h-[70vh]">
              <div class="flex flex-col items-center justify-center h-full md:flex-row">
                <div class="mb-10 md:w-1/2 md:mb-0">
                  <h1 class="mb-4 text-4xl font-bold md:text-5xl">{{ slide.title }}</h1>
                  <p class="mb-8 text-xl opacity-90">{{ slide.description }}</p>
                  <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                    <button
                      class="px-6 py-3 font-semibold transition bg-white rounded-full text-deepsaffron hover:bg-gray-100 duration-300 hover:scale-105 focus:ring-2 focus:ring-white/60">
                      {{ slide.primaryCta }}
                    </button>
                    <button
                      class="px-6 py-3 font-semibold text-white transition bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-deepsaffron duration-300 hover:scale-105 focus:ring-2 focus:ring-white/60">
                      {{ slide.secondaryCta }}
                    </button>
                  </div>
                </div>
                <div class="flex justify-end md:w-1/2 pt-10">
                  <div class="relative">
                    <div
                      class="flex items-center justify-center w-64 h-64 bg-white rounded-full md:w-80 md:h-80 bg-opacity-20 outer-ring">
                      <div
                        class="flex items-center justify-center w-56 h-56 bg-white rounded-full md:w-72 md:h-72 bg-opacity-30 inner-ring">
                        <div class="relative w-48 h-48 overflow-hidden bg-white shadow-xl md:w-64 md:h-64 rounded-xl">
                          <img :src="slide.image.url" :alt="slide.image.alt" class="object-cover w-full h-full" />
                        </div>
                      </div>
                    </div>
                    <div
                      class="absolute px-4 py-2 font-bold text-gray-800 bg-yellow-400 rounded-full shadow-lg -top-4 -right-4">
                      New Arrivals
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button @click="prevHeroSlide"
        class="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white bg-opacity-50 rounded-full hover:bg-opacity-75 z-20">
        <svg class="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      <button @click="nextHeroSlide"
        class="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white bg-opacity-50 rounded-full hover:bg-opacity-75 z-20">
        <svg class="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
      <div class="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
        <button v-for="(_, i) in heroSlides" :key="i" @click="goToHeroSlide(i)" class="w-3 h-3 rounded-full"
          :class="currentHeroSlide === i ? 'bg-white' : 'bg-white/50'"></button>
      </div>
    </section>

    <!-- Product Carousel Section -->
    <section class="py-12 bg-white">
      <div class="container px-4 mx-auto">
        <div class="flex items-center justify-between mb-8">
          <h2 class="text-3xl font-bold text-gray-800">Trending Now</h2>
          <div class="flex space-x-2">
            <button @click="prevSlide" class="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <button @click="nextSlide" class="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>

        <div class="relative overflow-hidden">
          <div class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
            <div v-for="product in carouselProducts" :key="product.id" class="flex-shrink-0 w-full">
              <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div v-for="item in getSlideProducts(product.id)" :key="item._id"
                  class="overflow-hidden transition-shadow bg-white shadow-md rounded-xl hover:shadow-xl cursor-pointer"
                  @click="viewProduct(item._id)">
                  <div class="relative">
                    <img :src="item.img?.[0]?.imgData || '/placeholder.png'" alt="Product Image"
                      class="object-cover w-full h-72" />
                    <button class="absolute p-2 bg-white rounded-full shadow-md top-3 right-3 hover:bg-gray-100">
                      <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
                        </path>
                      </svg>
                    </button>
                    <div v-if="item.isNew"
                      class="absolute px-2 py-1 text-xs font-bold text-white rounded top-3 left-3 bg-deepsaffron">
                      NEW
                    </div>
                  </div>
                  <div class="p-5">
                    <h3 class="mb-1 text-lg font-semibold text-gray-800">
                      {{ item.title }}
                    </h3>
                    <p class="mb-3 text-sm text-gray-600 line-clamp-2">{{ item.description }}</p>
                    <div class="flex items-center justify-between">
                      <div class="flex flex-col">
                        <span v-if="item.discountPrice" class="text-xs text-gray-400 line-through">₦{{
                          Number(item.price).toLocaleString() }}</span>
                        <span class="font-bold text-deepsaffron">₦{{ Number(item.discountPrice ||
                          item.price).toLocaleString() }}</span>
                      </div>
                      <button @click.stop="addToCart(item)"
                        class="p-2 text-white transition-colors rounded-full bg-deepsaffron hover:bg-deepsaffron">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Carousel Indicators -->
          <div class="flex justify-center mt-6 space-x-2">
            <button v-for="(_, index) in carouselProducts" :key="index" @click="goToSlide(index)"
              class="w-3 h-3 rounded-full" :class="currentSlide === index ? 'bg-deepsaffron' : 'bg-gray-300'"></button>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="py-12 bg-white">
      <div class="container px-4 mx-auto">
        <div class="flex items-center justify-between mb-12">
          <h2 class="text-3xl font-bold text-center text-gray-800">Shop by Category</h2>
          <router-link to="/categories" class="flex items-center font-semibold text-deepsaffron hover:text-deepsaffron">
            View All Categories
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </router-link>
        </div>

        <div class="grid grid-cols-2 gap-6 md:grid-cols-5">
          <div class="p-6 text-center transition-shadow cursor-pointer bg-gray-50 rounded-xl hover:shadow-lg"
            @click="$router.push({ name: 'electronics' })">
            <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-deepsaffron/10">
              <svg class="w-8 h-8 text-deepsaffron" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-800">Electronics</h3>
          </div>

          <div class="p-6 text-center transition-shadow cursor-pointer bg-gray-50 rounded-xl hover:shadow-lg"
            @click="$router.push({ name: 'fashion' })">
            <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-deepsaffron/10">
              <svg class="w-8 h-8 text-deepsaffron" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01">
                </path>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-800">Fashion</h3>
          </div>

          <div class="p-6 text-center transition-shadow cursor-pointer bg-gray-50 rounded-xl hover:shadow-lg"
            @click="$router.push({ name: 'home-kitchen' })">
            <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-deepsaffron/10">
              <svg class="w-8 h-8 text-deepsaffron" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z">
                </path>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-800">Home & Kitchen</h3>
          </div>

          <div class="p-6 text-center transition-shadow cursor-pointer bg-gray-50 rounded-xl hover:shadow-lg"
            @click="$router.push({ name: 'beauty' })">
            <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-deepsaffron/10">
              <svg class="w-8 h-8 text-deepsaffron" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
                </path>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-800">Beauty</h3>
          </div>

          <div class="p-6 text-center transition-shadow cursor-pointer bg-gray-50 rounded-xl hover:shadow-lg"
            @click="$router.push({ name: 'grocery-drinks' })">
            <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-deepsaffron/10">
              <svg class="w-8 h-8 text-deepsaffron" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
                </path>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-800">Grocery & Drinks</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products Section -->
    <section class="py-16 bg-gray-50">
      <div class="container px-4 mx-auto">
        <div class="flex items-center justify-between mb-12">
          <h2 class="text-3xl font-bold text-gray-800">Featured Products</h2>
          <router-link to="#" class="flex items-center font-semibold text-deepsaffron hover:text-deepsaffron">
            View All
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </router-link>
        </div>

        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <!-- Product Card -->
          <div v-for="product in featuredProducts" :key="product._id"
            class="overflow-hidden transition-shadow bg-white shadow-md rounded-xl hover:shadow-xl cursor-pointer"
            @click="viewProduct(product._id)">
            <div class="relative">
              <img :src="product.img?.[0]?.imgData || '/placeholder.png'" alt="Product Image"
                class="object-cover w-full h-72" />
              <button class="absolute p-2 bg-white rounded-full shadow-md top-3 right-3 hover:bg-gray-100" @click.stop>
                <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
                  </path>
                </svg>
              </button>
              <div v-if="product.isNew"
                class="absolute px-2 py-1 text-xs font-bold text-white rounded top-3 left-3 bg-deepsaffron">
                NEW
              </div>
            </div>
            <div class="p-5">
              <h3 class="mb-1 text-lg font-semibold text-gray-800">{{ product.title }}</h3>
              <p class="mb-3 text-sm text-gray-600 line-clamp-2">{{ product.description }}</p>
              <div class="flex items-center justify-between">
                <div class="flex flex-col">
                  <span v-if="product.discountPrice" class="text-xs text-gray-400 line-through">₦{{
                    Number(product.price).toLocaleString() }}</span>
                  <span class="font-bold text-deepsaffron">₦{{ Number(product.discountPrice ||
                    product.price).toLocaleString() }}</span>
                </div>
                <div class="flex space-x-2">
                  <button @click.stop="addToCart(product)"
                    class="p-2 text-white transition-colors rounded-full bg-deepsaffron hover:bg-deepsaffron">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                  </button>
                  <button @click.stop="scheduleProduct(product._id)"
                    class="p-2 text-white transition-colors rounded-full bg-blue-600 hover:bg-blue-700"
                    title="Schedule Shopping">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z">
                      </path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Special Offer Section Full-Width Carousel -->
    <section class="py-16 text-white min-h-[60vh] animate__animated animate__fadeIn">
      <div class="container px-4 mx-auto relative overflow-hidden min-h-[60vh]">
        <div class="flex transition-transform duration-500 ease-in-out min-h-[60vh] p-3"
          :style="{ transform: `translateX(-${currentSummerSlide * 100}%)` }">
          <div v-for="(slide, index) in summerSlides" :key="index" class="flex-shrink-0 w-full min-h-[60vh]">
            <div class="relative w-full min-h-[60vh] bg-cover bg-center"
              :style="{ backgroundImage: `url(${slide.backgroundImage})` }">
              <div class="absolute inset-0 bg-black bg-opacity-40"></div>
              <div class="container px-4 mx-auto relative z-10 h-full">
                <div class="flex flex-col items-center justify-center h-full md:flex-row">
                  <div class="mb-10 md:w-2/3 md:mb-0 pl-4">
                    <h2 class="mb-4 text-3xl font-bold md:text-4xl">{{ slide.title }}</h2>
                    <p class="mb-6 text-xl opacity-90">{{ slide.description }}</p>
                    <div class="flex items-center mb-6 space-x-4">
                      <div class="text-center">
                        <div class="text-3xl font-bold">12</div>
                        <div class="text-sm opacity-80">Days</div>
                      </div>
                      <div class="text-3xl">:</div>
                      <div class="text-center">
                        <div class="text-3xl font-bold">08</div>
                        <div class="text-sm opacity-80">Hours</div>
                      </div>
                      <div class="text-3xl">:</div>
                      <div class="text-center">
                        <div class="text-3xl font-bold">34</div>
                        <div class="text-sm opacity-80">Minutes</div>
                      </div>
                      <div class="text-3xl">:</div>
                      <div class="text-center">
                        <div class="text-3xl font-bold">52</div>
                        <div class="text-sm opacity-80">Seconds</div>
                      </div>
                    </div>
                    <div class="flex items-center space-x-4">
                      <button
                        class="px-6 py-3 font-semibold transition-colors bg-white rounded-full text-deepsaffron hover:bg-gray-100">
                        {{ slide.primaryCta }}
                      </button>
                      <button
                        class="px-6 py-3 font-semibold transition bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-deepsaffron">
                        {{ slide.secondaryCta }}
                      </button>
                    </div>
                  </div>
                  <div class="flex justify-center md:w-1/3 pt-10">
                    <div class="relative">
                      <div
                        class="flex items-center justify-center w-64 h-64 bg-white rounded-full md:w-80 md:h-80 bg-opacity-20 outer-ring">
                        <div
                          class="flex items-center justify-center w-56 h-56 bg-white rounded-full md:w-72 md:h-72 bg-opacity-30 inner-ring">
                          <div class="relative w-48 h-48 overflow-hidden bg-white shadow-xl md:w-64 md:h-64 rounded-xl">
                            <img :src="slide.image.url" :alt="slide.image.alt" class="object-cover w-full h-full" />
                          </div>
                        </div>
                      </div>
                      <div
                        class="absolute px-3 py-1.5 font-bold text-gray-800 bg-yellow-400 rounded-full shadow-lg bottom-2 right-2 md:bottom-4 md:right-4 text-sm z-10">
                        50% OFF
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button @click="prevSummerSlide"
          class="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white bg-opacity-50 rounded-full hover:bg-opacity-75 z-20">
          <svg class="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <button @click="nextSummerSlide"
          class="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white bg-opacity-50 rounded-full hover:bg-opacity-75 z-20">
          <svg class="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
        <div class="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
          <button v-for="(_, i) in summerSlides" :key="i" @click="goToSummerSlide(i)" class="w-3 h-3 rounded-full"
            :class="currentSummerSlide === i ? 'bg-white' : 'bg-white/50'"></button>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gray-50">
      <div class="container px-4 mx-auto">
        <div class="flex items-center justify-between mb-12">
          <h2 class="text-3xl font-bold text-gray-800">Hot Deals</h2>
          <router-link to="#" class="flex items-center font-semibold text-transparent bg-clip-text brand-gradient">
            View All
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </router-link>
        </div>

        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <!-- Product Card -->
          <div v-for="product in hotProducts" :key="product._id"
            class="overflow-hidden transition-shadow bg-white shadow-md rounded-xl hover:shadow-xl cursor-pointer"
            @click="viewProduct(product._id)">
            <div class="relative">
              <img :src="product.img?.[0]?.imgData || '/placeholder.png'" alt="Product Image"
                class="object-cover w-full h-72" />
              <button class="absolute p-2 bg-white rounded-full shadow-md top-3 right-3 hover:bg-gray-100">
                <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
                  </path>
                </svg>
              </button>
              <div v-if="product.isNew"
                class="absolute px-2 py-1 text-xs font-bold text-white rounded top-3 left-3 bg-deepsaffron">
                NEW
              </div>
            </div>
            <div class="p-5">
              <h3 class="mb-1 text-lg font-semibold text-gray-800">{{ product.title }}</h3>
              <p class="mb-3 text-sm text-gray-600 line-clamp-2">{{ product.description }}</p>
              <div class="flex items-center justify-between">
                <div class="flex flex-col">
                  <span v-if="product.discountPrice" class="text-xs text-gray-400 line-through">₦{{
                    Number(product.price).toLocaleString() }}</span>
                  <span class="font-bold text-deepsaffron">₦{{ Number(product.discountPrice ||
                    product.price).toLocaleString() }}</span>
                </div>
                <button @click.stop="addToCart(product)"
                  class="p-2 text-white transition-colors rounded-full bg-deepsaffron hover:bg-deepsaffron">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-16 bg-white">
      <div class="container px-4 mx-auto">
        <h2 class="mb-12 text-3xl font-bold text-center text-gray-800">
          What Our Customers Say
        </h2>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div class="p-6 bg-gray-50 rounded-xl">
            <div class="flex items-center mb-4">
              <div
                class="flex items-center justify-center w-12 h-12 mr-4 font-bold rounded-full bg-lime-200 text-lime-800">
                JD
              </div>
              <div>
                <h3 class="font-semibold text-gray-800">John Doe</h3>
                <div class="flex text-yellow-400">
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
              </div>
            </div>
            <p class="text-gray-600">
              "I've been shopping with OvoMarket for over a year now. The quality of
              products is exceptional and delivery is always on time."
            </p>
          </div>

          <div class="p-6 bg-gray-50 rounded-xl">
            <div class="flex items-center mb-4">
              <div
                class="flex items-center justify-center w-12 h-12 mr-4 font-bold rounded-full bg-lime-200 text-lime-800">
                SM
              </div>
              <div>
                <h3 class="font-semibold text-gray-800">Sarah Miller</h3>
                <div class="flex text-yellow-400">
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
              </div>
            </div>
            <p class="text-gray-600">
              "The customer service is outstanding! They helped me with a return and made
              the process so smooth. Highly recommend!"
            </p>
          </div>

          <div class="p-6 bg-gray-50 rounded-xl">
            <div class="flex items-center mb-4">
              <div
                class="flex items-center justify-center w-12 h-12 mr-4 font-bold rounded-full bg-lime-200 text-lime-800">
                RJ
              </div>
              <div>
                <h3 class="font-semibold text-gray-800">Robert Johnson</h3>
                <div class="flex text-yellow-400">
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg class="w-4 h-4 text-gray-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
              </div>
            </div>
            <p class="text-gray-600">
              "Great prices and fast shipping. I've found unique items here that I
              couldn't find anywhere else. Will definitely shop again."
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-white">
      <div class="container px-4 mx-auto">
        <div class="flex flex-col items-center text-center">
          <h2 class="mb-4 text-3xl font-bold text-gray-800">
            Can't Shop Now? Schedule It!
          </h2>
          <p class="mb-8 max-w-2xl text-gray-600">
            Plan your shopping in advance and have your items delivered when it's most
            convenient for you.
          </p>
          <button @click="goToScheduleShopping"
            class="px-6 py-3 font-semibold text-white transition-colors bg-deepsaffron rounded-lg hover:bg-opacity-90">
            Schedule Your Shopping
          </button>
        </div>
      </div>
    </section>
    <!-- App Download Section -->
    <section class="py-16 bg-gray-50">
      <div class="container px-4 mx-auto">
        <div class="flex flex-col items-center md:flex-row">
          <div class="mb-10 md:w-1/2 md:mb-0">
            <h2 class="mb-4 text-3xl font-bold text-gray-800">Download Our App</h2>
            <p class="mb-6 text-gray-600">
              Shop on the go with our mobile app. Get exclusive app-only deals and
              features.
            </p>
            <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <a href="#"
                class="flex items-center px-4 py-3 text-white transition-colors bg-black rounded-lg hover:bg-gray-800">
                <svg class="w-8 h-8 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <div>
                  <div class="text-xs">Download on the</div>
                  <div class="text-lg font-semibold">App Store</div>
                </div>
              </a>

              <a href="#"
                class="flex items-center px-4 py-3 text-white transition-colors bg-black rounded-lg hover:bg-gray-800">
                <svg class="w-8 h-8 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div>
                  <div class="text-xs">Get it on</div>
                  <div class="text-lg font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
          <div class="flex justify-center md:w-1/2">
            <div class="relative">
              <div class="flex items-center justify-center w-64 h-64 overflow-hidden bg-gray-200 shadow-xl rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                  alt="App Preview" class="object-cover w-full h-full" />
              </div>
              <div class="absolute w-48 p-4 bg-white shadow-lg -bottom-6 -right-6 rounded-xl">
                <div class="flex items-center mb-2">
                  <div
                    class="flex items-center justify-center w-8 h-8 mr-2 font-bold text-white rounded-full bg-deepsaffron">
                    O
                  </div>
                  <div>
                    <div class="text-sm font-semibold">OvoMarket</div>
                    <div class="text-xs text-gray-500">Shopping App</div>
                  </div>
                </div>
                <div class="flex">
                  <div class="mr-1 text-yellow-400">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </div>
                  <div class="text-xs">4.8 (2.3K reviews)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import Header from "@/components/molecules/Header/Header.vue";
import Footer from "@/components/molecules/Footer/footer.vue";
import { useCartStore } from "@/stores/cartStore.js";
import { Products } from "@/classes/products.class";
import { Categories } from "@/classes/categories.class";

const router = useRouter();
const cartStore = useCartStore();
const productClass = new Products();
const categoryClass = new Categories();

// Carousel functionality
const currentSlide = ref(0);
const currentHeroSlide = ref(0);
const currentSummerSlide = ref(0);

// Dynamic Data
const featuredProducts = ref([]);
const hotProducts = ref([]);
const allCarouselProducts = ref([]);
const dynamicCategories = ref([]);
const loading = ref(true);

const categories = [
  { id: 'electronics', name: 'Electronics', icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' },
  { id: 'fashion', name: 'Fashion', icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01' },
  { id: 'home-kitchen', name: 'Home & Kitchen', icon: 'M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z' },
  { id: 'beauty', name: 'Beauty', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
  { id: 'grocery-drinks', name: 'Grocery & Drinks', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' }
];

const fetchDynamicData = async () => {
  try {
    loading.value = true;

    // 1. Fetch Trending Now (Latest products)
    const latestData = await productClass.getProducts({ limit: 8 });
    allCarouselProducts.value = latestData.payload.docs;

    // 2. Fetch Featured Products (using isFeatured flag)
    const featuredData = await productClass.getProducts({ isFeatured: true, limit: 4 });
    featuredProducts.value = featuredData.payload.docs;

    // 3. Hot Deals - Automated logic (Products with discountPrice)
    // For now, if no products have discountPrice, we'll fall back to a specific slice
    // or just fetch all and filter client side if the API is simple.
    const allProductsData = await productClass.getProducts({ limit: 20 });
    const allProds = allProductsData.payload.docs;

    const deals = allProds.filter(p => p.discountPrice && p.discountPrice < p.price);
    hotProducts.value = deals.length > 0 ? deals.slice(0, 4) : allProds.slice(4, 8);

    // Final Fallbacks
    if (featuredProducts.value.length === 0) featuredProducts.value = allProds.slice(0, 4);

    // Fetch dynamic categories for taxonomy if needed in future
    const categoryData = await categoryClass.getTaxonomy();
    dynamicCategories.value = categoryData.payload.categories;

  } catch (error) {
    console.error("Failed to fetch landing page data:", error);
  } finally {
    loading.value = false;
  }
};

// Dropdown functionality
const showDropdown = ref(false);
const dropdownContainer = ref(null);

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const closeDropdown = (event) => {
  if (
    showDropdown.value &&
    dropdownContainer.value &&
    !dropdownContainer.value.contains(event.target)
  ) {
    showDropdown.value = false;
  }
};

// Cart functionality
const showCart = ref(false);
const cartContainer = ref(null);
const cartItems = ref([]);

const toggleCart = () => {
  showCart.value = !showCart.value;
};

const closeCart = (event) => {
  if (
    showCart.value &&
    cartContainer.value &&
    !cartContainer.value.contains(event.target)
  ) {
    showCart.value = false;
  }
};

const viewProduct = (productId) => {
  router.push(`/product/${productId}`);
};

const addToCart = (product) => {
  cartStore.addToCart(product._id);
};

const scheduleProduct = (productId) => {
  router.push(`/schedule-shopping?productId=${productId}`);
};


const heroSlides = ref([
  {
    title: "Discover Amazing Products",
    description: "Find everything you need at unbeatable prices",
    primaryCta: "Shop Now",
    secondaryCta: "Learn More",
    image: { url: "/smart_phone.png", alt: "Electronics" },
    backgroundImage: "/public/perfume.webp",
  },
  {
    title: "Refresh Your Style",
    description: "New season outfits and accessories",
    primaryCta: "Shop Now",
    secondaryCta: "Learn More",
    image: { url: "/clothes.png", alt: "Fashion" },
    backgroundImage:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    title: "Upgrade Your Home",
    description: "Top picks for kitchen and living",
    primaryCta: "Shop Now",
    secondaryCta: "Learn More",
    image: {
      url:
        "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Home & Kitchen",
    },
    backgroundImage:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    title: "Beauty Essentials",
    description: "Care, glow and fragrance",
    primaryCta: "Shop Now",
    secondaryCta: "Learn More",
    image: {
      url:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Beauty",
    },
    backgroundImage:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    title: "Tech For Everyday",
    description: "Smart gadgets that simplify life",
    primaryCta: "Shop Now",
    secondaryCta: "Learn More",
    image: { url: "/canon.png", alt: "Electronics" },
    backgroundImage:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
]);

const nextHeroSlide = () => {
  currentHeroSlide.value = (currentHeroSlide.value + 1) % heroSlides.value.length;
};

const prevHeroSlide = () => {
  currentHeroSlide.value =
    (currentHeroSlide.value - 1 + heroSlides.value.length) % heroSlides.value.length;
};

const goToHeroSlide = (index) => {
  currentHeroSlide.value = index;
};

// Summer sale carousel functionality
const summerSlides = ref([
  {
    title: "Summer Sale is On!",
    description: "Get up to 50% off on selected items. Limited time offer.",
    primaryCta: "Shop Now",
    secondaryCta: "Learn More",
    image: {
      url:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Summer Fashion",
    },
    backgroundImage: "/public/promo.png      ",
  },
  {
    title: "Summer Electronics Deals",
    description: "Save big on laptops, phones and accessories this summer.",
    primaryCta: "Shop Now",
    secondaryCta: "Learn More",
    image: {
      url:
        "https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Summer Electronics",
    },
    backgroundImage:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    title: "Beach Essentials",
    description: "Must-have items for your summer vacation.",
    primaryCta: "Shop Now",
    secondaryCta: "Learn More",
    image: { url: "/sneakers_sales.png", alt: "Summer Accessories" },
    backgroundImage:
      "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    title: "Outdoor Gear Sale",
    description: "Get ready for adventure with our summer gear deals.",
    primaryCta: "Shop Now",
    secondaryCta: "Learn More",
    image: { url: "/canon.png", alt: "Summer Sports" },
    backgroundImage:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
]);

const nextSummerSlide = () => {
  currentSummerSlide.value = (currentSummerSlide.value + 1) % summerSlides.value.length;
};

const prevSummerSlide = () => {
  currentSummerSlide.value =
    (currentSummerSlide.value - 1 + summerSlides.value.length) %
    summerSlides.value.length;
};

const goToSummerSlide = (index) => {
  currentSummerSlide.value = index;
};

// Product carousel functionality

// Carousel helpers
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % carouselProducts.value.length;
};

const prevSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + carouselProducts.value.length) %
    carouselProducts.value.length;
};

const goToSlide = (index) => {
  currentSlide.value = index;
};

const carouselProducts = computed(() => {
  // Group products into slides of 4
  const slides = [];
  if (!allCarouselProducts.value || allCarouselProducts.value.length === 0) return slides;
  for (let i = 0; i < allCarouselProducts.value.length; i += 4) {
    slides.push({
      id: Math.floor(i / 4) + 1,
      products: allCarouselProducts.value.slice(i, i + 4),
    });
  }
  return slides;
});

const getSlideProducts = (slideId) => {
  const slide = carouselProducts.value.find((s) => s.id === slideId);
  return slide ? slide.products : [];
};

let heroAutoplay;
let summerAutoplay;
let productAutoplay;

onMounted(() => {
  heroAutoplay = setInterval(nextHeroSlide, 5000);
  summerAutoplay = setInterval(nextSummerSlide, 5000);
  productAutoplay = setInterval(nextSlide, 5000);
});

onUnmounted(() => {
  clearInterval(heroAutoplay);
  clearInterval(summerAutoplay);
  clearInterval(productAutoplay);
});

// Auto-play carousels
let heroAutoplayInterval;
let productAutoplayInterval;

const startHeroAutoplay = () => {
  heroAutoplayInterval = setInterval(() => {
    nextHeroSlide();
  }, 5000);
};

const stopHeroAutoplay = () => {
  clearInterval(heroAutoplayInterval);
};

const startProductAutoplay = () => {
  productAutoplayInterval = setInterval(() => {
    nextSlide();
  }, 5000);
};

const stopProductAutoplay = () => {
  clearInterval(productAutoplayInterval);
};

const showPopup = ref(true);
const countdown = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

const formData = ref({
  email: "",
  phone: "",
});
const isSubmitting = ref(false);
const formMessage = ref("");
const formMessageClass = ref("text-green-600");
// Set your launch date here (YYYY, MM, DD, HH, MM, SS)
const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 38); // 30 days from now
let timerInterval;

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = launchDate.getTime() - now;

  if (distance < 0) {
    clearInterval(timerInterval);
    showPopup.value = false;
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.value = { days, hours, minutes, seconds };
};

const closePopup = () => {
  showPopup.value = false;
};

const goToScheduleShopping = () => {
  router.push("/schedule-shopping");
};

const submitForm = async () => {
  isSubmitting.value = true;
  formMessage.value = "";

  try {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzoivjjdrUrZ3grpWZup-pt51B4_05GNTIhz4h33OTIntORsczRjNeWNLr8MdAKq2zVJA/exec";

    // Create a hidden form and submit it via iframe
    const form = document.createElement("form");
    form.method = "POST";
    form.action = scriptURL;
    form.target = "hidden-iframe"; // Target the iframe

    // Add email field
    const emailField = document.createElement("input");
    emailField.type = "hidden";
    emailField.name = "email";
    emailField.value = formData.value.email;
    form.appendChild(emailField);

    // Add phone field
    const phoneField = document.createElement("input");
    phoneField.type = "hidden";
    phoneField.name = "phone";
    phoneField.value = formData.value.phone;
    form.appendChild(phoneField);

    // Add timestamp field
    const timestampField = document.createElement("input");
    timestampField.type = "hidden";
    timestampField.name = "timestamp";
    timestampField.value = new Date().toISOString();
    form.appendChild(timestampField);

    // Create or get the iframe
    let iframe = document.getElementById("hidden-iframe");
    if (!iframe) {
      iframe = document.createElement("iframe");
      iframe.id = "hidden-iframe";
      iframe.name = "hidden-iframe";
      iframe.style.display = "none";
      document.body.appendChild(iframe);
    }

    // Add a listener to detect when the form submission is complete
    const handleMessage = (event) => {
      // Check if the message is from our script
      if (event.data && event.data.type === "form-submission") {
        if (event.data.success) {
          formMessage.value = "Thank you! We will notify you when we launch.";
          formMessageClass.value = "text-green-600";

          // Reset form
          formData.value = {
            email: "",
            phone: "",
          };

          // Close popup after successful submission
          setTimeout(() => {
            showPopup.value = false;
          }, 2000);
        } else {
          formMessage.value = "There was an error. Please try again later.";
          formMessageClass.value = "text-red-600";
        }

        // Remove the event listener
        window.removeEventListener("message", handleMessage);
        isSubmitting.value = false;
      }
    };

    window.addEventListener("message", handleMessage);

    // Set a timeout in case we don't get a response
    setTimeout(() => {
      if (isSubmitting.value) {
        formMessage.value = "Thank you! We will notify you when we launch.";
        formMessageClass.value = "text-green-600";

        // Reset form
        formData.value = {
          email: "",
          phone: "",
        };

        // Close popup after successful submission
        setTimeout(() => {
          showPopup.value = false;
        }, 2000);

        isSubmitting.value = false;
        window.removeEventListener("message", handleMessage);
      }
    }, 5000);

    // Submit the form
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  } catch (error) {
    console.error("Error submitting form:", error);
    formMessage.value = "There was an error. Please try again later.";
    formMessageClass.value = "text-red-600";
    isSubmitting.value = false;
  }
};

onMounted(() => {
  // For dropdown
  document.addEventListener("click", closeDropdown);
  // For cart
  document.addEventListener("click", closeCart);
  // For hero carousel
  startHeroAutoplay();
  // For product carousel
  startProductAutoplay();
  updateCountdown();
  timerInterval = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  document.removeEventListener("click", closeDropdown);
  document.removeEventListener("click", closeCart);
  stopHeroAutoplay();
  stopProductAutoplay();
  clearInterval(timerInterval);
});
</script>

<style scoped>
.outer-ring {
  animation: ringPulse 8s ease-in-out infinite;
  will-change: transform;
}

.inner-ring {
  animation: ringPulseAlt 10s ease-in-out infinite;
  will-change: transform;
}

@keyframes ringPulse {
  0% {
    transform: scale(1) translateY(0);
  }

  25% {
    transform: scale(1.03) translateY(-2px);
  }

  50% {
    transform: scale(1.06) translateY(0);
  }

  75% {
    transform: scale(1.03) translateY(2px);
  }

  100% {
    transform: scale(1) translateY(0);
  }
}

@keyframes ringPulseAlt {
  0% {
    transform: scale(1) translateY(0);
  }

  25% {
    transform: scale(1.02) translateY(2px);
  }

  50% {
    transform: scale(1.04) translateY(0);
  }

  75% {
    transform: scale(1.02) translateY(-2px);
  }

  100% {
    transform: scale(1) translateY(0);
  }
}
</style>
