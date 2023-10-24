<script setup>
    import Sort from '../components/search/Sort.vue';
    import Time from '../components/search/Time.vue';
    import Price from '../components/search/Price.vue';
    import Speaks from '../components/search/Speaks.vue';
    import Country from '../components/search/Country.vue';
    import Language from '../components/search/Language.vue';
    import Categories from '../components/search/Categories.vue';
    import SearchForm from '../components/search/Search_form.vue';
    import Specialties from '../components/search/Specialties.vue';
    import NativeSpeaker from '../components/search/Native_Speaker.vue';
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




