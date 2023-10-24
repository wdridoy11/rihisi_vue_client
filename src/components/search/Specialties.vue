<template>
    <div>
        <div class="bg-white p-3 rounded-md border-r relative">
            <div @click="toggleSpecialties" class="flex justify-between text-[#090f19] text-sm font-normal mt-1 cursor-pointer">
                <button>Specialties</button>
                <p><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.<path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg></p>
            </div>
            <div class="mt-2 absolute top-14 left-0 bg-white w-full md:w-72 rounded-md z-10" v-if="showSpecialties">
                <div class=" px-4 py-2 ">
                    <h5 class="text-sm font-normal text-[#8a959e] border-b-2">POPULAR</h5>
                    <div class="flex items-center gap-2 mb-1 mt-2">
                        <input class="cursor-pointer w-4 h-4 bg-gray-100 border-gray-300 accent-green-400" type="checkbox" value="IELTS">
                        <span class="text-sm text-[#344047] font-normal">IELTS</span>
                    </div>
                    <div class="flex items-center gap-2 mb-1 mt-2">
                        <input class="cursor-pointer w-4 h-4 bg-gray-100 border-gray-300 accent-green-400" type="checkbox" value="American English">
                        <span class="text-sm text-[#344047] font-normal">American English</span>
                    </div>
                    <div class="flex items-center gap-2 mb-1 mt-2">
                        <input class="cursor-pointer w-4 h-4 bg-gray-100 border-gray-300 accent-green-400" type="checkbox" value="TOEFL">
                        <span class="text-sm text-[#344047] font-normal">TOEFL</span>
                    </div>
                    <div class="flex items-center gap-2 mb-1 mt-2">
                        <input class="cursor-pointer w-4 h-4 bg-gray-100 border-gray-300 accent-green-400" type="checkbox" value="Business English">
                        <span class="text-sm text-[#344047] font-normal">Business English</span>
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
      showSpecialties: false,
    };
  },
  methods: {
    toggleSpecialties() {
      this.showSpecialties = !this.showSpecialties;
    },
  },
};
</script>