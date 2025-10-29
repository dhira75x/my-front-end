<template>
  <app-layout>
    <template v-slot:main-content>
  <BaseCategoryPage
    category-title="Electronics"
    category-description="Discover the latest gadgets and electronics at unbeatable prices."
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

// Electronics products
const products = ref([
  {
    id: 1,
    name: 'Wireless Headphones',
    description: 'Premium sound quality with noise cancellation',
    price: '₦79,000.00',
    originalPrice: '₦99,000.00',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 1,
    brandId: 1,
    rating: 4.5,
    reviews: 24,
    onSale: true,
    freeShipping: true,
    dateAdded: '2023-05-15'
  },
  {
    id: 2,
    name: 'Smart Watch',
    description: 'Track your fitness and stay connected',
    price: '₦129,999.00',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 1,
    brandId: 2,
    rating: 4.2,
    reviews: 18,
    onSale: false,
    freeShipping: true,
    dateAdded: '2023-06-20'
  },
  {
    id: 3,
    name: 'Smartphone',
    description: 'Latest technology with advanced camera',
    price: '₦250,000.00',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 1,
    brandId: 3,
    rating: 4.7,
    reviews: 42,
    onSale: true,
    freeShipping: false,
    dateAdded: '2023-07-10'
  },
  {
    id: 4,
    name: 'Laptop',
    description: 'High performance for work and gaming',
    price: '₦450,000.00',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 1,
    brandId: 4,
    rating: 4.8,
    reviews: 36,
    onSale: false,
    freeShipping: true,
    dateAdded: '2023-04-05'
  },
  {
    id: 5,
    name: 'Tablet',
    description: 'Perfect for entertainment and productivity',
    price: '₦180,000.00',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 2,
    brandId: 3,
    rating: 4.3,
    reviews: 21,
    onSale: true,
    freeShipping: false,
    dateAdded: '2023-05-28'
  },
  {
    id: 6,
    name: 'Digital Camera',
    description: 'Capture your memories in high quality',
    price: '₦320,000.00',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 3,
    brandId: 5,
    rating: 4.6,
    reviews: 15,
    onSale: false,
    freeShipping: true,
    dateAdded: '2023-06-15'
  },
  {
    id: 7,
    name: 'Gaming Console',
    description: 'Next-gen gaming experience',
    price: '₦380,000.00',
    image: 'https://images.unsplash.com/photo-1486754735734-325b5831c3ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 4,
    brandId: 6,
    rating: 4.9,
    reviews: 53,
    onSale: true,
    freeShipping: true,
    dateAdded: '2023-07-01'
  },
  {
    id: 8,
    name: 'Bluetooth Speaker',
    description: 'Portable speaker with amazing sound',
    price: '₦45,000.00',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 5,
    brandId: 1,
    rating: 4.1,
    reviews: 19,
    onSale: false,
    freeShipping: true,
    dateAdded: '2023-05-10'
  }
]);

// Electronics sub-categories
const subCategories = ref([
  { id: 1, name: 'Audio & Headphones' },
  { id: 2, name: 'Tablets & E-Readers' },
  { id: 3, name: 'Cameras & Camcorders' },
  { id: 4, name: 'Video Games & Consoles' },
  { id: 5, name: 'Portable Audio & Speakers' }
]);

// Electronics brands
const brands = ref([
  { id: 1, name: 'Sony' },
  { id: 2, name: 'Apple' },
  { id: 3, name: 'Samsung' },
  { id: 4, name: 'Dell' },
  { id: 5, name: 'Canon' },
  { id: 6, name: 'Microsoft' }
]);
</script>