<template>
    <div>
        <div class="bg-white p-3 rounded-md border-r relative">
            <div @click="toggleTutorCategories" class="flex justify-between text-[#090f19] text-sm font-normal mt-1 cursor-pointer">
                <button>Tutor categories</button>
                <p><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.<path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg></p>
            </div>
            <div class="mt-2 absolute top-14 left-0 bg-white w-full md:w-72 rounded-md z-10" v-if="showTutorCategories">
                <div class=" px-4 py-2 ">
                    <div class="border-b-2 pb-4">
                        <div class="flex items-center gap-2 mb-2 mt-2">
                            <input class="cursor-pointer w-4 h-4 bg-gray-100 border-gray-300 accent-green-400" type="checkbox" value="IELTS">
                            <span class="text-sm text-[#344047] font-normal">Only Super tutors</span>
                        </div>
                        <p class="text-sm text-[#8194A7] font-normal">Only show highly rated and experienced tutors</p>
                    </div>
                    <div>
                        <div class="flex items-center gap-2 mb-2 mt-2">
                            <input class="cursor-pointer w-4 h-4 bg-gray-100 border-gray-300 accent-green-400" type="checkbox" value="IELTS">
                            <span class="text-sm text-[#344047] font-normal">Only professional tutors</span>
                        </div>
                        <p class="text-sm text-[#8194A7] font-normal">Only show tutors with a teaching certificate or relevant education</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  data() {
    return {
        showTutorCategories: false,
    };
  },
  methods: {
    toggleTutorCategories() {
      this.showTutorCategories = !this.showTutorCategories;
    },
  },
};
import { ChevronDownIcon } from '@heroicons/vue/24/solid'
</script>

