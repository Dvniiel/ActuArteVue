<script setup lang="ts">

import { RouterLink, RouterView, useRoute } from 'vue-router';

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

const route = useRoute();
</script>



<!-- COMPONENTES DE LA HOMEPAGE -->
<template>


  <!-- CABECERA -->
  <Header v-if="route.path !== '/dashboard'"></Header>


  <main>

    <RouterView/>

  </main>


  <!-- FOOTER -->
  <Footer v-if="route.path !== '/dashboard'"></Footer>



</template>


