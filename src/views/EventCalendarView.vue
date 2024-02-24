<script setup>
import dayjs from 'dayjs'
import isToday from 'dayjs/plugin/isToday'
import { computed, ref } from 'vue'

import MainLayout from '@/layouts/MainLayout.vue'
/*
Reto 3: Calendario de Eventos.

En este ejercicio vamos a lidiar con errores tanto de javascript como de maquetación. Tu papel es
✔ arreglar estos errores y que la página, que actualmente no renderiza, cargue bien el contenido.

Además, vamos a añadir una funcionalidad al calendario: Queremos ver qué eventos hay cada día.
Como siempre, el diseño y la creatividad quedan del lado de tu lado, ¡Suerte!
*/

const eventsData = [
  {
    eventTime: '2023-11-09T00:00:00',
    type: 'concert',
  },
  {
    eventTime: '2023-11-11T00:00:00',
    type: 'meetup',
  },
  {
    eventTime: '2023-11-12T00:00:00',
    type: 'meetup',
  },
  {
    eventTime: '2023-11-15T00:00:00',
    type: 'concert',
  },
  {
    eventTime: '2023-11-19T00:00:00',
    type: 'cinema',
  },
  {
    eventTime: '2023-11-21T00:00:00',
    type: 'concert',
  },
  {
    eventTime: '2023-11-24T00:00:00',
    type: 'meetup',
  },
  {
    eventTime: '2023-11-25T00:00:00',
    type: 'meetup',
  },
  {
    eventTime: '2023-11-29T00:00:00',
    type: 'cinema',
  },
]
dayjs.extend(isToday)
const viewDate = ref(dayjs())

const daysToPrepend = computed(() => {
  const startOfMonth = viewDate.value.startOf('month')
  const startOfFirstWeek = startOfMonth.startOf('week')
  const daysToFirstDay = startOfMonth.diff(startOfFirstWeek, 'day')
  return new Array(daysToFirstDay).fill(undefined).map((_, index) => startOfFirstWeek.add(index, 'day'))
})

const days = computed(() => {
  const ranges = []
  const startOfRange = viewDate.value.startOf('month').add(-1, 'day')
  const endOfRange = viewDate.value.endOf('month').add(-1, 'day')

  let currentDate = startOfRange

  while (currentDate.isBefore(endOfRange) || currentDate.isSame(endOfRange)) {
    currentDate = currentDate.add(1, 'day')
    ranges.push(currentDate.add(1, 'day'))
  }
  return ranges
})

const shiftMonth = (amount) => {
  viewDate.value = viewDate.value.add(amount, 'month')
}
const reset = () => {
  viewDate.value = dayjs()
}
const currentSelectedFormattedDate = computed(() => {
  return viewDate.value.format('MMMM YYYY')
})

const weekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
</script>

<template>
  <MainLayout>
    <div class="flex flex-col items-center">
      <div class="w-full flex space-x-2 items-center justify-center">
        <button class="bg-primary text-white rounded-xl px-4 py-2" @click="shiftMonth('-1')">
          Previous
        </button>
        <span class="text-3xl">{{ currentSelectedFormattedDate }}</span>
        <button class="bg-primary text-white rounded-xl px-4 py-2" @click="shiftMonth('1')">
          Next
        </button>
      </div>
      <button class="w-fit text-primary border-b rounded-xl px-4 py-2" @click="reset()">
        Today
      </button>
    </div>

    <div class="pt-3 grid grid-cols-7">
      <div v-for="weekDay in weekDays" class="bg-primary text-white border border-slate-200 flex flex-col text-center">
        <div>{{ weekDay }}</div>
      </div>
    </div>

    <div class="grid grid-cols-7">
      <div v-for="prepend in daysToPrepend" class="border border-slate-200 flex flex-col h-32">
        <div class="text-center text-gray-400">
          <span>{{ prepend.format('D') }}</span>
        </div>
      </div>
      <div v-for="day in days" class="border border-slate-200 flex flex-col h-32">
        <div :class="[day.isToday() ? 'bg-secondary' : '']" class="text-center">
          <span>{{ day.format('D') }}</span>
        </div>
      </div>
    </div>
  </MainLayout>
</template>
