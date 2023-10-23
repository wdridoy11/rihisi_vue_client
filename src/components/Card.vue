<template>
    <div class="mt-5">
        <div class="w-full md:max-w-[818px] bg-white shadow-md mx-auto p-5 rounded-lg">
            <div class="relative">
                <div class="grid grid-cols-4 gap-5">
                    <div class="col-span-1">
                        <div class="relative">
                            <img class="w-full h-42 object-cover rounded-lg" src="../assets/Ridoy-profile.png" alt="profile">
                            <div class="w-3 h-3 bg-[#aeb5bc] rounded-full absolute top-2 left-2 ring-2 ring-white"></div>
                        </div>
                    </div>
                    <div class="col-span-3">
                        <div class="md:flex items-center md:justify-between">
                            <div>
                                <div class="flex items-center gap-2">
                                    <h3 class="text-lg font-semibold text-[#384047]">Mike W.</h3>
                                    <img title="USA" class="w-6 h-4 object-cover" src="../assets/flag.png" alt="Flag">
                                </div>
                                <div class="flex items-center gap-1 mb-3">
                                    <img class="w-4" src="../assets/graduation.png" alt="graduation">
                                    <p class="text-sm text-[#8194A7] font-normal">English</p>
                                </div>
                            </div>
                            <div>
                                <div class="flex md:grid md:grid-cols-2 gap-2 md:pt-7">
                                    <div class="bg-[#daf2dc] px-3 py-2 text-center rounded-md">
                                        <p class="text-sm font-medium text-[#007913]">Newly <br/>Joined</p>
                                    </div>
                                    <div>
                                        <p class="text-sm font-normal text-[#090f19]">USD <span class="text-xl text-[#192435]">500</span></p>
                                        <p class="text-xs text-[#52667D]">50-min lesson</p>
                                    </div>
                                </div>
                            </div>   
                        </div>
                    </div>
                </div>
                <div class="mt-3 md:-mt-28">
                    <div class="flex">
                        <div class="md:w-10/12"></div>
                        <div class="md:grid md:grid-cols-3 items-center gap-4">
                            <div class="md:col-span-2">
                                <div class="flex items-center gap-1">
                                    <img class="w-5" src="../assets/person.png" alt="person">
                                    <p class="text-sm text-[#192435] font-medium">5 active students</p>
                                </div>
                                <div>
                                    <p class="text-sm text-[#8194A7] mb-2">Speaks: English <span class="bg-[#daf2dc] px-3 py-1 rounded-md text-[#007913] font-medium">Native</span></p>
                                    <p class="text-[#090f19] text-sm font-normal">
                                        Certified English as a Foreign Language Teacher with 6 years of experience ---
                                        <span class="text-sm text-[#8194A7] font-normal">Hello, my name is Kaya and I live in sunny San Diego, California. Before Covid, I taught ESL at a renowned international language</span>
                                    </p>
                                </div>
                                <button class="text-[#0096B2] text-sm font-medium mt-2">Read More</button>
                            </div>
                            <div>
                                <div class="mt-5 flex md:flex-col">
                                    <button class="md:block bg-[#0096b2] text-white font-medium w-full text-base px-2 py-2 rounded-md hover:bg-[#22A2BE] duration-500">Book trial Lesson</button>
                                    <button class="ml-2 md:ml-0 md:block md:mt-3 bg-[#f7f5f2] text-black font-medium w-full text-base px-2 py-2 rounded-md hover:bg-[#FBF9F6] duration-500">Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-end absolute top-0 right-0">
                    <button><img class="w-5" src="../assets/like.png" alt="like"></button>
                </div>
            </div>
        </div>
    </div>
</template>