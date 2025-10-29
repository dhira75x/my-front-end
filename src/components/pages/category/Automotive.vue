<!-- AutomotiveCategory.vue -->
<template>
  <app-layout>
    <template v-slot:main-content>
   <BaseCategoryPage
    category-title="Automotive"
    category-description="Find everything you need for your vehicle, from parts to accessories."
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
import Header from '@/components/molecules/Header/Header.vue';
import AppLayout from '@/layouts/applayout.vue';

// Automotive products
const products = ref([
  {
    id: 1,
    name: 'Car Battery',
    description: 'Long-lasting car battery for all vehicles',
    price: '₦45,000.00',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 1,
    brandId: 1,
    rating: 4.5,
    reviews: 38,
    onSale: true,
    freeShipping: false,
    dateAdded: '2023-06-10'
  },
  {
    id: 2,
    name: 'Tire Set',
    description: 'All-season tires for safe driving',
    price: '₦180,000.00',
    image: 'https://images.unsplash.com/photo-1554224712-d8560f709cbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 2,
    brandId: 2,
    rating: 4.7,
    reviews: 52,
    onSale: false,
    freeShipping: false,
    dateAdded: '2023-05-15'
  },
  {
    id: 3,
    name: 'Car Cover',
    description: 'Waterproof car cover for all weather protection',
    price: '₦25,000.00',
    image: 'https://images.unsplash.com/photo-1554224712-d8560f709cbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 3,
    brandId: 3,
    rating: 4.3,
    reviews: 27,
    onSale: true,
    freeShipping: true,
    dateAdded: '2023-06-05'
  },
  {
    id: 4,
    name: 'Car Seat Covers',
    description: 'Comfortable and stylish seat covers',
    price: '₦35,000.00',
    image: 'https://images.unsplash.com/photo-1554224712-d8560f709cbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 4,
    brandId: 4,
    rating: 4.4,
    reviews: 34,
    onSale: false,
    freeShipping: true,
    dateAdded: '2023-05-25'
  },
  {
    id: 5,
    name: 'Car Phone Mount',
    description: 'Universal phone mount for safe driving',
    price: '₦8,500.00',
    image: 'https://images.unsplash.com/photo-1554224712-d8560f709cbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 5,
    brandId: 5,
    rating: 4.6,
    reviews: 46,
    onSale: true,
    freeShipping: true,
    dateAdded: '2023-06-15'
  },
  {
    id: 6,
    name: 'Emergency Kit',
    description: 'Complete emergency kit for roadside assistance',
    price: '₦15,000.00',
    image: 'https://images.unsplash.com/photo-1554224712-d8560f709cbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 6,
    brandId: 6,
    rating: 4.8,
    reviews: 29,
    onSale: false,
    freeShipping: true,
    dateAdded: '2023-05-30'
  },
  {
    id: 7,
    name: 'Car Wax',
    description: 'Premium car wax for ultimate shine',
    price: '₦12,000.00',
    image: 'https://images.unsplash.com/photo-1554224712-d8560f709cbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 7,
    brandId: 7,
    rating: 4.5,
    reviews: 41,
    onSale: true,
    freeShipping: true,
    dateAdded: '2023-06-01'
  },
  {
    id: 8,
    name: 'Jump Starter',
    description: 'Portable jump starter for dead batteries',
    price: '₦55,000.00',
    image: 'https://images.unsplash.com/photo-1554224712-d8560f709cbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 8,
    brandId: 8,
    rating: 4.7,
    reviews: 33,
    onSale: false,
    freeShipping: true,
    dateAdded: '2023-06-20'
  }
]);

// Automotive sub-categories
const subCategories = ref([
  { id: 1, name: 'Batteries & Electrical' },
  { id: 2, name: 'Tires & Wheels' },
  { id: 3, name: 'Exterior Accessories' },
  { id: 4, name: 'Interior Accessories' },
  { id: 5, name: 'Electronics' },
  { id: 6, name: 'Tools & Equipment' },
  { id: 7, name: 'Car Care' },
  { id: 8, name: 'Performance Parts' }
]);

// Automotive brands
const brands = ref([
  { id: 1, name: 'Bosch' },
  { id: 2, name: 'Michelin' },
  { id: 3, name: 'Covercraft' },
  { id: 4, name: 'FH Group' },
  { id: 5, name: 'iOttie' },
  { id: 6, name: 'AAA' },
  { id: 7, name: 'Meguiar\'s' },
  { id: 8, name: 'NOCO' }
]);
</script>