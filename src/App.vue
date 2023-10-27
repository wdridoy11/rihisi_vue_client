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

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/tailwind.css";
</style>

