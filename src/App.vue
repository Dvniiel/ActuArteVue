<script setup lang="ts">

import { RouterLink, RouterView } from 'vue-router'

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'


</script>



<!-- COMPONENTES DE LA HOMEPAGE -->
<template>


  <!-- CABECERA -->
  <Header></Header>


  <main>

    <RouterView/>

  </main>


  <!-- FOOTER -->
  <Footer></Footer>



</template>


