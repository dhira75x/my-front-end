<template>
             <div class="flex flex-row">
                <div class="relative inline-block text-left">
                    <button class="h-[51px] w-[121px] rounded-md border-lime-950 pb-3.5 pl-7 pr-7 pt-3.5 text-black">Register</button>
                  <div
                    class="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabindex="-1"
                  >
                    <div class="py-1" role="none">
                      
                      <router-link :to="{ name: 'registration' }">
                      <a
                        href="#"
                        class="block border-b border-gray-200 px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-0"
                        >User</a
                      >
                    </router-link>
                    <router-link :to="{ name: '' }">
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-1"
                        >Vendor</a
                      >
                      </router-link>
                      <router-link :to="{ name: 'register' }">
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-1"
                        >Dispatch</a
                      >
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
</template>