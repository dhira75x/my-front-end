<!-- Toys & Games Category -->
<template>
  <app-layout>
    <template v-slot:main-content>
      <BaseCategoryPage category-title="Toys & Games"
        category-description="Fun and educational toys for children of all ages." :products="products"
        :sub-categories="subCategories" :brands="brands" :is-loading="isLoading" :error="error" />
    </template>
  </app-layout>
</template>

<script setup>
import BaseCategoryPage from './BaseCategoryPage.vue';
import AppLayout from '@/layouts/applayout.vue';
import { useCategory } from '@/composables/useCategory';

const { products, subCategories, brands, isLoading, error } = useCategory('Toys & Games');
</script>