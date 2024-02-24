<script setup>
import MainLayout from '@/layouts/MainLayout.vue'
import { reactive } from 'vue'
/*
Reto 2: Vista de Datos del Usuario.

En este ejercicio queremos poner en práctica la creatividad y la capacidad de proponer mejoras
en los diseños por parte del desarrollador. En nuestro día a día trabajaremos con diseños definidos,
pero también vamos a valorar la capacidad de las personas a la hora de proponer estructuración para los datos.

Siéntete libre de modificar tanto código como sea necesario, recuerda que el código proporcionado es sólo un ejemplo.
*/

const userData = {
  id: 1,
  firstName: 'Terry',
  lastName: 'Medhurst',
  maidenName: 'Smitham',
  age: 50,
  gender: 'male',
  email: 'atuny0@sohu.com',
  phone: '+63 791 675 8914',
  username: 'atuny0',
  password: '9uQFF1Lh',
  birthDate: '2000-12-25',
  image: 'https://robohash.org/hicveldicta.png?size=50x50&set=set1',
  bloodGroup: 'A+',
  height: 189,
  weight: 75.4,
  eyeColor: 'Green',
  hair: {
    color: 'Black',
    type: 'Strands',
  },
  domain: 'slashdot.org',
  ip: '117.29.86.254',
  address: {
    address: '1745 T Street Southeast',
    city: 'Washington',
    coordinates: {
      lat: 38.867033,
      lng: -76.979235,
    },
    postalCode: '20020',
    state: 'DC',
  },
  macAddress: '13:69:BA:56:A3:74',
  university: 'Capitol University',
  bank: {
    cardExpire: '06/22',
    cardNumber: '50380955204220685',
    cardType: 'maestro',
    currency: 'Peso',
    iban: 'NO17 0695 2754 967',
  },
  company: {
    address: {
      address: '629 Debbie Drive',
      city: 'Nashville',
      coordinates: {
        lat: 36.208114,
        lng: -86.58621199999999,
      },
      postalCode: '37076',
      state: 'TN',
    },
    department: 'Marketing',
    name: "Blanda-O'Keefe",
    title: 'Help Desk Operator',
  },
  ein: '20-9487066',
  ssn: '661-64-2976',
}

/** Suponiendo que userData me llegue de un servicio, lo primero que haria seria crear objetos organizados y reactivos, 
 * con los datos agrupados que quiero mostrar y editar en las diferentes secciones */
const personalDataFields = [
  "firstName",
  "lastName",
  "maidenName",
  "age",
  "gender",
  "birthDate",
  "image",
  "height",
  "weight",
  "eyeColor",
  "hair",
  "bloodGroup",
  "height",
  "weight"
]

const contactDataFields = ["email", "phone", "address"]
const employmentDataFields = ["ein", "ssn", "company", "university"]
const credentialsDataFields = ["id", "username", "password", "domain", "ip", "macAddress"]

const prepareObject = (fields) => {
  const res = {}
  fields.forEach(key => res[key] = userData[key]);
  return res
}

const personalData = reactive(prepareObject(personalDataFields))
const contactData = reactive(prepareObject(contactDataFields))
const employmentData = reactive(prepareObject(employmentDataFields))
const credentialsData = reactive(prepareObject(credentialsDataFields))
const bankData = reactive(userData.bank)

console.log(personalData)
</script>

<template>
  <MainLayout>
    <header class="bg-gray-800 py-4 text-center text-secondary">
      <h1 class="text-2xl font-semibold">Datos del usuario</h1>
    </header>
    <main class="container mx-auto py-8">
      <section class="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 class="text-xl font-semibold mb-4">Datos personales</h2>
        <ul>
          <li v-for="value, key, a in personalData"><strong>{{ key }}:</strong> {{ value }}</li>
        </ul>
      </section>
      <section class="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 class="text-xl font-semibold mb-4">Datos bancarios</h2>
        <ul>
          <li><strong>Banco:</strong> {{ 'hola' }}</li>
          <li><strong>Número de cuenta:</strong> {{ 'hola' }}</li>
          <!-- Agrega más detalles según los datos bancarios recogidos -->
        </ul>
      </section>
      <section class="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 class="text-xl font-semibold mb-4">Credenciales</h2>
        <ul>
          <li><strong>Nombre de usuario:</strong> {{ 'hola' }}</li>
          <li><strong>Contraseña:</strong> {{ 'hola' }}</li>
          <!-- Agrega más detalles según las credenciales recogidas -->
        </ul>
      </section>
      <section class="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 class="text-xl font-semibold mb-4">Datos de contacto</h2>
        <ul>
          <li><strong>Email:</strong> {{ 'hola' }}</li>
          <li><strong>Teléfono:</strong> {{ 'hola' }}</li>
          <!-- Agrega más detalles según los datos de contacto recogidos -->
        </ul>
      </section>
    </main>
  </MainLayout>
</template>
