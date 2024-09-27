<template>
    <header id="header" class="py-8">
        <div class="container mx-auto px-8">
            <div class="flex justify-between">
                <div class="flex items-center gap-4">
                    <div v-if="meta.leading" class="w-10 h-10 overflow-hidden rounded-full">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                            alt="User Profile" class="w-full h-full object-cover">
                    </div>
                    <h1 class="text-xl font-bold ml-2">{{ meta.text }}</h1>
                </div>
                <div class="flex">
                    <ul>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                            </svg>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>

import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const meta = computed(() => route.meta);

</script>