<template>
  <app-layout>
    <template v-slot:main-content>
  <BaseCategoryPage
    category-title="Home & Kitchen"
    category-description="Transform your home with our wide range of kitchen appliances and home decor."
    :products="products"
    :sub-categories="subCategories"
    :brands="brands"
  />
  </template>
  </app-layout>
</template>

<script setup>
import { ref } from 'vue';
import BaseCategoryPage from './BaseCategoryPage.vue';
import AppLayout from '@/layouts/applayout.vue';

// Home & Kitchen products
const products = ref([
  {
    id: 1,
    name: 'Refrigerator',
    description: 'Energy-efficient refrigerator with ample storage',
    price: '₦350,000.00',
    image: 'https://images.unsplash.com/photo-1588704218135-86a5d3d7f7c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 1,
    brandId: 1,
    rating: 4.5,
    reviews: 28,
    onSale: false,
    freeShipping: false,
    dateAdded: '2023-05-15'
  },
  {
    id: 2,
    name: 'Toaster',
    description: '2-slice toaster with browning control',
    price: '₦15,000.00',
    image: 'https://images.unsplash.com/photo-1588704475631-2b579629c0fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 2,
    brandId: 2,
    rating: 4.2,
    reviews: 15,
    onSale: true,
    freeShipping: true,
    dateAdded: '2023-06-10'
  },
  {
    id: 3,
    name: 'Microwave Oven',
    description: 'Convection microwave for fast cooking',
    price: '₦85,000.00',
    originalPrice: '₦95,000.00',
    image: 'https://images.unsplash.com/photo-1558903678-4d9ec17007c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 3,
    brandId: 3,
    rating: 4.4,
    reviews: 22,
    onSale: true,
    freeShipping: false,
    dateAdded: '2023-05-25'
  },
  {
    id: 4,
    name: 'Coffee Maker',
    description: 'Programmable coffee maker with thermal carafe',
    price: '₦45,000.00',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 4,
    brandId: 4,
    rating: 4.6,
    reviews: 31,
    onSale: false,
    freeShipping: true,
    dateAdded: '2023-06-05'
  },
  {
    id: 5,
    name: 'Blender',
    description: 'High-speed blender for smoothies and more',
    price: '₦35,000.00',
    image: 'https://images.unsplash.com/photo-1586034463603-3a8b9731e76c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 5,
    brandId: 5,
    rating: 4.3,
    reviews: 19,
    onSale: true,
    freeShipping: true,
    dateAdded: '2023-05-20'
  },
  {
    id: 6,
    name: 'Air Fryer',
    description: 'Healthy frying with little to no oil',
    price: '₦55,000.00',
    image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 6,
    brandId: 6,
    rating: 4.7,
    reviews: 26,
    onSale: false,
    freeShipping: true,
    dateAdded: '2023-06-15'
  },
  {
    id: 7,
    name: 'Dining Set',
    description: '6-piece dining set with modern design',
    price: '₦180,000.00',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 7,
    brandId: 7,
    rating: 4.5,
    reviews: 12,
    onSale: true,
    freeShipping: false,
    dateAdded: '2023-05-30'
  },
  {
    id: 8,
    name: 'Vacuum Cleaner',
    description: 'Bagless vacuum cleaner with HEPA filter',
    price: '₦75,000.00',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 8,
    brandId: 8,
    rating: 4.2,
    reviews: 17,
    onSale: false,
    freeShipping: true,
    dateAdded: '2023-06-01'
  }
]);

// Home & Kitchen sub-categories
const subCategories = ref([
  { id: 1, name: 'Refrigerators & Freezers' },
  { id: 2, name: 'Small Appliances' },
  { id: 3, name: 'Cooking Appliances' },
  { id: 4, name: 'Coffee, Tea & Espresso' },
  { id: 5, name: 'Blenders & Juicers' },
  { id: 6, name: 'Air Fryers & Deep Fryers' },
  { id: 7, name: 'Dining & Entertaining' },
  { id: 8, name: 'Vacuums & Floor Care' }
]);

// Home & Kitchen brands
const brands = ref([
  { id: 1, name: 'LG' },
  { id: 2, name: 'Samsung' },
  { id: 3, name: 'Panasonic' },
  { id: 4, name: 'Philips' },
  { id: 5, name: 'Ninja' },
  { id: 6, name: 'Philips Airfryer' },
  { id: 7, name: 'IKEA' },
  { id: 8, name: 'Dyson' }
]);
</script>