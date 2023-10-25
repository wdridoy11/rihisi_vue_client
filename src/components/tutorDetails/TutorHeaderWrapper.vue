<script setup lang="ts">
  import TutorHeaderTabs from './TutorHeaderTabs.vue'
</script>

<template>
    <div class="bg-white mb-3 pt-10 pb-5 px-5">
        <div class="max-w-[716px] mx-auto">
            <div>
                <div class="grid grid-cols-1 md:grid-cols-3 md:gap-5">
                    <div class="col-span-1 relative">
                        <img class="w-full h-96 md:h-48 object-cover object-top rounded-lg" src="../../assets/Ridoy-profile.png" alt="Profile">
                        <div class="w-3 h-3 bg-[#19AC91] rounded-full ring-2 ring-white absolute  bottom-2 left-2"></div>
                    </div>
                    <div class="col-span-2 mt-5 md:mt-0">
                        <h3 class="text-lg font-semibold text-[#384047]">Mike W.</h3>
                        <p class="text-sm text-[#8194A7] font-normal">Certified English tutor with over 3 years of experience here :)</p>
                        <div class="mt-5 md:mt-14">
                            <div class="flex items-center gap-2 mb-2">
                                <img class="w-4" src="../../assets/graduation.png" alt="graduation">
                                <p class="text-sm text-[#8194A7] font-normal">Teaches English lessons</p>
                            </div>
                            <div>
                                <ul class="flex gap-3">
                                    <li class="text-sm text-[#8194A7] font-normal flex gap-2 items-center"><img class="w-4" src="../../assets/message.png" alt="graduation"> Speaks English</li>
                                    <li class="text-sm text-[#3bb3bd] font-normal">C1</li>
                                    <li class="text-sm text-[#8194A7] font-normal">Polish <span class="bg-[#daf2dc] px-3 py-1 rounded-md text-[#007913] font-medium">Native</span></li>
                                </ul>
                            </div>
                        </div>                            
                    </div>
                </div>
                <TutorHeaderTabs/>
            </div>
        </div>
    </div>
</template>