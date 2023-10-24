<template>
     <div>
         <div class="bg-white p-3 rounded-md border-r mb-2 relative">
             <h5 class="uppercase text-sm font-normal text-[#8a959e]">Price pre lesson</h5>
             <div @click="togglePrice" class="flex justify-between text-[#090f19] text-sm font-normal mt-1 cursor-pointer">
                 <button><span>$1</span>- <span>$40+</span></button>
                 <p><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.<path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg></p>
             </div>
             <div class="mt-2 absolute top-[70px] left-0 bg-white w-full rounded-md z-10 p-5" v-if="showPrice">
                 <h3 class="text-lg font-medium"><span>$1</span> - <span>$40</span></h3>
                 <div class="range-slider">
                   <input type="range" class="min-price" value="100" min="2" max="500" step="10">
                   <input type="range" class="max-price" value="250" min="2" max="500" step="10">
                 </div>
             </div>
         </div>
    </div>
</template>


<script>
import "./price.css"
export default {
  data() {
    return {
      showPrice: false,
    };
  },
  methods: {
    togglePrice() {
      this.showPrice = !this.showPrice;
    },
  },
};
</script>