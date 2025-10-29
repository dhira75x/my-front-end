<!-- AllCategories.vue -->
<template>
  <app-layout>
    <template v-slot:main-content>
  <div class="min-h-screen py-8 bg-gray-50">
 
    <div class="container px-4 mx-auto">
      <!-- Page Header -->
      <div class="mb-12 text-center pt-10">
        <h1 class="text-4xl font-bold text-gray-800">All Categories</h1>
        <p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Browse our wide range of product categories to find exactly what you're looking for
        </p>
      </div>

      <!-- Categories Grid -->
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <!-- Electronics Category Card -->
        <router-link 
          to="/electronics" 
          class="group overflow-hidden transition-all duration-300 bg-white rounded-xl shadow-md hover:shadow-xl"
        >
          <div class="relative h-48 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Electronics" 
              class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <h3 class="text-xl font-bold text-white">Electronics</h3>
              <p class="text-sm text-white/80">Gadgets & More</p>
            </div>
          </div>
          <div class="p-4">
            <p class="text-sm text-gray-600">Discover the latest gadgets and electronics</p>
            <div class="flex items-center justify-between mt-3">
              <span class="text-sm font-medium text-lime-600">124 Products</span>
              <span class="text-sm text-gray-500 group-hover:text-lime-600">
                Shop Now
                <svg class="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </span>
            </div>
          </div>
        </router-link>

        <!-- Fashion Category Card -->
        <router-link 
          to="/fashion" 
          class="group overflow-hidden transition-all duration-300 bg-white rounded-xl shadow-md hover:shadow-xl"
        >
          <div class="relative h-48 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Fashion" 
              class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <h3 class="text-xl font-bold text-white">Fashion</h3>
              <p class="text-sm text-white/80">Clothing & Accessories</p>
            </div>
          </div>
          <div class="p-4">
            <p class="text-sm text-gray-600">Latest trends for men, women & children</p>
            <div class="flex items-center justify-between mt-3">
              <span class="text-sm font-medium text-lime-600">256 Products</span>
              <span class="text-sm text-gray-500 group-hover:text-lime-600">
                Shop Now
                <svg class="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </span>
            </div>
          </div>
        </router-link>

        <!-- Home & Kitchen Category Card -->
        <router-link 
          to="/home-kitchen" 
          class="group overflow-hidden transition-all duration-300 bg-white rounded-xl shadow-md hover:shadow-xl"
        >
          <div class="relative h-48 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Home & Kitchen" 
              class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <h3 class="text-xl font-bold text-white">Home & Kitchen</h3>
              <p class="text-sm text-white/80">Appliances & Decor</p>
            </div>
          </div>
          <div class="p-4">
            <p class="text-sm text-gray-600">Transform your living space</p>
            <div class="flex items-center justify-between mt-3">
              <span class="text-sm font-medium text-lime-600">189 Products</span>
              <span class="text-sm text-gray-500 group-hover:text-lime-600">
                Shop Now
                <svg class="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </span>
            </div>
          </div>
        </router-link>

        <!-- Beauty Category Card -->
        <router-link 
          to="/beauty" 
          class="group overflow-hidden transition-all duration-300 bg-white rounded-xl shadow-md hover:shadow-xl"
        >
          <div class="relative h-48 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Beauty" 
              class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <h3 class="text-xl font-bold text-white">Beauty</h3>
              <p class="text-sm text-white/80">Makeup & Skincare</p>
            </div>
          </div>
          <div class="p-4">
            <p class="text-sm text-gray-600">Premium beauty products for all skin types</p>
            <div class="flex items-center justify-between mt-3">
              <span class="text-sm font-medium text-lime-600">142 Products</span>
              <span class="text-sm text-gray-500 group-hover:text-lime-600">
                Shop Now
                <svg class="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </span>
            </div>
          </div>
        </router-link>

        <!-- Groceries & Drinks Category Card -->
        <router-link 
          to="/groceries-drinks" 
          class="group overflow-hidden transition-all duration-300 bg-white rounded-xl shadow-md hover:shadow-xl"
        >
          <div class="relative h-48 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Groceries & Drinks" 
              class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <h3 class="text-xl font-bold text-white">Groceries & Drinks</h3>
              <p class="text-sm text-white/80">Food & Beverages</p>
            </div>
          </div>
          <div class="p-4">
            <p class="text-sm text-gray-600">Fresh groceries and premium beverages</p>
            <div class="flex items-center justify-between mt-3">
              <span class="text-sm font-medium text-lime-600">312 Products</span>
              <span class="text-sm text-gray-500 group-hover:text-lime-600">
                Shop Now
                <svg class="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </span>
            </div>
          </div>
        </router-link>

        <!-- Sports & Outdoors Category Card -->
        <router-link 
          to="/sports-outdoors" 
          class="group overflow-hidden transition-all duration-300 bg-white rounded-xl shadow-md hover:shadow-xl"
        >
          <div class="relative h-48 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Sports & Outdoors" 
              class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <h3 class="text-xl font-bold text-white">Sports & Outdoors</h3>
              <p class="text-sm text-white/80">Equipment & Gear</p>
            </div>
          </div>
          <div class="p-4">
            <p class="text-sm text-gray-600">Gear up for your next adventure</p>
            <div class="flex items-center justify-between mt-3">
              <span class="text-sm font-medium text-lime-600">98 Products</span>
              <span class="text-sm text-gray-500 group-hover:text-lime-600">
                Shop Now
                <svg class="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </span>
            </div>
          </div>
        </router-link>

        <!-- Books & Media Category Card -->
        <router-link 
          to="/books-media" 
          class="group overflow-hidden transition-all duration-300 bg-white rounded-xl shadow-md hover:shadow-xl"
        >
          <div class="relative h-48 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Books & Media" 
              class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <h3 class="text-xl font-bold text-white">Books & Media</h3>
              <p class="text-sm text-white/80">Reading & Entertainment</p>
            </div>
          </div>
          <div class="p-4">
            <p class="text-sm text-gray-600">Expand your mind with great content</p>
            <div class="flex items-center justify-between mt-3">
              <span class="text-sm font-medium text-lime-600">176 Products</span>
              <span class="text-sm text-gray-500 group-hover:text-lime-600">
                Shop Now
                <svg class="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </span>
            </div>
          </div>
        </router-link>

        <!-- Toys & Games Category Card -->
        <router-link 
          to="/toys-games" 
          class="group overflow-hidden transition-all duration-300 bg-white rounded-xl shadow-md hover:shadow-xl"
        >
          <div class="relative h-48 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Toys & Games" 
              class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <h3 class="text-xl font-bold text-white">Toys & Games</h3>
              <p class="text-sm text-white/80">Fun for All Ages</p>
            </div>
          </div>
          <div class="p-4">
            <p class="text-sm text-gray-600">Educational and entertaining toys</p>
            <div class="flex items-center justify-between mt-3">
              <span class="text-sm font-medium text-lime-600">87 Products</span>
              <span class="text-sm text-gray-500 group-hover:text-lime-600">
                Shop Now
                <svg class="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </span>
            </div>
          </div>
        </router-link>

        <!-- Automotive Category Card -->
        <router-link 
          to="/automotive" 
          class="group overflow-hidden transition-all duration-300 bg-white rounded-xl shadow-md hover:shadow-xl"
        >
          <div class="relative h-48 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1554224712-d8560f709cbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Automotive" 
              class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <h3 class="text-xl font-bold text-white">Automotive</h3>
              <p class="text-sm text-white/80">Parts & Accessories</p>
            </div>
          </div>
          <div class="p-4">
            <p class="text-sm text-gray-600">Everything for your vehicle</p>
            <div class="flex items-center justify-between mt-3">
              <span class="text-sm font-medium text-lime-600">64 Products</span>
              <span class="text-sm text-gray-500 group-hover:text-lime-600">
                Shop Now
                <svg class="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </span>
            </div>
          </div>
        </router-link>

        <!-- Health & Wellness Category Card -->
        <router-link 
          to="/health-wellness" 
          class="group overflow-hidden transition-all duration-300 bg-white rounded-xl shadow-md hover:shadow-xl"
        >
          <div class="relative h-48 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1e4cd0b6cbd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Health & Wellness" 
              class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <h3 class="text-xl font-bold text-white">Health & Wellness</h3>
              <p class="text-sm text-white/80">Supplements & Fitness</p>
            </div>
          </div>
          <div class="p-4">
            <p class="text-sm text-gray-600">Products for a healthier lifestyle</p>
            <div class="flex items-center justify-between mt-3">
              <span class="text-sm font-medium text-lime-600">112 Products</span>
              <span class="text-sm text-gray-500 group-hover:text-lime-600">
                Shop Now
                <svg class="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </span>
            </div>
          </div>
        </router-link>

        <!-- Pet Supplies Category Card -->
        <router-link 
          to="/pet-supplies" 
          class="group overflow-hidden transition-all duration-300 bg-white rounded-xl shadow-md hover:shadow-xl"
        >
          <div class="relative h-48 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Pet Supplies" 
              class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <h3 class="text-xl font-bold text-white">Pet Supplies</h3>
              <p class="text-sm text-white/80">Food & Accessories</p>
            </div>
          </div>
          <div class="p-4">
            <p class="text-sm text-gray-600">Everything your furry friends need</p>
            <div class="flex items-center justify-between mt-3">
              <span class="text-sm font-medium text-lime-600">93 Products</span>
              <span class="text-sm text-gray-500 group-hover:text-lime-600">
                Shop Now
                <svg class="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </span>
            </div>
          </div>
        </router-link>

        <!-- Office Supplies Category Card -->
        <router-link 
          to="/office-supplies" 
          class="group overflow-hidden transition-all duration-300 bg-white rounded-xl shadow-md hover:shadow-xl"
        >
          <div class="relative h-48 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Office Supplies" 
              class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <h3 class="text-xl font-bold text-white">Office Supplies</h3>
              <p class="text-sm text-white/80">Stationery & Equipment</p>
            </div>
          </div>
          <div class="p-4">
            <p class="text-sm text-gray-600">Equip your workspace</p>
            <div class="flex items-center justify-between mt-3">
              <span class="text-sm font-medium text-lime-600">78 Products</span>
              <span class="text-sm text-gray-500 group-hover:text-lime-600">
                Shop Now
                <svg class="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </span>
            </div>
          </div>
        </router-link>

        <!-- Baby Products Category Card -->
        <router-link 
          to="/baby-products" 
          class="group overflow-hidden transition-all duration-300 bg-white rounded-xl shadow-md hover:shadow-xl"
        >
          <div class="relative h-48 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1577295504688-dc2b79b13a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Baby Products" 
              class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <h3 class="text-xl font-bold text-white">Baby Products</h3>
              <p class="text-sm text-white/80">Essentials for Little Ones</p>
            </div>
          </div>
          <div class="p-4">
            <p class="text-sm text-gray-600">Safe and gentle products for babies</p>
            <div class="flex items-center justify-between mt-3">
              <span class="text-sm font-medium text-lime-600">105 Products</span>
              <span class="text-sm text-gray-500 group-hover:text-lime-600">
                Shop Now
                <svg class="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </span>
            </div>
          </div>
        </router-link>

        <!-- Jewelry & Accessories Category Card -->
        <router-link 
          to="/jewelry-accessories" 
          class="group overflow-hidden transition-all duration-300 bg-white rounded-xl shadow-md hover:shadow-xl"
        >
          <div class="relative h-48 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1596942446228-4e2a9a4e9d67?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Jewelry & Accessories" 
              class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <h3 class="text-xl font-bold text-white">Jewelry & Accessories</h3>
              <p class="text-sm text-white/80">Fashion & Luxury</p>
            </div>
          </div>
          <div class="p-4">
            <p class="text-sm text-gray-600">Elegant pieces to complete your look</p>
            <div class="flex items-center justify-between mt-3">
              <span class="text-sm font-medium text-lime-600">134 Products</span>
              <span class="text-sm text-gray-500 group-hover:text-lime-600">
                Shop Now
                <svg class="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </span>
            </div>
          </div>
        </router-link>

        <!-- Tools & Hardware Category Card -->
        <router-link 
          to="/tools-hardware" 
          class="group overflow-hidden transition-all duration-300 bg-white rounded-xl shadow-md hover:shadow-xl"
        >
          <div class="relative h-48 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1581091226835-a9a0d9c5c9f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Tools & Hardware" 
              class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <h3 class="text-xl font-bold text-white">Tools & Hardware</h3>
              <p class="text-sm text-white/80">DIY & Professional</p>
            </div>
          </div>
          <div class="p-4">
            <p class="text-sm text-gray-600">Quality tools for every project</p>
            <div class="flex items-center justify-between mt-3">
              <span class="text-sm font-medium text-lime-600">56 Products</span>
              <span class="text-sm text-gray-500 group-hover:text-lime-600">
                Shop Now
                <svg class="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </span>
            </div>
          </div>
        </router-link>
      </div>

      <!-- Featured Categories Section -->
      <div class="mt-16">
        <h2 class="mb-8 text-2xl font-bold text-center text-gray-800">Featured Categories</h2>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
          <!-- Electronics Featured -->
          <div class="relative overflow-hidden rounded-xl">
            <img 
              src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
              alt="Electronics Featured" 
              class="object-cover w-full h-64"
            >
            <div class="absolute inset-0 bg-gradient-to-r from-lime-600/90 to-green-700/90"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-center">
                <h3 class="text-2xl font-bold text-white">Electronics Sale</h3>
                <p class="mt-2 text-white">Up to 30% off on selected items</p>
                <router-link 
                  to="/electronics" 
                  class="inline-block mt-4 px-6 py-2 font-semibold text-white bg-white bg-opacity-20 rounded-full hover:bg-opacity-30"
                >
                  Shop Now
                </router-link>
              </div>
            </div>
          </div>

          <!-- Fashion Featured -->
          <div class="relative overflow-hidden rounded-xl">
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
              alt="Fashion Featured" 
              class="object-cover w-full h-64"
            >
            <div class="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-pink-600/90"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-center">
                <h3 class="text-2xl font-bold text-white">New Arrivals</h3>
                <p class="mt-2 text-white">Latest fashion trends</p>
                <router-link 
                  to="/fashion" 
                  class="inline-block mt-4 px-6 py-2 font-semibold text-white bg-white bg-opacity-20 rounded-full hover:bg-opacity-30"
                >
                  Explore
                </router-link>
              </div>
            </div>
          </div>

          <!-- Home & Kitchen Featured -->
          <div class="relative overflow-hidden rounded-xl">
            <img 
              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
              alt="Home & Kitchen Featured" 
              class="object-cover w-full h-64"
            >
            <div class="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-indigo-700/90"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-center">
                <h3 class="text-2xl font-bold text-white">Home Makeover</h3>
                <p class="mt-2 text-white">Transform your living space</p>
                <router-link 
                  to="/home-kitchen" 
                  class="inline-block mt-4 px-6 py-2 font-semibold text-white bg-white bg-opacity-20 rounded-full hover:bg-opacity-30"
                >
                  Discover
                </router-link>
              </div>
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
import AppLayout from '@/layouts/applayout.vue';
</script>