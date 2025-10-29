<template>
  <app-layout>
    <template v-slot:main-content>
  <BaseCategoryPage
    category-title="Toys & Games"
    category-description="Discover fun and educational toys and games for children of all ages."
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

// Toys & Games products
const products = ref([
  {
    id: 1,
    name: 'Building Blocks Set',
    description: 'Creative building blocks for endless fun',
    price: '₦12,000.00',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 1,
    brandId: 1,
    rating: 4.8,
    reviews: 86,
    onSale: true,
    freeShipping: true,
    dateAdded: '2023-06-10'
  },
  {
    id: 2,
    name: 'Board Game',
    description: 'Strategic board game for family game nights',
    price: '₦8,500.00',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 2,
    brandId: 2,
    rating: 4.5,
    reviews: 64,
    onSale: false,
    freeShipping: true,
    dateAdded: '2023-05-15'
  },
  {
    id: 3,
    name: 'Remote Control Car',
    description: 'High-speed remote control car with lights',
    price: '₦18,000.00',
    image: 'https://images.unsplash.com/photo-1585198147990-0cdcbe8515be?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 3,
    brandId: 3,
    rating: 4.6,
    reviews: 42,
    onSale: true,
    freeShipping: false,
    dateAdded: '2023-06-05'
  },
  {
    id: 4,
    name: 'Doll House',
    description: 'Beautiful doll house with furniture',
    price: '₦35,000.00',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 4,
    brandId: 4,
    rating: 4.7,
    reviews: 38,
    onSale: false,
    freeShipping: true,
    dateAdded: '2023-05-25'
  },
  {
    id: 5,
    name: 'Puzzle Set',
    description: '1000-piece jigsaw puzzle for adults',
    price: '₦7,500.00',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 5,
    brandId: 5,
    rating: 4.4,
    reviews: 29,
    onSale: true,
    freeShipping: true,
    dateAdded: '2023-06-15'
  },
  {
    id: 6,
    name: 'Action Figures',
    description: 'Collectible action figures from popular movies',
    price: '₦15,000.00',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 6,
    brandId: 6,
    rating: 4.9,
    reviews: 53,
    onSale: false,
    freeShipping: true,
    dateAdded: '2023-05-30'
  },
  {
    id: 7,
    name: 'Educational Tablet',
    description: 'Kids learning tablet with educational games',
    price: '₦22,000.00',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 7,
    brandId: 7,
    rating: 4.3,
    reviews: 47,
    onSale: true,
    freeShipping: false,
    dateAdded: '2023-06-01'
  },
  {
    id: 8,
    name: 'Outdoor Playset',
    description: 'Swing and slide set for backyard fun',
    price: '₦150,000.00',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 8,
    brandId: 8,
    rating: 4.8,
    reviews: 31,
    onSale: false,
    freeShipping: false,
    dateAdded: '2023-06-20'
  }
]);

// Toys & Games sub-categories
const subCategories = ref([
  { id: 1, name: 'Building Toys' },
  { id: 2, name: 'Board & Card Games' },
  { id: 3, name: 'Remote Control Toys' },
  { id: 4, name: 'Dolls & Dollhouses' },
  { id: 5, name: 'Puzzles' },
  { id: 6, name: 'Action Figures' },
  { id: 7, name: 'Electronic Learning' },
  { id: 8, name: 'Outdoor Play' }
]);

// Toys & Games brands
const brands = ref([
  { id: 1, name: 'LEGO' },
  { id: 2, name: 'Hasbro' },
  { id: 3, name: 'Mattel' },
  { id: 4, name: 'Barbie' },
  { id: 5, name: 'Ravensburger' },
  { id: 6, name: 'Funko' },
  { id: 7, name: 'VTech' },
  { id: 8, name: 'Step2' }
]);
</script>