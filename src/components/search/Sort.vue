<template>
    <div>
        <div class="flex gap-2 items-center bg-white px-2 py-1 rounded-md mr-3 mb-2">
            <p class="text-base font-normal text-black">Sort by:</p>
            <select class="py-2 w-9/12 focus:outline-none cursor-pointer p-5 text-black">
                <option class="mb-2 text-black" value="our-top-picks">Our top picks</option>
                <option class="mb-2 text-black" value="popularity">Popularity</option>
                <option class="mb-2 text-black" value="highest-first">Price: highest first</option>
                <option class="mb-2 text-black" value="lowest-first">Price: lowest first</option>
                <option class="mb-2 text-black" value="number-of-reviews">Number of reviews</option>
                <option class="mb-2 text-black" value="best-rating">Best rating</option>
            </select>
        </div>
    </div>
</template>

