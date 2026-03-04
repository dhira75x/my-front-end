<!-- Fashion Category -->
<template>
  <app-layout>
    <template v-slot:main-content>
      <BaseCategoryPage category-title="Fashion"
        category-description="Clothing, footwear, bags and accessories for every style." :products="products"
        :sub-categories="subCategories" :brands="brands" :is-loading="isLoading" :error="error" />
    </template>
  </app-layout>
</template>

<script setup>
import BaseCategoryPage from './BaseCategoryPage.vue';
import AppLayout from '@/layouts/applayout.vue';
import { useCategory } from '@/composables/useCategory';

const { products, subCategories, brands, isLoading, error } = useCategory('Fashion');
</script>