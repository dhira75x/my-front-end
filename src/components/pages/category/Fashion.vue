<template>
  <app-layout>
    <template v-slot:main-content>
  <BaseCategoryPage
    category-title="Fashion"
    category-description="Discover the latest trends in fashion for men, women, and children."
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

// Fashion products
const products = ref([
  {
    id: 1,
    name: 'Men\'s Casual Shirt',
    description: 'Comfortable and stylish shirt for everyday wear',
    price: '₦8,500.00',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 1,
    brandId: 1,
    rating: 4.3,
    reviews: 32,
    onSale: true,
    freeShipping: true,
    dateAdded: '2023-06-15'
  },
  {
    id: 2,
    name: 'Women\'s Summer Dress',
    description: 'Light and breezy dress for summer days',
    price: '₦12,000.00',
    originalPrice: '₦15,000.00',
    image: 'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 2,
    brandId: 2,
    rating: 4.7,
    reviews: 28,
    onSale: true,
    freeShipping: true,
    dateAdded: '2023-05-20'
  },
  {
    id: 3,
    name: 'Kids\' Sneakers',
    description: 'Comfortable sneakers for active kids',
    price: '₦9,500.00',
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a26?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 3,
    brandId: 3,
    rating: 4.5,
    reviews: 19,
    onSale: false,
    freeShipping: false,
    dateAdded: '2023-06-10'
  },
  {
    id: 4,
    name: 'Men\'s Jeans',
    description: 'Classic fit jeans for all occasions',
    price: '₦15,000.00',
    image: 'https://images.unsplash.com/photo-1542271021-7eeb2f5c2812?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 1,
    brandId: 4,
    rating: 4.2,
    reviews: 24,
    onSale: false,
    freeShipping: true,
    dateAdded: '2023-04-25'
  },
  {
    id: 5,
    name: 'Women\'s Handbag',
    description: 'Elegant handbag for special occasions',
    price: '₦25,000.00',
    image: 'https://images.unsplash.com/photo-1584917875442-7b3128b4e5e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 2,
    brandId: 5,
    rating: 4.8,
    reviews: 16,
    onSale: true,
    freeShipping: true,
    dateAdded: '2023-06-05'
  },
  {
    id: 6,
    name: 'Kids\' T-Shirt',
    description: 'Comfortable cotton t-shirt for kids',
    price: '₦4,500.00',
    image: 'https://images.unsplash.com/photo-1519458246339-5338da8a13d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 3,
    brandId: 6,
    rating: 4.0,
    reviews: 21,
    onSale: false,
    freeShipping: true,
    dateAdded: '2023-05-15'
  },
  {
    id: 7,
    name: 'Men\'s Formal Shoes',
    description: 'Classic formal shoes for business wear',
    price: '₦22,000.00',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 4,
    brandId: 7,
    rating: 4.4,
    reviews: 18,
    onSale: true,
    freeShipping: false,
    dateAdded: '2023-06-20'
  },
  {
    id: 8,
    name: 'Women\'s Sunglasses',
    description: 'Stylish sunglasses with UV protection',
    price: '₦12,500.00',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 5,
    brandId: 8,
    rating: 4.6,
    reviews: 14,
    onSale: false,
    freeShipping: true,
    dateAdded: '2023-05-30'
  }
]);

// Fashion sub-categories
const subCategories = ref([
  { id: 1, name: 'Men\'s Clothing' },
  { id: 2, name: 'Women\'s Clothing' },
  { id: 3, name: 'Kids\' Clothing' },
  { id: 4, name: 'Shoes' },
  { id: 5, name: 'Accessories' }
]);

// Fashion brands
const brands = ref([
  { id: 1, name: 'Nike' },
  { id: 2, name: 'Zara' },
  { id: 3, name: 'Adidas' },
  { id: 4, name: 'Levi\'s' },
  { id: 5, name: 'Coach' },
  { id: 6, name: 'Gap' },
  { id: 7, name: 'Clarks' },
  { id: 8, name: 'Ray-Ban' }
]);
</script>