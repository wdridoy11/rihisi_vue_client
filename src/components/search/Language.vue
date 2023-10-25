<script setup lang="ts">
    import { ref } from 'vue'
    
    const showLanguage = ref(false);
    function toggleLanguage() {
      showLanguage.value = !showLanguage.value;
    }
</script>

<template>
    <div class="bg-white p-3 rounded-md border-r mb-2 relative">
        <h5 class="uppercase text-sm font-normal text-[#8a959e]">I wnat to learn</h5>
        <div>
            <div @click="toggleLanguage" class="flex justify-between text-[#090f19] text-sm font-normal mt-1 cursor-pointer">
            <input 
                type="search" 
                name="language_search" 
                id="language_search"
                placeholder="English"
                class="w-full rounded-md focus:outline-none"
            >
        </div>
            <div class="mt-2 absolute top-14 left-0 bg-white w-full rounded-md z-10" v-if="showLanguage">
                <ul>
                    <li class="text-sm py-2 px-4">English</li>
                    <li class="text-sm py-2 px-4">German</li>
                    <li class="text-sm py-2 px-4">Bangla</li>
                    <li class="text-sm py-2 px-4">Spanish</li>
                </ul>
            </div>
        </div>
    </div>
</template>

