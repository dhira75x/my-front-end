<template>
  <app-layout>
    <template v-slot:main-content>
  <BaseCategoryPage
    category-title="Jewelry & Accessories"
    category-description="Elegant jewelry and fashion accessories to complete your look."
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

// Jewelry & Accessories products
const products = ref([
  {
    id: 1,
    name: 'Gold Necklace',
    description: 'Elegant gold necklace with pendant',
    price: '₦125,000.00',
    image: 'https://images.unsplash.com/photo-1596942446228-4e2a9a4e9d67?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 1,
    brandId: 1,
    rating: 4.8,
    reviews: 42,
    onSale: true,
    freeShipping: true,
    dateAdded: '2023-06-10'
  },
  {
    id: 2,
    name: 'Silver Earrings',
    description: 'Stylish silver earrings for any occasion',
    price: '₦45,000.00',
    image: 'https://images.unsplash.com/photo-1596942446228-4e2a9a4e9d67?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 2,
    brandId: 2,
    rating: 4.6,
    reviews: 38,
    onSale: false,
    freeShipping: true,
    dateAdded: '2023-05-15'
  },
  {
    id: 3,
    name: 'Diamond Ring',
    description: 'Brilliant diamond ring for special moments',
    price: '₦350,000.00',
    image: 'https://images.unsplash.com/photo-1596942446228-4e2a9a4e9d67?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 3,
    brandId: 3,
    rating: 4.9,
    reviews: 27,
    onSale: true,
    freeShipping: true,
    dateAdded: '2023-06-05'
  },
  {
    id: 4,
    name: 'Leather Handbag',
    description: 'Premium leather handbag for everyday use',
    price: '₦85,000.00',
    image: 'https://images.unsplash.com/photo-1584917875442-7b3128b4e5e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 4,
    brandId: 4,
    rating: 4.7,
    reviews: 54,
    onSale: false,
    freeShipping: true,
    dateAdded: '2023-05-25'
  },
  {
    id: 5,
    name: 'Sunglasses',
    description: 'Designer sunglasses with UV protection',
    price: '₦35,000.00',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 5,
    brandId: 5,
    rating: 4.5,
    reviews: 63,
    onSale: true,
    freeShipping: true,
    dateAdded: '2023-06-15'
  },
  {
    id: 6,
    name: 'Watch',
    description: 'Elegant watch for men and women',
    price: '₦150,000.00',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 6,
    brandId: 6,
    rating: 4.8,
    reviews: 49,
    onSale: false,
    freeShipping: true,
    dateAdded: '2023-05-30'
  },
  {
    id: 7,
    name: 'Bracelet',
    description: 'Charm bracelet with customizable charms',
    price: '₦65,000.00',
    image: 'https://images.unsplash.com/photo-1596942446228-4e2a9a4e9d67?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 7,
    brandId: 7,
    rating: 4.6,
    reviews: 36,
    onSale: true,
    freeShipping: true,
    dateAdded: '2023-06-01'
  },
  {
    id: 8,
    name: 'Scarf',
    description: 'Luxurious silk scarf for all seasons',
    price: '₦25,000.00',
    image: 'https://images.unsplash.com/photo-1596942446228-4e2a9a4e9d67?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 8,
    brandId: 8,
    rating: 4.4,
    reviews: 28,
    onSale: false,
    freeShipping: true,
    dateAdded: '2023-06-20'
  }
]);

// Jewelry & Accessories sub-categories
const subCategories = ref([
  { id: 1, name: 'Necklaces' },
  { id: 2, name: 'Earrings' },
  { id: 3, name: 'Rings' },
  { id: 4, name: 'Handbags & Wallets' },
  { id: 5, name: 'Sunglasses' },
  { id: 6, name: 'Watches' },
  { id: 7, name: 'Bracelets' },
  { id: 8, name: 'Scarves & Wraps' }
]);

// Jewelry & Accessories brands
const brands = ref([
  { id: 1, name: 'Tiffany & Co.' },
  { id: 2, name: 'Swarovski' },
  { id: 3, name: 'Blue Nile' },
  { id: 4, name: 'Coach' },
  { id: 5, name: 'Ray-Ban' },
  { id: 6, name: 'Fossil' },
  { id: 7, name: 'Pandora' },
  { id: 8, name: 'Hermès' }
]);
</script>