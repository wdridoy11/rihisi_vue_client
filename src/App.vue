<script setup lang="ts">
  import Header from './partials/Header.vue';
  import {RouterView, RouterLink} from 'vue-router';
</script>


<template>
  <main>
    <header class="absolute w-full bg-slate-900 z-30">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="flex items-center justify-between h-16 md:h-20">
          <!-- Site branding -->
          <div class="shrink-0 mr-4">
            <!-- Logo -->
            <router-link class="block group" to="/" aria-label="Cruip">
              <img src="./images/logo.svg" width="32" height="32" alt="Community" />
            </router-link>
          </div>
          <!-- Desktop navigation -->
          <nav class="flex grow">
            <!-- Desktop sign in links -->
            <ul class="flex grow justify-end flex-wrap items-center">
              <li>
                <router-link class="text-sm font-medium text-slate-400 hover:text-slate-200 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out" to="/">Home</router-link>
              </li>
              <li>
                <router-link class="text-sm font-medium text-slate-400 hover:text-slate-200 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out" to="/about">About</router-link>
              </li>
              <li>
                <router-link class="text-sm font-medium text-slate-400 hover:text-slate-200 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out" to="/search">Search</router-link>
              </li>
              <li class="ml-3">
                <router-link class="btn-sm text-white bg-indigo-500 hover:bg-indigo-600 w-full" to="/join">Join Community</router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <RouterView />
  </main>
</template>

