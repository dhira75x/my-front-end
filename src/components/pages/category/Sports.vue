<template>
  <app-layout>
    <template v-slot:main-content>
  <BaseCategoryPage
    category-title="Sports & Outdoors"
    category-description="Gear up for your next adventure with our wide range of sports and outdoor equipment."
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

// Sports & Outdoors products
const products = ref([
  {
    id: 1,
    name: 'Running Shoes',
    description: 'Lightweight running shoes for comfort and performance',
    price: '₦35,000.00',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 1,
    brandId: 1,
    rating: 4.5,
    reviews: 42,
    onSale: true,
    freeShipping: true,
    dateAdded: '2023-06-10'
  },
  {
    id: 2,
    name: 'Tennis Racket',
    description: 'Professional tennis racket for advanced players',
    price: '₦45,000.00',
    image: 'https://images.unsplash.com/photo-1558847361-633947c5e9b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 2,
    brandId: 2,
    rating: 4.7,
    reviews: 28,
    onSale: false,
    freeShipping: true,
    dateAdded: '2023-05-15'
  },
  {
    id: 3,
    name: 'Camping Tent',
    description: 'Waterproof 4-person tent for outdoor adventures',
    price: '₦85,000.00',
    originalPrice: '₦95,000.00',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 3,
    brandId: 3,
    rating: 4.6,
    reviews: 35,
    onSale: true,
    freeShipping: false,
    dateAdded: '2023-06-05'
  },
  {
    id: 4,
    name: 'Yoga Mat',
    description: 'Non-slip yoga mat for all fitness levels',
    price: '₦12,000.00',
    image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 4,
    brandId: 4,
    rating: 4.3,
    reviews: 31,
    onSale: false,
    freeShipping: true,
    dateAdded: '2023-05-25'
  },
  {
    id: 5,
    name: 'Basketball',
    description: 'Official size basketball for indoor and outdoor play',
    price: '₦18,000.00',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 5,
    brandId: 5,
    rating: 4.4,
    reviews: 19,
    onSale: true,
    freeShipping: true,
    dateAdded: '2023-06-15'
  },
  {
    id: 6,
    name: 'Fishing Rod',
    description: 'Medium action fishing rod for freshwater fishing',
    price: '₦28,000.00',
    image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 6,
    brandId: 6,
    rating: 4.2,
    reviews: 22,
    onSale: false,
    freeShipping: true,
    dateAdded: '2023-05-30'
  },
  {
    id: 7,
    name: 'Dumbbells Set',
    description: 'Adjustable dumbbells set for home workouts',
    price: '₦65,000.00',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 7,
    brandId: 7,
    rating: 4.8,
    reviews: 26,
    onSale: true,
    freeShipping: false,
    dateAdded: '2023-06-01'
  },
  {
    id: 8,
    name: 'Hiking Backpack',
    description: '50L hiking backpack with multiple compartments',
    price: '₦42,000.00',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 8,
    brandId: 8,
    rating: 4.5,
    reviews: 17,
    onSale: false,
    freeShipping: true,
    dateAdded: '2023-06-20'
  }
]);

// Sports & Outdoors sub-categories
const subCategories = ref([
  { id: 1, name: 'Athletic Shoes' },
  { id: 2, name: 'Racket Sports' },
  { id: 3, name: 'Camping & Hiking' },
  { id: 4, name: 'Fitness & Yoga' },
  { id: 5, name: 'Team Sports' },
  { id: 6, name: 'Fishing' },
  { id: 7, name: 'Strength Training' },
  { id: 8, name: 'Outdoor Gear' }
]);

// Sports & Outdoors brands
const brands = ref([
  { id: 1, name: 'Nike' },
  { id: 2, name: 'Wilson' },
  { id: 3, name: 'Coleman' },
  { id: 4, name: 'Gaiam' },
  { id: 5, name: 'Spalding' },
  { id: 6, name: 'Shimano' },
  { id: 7, name: 'Bowflex' },
  { id: 8, name: 'Osprey' }
]);
</script>