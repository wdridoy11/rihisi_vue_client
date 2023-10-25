<script setup lang="ts">
 import SearchName from './SearchName.vue';
 import SearchImage from './SearchImage.vue';
 import SearchButton from './SearchButton.vue';
 import SearchLesson from './SearchLesson.vue';
 import SearchSpeaks from './SearchSpeaks.vue';
 import SearchStudent from './SearchStudent.vue';
 import SearchFavourite from './SearchFavourite.vue';
 import SearchDescription from './SearchDescription.vue';
</script>

<template>
    <div class="mt-5">
        <div class="w-full md:max-w-[818px] bg-white shadow-md mx-auto p-5 rounded-lg">
            <div class="relative">
                <div class="grid grid-cols-4 gap-5">
                    <SearchImage />
                    <div class="col-span-3">
                        <div class="md:flex items-center md:justify-between">
                            <SearchName />
                            <SearchLesson />
                        </div>
                    </div>
                </div>
                <div class="mt-3 md:-mt-28">
                    <div class="flex">
                        <div class="md:w-10/12"></div>
                        <div class="md:grid md:grid-cols-3 items-center gap-4">
                            <div class="md:col-span-2">
                                <div>
                                    <SearchStudent />
                                    <SearchSpeaks />
                                </div>
                                <SearchDescription />
                            </div>
                            <SearchButton />
                        </div>
                    </div>
                </div>
                <SearchFavourite />
            </div>
        </div>
    </div>
</template>