<template>
  <app-layout>
    <template v-slot:main-content>
  <BaseCategoryPage
    category-title="Pet Supplies"
    category-description="Everything you need to keep your furry friends happy and healthy."
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

// Pet Supplies products
const products = ref([
  {
    id: 1,
    name: 'Dog Food',
    description: 'Premium dog food for all breeds',
    price: '₦15,000.00',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 1,
    brandId: 1,
    rating: 4.7,
    reviews: 92,
    onSale: true,
    freeShipping: true,
    dateAdded: '2023-06-10'
  },
  {
    id: 2,
    name: 'Cat Litter',
    description: 'Clumping cat litter for easy cleaning',
    price: '₦12,000.00',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 2,
    brandId: 2,
    rating: 4.5,
    reviews: 76,
    onSale: false,
    freeShipping: true,
    dateAdded: '2023-05-15'
  },
  {
    id: 3,
    name: 'Pet Bed',
    description: 'Comfortable bed for cats and small dogs',
    price: '₦18,000.00',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 3,
    brandId: 3,
    rating: 4.6,
    reviews: 54,
    onSale: true,
    freeShipping: true,
    dateAdded: '2023-06-05'
  },
  {
    id: 4,
    name: 'Dog Leash',
    description: 'Durable leash for daily walks',
    price: '₦5,500.00',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 4,
    brandId: 4,
    rating: 4.4,
    reviews: 38,
    onSale: false,
    freeShipping: true,
    dateAdded: '2023-05-25'
  },
  {
    id: 5,
    name: 'Pet Toys',
    description: 'Interactive toys for mental stimulation',
    price: '₦8,000.00',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 5,
    brandId: 5,
    rating: 4.8,
    reviews: 67,
    onSale: true,
    freeShipping: true,
    dateAdded: '2023-06-15'
  },
  {
    id: 6,
    name: 'Grooming Kit',
    description: 'Complete grooming kit for pets',
    price: '₦22,000.00',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 6,
    brandId: 6,
    rating: 4.5,
    reviews: 43,
    onSale: false,
    freeShipping: true,
    dateAdded: '2023-05-30'
  },
  {
    id: 7,
    name: 'Fish Tank',
    description: 'Complete aquarium setup for beginners',
    price: '₦45,000.00',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 7,
    brandId: 7,
    rating: 4.7,
    reviews: 29,
    onSale: true,
    freeShipping: false,
    dateAdded: '2023-06-01'
  },
  {
    id: 8,
    name: 'Bird Cage',
    description: 'Spacious cage for small to medium birds',
    price: '₦35,000.00',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 8,
    brandId: 8,
    rating: 4.3,
    reviews: 24,
    onSale: false,
    freeShipping: false,
    dateAdded: '2023-06-20'
  }
]);

// Pet Supplies sub-categories
const subCategories = ref([
  { id: 1, name: 'Dog Supplies' },
  { id: 2, name: 'Cat Supplies' },
  { id: 3, name: 'Beds & Furniture' },
  { id: 4, name: 'Collars & Leashes' },
  { id: 5, name: 'Toys' },
  { id: 6, name: 'Grooming' },
  { id: 7, name: 'Fish & Aquatic' },
  { id: 8, name: 'Bird Supplies' }
]);

// Pet Supplies brands
const brands = ref([
  { id: 1, name: 'Royal Canin' },
  { id: 2, name: 'Tidy Cats' },
  { id: 3, name: 'PetFusion' },
  { id: 4, name: 'Ruffwear' },
  { id: 5, name: 'KONG' },
  { id: 6, name: 'Wahl' },
  { id: 7, name: 'Marina' },
  { id: 8, name: 'Prevue Hendryx' }
]);
</script>