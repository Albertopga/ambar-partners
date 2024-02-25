<script setup>
import { ref } from 'vue'

import AppAccordion from '@/components/App/Accordion.vue'
import AppEditIcon from '@/components/App/EditIcon.vue'
import AppList from '@/components/App/List.vue'
defineOptions({
    name: 'AppCardSection'
})

defineProps({
    title: {
        type: String,
        required: true
    },
    data: {
        type: Object,
        required: true
    }
})
const isEditing = ref(false)
const edit = () => {
    isEditing.value = !isEditing.value
}
</script>

<template>
    <AppAccordion :title="title">
        <template v-slot:icon>
            <div @click="edit()">
                <AppEditIcon />
            </div>
        </template>
        <template v-slot:content>
            <AppList :data="data" :isEditing="isEditing" />
        </template>
    </AppAccordion>
</template>
