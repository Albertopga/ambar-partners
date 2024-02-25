<script setup>
defineOptions({
    name: 'AppOpenCloseIcon'
})
defineProps({
    isOpen: Boolean,
    require: true
})
//TODO parametrize side color
</script>
<template>
    <svg :class="{ 'transform rotate-180': isOpen }" class="h-8 w-8  text-secondary" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
</template>

