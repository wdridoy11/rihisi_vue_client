<script setup lang="ts">
    import Sort from './Sort.vue';
    import Time from './Time.vue';
    import Price from './Price.vue';
    import Speaks from './Speaks.vue';
    import Country from './Country.vue';
    import Language from './Language.vue';
    import Categories from './Categories.vue';
    import SearchForm from './SearchForm.vue';
    import Specialties from './Specialties.vue';
    import NativeSpeaker from './NativeSpeaker.vue';
</script>

<template>
    <div class="w-[1216px] mx-auto mt-5 px-5">
        <div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-0 mb-3">
                <div>
                    <Language></Language>
                </div>
                <div>
                    <Price></Price>
                </div>
                <div>
                    <Country></Country>
                </div>
                <div>
                    <Time></Time>
                </div>
            </div>
            <div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                            <div>
                                <Specialties></Specialties>
                            </div>
                            <div>
                                <Speaks></Speaks>
                            </div>
                            <div>
                                <NativeSpeaker></NativeSpeaker>
                            </div>
                            <div>
                                <Categories></Categories>
                            </div>
                        </div>
                    </div>
                    <!-- right side sort by: -->
                    <div class="grid grid-cols-1 md:grid-cols-2">
                        <div>
                            <Sort></Sort>
                        </div>
                        <div>
                            <SearchForm></SearchForm>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>




