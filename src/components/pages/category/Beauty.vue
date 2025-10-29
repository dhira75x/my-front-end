<template>
  <app-layout>
    <template v-slot:main-content>
  <BaseCategoryPage
    category-title="Beauty"
    category-description="Discover premium beauty products for skin care, makeup, and more."
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
// Beauty products
const products = ref([
  {
    id: 1,
    name: 'Foundation',
    description: 'Long-lasting foundation with full coverage',
    price: '₦12,000.00',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1686c8f3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 1,
    brandId: 1,
    rating: 4.5,
    reviews: 42,
    onSale: true,
    freeShipping: true,
    dateAdded: '2023-06-10'
  },
  {
    id: 2,
    name: 'Moisturizer',
    description: 'Hydrating moisturizer for all skin types',
    price: '₦15,000.00',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 2,
    brandId: 2,
    rating: 4.7,
    reviews: 38,
    onSale: false,
    freeShipping: true,
    dateAdded: '2023-05-15'
  },
  {
    id: 3,
    name: 'Lipstick',
    description: 'Long-lasting lipstick in various shades',
    price: '₦8,500.00',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 1,
    brandId: 3,
    rating: 4.3,
    reviews: 29,
    onSale: true,
    freeShipping: true,
    dateAdded: '2023-06-05'
  },
  {
    id: 4,
    name: 'Face Serum',
    description: 'Anti-aging serum with vitamin C',
    price: '₦22,000.00',
    originalPrice: '₦25,000.00',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 2,
    brandId: 4,
    rating: 4.8,
    reviews: 35,
    onSale: true,
    freeShipping: true,
    dateAdded: '2023-05-25'
  },
  {
    id: 5,
    name: 'Eyeshadow Palette',
    description: 'Versatile eyeshadow palette with 12 shades',
    price: '₦18,000.00',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 1,
    brandId: 5,
    rating: 4.6,
    reviews: 27,
    onSale: false,
    freeShipping: true,
    dateAdded: '2023-06-15'
  },
  {
    id: 6,
    name: 'Face Mask',
    description: 'Deep cleansing face mask for clear skin',
    price: '₦6,500.00',
    image: 'https://images.unsplash.com/photo-1570194065656-dc9a97f39e4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 3,
    brandId: 6,
    rating: 4.4,
    reviews: 31,
    onSale: true,
    freeShipping: true,
    dateAdded: '2023-05-30'
  },
  {
    id: 7,
    name: 'Mascara',
    description: 'Volumizing mascara for dramatic lashes',
    price: '₦9,500.00',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 1,
    brandId: 7,
    rating: 4.2,
    reviews: 24,
    onSale: false,
    freeShipping: true,
    dateAdded: '2023-06-01'
  },
  {
    id: 8,
    name: 'Sunscreen',
    description: 'Broad-spectrum SPF 50 sunscreen',
    price: '₦11,000.00',
    image: 'https://images.unsplash.com/photo-1558903678-4d9ec17007c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    categoryId: 2,
    brandId: 8,
    rating: 4.7,
    reviews: 33,
    onSale: true,
    freeShipping: true,
    dateAdded: '2023-05-20'
  }
]);

// Beauty sub-categories
const subCategories = ref([
  { id: 1, name: 'Makeup' },
  { id: 2, name: 'Skin Care' },
  { id: 3, name: 'Face Masks & Peels' },
  { id: 4, name: 'Fragrance' },
  { id: 5, name: 'Hair Care' },
  { id: 6, name: 'Bath & Body' }
]);

// Beauty brands
const brands = ref([
  { id: 1, name: 'MAC' },
  { id: 2, name: 'Neutrogena' },
  { id: 3, name: 'Maybelline' },
  { id: 4, name: 'L\'Oréal' },
  { id: 5, name: 'Urban Decay' },
  { id: 6, name: 'Garnier' },
  { id: 7, name: 'Benefit' },
  { id: 8, name: 'Nivea' }
]);
</script>