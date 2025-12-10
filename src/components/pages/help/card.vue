<!-- card.vue -->
<template>
  <div class="help-card animate__animated animate__fadeInUp" :class="cardClass">
    <div class="card-icon">{{ icon }}</div>
    <h3 class="card-title">{{ title }}</h3>
    <p class="card-description">{{ description }}</p>
    <div class="card-action">
      <span class="action-text">View articles</span>
      <span class="action-arrow">→</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: String,
  icon: String,
  description: String,
  class: String
});

const cardClass = computed(() => props.class || '');
</script>

<style scoped>
.help-card {
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.help-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.card-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.card-title {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #1e293b;
}

.card-description {
  font-size: 0.875rem;
  color: #64748b;
  margin-bottom: 1rem;
  line-height: 1.5;
  flex-grow: 1;
}

.card-action {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
}

.action-text {
  font-size: 0.875rem;
  font-weight: 600;
  color: #3b82f6;
}

.action-arrow {
  font-size: 1rem;
  transition: transform 0.2s ease;
}

.help-card:hover .action-arrow {
  transform: translateX(3px);
}
</style>