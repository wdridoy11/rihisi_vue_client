<template>
    <div>
        <div class="bg-white p-3 rounded-md border-r relative mb-2">
            <h5 class="uppercase text-sm font-normal text-[#8a959e]">Country of birth</h5>
            <div @click="toggleCountry" class="flex justify-between text-[#090f19] text-sm font-normal mt-1 cursor-pointer">
                <button>Any Country</button>
                <p><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.<path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg></p>
            </div>
            <div class="mt-2 absolute top-14 left-0 bg-white w-full px-4 py-2 rounded-md z-10" v-if="showCountry">
                <div>
                    <input 
                        type="search" 
                        name="search_country" 
                        id="search_country"
                        placeholder="Type to search..."
                        class="py-2 px-3 rounded-md border w-full focus:outline-none "
                    >
                </div>
                <div class="mt-3">
                    <h5 class="text-sm font-normal text-[#8a959e]">POPULAR</h5>
                    <div class="flex items-center gap-2 mb-1 mt-1">
                        <input class="cursor-pointer w-4 h-4 bg-gray-100 border-gray-300 accent-green-400" type="checkbox" value="bangladesh">
                        <span class="text-sm text-[#344047] font-normal">Bangladesh</span>
                    </div>
                    <div class="flex items-center gap-2 mb-1">
                        <input class="cursor-pointer w-4 h-4 bg-gray-100 border-gray-300 accent-green-400" type="checkbox" value="canada">
                        <span class="text-sm text-[#344047] font-normal">Canada</span>
                    </div>
                    <div class="flex items-center gap-2 mb-1">
                        <input class="cursor-pointer w-4 h-4 bg-gray-100 border-gray-300 accent-green-400" type="checkbox" value="japan">
                        <span class="text-sm text-[#344047] font-normal">Japan</span>
                    </div>
                    <div class="flex items-center gap-2 mb-1">
                        <input class="cursor-pointer w-4 h-4 bg-gray-100 border-gray-300 accent-green-400" type="checkbox" value="usa">
                        <span class="text-sm text-[#344047] font-normal">USA</span>
                    </div>
                </div>
                <div class="mt-3 border-t-2">
                    <h5 class="text-sm font-normal text-[#8a959e] mt-2">ALL COUNTRIES</h5>
                    <div class="flex items-center gap-2 mb-1">
                        <input class="cursor-pointer w-4 h-4 bg-gray-100 border-gray-300 accent-green-400" type="checkbox" value="japan">
                        <span class="text-sm text-[#344047] font-normal">Japan</span>
                    </div>
                    <div class="flex items-center gap-2 mb-1">
                        <input class="cursor-pointer w-4 h-4 bg-gray-100 border-gray-300 accent-green-400" type="checkbox" value="usa">
                        <span class="text-sm text-[#344047] font-normal">USA</span>
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
      showCountry: false,
    };
  },
  methods: {
    toggleCountry() {
      this.showCountry = !this.showCountry;
    },
  },
};
</script>