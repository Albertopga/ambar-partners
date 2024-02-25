<script setup>
import AppOpenCloseIcon from '@/components/App/OpenCloseIcon.vue'
import { ref } from 'vue'

defineOptions({
    name: 'AppAccordion'
})

defineProps({
    title: {
        type: String,
        required: false,
        default: "AppAccordion"
    }
})

const isOpen = ref(false);

const toggleAccordion = () => {
    isOpen.value = !isOpen.value;
}

const containerClasses = {
    'mx-auto': true,
    'block': true,
    'w-full': true,
    'max-w-screen-sm': true,
    'rounded-lg': true,
    'bg-white': true,
    'shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]': true,
    'dark:bg-neutral-700': true,
}

</script>
  
<style>
.accordion-enter-active,
.accordion-leave-active {
    transition: max-height 0.5s;
}

.accordion-enter,
.accordion-leave-to {
    max-height: 0;
    overflow: hidden;
}
</style>
  
<template>
    <section :class="containerClasses">
        <section class="flex items-center p-4 cursor-pointer" @click="toggleAccordion">
            <h2 class="flex-grow text-2xl font-semibold text-center">{{ title }}</h2>
            <AppOpenCloseIcon :isOpen="isOpen" />
        </section>
        <transition name="accordion">
            <section v-if="isOpen" class="w-full flex flex-col items-center">
                <slot name="icon"></slot>
                <slot name="content"></slot>
            </section>
        </transition>
    </section>
</template>
