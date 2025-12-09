<template>
  <section class="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
    <!-- Enhanced Header -->
    <Header/>
   

    <!-- Hero Section with Image Carousel -->
    <section class="relative py-16 text-white md:py-24 bg-gradient-to-r from-lime-600 to-green-900">
      <div class="container px-4 mx-auto">
        <div class="flex flex-col items-center md:flex-row">
          <div class="mb-10 md:w-1/2 md:mb-0">
            <h1 class="mb-4 text-4xl font-bold md:text-5xl">Discover Amazing Products</h1>
            <p class="mb-8 text-xl opacity-90">Find everything you need at unbeatable prices</p>
            <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <button
                class="px-6 py-3 font-semibold transition-colors bg-white rounded-full text-lime-600 hover:bg-gray-100">
                Shop Now
              </button>
              <button
                class="px-6 py-3 font-semibold text-white transition-colors bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-lime-600">
                Learn More
              </button>
            </div>
          </div>
          <div class="flex justify-center md:w-1/2">
            <div class="relative">
              <div
                class="flex items-center justify-center w-64 h-64 bg-white rounded-full md:w-80 md:h-80 bg-opacity-20">
                <div
                  class="flex items-center justify-center w-56 h-56 bg-white rounded-full md:w-72 md:h-72 bg-opacity-30">
                  <div class="relative w-48 h-48 overflow-hidden bg-white shadow-xl md:w-64 md:h-64 rounded-xl">
                    <!-- Image Carousel -->
                    <div class="relative w-full h-full overflow-hidden">
                      <div 
                        class="flex h-full transition-transform duration-500 ease-in-out"
                        :style="{ transform: `translateX(-${currentHeroSlide * 100}%)` }"
                      >
                        <div v-for="(image, index) in heroImages" :key="index" class="flex-shrink-0 w-full h-full">
                          <img
                            :src="image.url"
                            :alt="image.alt"
                            class="object-cover w-full h-full"
                          />
                        </div>
                      </div>
                      
                      <!-- Carousel Navigation -->
                      <button 
                        @click="prevHeroSlide"
                        class="absolute p-2 transition-all transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full left-2 top-1/2 hover:bg-opacity-75"
                      >
                        <svg class="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                      </button>
                      <button 
                        @click="nextHeroSlide"
                        class="absolute p-2 transition-all transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full right-2 top-1/2 hover:bg-opacity-75"
                      >
                        <svg class="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </button>
                      
                      <!-- Carousel Indicators -->
                      <div class="absolute left-0 right-0 flex justify-center space-x-2 bottom-3">
                        <button 
                          v-for="(_, index) in heroImages" 
                          :key="index" 
                          @click="goToHeroSlide(index)"
                          class="w-2 h-2 transition-all rounded-full"
                          :class="currentHeroSlide === index ? 'bg-white w-6' : 'bg-white bg-opacity-50'"
                        ></button>
                      </div>
                    </div>
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

      <!-- Decorative Elements -->
      <div class="absolute bottom-0 left-0 w-full h-16 bg-gray-50 rounded-t-3xl"></div>
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
                <div v-for="item in getSlideProducts(product.id)" :key="item.id"
                  class="overflow-hidden transition-shadow bg-white shadow-md rounded-xl hover:shadow-xl"
                  @click="viewProduct(product.id)">
                  <div class="relative">
                    <img :src="item.image" alt="Product Image" class="object-cover w-full h-72">
                    <button class="absolute p-2 bg-white rounded-full shadow-md top-3 right-3 hover:bg-gray-100">
                      <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
                        </path>
                      </svg>
                    </button>
                    <div v-if="item.isNew"
                      class="absolute px-2 py-1 text-xs font-bold text-white rounded top-3 left-3 bg-lime-500">
                      NEW
                    </div>
                  </div>
                  <div class="p-5">
                    <h3 class="mb-1 text-lg font-semibold text-gray-800">{{ item.name }}</h3>
                    <p class="mb-3 text-sm text-gray-600">{{ item.description }}</p>
                    <div class="flex items-center justify-between">
                      <span class="font-bold text-lime-600">{{ item.price }}</span>
                      <button @click="addToCart(item)"
                        class="p-2 text-white transition-colors rounded-full bg-lime-500 hover:bg-lime-600">
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
              class="w-3 h-3 rounded-full" :class="currentSlide === index ? 'bg-lime-500' : 'bg-gray-300'"></button>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="py-12 bg-white">
      <div class="container px-4 mx-auto">

        <div class="flex items-center justify-between mb-12">
          <h2 class="text-3xl font-bold text-center text-gray-800">Shop by Category</h2>
          <router-link to="/categories" class="flex items-center font-semibold text-lime-600 hover:text-lime-700">
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
            <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-lime-100">
              <svg class="w-8 h-8 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-800">Electronics</h3>
          </div>

          <div class="p-6 text-center transition-shadow cursor-pointer bg-gray-50 rounded-xl hover:shadow-lg"
            @click="$router.push({ name: 'fashion' })">
            <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-lime-100">
              <svg class="w-8 h-8 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
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
            <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-lime-100">
              <svg class="w-8 h-8 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
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
            <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-lime-100">
              <svg class="w-8 h-8 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
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
            <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-lime-100">
              <svg class="w-8 h-8 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
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
          <router-link to="#" class="flex items-center font-semibold text-lime-600 hover:text-lime-700">
            View All
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </router-link>
        </div>

        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <!-- Product Card -->
          <div v-for="product in featuredProducts" :key="product.id"
            class="overflow-hidden transition-shadow bg-white shadow-md rounded-xl hover:shadow-xl"
            @click="viewProduct(product.id)">
            <div class="relative">
              <img :src="product.image" alt="Product Image" class="object-cover w-full h-72">
              <button class="absolute p-2 bg-white rounded-full shadow-md top-3 right-3 hover:bg-gray-100" @click.stop>
                <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
                  </path>
                </svg>
              </button>
              <div v-if="product.isNew"
                class="absolute px-2 py-1 text-xs font-bold text-white rounded top-3 left-3 bg-lime-500">
                NEW
              </div>
            </div>
            <div class="p-5">
              <h3 class="mb-1 text-lg font-semibold text-gray-800">{{ product.name }}</h3>
              <p class="mb-3 text-sm text-gray-600">{{ product.description }}</p>
              <div class="flex items-center justify-between">
                <span class="font-bold text-lime-600">{{ product.price }}</span>
                <button @click="addToCart(product)"
                  class="p-2 text-white transition-colors rounded-full bg-lime-500 hover:bg-lime-600">
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

    <!-- Special Offer Section -->
     <section class="py-16 text-white bg-gradient-to-r from-lime-600 to-green-900">
      <div class="container px-4 mx-auto">
        <div class="flex flex-col items-center md:flex-row">
          <div class="mb-10 md:w-2/3 md:mb-0">
            <h2 class="mb-4 text-3xl font-bold md:text-4xl">Summer Sale is On!</h2>
            <p class="mb-6 text-xl opacity-90">Get up to 50% off on selected items. Limited time offer.</p>
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
            <button
              class="px-6 py-3 font-semibold transition-colors bg-white rounded-full text-lime-600 hover:bg-gray-100">
              Shop Now
            </button>
          </div>
          <div class="flex justify-center md:w-1/3">
            <div class="relative">
              <div
                class="flex items-center justify-center w-64 h-64 bg-white rounded-full md:w-80 md:h-80 bg-opacity-20">
                <div
                  class="flex items-center justify-center w-56 h-56 bg-white rounded-full md:w-72 md:h-72 bg-opacity-30">
                  <div class="relative w-48 h-48 overflow-hidden bg-white shadow-xl md:w-64 md:h-64 rounded-xl">
                    <!-- Summer Sale Image Carousel -->
                    <div class="relative w-full h-full overflow-hidden">
                      <div 
                        class="flex h-full transition-transform duration-500 ease-in-out"
                        :style="{ transform: `translateX(-${currentSummerSlide * 100}%)` }"
                      >
                        <div v-for="(image, index) in summerImages" :key="index" class="flex-shrink-0 w-full h-full">
                          <img
                            :src="image.url"
                            :alt="image.alt"
                            class="object-cover w-full h-full"
                          />
                        </div>
                      </div>
                      
                      <!-- Carousel Navigation -->
                      <button 
                        @click="prevSummerSlide"
                        class="absolute left-1 top-1/2 transform -translate-y-1/2 p-1.5 bg-white bg-opacity-50 rounded-full hover:bg-opacity-75 transition-all"
                      >
                        <svg class="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                      </button>
                      <button 
                        @click="nextSummerSlide"
                        class="absolute right-1 top-1/2 transform -translate-y-1/2 p-1.5 bg-white bg-opacity-50 rounded-full hover:bg-opacity-75 transition-all"
                      >
                        <svg class="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </button>
                      
                      <!-- Carousel Indicators -->
                      <div class="absolute left-0 right-0 flex justify-center space-x-1 bottom-2">
                        <button 
                          v-for="(_, index) in summerImages" 
                          :key="index" 
                          @click="goToSummerSlide(index)"
                          class="w-1.5 h-1.5 rounded-full transition-all"
                          :class="currentSummerSlide === index ? 'bg-white w-4' : 'bg-white bg-opacity-50'"
                        ></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="absolute px-3 py-1.5 font-bold text-gray-800 bg-yellow-400 rounded-full shadow-lg -top-4 -right-4 text-sm">
                50% OFF
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gray-50">
      <div class="container px-4 mx-auto">
        <div class="flex items-center justify-between mb-12">
          <h2 class="text-3xl font-bold text-gray-800">Hot Deals</h2>
          <router-link to="#" class="flex items-center font-semibold text-lime-600 hover:text-lime-700">
            View All
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </router-link>
        </div>

        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <!-- Product Card -->
          <div v-for="product in hotProducts" :key="product.id"
            class="overflow-hidden transition-shadow bg-white shadow-md rounded-xl hover:shadow-xl"
            @click="viewProduct(product.id)">
            <div class="relative">
              <img :src="product.image" alt="Product Image" class="object-cover w-full h-72">
              <button class="absolute p-2 bg-white rounded-full shadow-md top-3 right-3 hover:bg-gray-100">
                <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
                  </path>
                </svg>
              </button>
              <div v-if="product.isNew"
                class="absolute px-2 py-1 text-xs font-bold text-white rounded top-3 left-3 bg-lime-500">
                NEW
              </div>
            </div>
            <div class="p-5">
              <h3 class="mb-1 text-lg font-semibold text-gray-800">{{ product.name }}</h3>
              <p class="mb-3 text-sm text-gray-600">{{ product.description }}</p>
              <div class="flex items-center justify-between">
                <span class="font-bold text-lime-600">{{ product.price }}</span>
                <button @click="addToCart(product)"
                  class="p-2 text-white transition-colors rounded-full bg-lime-500 hover:bg-lime-600">
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
        <h2 class="mb-12 text-3xl font-bold text-center text-gray-800">What Our Customers Say</h2>

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
            <p class="text-gray-600">"I've been shopping with OvoMarket for over a year now. The quality of products is
              exceptional and delivery is always on time."</p>
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
            <p class="text-gray-600">"The customer service is outstanding! They helped me with a return and made the
              process so smooth. Highly recommend!"</p>
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
            <p class="text-gray-600">"Great prices and fast shipping. I've found unique items here that I couldn't find
              anywhere else. Will definitely shop again."</p>
          </div>
        </div>
      </div>
    </section>

    <!-- App Download Section -->
    <section class="py-16 bg-gray-50">
      <div class="container px-4 mx-auto">
        <div class="flex flex-col items-center md:flex-row">
          <div class="mb-10 md:w-1/2 md:mb-0">
            <h2 class="mb-4 text-3xl font-bold text-gray-800">Download Our App</h2>
            <p class="mb-6 text-gray-600">Shop on the go with our mobile app. Get exclusive app-only deals and features.
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
                  alt="App Preview" class="object-cover w-full h-full">
              </div>
              <div class="absolute w-48 p-4 bg-white shadow-lg -bottom-6 -right-6 rounded-xl">
                <div class="flex items-center mb-2">
                  <div
                    class="flex items-center justify-center w-8 h-8 mr-2 font-bold text-white rounded-full bg-lime-500">
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
    <Footer/>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import Header from "@/components/molecules/Header/Header.vue";
import Footer from "@/components/molecules/Footer/footer.vue";

const router = useRouter();

// Dropdown functionality
const showDropdown = ref(false);
const dropdownContainer = ref(null);

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const closeDropdown = (event) => {
  if (showDropdown.value && dropdownContainer.value && !dropdownContainer.value.contains(event.target)) {
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
  if (showCart.value && cartContainer.value && !cartContainer.value.contains(event.target)) {
    showCart.value = false;
  }
};

const viewProduct = (productId) => {
  router.push(`/product/${productId}`);
};

const addToCart = (product) => {
  cartItems.value.push(product);
  console.log("Product added to cart:", product);
};

const removeFromCart = (productId) => {
  cartItems.value = cartItems.value.filter(item => item.id !== productId);
};

const cartTotal = computed(() => {
  return cartItems.value.reduce((total, item) => {
    return total + parseFloat(item.price.replace('₦', '').replace(',', ''));
  }, 0).toFixed(2);
});

// Hero carousel functionality
const currentHeroSlide = ref(0);
const heroImages = ref([
  {
    url: "/smart_phone.png",
    alt: "Electronics"
  },
  {
    url: "/clothes.png",
    alt: "Fashion"
  },
  {
    url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    alt: "Home & Kitchen"
  },
  {
    url: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    alt: "Beauty"
  }
]);

const nextHeroSlide = () => {
  currentHeroSlide.value = (currentHeroSlide.value + 1) % heroImages.value.length;
};

const prevHeroSlide = () => {
  currentHeroSlide.value = (currentHeroSlide.value - 1 + heroImages.value.length) % heroImages.value.length;
};

const goToHeroSlide = (index) => {
  currentHeroSlide.value = index;
};



// Summer sale carousel functionality
const currentSummerSlide = ref(0);
const summerImages = ref([
  {
    url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    alt: "Summer Fashion"
  },
  {
    url: "https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    alt: "Summer Electronics"
  },
  {
    url: "/sneakers_sales.png",
    alt: "Summer Accessories"
  },
  {
    url: "/canon.png",
    alt: "Summer Sports"
  }
]);

const nextSummerSlide = () => {
  currentSummerSlide.value = (currentSummerSlide.value + 1) % summerImages.value.length;
};

const prevSummerSlide = () => {
  currentSummerSlide.value = (currentSummerSlide.value - 1 + summerImages.value.length) % summerImages.value.length;
};

const goToSummerSlide = (index) => {
  currentSummerSlide.value = index;
};





// Product carousel functionality
const currentSlide = ref(0);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % carouselProducts.value.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + carouselProducts.value.length) % carouselProducts.value.length;
};

const goToSlide = (index) => {
  currentSlide.value = index;
};

const getSlideProducts = (slideId) => {
  const startIndex = (slideId - 1) * 4;
  const endIndex = startIndex + 4;
  return allCarouselProducts.value.slice(startIndex, endIndex);
};

// Product data
const featuredProducts = ref([
  {
    id: 1,
    name: "Wireless Headphones",
    description: "Premium sound quality",
    price: "₦79,000.00",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    isNew: true
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Track your fitness",
    price: "₦129,999.00",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    isNew: false
  },
  {
    id: 3,
    name: "Running Shoes",
    description: "Comfortable and durable",
    price: "₦18,999.00",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    isNew: true
  },
  {
    id: 4,
    name: "Backpack",
    description: "Perfect for travel",
    price: "₦19,900.00",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    isNew: false
  }
]);

const hotProducts = ref([
  {
    id: 1,
    name: "Regal Wine",
    description: "Premium brandy wine",
    price: "₦79,000.00",
    image: "/regal.jpg",
    isNew: true
  },
  {
    id: 2,
    name: "Gallantry",
    description: "Premium cognac",
    price: "₦129,999.00",
    image: "/gallantry.jpg",
    isNew: false
  },
  {
    id: 3,
    name: "Camera Lens",
    description: "Sharp and clear images",
    price: "₦189,999.00",
    image: "/lens-max.png",
    isNew: true
  },
  {
    id: 4,
    name: "Basket",
    description: "Perfect for travel",
    price: "₦19,900.00",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    isNew: false
  }
]);

// Carousel products
const allCarouselProducts = ref([
  {
    id: 1,
    name: "Wireless Headphones",
    description: "Premium sound quality",
    price: "₦79,000.00",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    isNew: true
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Track your fitness",
    price: "₦129,999.00",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    isNew: false
  },
  {
    id: 3,
    name: "Running Shoes",
    description: "Comfortable and durable",
    price: "₦18,999.00",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    isNew: true
  },
  {
    id: 4,
    name: "Backpack",
    description: "Perfect for travel",
    price: "₦19,900.00",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    isNew: false
  },
  {
    id: 5,
    name: "Laptop",
    description: "High performance",
    price: "₦450,000.00",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    isNew: true
  },
  {
    id: 6,
    name: "Sunglasses",
    description: "Stylish protection",
    price: "₦12,500.00",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    isNew: false
  },
  {
    id: 7,
    name: "Smartphone",
    description: "Latest technology",
    price: "₦250,000.00",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    isNew: true
  },
  {
    id: 8,
    name: "Perfume",
    description: "Luxury fragrance",
    price: "₦35,000.00",
    image: "/perfume.webp",
    isNew: false
  }
]);

const carouselProducts = computed(() => {
  // Group products into slides of 4
  const slides = [];
  for (let i = 0; i < allCarouselProducts.value.length; i += 4) {
    slides.push({
      id: Math.floor(i / 4) + 1,
      products: allCarouselProducts.value.slice(i, i + 4)
    });
  }
  return slides;
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

onMounted(() => {
  // For dropdown
  document.addEventListener('click', closeDropdown);
  // For cart
  document.addEventListener('click', closeCart);
  // For hero carousel
  startHeroAutoplay();
  // For product carousel
  startProductAutoplay();
});

onUnmounted(() => {
  document.removeEventListener('click', closeDropdown);
  document.removeEventListener('click', closeCart);
  stopHeroAutoplay();
  stopProductAutoplay();
});
</script>