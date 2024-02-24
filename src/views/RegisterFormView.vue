<script setup>
import MainLayout from '@/layouts/MainLayout.vue'
import { ref, reactive, watch, computed } from 'vue'
import {
  validateEmail,
  validateIsSameText,
  validatePassword,
  validateMaxLength,
  validateMinLength
} from '../utils/validations.form'

const state = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const minLength = 2
const maxLength = 64

const isValidName = computed(() => {
  return validateMinLength(state.name, minLength) && validateMaxLength(state.name, maxLength)
})
const isValidEmail = computed(() => {
  return validateEmail(state.email)
})
const isValidPassword = computed(() => {
  return validatePassword(state.password)
})
const isValidConfirmPassword = computed(() => {
  return validatePassword(state.password) && validateIsSameText(state.password, state.confirmPassword)
})
const isValidForm = computed(() => {
  return isValidName.value && isValidEmail.value && isValidPassword && isValidConfirmPassword.value
})
const submit = () => {
  console.log({ ...state })
}

</script>

<template>
  <MainLayout>
    <form class="bg-white p-6 md:p-10 lg:p-16 rounded-lg shadow-lg md:w-3/4 lg:w-2/4 mx-auto" @submit.prevent="submit">
      <div>
        <label class="font-semibold block my-3 text-md" for="username">
          Username
        </label>
        <input id="username" class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text"
          name="username" placeholder="username" v-model="state.name">
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded" v-if="!isValidName">
          <p class="font-semibold text-xs">Required field. You need more {{ minLength }} letters and less than {{
            maxLength }}.
          </p>
        </div>
      </div>
      <div>
        <label class="font-semibold block my-3 text-md" for="email">
          Email
        </label>
        <input id="email" class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="email"
          placeholder="@email" v-model="state.email">
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded" v-if="!isValidEmail">
          <p class="font-semibold text-xs">A valid email address is required, ex.: ejemplo@gmail.com: </p>
        </div>
      </div>
      <div>
        <label class="font-semibold block my-3 text-md" for="password">
          Password
        </label>
        <input id="password" class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text"
          name="password" placeholder="password" v-model="state.password">
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded" v-if="!isValidPassword">
          <p class="font-semibold text-xs">A valid password requires 8 alphanumeric characters, a number and a special
            character ex. P@ssw0rd </p>
        </div>
      </div>
      <div>
        <label class="font-semibold block my-3 text-md" for="confirm">
          Confirm password
        </label>
        <input id="confirm" class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="confirm"
          placeholder="confirm password" v-model="state.confirmPassword">
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded" v-if="!isValidConfirmPassword">
          <p class="font-semibold text-xs">The value entered does not match the passwor: </p>
        </div>
      </div>
      <button type="submit" :disabled="!isValidForm" :class="[
        isValidForm ? 'bg-primary hover:bg-secondary' : 'bg-gray-400 cursor-not-allowed',
        'w-full',
        'mt-6',
        'rounded-lg',
        'px-4',
        'py-2',
        'text-lg',
        'text-white',
        'font-semibold',
        'font-sans'
      ]">
        Register
      </button>
    </form>
  </MainLayout>
</template>
