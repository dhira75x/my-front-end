<template>
    <svg :class="className" :viewBox="viewBox" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <slot />
    </svg>
</template>

<script setup>
defineProps({
    viewBox: {
        type: String,
        default: '0 0 24 24',
    },
    className: {
        type: String,
        default: 'w-6 h-6',
    },
});
</script>
