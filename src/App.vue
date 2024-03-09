<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

const route = useRoute();
const showHeaderAndFooter = computed(() => ![ 'NotFound', 'dashboard', 'login' ].includes(route.name));
</script>

<template>
  <Header v-if="showHeaderAndFooter" />
  <main>
    <RouterView />
  </main>
  <Footer v-if="showHeaderAndFooter" />
</template>
