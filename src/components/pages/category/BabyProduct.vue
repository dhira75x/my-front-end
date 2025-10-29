<!-- BabyProductsCategory.vue -->
<template>
  <app-layout>
    <template v-slot:main-content>
  <BaseCategoryPage
    category-title="Baby Products"
    category-description="Everything you need for your little one, from diapers to strollers."
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

// Baby Products products
const products = ref([
  {
    id: 1,
    name: 'Diapers',
    description: 'Soft and absorbent diapers for babies',
    price: '₦12,000.00',
    image: 'https://images.unsplash.com/photo-1577295504688-dc2b79b13a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 1,
    brandId: 1,
    rating: 4.7,
    reviews: 124,
    onSale: true,
    freeShipping: true,
    dateAdded: '2023-06-10'
  },
  {
    id: 2,
    name: 'Baby Stroller',
    description: 'Lightweight stroller with sun protection',
    price: '₦85,000.00',
    image: 'https://images.unsplash.com/photo-1577295504688-dc2b79b13a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 2,
    brandId: 2,
    rating: 4.5,
    reviews: 78,
    onSale: false,
    freeShipping: false,
    dateAdded: '2023-05-15'
  },
  {
    id: 3,
    name: 'Baby Monitor',
    description: 'Video baby monitor with night vision',
    price: '₦45,000.00',
    image: 'https://images.unsplash.com/photo-1577295504688-dc2b79b13a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 3,
    brandId: 3,
    rating: 4.6,
    reviews: 92,
    onSale: true,
    freeShipping: true,
    dateAdded: '2023-06-05'
  },
  {
    id: 4,
    name: 'Baby Clothes',
    description: 'Soft cotton clothes for newborns',
    price: '₦8,500.00',
    image: 'https://images.unsplash.com/photo-1577295504688-dc2b79b13a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 4,
    brandId: 4,
    rating: 4.4,
    reviews: 67,
    onSale: false,
    freeShipping: true,
    dateAdded: '2023-05-25'
  },
  {
    id: 5,
    name: 'Baby Carrier',
    description: 'Ergonomic baby carrier for hands-free comfort',
    price: '₦25,000.00',
    image: 'https://images.unsplash.com/photo-1577295504688-dc2b79b13a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 5,
    brandId: 5,
    rating: 4.8,
    reviews: 54,
    onSale: true,
    freeShipping: true,
    dateAdded: '2023-06-15'
  },
  {
    id: 6,
    name: 'Baby Bottle',
    description: 'BPA-free baby bottle with anti-colic nipple',
    price: '₦5,500.00',
    image: 'https://images.unsplash.com/photo-1577295504688-dc2b79b13a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 6,
    brandId: 6,
    rating: 4.5,
    reviews: 83,
    onSale: false,
    freeShipping: true,
    dateAdded: '2023-05-30'
  },
  {
    id: 7,
    name: 'Baby Crib',
    description: 'Safe and sturdy crib for sound sleep',
    price: '₦120,000.00',
    image: 'https://images.unsplash.com/photo-1577295504688-dc2b79b13a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 7,
    brandId: 7,
    rating: 4.7,
    reviews: 46,
    onSale: true,
    freeShipping: false,
    dateAdded: '2023-06-01'
  },
  {
    id: 8,
    name: 'Baby Toys',
    description: 'Educational toys for sensory development',
    price: '₦12,000.00',
    image: 'https://images.unsplash.com/photo-1577295504688-dc2b79b13a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 8,
    brandId: 8,
    rating: 4.6,
    reviews: 71,
    onSale: false,
    freeShipping: true,
    dateAdded: '2023-06-20'
  }
]);

// Baby Products sub-categories
const subCategories = ref([
  { id: 1, name: 'Diapering' },
  { id: 2, name: 'Strollers & Carriers' },
  { id: 3, name: 'Baby Monitors' },
  { id: 4, name: 'Clothing' },
  { id: 5, name: 'Feeding' },
  { id: 6, name: 'Nursery' },
  { id: 7, name: 'Bath & Potty' },
  { id: 8, name: 'Toys' }
]);

// Baby Products brands
const brands = ref([
  { id: 1, name: 'Pampers' },
  { id: 2, name: 'Baby Jogger' },
  { id: 3, name: 'Infant Optics' },
  { id: 4, name: 'Carter\'s' },
  { id: 5, name: 'Ergobaby' },
  { id: 6, name: 'Philips AVENT' },
  { id: 7, name: 'DaVinci' },
  { id: 8, name: 'Fisher-Price' }
]);
</script>