<template>
  <app-layout>
    <template v-slot:main-content>
  <BaseCategoryPage
    category-title="Health & Wellness"
    category-description="Products to support your health and wellness journey."
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

// Health & Wellness products
const products = ref([
  {
    id: 1,
    name: 'Vitamin Supplements',
    description: 'Daily multivitamin for overall health',
    price: '₦8,500.00',
    image: 'https://images.unsplash.com/photo-1571019613454-1e4cd0b6cbd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 1,
    brandId: 1,
    rating: 4.5,
    reviews: 67,
    onSale: true,
    freeShipping: true,
    dateAdded: '2023-06-10'
  },
  {
    id: 2,
    name: 'Protein Powder',
    description: 'Whey protein for muscle recovery',
    price: '₦18,000.00',
    image: 'https://images.unsplash.com/photo-1571019613454-1e4cd0b6cbd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 2,
    brandId: 2,
    rating: 4.7,
    reviews: 84,
    onSale: false,
    freeShipping: true,
    dateAdded: '2023-05-15'
  },
  {
    id: 3,
    name: 'Yoga Mat',
    description: 'Non-slip yoga mat for all fitness levels',
    price: '₦12,000.00',
    image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 3,
    brandId: 3,
    rating: 4.6,
    reviews: 52,
    onSale: true,
    freeShipping: true,
    dateAdded: '2023-06-05'
  },
  {
    id: 4,
    name: 'Essential Oils',
    description: 'Pure essential oils for aromatherapy',
    price: '₦15,000.00',
    image: 'https://images.unsplash.com/photo-1571019613454-1e4cd0b6cbd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 4,
    brandId: 4,
    rating: 4.4,
    reviews: 39,
    onSale: false,
    freeShipping: true,
    dateAdded: '2023-05-25'
  },
  {
    id: 5,
    name: 'Fitness Tracker',
    description: 'Track your activity and health metrics',
    price: '₦45,000.00',
    image: 'https://images.unsplash.com/photo-1557935728-e6d1eaabe729?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 5,
    brandId: 5,
    rating: 4.8,
    reviews: 76,
    onSale: true,
    freeShipping: true,
    dateAdded: '2023-06-15'
  },
  {
    id: 6,
    name: 'Massage Gun',
    description: 'Percussive therapy for muscle recovery',
    price: '₦65,000.00',
    image: 'https://images.unsplash.com/photo-1571019613454-1e4cd0b6cbd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 6,
    brandId: 6,
    rating: 4.7,
    reviews: 48,
    onSale: false,
    freeShipping: false,
    dateAdded: '2023-05-30'
  },
  {
    id: 7,
    name: 'Water Bottle',
    description: 'Insulated water bottle to stay hydrated',
    price: '₦8,000.00',
    image: 'https://images.unsplash.com/photo-1602143407341-1c3827b76816?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 7,
    brandId: 7,
    rating: 4.5,
    reviews: 62,
    onSale: true,
    freeShipping: true,
    dateAdded: '2023-06-01'
  },
  {
    id: 8,
    name: 'Resistance Bands',
    description: 'Set of resistance bands for strength training',
    price: '₦12,000.00',
    image: 'https://images.unsplash.com/photo-1571019613454-1e4cd0b6cbd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 8,
    brandId: 8,
    rating: 4.3,
    reviews: 35,
    onSale: false,
    freeShipping: true,
    dateAdded: '2023-06-20'
  }
]);

// Health & Wellness sub-categories
const subCategories = ref([
  { id: 1, name: 'Vitamins & Supplements' },
  { id: 2, name: 'Sports Nutrition' },
  { id: 3, name: 'Yoga & Fitness' },
  { id: 4, name: 'Aromatherapy' },
  { id: 5, name: 'Health Monitors' },
  { id: 6, name: 'Massage & Relaxation' },
  { id: 7, name: 'Hydration' },
  { id: 8, name: 'Exercise Equipment' }
]);

// Health & Wellness brands
const brands = ref([
  { id: 1, name: 'Nature Made' },
  { id: 2, name: 'Optimum Nutrition' },
  { id: 3, name: 'Gaiam' },
  { id: 4, name: 'doTERRA' },
  { id: 5, name: 'Fitbit' },
  { id: 6, name: 'Therabody' },
  { id: 7, name: 'Hydro Flask' },
  { id: 8, name: 'Fit Simplify' }
]);
</script>