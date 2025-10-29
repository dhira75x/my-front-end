<template>
  <app-layout>
    <template v-slot:main-content>
  <BaseCategoryPage
    category-title="Office Supplies"
    category-description="Equip your workspace with quality office supplies and furniture."
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

// Office Supplies products
const products = ref([
  {
    id: 1,
    name: 'Office Chair',
    description: 'Ergonomic office chair for comfort',
    price: '₦85,000.00',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 1,
    brandId: 1,
    rating: 4.5,
    reviews: 64,
    onSale: true,
    freeShipping: false,
    dateAdded: '2023-06-10'
  },
  {
    id: 2,
    name: 'Desk Organizer',
    description: 'Keep your desk tidy and organized',
    price: '₦8,500.00',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 2,
    brandId: 2,
    rating: 4.3,
    reviews: 38,
    onSale: false,
    freeShipping: true,
    dateAdded: '2023-05-15'
  },
  {
    id: 3,
    name: 'Notebooks Set',
    description: 'Set of premium notebooks for note-taking',
    price: '₦12,000.00',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
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
    name: 'Printer Paper',
    description: 'High-quality paper for all printing needs',
    price: '₦15,000.00',
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
    name: 'Desk Lamp',
    description: 'LED desk lamp with adjustable arm',
    price: '₦18,000.00',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 5,
    brandId: 5,
    rating: 4.7,
    reviews: 41,
    onSale: true,
    freeShipping: true,
    dateAdded: '2023-06-15'
  },
  {
    id: 6,
    name: 'Pen Set',
    description: 'Professional pen set for executives',
    price: '₦25,000.00',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 6,
    brandId: 6,
    rating: 4.8,
    reviews: 36,
    onSale: false,
    freeShipping: true,
    dateAdded: '2023-05-30'
  },
  {
    id: 7,
    name: 'Filing Cabinet',
    description: '3-drawer filing cabinet for document storage',
    price: '₦65,000.00',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 7,
    brandId: 7,
    rating: 4.5,
    reviews: 24,
    onSale: true,
    freeShipping: false,
    dateAdded: '2023-06-01'
  },
  {
    id: 8,
    name: 'Whiteboard',
    description: 'Magnetic whiteboard for meetings',
    price: '₦35,000.00',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 8,
    brandId: 8,
    rating: 4.3,
    reviews: 19,
    onSale: false,
    freeShipping: false,
    dateAdded: '2023-06-20'
  }
]);

// Office Supplies sub-categories
const subCategories = ref([
  { id: 1, name: 'Office Furniture' },
  { id: 2, name: 'Desk Accessories' },
  { id: 3, name: 'Notebooks & Pads' },
  { id: 4, name: 'Paper & Printer Supplies' },
  { id: 5, name: 'Lighting' },
  { id: 6, name: 'Writing Instruments' },
  { id: 7, name: 'Storage & Organization' },
  { id: 8, name: 'Presentation Supplies' }
]);

// Office Supplies brands
const brands = ref([
  { id: 1, name: 'Herman Miller' },
  { id: 2, name: 'Poppin' },
  { id: 3, name: 'Moleskine' },
  { id: 4, name: 'Hammermill' },
  { id: 5, name: 'BenQ' },
  { id: 6, name: 'Cross' },
  { id: 7, name: 'Fellowes' },
  { id: 8, name: 'Quartet' }
]);
</script>