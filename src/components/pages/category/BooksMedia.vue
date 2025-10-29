<template>
  <app-layout>
    <template v-slot:main-content>
  <BaseCategoryPage
    category-title="Books & Media"
    category-description="Expand your mind with our wide selection of books, movies, music, and more."
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

// Books & Media products
const products = ref([
  {
    id: 1,
    name: 'Bestselling Novel',
    description: 'Captivating story that will keep you turning pages',
    price: '₦8,500.00',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 1,
    brandId: 1,
    rating: 4.7,
    reviews: 128,
    onSale: true,
    freeShipping: true,
    dateAdded: '2023-06-10'
  },
  {
    id: 2,
    name: 'Educational Textbook',
    description: 'Comprehensive guide for students and professionals',
    price: '₦25,000.00',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 2,
    brandId: 2,
    rating: 4.3,
    reviews: 42,
    onSale: false,
    freeShipping: true,
    dateAdded: '2023-05-15'
  },
  {
    id: 3,
    name: 'Blu-ray Movie',
    description: 'Latest blockbuster movie in high definition',
    price: '₦5,500.00',
    image: 'https://images.unsplash.com/photo-1489599843090-4ee2862d749a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 3,
    brandId: 3,
    rating: 4.5,
    reviews: 76,
    onSale: true,
    freeShipping: true,
    dateAdded: '2023-06-05'
  },
  {
    id: 4,
    name: 'Music Album',
    description: 'Latest album from your favorite artist',
    price: '₦3,500.00',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 4,
    brandId: 4,
    rating: 4.6,
    reviews: 54,
    onSale: false,
    freeShipping: true,
    dateAdded: '2023-05-25'
  },
  {
    id: 5,
    name: 'Audiobook',
    description: 'Listen to your favorite books on the go',
    price: '₦6,000.00',
    image: 'https://images.unsplash.com/photo-1593699293884-896e8782e9c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 5,
    brandId: 5,
    rating: 4.4,
    reviews: 38,
    onSale: true,
    freeShipping: true,
    dateAdded: '2023-06-15'
  },
  {
    id: 6,
    name: 'Video Game',
    description: 'Immersive gaming experience for all platforms',
    price: '₦45,000.00',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 6,
    brandId: 6,
    rating: 4.8,
    reviews: 92,
    onSale: false,
    freeShipping: false,
    dateAdded: '2023-05-30'
  },
  {
    id: 7,
    name: 'Magazine Subscription',
    description: 'Monthly delivery of your favorite magazine',
    price: '₦12,000.00',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 7,
    brandId: 7,
    rating: 4.2,
    reviews: 24,
    onSale: true,
    freeShipping: true,
    dateAdded: '2023-06-01'
  },
  {
    id: 8,
    name: 'Board Game',
    description: 'Fun for the whole family game night',
    price: '₦15,000.00',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 8,
    brandId: 8,
    rating: 4.7,
    reviews: 63,
    onSale: false,
    freeShipping: true,
    dateAdded: '2023-06-20'
  }
]);

// Books & Media sub-categories
const subCategories = ref([
  { id: 1, name: 'Fiction Books' },
  { id: 2, name: 'Educational Books' },
  { id: 3, name: 'Movies & TV' },
  { id: 4, name: 'Music' },
  { id: 5, name: 'Audiobooks' },
  { id: 6, name: 'Video Games' },
  { id: 7, name: 'Magazines' },
  { id: 8, name: 'Board Games' }
]);

// Books & Media brands
const brands = ref([
  { id: 1, name: 'Penguin Books' },
  { id: 2, name: 'Pearson Education' },
  { id: 3, name: 'Warner Bros' },
  { id: 4, name: 'Sony Music' },
  { id: 5, name: 'Audible' },
  { id: 6, name: 'Electronic Arts' },
  { id: 7, name: 'Time Inc.' },
  { id: 8, name: 'Hasbro' }
]);
</script>