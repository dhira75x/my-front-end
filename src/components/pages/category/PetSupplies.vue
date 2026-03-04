<!-- Pet Supplies Category -->
<template>
  <app-layout>
    <template v-slot:main-content>
      <BaseCategoryPage category-title="Pet Supplies"
        category-description="Food, toys, grooming and accessories for your pets." :products="products"
        :sub-categories="subCategories" :brands="brands" :is-loading="isLoading" :error="error" />
    </template>
  </app-layout>
</template>

<script setup>
import BaseCategoryPage from './BaseCategoryPage.vue';
import AppLayout from '@/layouts/applayout.vue';
import { useCategory } from '@/composables/useCategory';

const { products, subCategories, brands, isLoading, error } = useCategory('Pet Supplies');
</script>