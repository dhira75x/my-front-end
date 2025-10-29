<template>
  <app-layout>
    <template v-slot:main-content>
  <BaseCategoryPage
    category-title="Groceries & Drinks"
    category-description="Fresh groceries and a wide selection of beverages for your daily needs."
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

// Groceries & Drinks products
const products = ref([
  {
    id: 1,
    name: 'Fresh Apples',
    description: 'Crisp and sweet red apples',
    price: '₦1,500.00',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 1,
    brandId: 1,
    rating: 4.5,
    reviews: 24,
    onSale: false,
    freeShipping: true,
    dateAdded: '2023-06-10'
  },
  {
    id: 2,
    name: 'Whole Wheat Bread',
    description: 'Freshly baked whole wheat bread',
    price: '₦1,200.00',
    image: 'https://images.unsplash.com/photo-1599500117744-17c7456c0175?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 2,
    brandId: 2,
    rating: 4.3,
    reviews: 18,
    onSale: false,
    freeShipping: true,
    dateAdded: '2023-06-05'
  },
  {
    id: 3,
    name: 'Organic Milk',
    description: 'Fresh organic whole milk',
    price: '₦2,500.00',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 3,
    brandId: 3,
    rating: 4.7,
    reviews: 32,
    onSale: true,
    freeShipping: true,
    dateAdded: '2023-06-15'
  },
  {
    id: 4,
    name: 'Premium Coffee',
    description: 'Arabica coffee beans, medium roast',
    price: '₦4,500.00',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 4,
    brandId: 4,
    rating: 4.8,
    reviews: 29,
    onSale: false,
    freeShipping: true,
    dateAdded: '2023-05-25'
  },
  {
    id: 5,
    name: 'Red Wine',
    description: 'Premium red wine, rich flavor',
    price: '₦8,500.00',
    image: 'https://images.unsplash.com/photo-1560474847-929b9d1b4f41?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 5,
    brandId: 5,
    rating: 4.6,
    reviews: 21,
    onSale: true,
    freeShipping: false,
    dateAdded: '2023-06-01'
  },
  {
    id: 6,
    name: 'Fresh Eggs',
    description: 'Farm-fresh eggs, dozen',
    price: '₦1,800.00',
    image: 'https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 6,
    brandId: 6,
    rating: 4.4,
    reviews: 16,
    onSale: false,
    freeShipping: true,
    dateAdded: '2023-06-20'
  },
  {
    id: 7,
    name: 'Mineral Water',
    description: 'Pure mineral water, pack of 12',
    price: '₦2,200.00',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 7,
    brandId: 7,
    rating: 4.2,
    reviews: 14,
    onSale: true,
    freeShipping: true,
    dateAdded: '2023-05-30'
  },
  {
    id: 8,
    name: 'Pasta',
    description: 'Italian durum wheat pasta',
    price: '₦1,500.00',
    image: 'https://images.unsplash.com/photo-1555929564-5897eea06a7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 8,
    brandId: 8,
    rating: 4.5,
    reviews: 19,
    onSale: false,
    freeShipping: true,
    dateAdded: '2023-06-10'
  }
]);

// Groceries & Drinks sub-categories
const subCategories = ref([
  { id: 1, name: 'Fresh Fruits' },
  { id: 2, name: 'Bakery & Bread' },
  { id: 3, name: 'Dairy & Eggs' },
  { id: 4, name: 'Coffee & Tea' },
  { id: 5, name: 'Wine & Spirits' },
  { id: 6, name: 'Meat & Poultry' },
  { id: 7, name: 'Water & Soft Drinks' },
  { id: 8, name: 'Pasta & Rice' }
]);

// Groceries & Drinks brands
const brands = ref([
  { id: 1, name: 'Fresh Farms' },
  { id: 2, name: 'Baker\'s Delight' },
  { id: 3, name: 'Dairy Pure' },
  { id: 4, name: 'Coffee Masters' },
  { id: 5, name: 'Vineyard Select' },
  { id: 6, name: 'Farm Fresh' },
  { id: 7, name: 'Aqua Pure' },
  { id: 8, name: 'Pasta Prima' }
]);
</script>