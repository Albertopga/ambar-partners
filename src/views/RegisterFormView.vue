<script setup>
import MainLayout from '@/layouts/MainLayout.vue'
import { reactive, computed } from 'vue'
import {
  validateEmail,
  validateIsSameText,
  validatePassword,
  validateMaxLength,
  validateMinLength
} from '../utils/validations.form'

const state = reactive({
  name: { value: '', touched: false },
  email: { value: '', touched: false },
  password: { value: '', touched: false },
  confirmPassword: { value: '', touched: false }
})

const minLength = 2
const maxLength = 64

const isValidName = computed(() => {
  return !state.name.touched || (validateMinLength(state.name.value, minLength) && validateMaxLength(state.name.value, maxLength))
})
const isValidEmail = computed(() => {
  return !state.email.touched || validateEmail(state.email.value)
})
const isValidPassword = computed(() => {
  return !state.password.touched || validatePassword(state.password.value)
})
const isValidConfirmPassword = computed(() => {
  return !state.confirmPassword.touched || (validatePassword(state.password.value) && validateIsSameText(state.password.value, state.confirmPassword.value))
})
const isValidForm = computed(() => {
  const allTouched = state.name.touched && state.email.touched && state.password.touched && state.confirmPassword.touched;
  return allTouched && isValidName.value && isValidEmail.value && isValidPassword && isValidConfirmPassword.value
})

const submit = () => {
  console.log("Los datos almacenados son")
  console.table({ ...state })
}
const errorContainerClasses = {
  'mt-3': true,
  'border': true,
  'border-secondary': true,
  'text-secondary': true,
  'px-4': true,
  'py-3': true,
  'rounded-lg': true,
}
const inputClasses = {
  'w-full': true,
  'bg-gray-100': true,
  'px-4': true,
  'py-2': true,
  'rounded-lg': true,
  'focus:outline-secondary': true,
}
</script>

<template>
  <MainLayout>
    <form class="bg-white p-6 md:p-10 lg:p-16 rounded-lg shadow-lg md:w-3/4 lg:w-2/4 max-w-[700px] mx-auto"
      @form-change.prevent="validateForm" @submit.prevent="submit">
      <h1 class="flex-grow text-2xl font-semibold ml-5 text-center">User Form</h1>
      <fieldset>
        <label class="font-semibold block my-3 text-md" for="username">
          Username
        </label>
        <input id="username" :class="inputClasses" type="text" name="username" placeholder="username"
          v-model="state.name.value" @blur="state.name.touched = true">
        <div :class="errorContainerClasses" v-if="!isValidName">
          <p class="font-semibold text-xs">Required field. You need more {{ minLength }} letters and less than {{
            maxLength }}.
          </p>
        </div>
      </fieldset>
      <fieldset>
        <label class="font-semibold block my-3 text-md" for="email">
          Email
        </label>
        <input id="email" :class="inputClasses" type="text" name="email" placeholder="@email" v-model="state.email.value"
          @blur="state.email.touched = true">
        <div :class="errorContainerClasses" v-if="!isValidEmail">
          <p class="font-semibold text-xs">A valid email address is required, ex.: ejemplo@gmail.com: </p>
        </div>
      </fieldset>
      <fieldset>
        <label class="font-semibold block my-3 text-md" for="password">
          Password
        </label>
        <input id="password" :class="inputClasses" type="text" name="password" placeholder="password"
          v-model="state.password.value" @blur="state.password.touched = true">
        <div :class="errorContainerClasses" v-if="!isValidPassword">
          <p class="font-semibold text-xs">A valid password requires 8 alphanumeric characters, a number and a special
            character ex. P!ssw0rd </p>
        </div>
      </fieldset>
      <fieldset>
        <label class="font-semibold block my-3 text-md" for="confirm">
          Confirm password
        </label>
        <input id="confirm" :class="inputClasses" type="text" name="confirm" placeholder="confirm password"
          v-model="state.confirmPassword.value" @input="state.confirmPassword.touched = true">
        <div :class="errorContainerClasses" v-if="!isValidConfirmPassword">
          <p class="font-semibold text-xs">The value entered does not match the passwor: </p>
        </div>
      </fieldset>
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
