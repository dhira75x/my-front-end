<template>
  <app-layout>
    <template v-slot:main-content>
  <BaseCategoryPage
    category-title="Tools & Hardware"
    category-description="Professional tools and hardware for all your DIY projects."
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

// Tools & Hardware products
const products = ref([
  {
    id: 1,
    name: 'Power Drill',
    description: 'Cordless power drill with multiple bits',
    price: '₦85,000.00',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 1,
    brandId: 1,
    rating: 4.7,
    reviews: 64,
    onSale: true,
    freeShipping: false,
    dateAdded: '2023-06-10'
  },
  {
    id: 2,
    name: 'Tool Set',
    description: 'Complete tool set for home repairs',
    price: '₦125,000.00',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 2,
    brandId: 2,
    rating: 4.5,
    reviews: 52,
    onSale: false,
    freeShipping: false,
    dateAdded: '2023-05-15'
  },
  {
    id: 3,
    name: 'Circular Saw',
    description: 'Powerful circular saw for precise cuts',
    price: '₦95,000.00',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 3,
    brandId: 3,
    rating: 4.6,
    reviews: 38,
    onSale: true,
    freeShipping: false,
    dateAdded: '2023-06-05'
  },
  {
    id: 4,
    name: 'Hammer',
    description: 'Professional hammer for various tasks',
    price: '₦8,500.00',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 4,
    brandId: 4,
    rating: 4.4,
    reviews: 29,
    onSale: false,
    freeShipping: true,
    dateAdded: '2023-05-25'
  },
  {
    id: 5,
    name: 'Measuring Tape',
    description: 'Durable measuring tape for accurate measurements',
    price: '₦5,500.00',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 5,
    brandId: 5,
    rating: 4.8,
    reviews: 46,
    onSale: true,
    freeShipping: true,
    dateAdded: '2023-06-15'
  },
  {
    id: 6,
    name: 'Screwdriver Set',
    description: 'Complete screwdriver set with various heads',
    price: '₦15,000.00',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 6,
    brandId: 6,
    rating: 4.5,
    reviews: 37,
    onSale: false,
    freeShipping: true,
    dateAdded: '2023-05-30'
  },
  {
    id: 7,
    name: 'Pliers Set',
    description: 'Set of pliers for gripping and cutting',
    price: '₦22,000.00',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 7,
    brandId: 7,
    rating: 4.6,
    reviews: 31,
    onSale: true,
    freeShipping: true,
    dateAdded: '2023-06-01'
  },
  {
    id: 8,
    name: 'Level',
    description: 'Professional level for accurate alignment',
    price: '₦12,000.00',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 8,
    brandId: 8,
    rating: 4.7,
    reviews: 24,
    onSale: false,
    freeShipping: true,
    dateAdded: '2023-06-20'
  }
]);

// Tools & Hardware sub-categories
const subCategories = ref([
  { id: 1, name: 'Power Tools' },
  { id: 2, name: 'Hand Tools' },
  { id: 3, name: 'Saws & Cutting' },
  { id: 4, name: 'Hammers & Striking' },
  { id: 5, name: 'Measuring & Marking' },
  { id: 6, name: 'Fastening' },
  { id: 7, name: 'Pliers & Cutters' },
  { id: 8, name: 'Layout & Measuring' }
]);

// Tools & Hardware brands
const brands = ref([
  { id: 1, name: 'DeWalt' },
  { id: 2, name: 'Stanley' },
  { id: 3, name: 'Makita' },
  { id: 4, name: 'Estwing' },
  { id: 5, name: 'Stanley' },
  { id: 6, name: 'Craftsman' },
  { id: 7, name: 'Klein Tools' },
  { id: 8, name: 'Johnson Level' }
]);
</script>