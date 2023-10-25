<template>
    <div>
        <div class="flex gap-2 items-center bg-white px-2 py-1 rounded-md mr-3 mb-2">
            <p class="text-base font-normal">Sort by:</p>
            <select class="py-2 focus:outline-none cursor-pointer">
                <option class="py-2" value="our-top-picks">Our top picks</option>
                <option class="py-2" value="popularity">Popularity</option>
                <option class="py-2" value="highest-first">Price: highest first</option>
                <option class="py-2" value="lowest-first">Price: lowest first</option>
                <option class="py-2" value="number-of-reviews">Number of reviews</option>
                <option class="py-2" value="best-rating">Best rating</option>
            </select>
        </div>
    </div>
</template>