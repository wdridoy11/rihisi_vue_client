<script setup lang="ts">
  import Header from './partials/Header.vue';
  import {RouterView, RouterLink} from 'vue-router';
</script>


<template>
  <main>
    <Header />
    <RouterView />
  </main>
</template>

