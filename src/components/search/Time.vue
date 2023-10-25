
<script setup lang="ts">
    import { ref } from 'vue'
    
    const showTime = ref(false);
    function toggleTime() {
      showTime.value = !showTime.value;
    }
</script>

<template>
    <div>
        <div class="bg-white p-3 rounded-md border-r mb-2 relative">
            <h5 class="uppercase text-sm font-normal text-[#8a959e]">I'm available</h5>
            <div @click="toggleTime" class="flex justify-between text-[#090f19] text-sm font-normal mt-1 cursor-pointer">
                <button>Any Time</button>
                <p><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.<path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg></p>
            </div>
            <div class="mt-2 absolute top-14 left-0 bg-white w-full px-4 py-2 rounded-md z-10" v-if="showTime">
                <p class="text-sm text-[#090F19] font-medium mb-2">Time of the day, in your time zone</p>
                <div class="grid grid-cols-3 pb-2">
                    <div class="border text-center py-2 h-[85px] overflow-hidden">
                        <img class="w-5 mx-auto text-green-400" src="../assets/cloud-sun-solid.svg" alt="morning">
                        <p class="text-sm text-[#090F19] mt-1">6-9</p>
                        <small class="text-xs text-[#aeb5bc]">Morning</small>
                    </div>
                    <div class="border text-center py-2">
                        <img class="w-5 mx-auto text-green-400" src="../assets/cloud-sun-solid.svg" alt="morning">
                        <p class="text-sm text-[#090F19] mt-1">9-12</p>
                        <small class="text-xs text-[#aeb5bc]">Late morning</small>
                    </div>
                    <div class="border text-center py-2">
                        <img class="w-5 mx-auto text-green-400" src="../assets/cloud-sun-solid.svg" alt="morning">
                        <p class="text-sm text-[#090F19] mt-1">12-15</p>
                        <small class="text-xs text-[#aeb5bc]">Afternoon</small>
                    </div>
                    <div class="border text-center py-2">
                        <img class="w-5 mx-auto text-green-400" src="../assets/cloud-sun-solid.svg" alt="morning">
                        <p class="text-sm text-[#090F19] mt-1">15-18</p>
                        <small class="text-xs text-[#aeb5bc]">Late afternoon</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
