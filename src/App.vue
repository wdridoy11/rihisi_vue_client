<script setup lang="ts">
  import Home from '../src/components/Home.vue';
  import Search from './components/search/Search.vue';
  import SearchResults from './components/searchResults/SearchResults.vue';
  import TutorDetails from './components/tutorDetails/TutorDetails.vue';
import {RouterView, RouterLink} from 'vue-router'
</script>


<template>
  <main>
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </main>
</template>

