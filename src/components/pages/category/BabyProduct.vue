<!-- BabyProductsCategory.vue -->
<template>
  <app-layout>
    <template v-slot:main-content>
      <BaseCategoryPage category-title="Baby Products"
        category-description="Everything you need for your little one, from diapers to strollers." :products="products"
        :sub-categories="subCategories" :brands="brands" :is-loading="isLoading" :error="error" />
    </template>
  </app-layout>
</template>

<script setup>
import BaseCategoryPage from './BaseCategoryPage.vue';
import AppLayout from '@/layouts/applayout.vue';
import { useCategory } from '@/composables/useCategory';

const { products, subCategories, brands, isLoading, error } = useCategory('Baby Products');
</script>