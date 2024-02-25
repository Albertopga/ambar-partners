<script setup>
defineOptions({
    name: 'AppList'
})

const props = defineProps({
    data: {
        type: Object,
        required: true
    },
    isEditing: {
        typeof: Boolean,
        required: true
    }
})

const isObject = (key) => {
    return typeof props.data[key] === 'object'
}
const containerClasses = {
    "grid": true,
    "grid-cols-3": true,
    "w-full": true,
    "border-b-2": true,
    "border-neutral-100": true,
    "border-opacity-100": true,
    "p-4": true,
    "dark:border-opacity-50": true,
}
</script>
<template>
    <section v-if="!isEditing" class="w-4/5">
        <ul>
            <li v-for="(value, key, index) in data" :key="index" :class="containerClasses">
                <p class="col-span-1 font-semibold">{{ key }}</p>
                <ul v-if="isObject(key)">
                    <li v-for="(value2, key2) in data[key]" :key="key2">
                        <p class="font-semibold">{{ key2 }}</p>
                        <p class="col-span-2 w-full">{{ value2 }}</p>
                    </li>
                </ul>
                <p class="col-span-2 w-full" v-else>{{ value }}</p>
            </li>
        </ul>
    </section>
    <section v-else class="w-4/5">
        <ul>
            <li v-for="(_, key, index) in data" :key="index" :class="containerClasses">
                <p class="col-span-1 font-semibold">{{ key }}</p>
                <ul v-if="isObject(key)">
                    <li v-for="(_, key2) in data[key]" :key="key2">
                        <p class="font-semibold">{{ key2 }}</p>
                        <input class="col-span-2 w-full ring-2" v-model="data[key][key2]" />
                    </li>
                </ul>
                <input v-else class="col-span-2 w-full ring-2" v-model="data[key]" />
            </li>
        </ul>
    </section>
</template>
