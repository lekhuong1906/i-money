<template>
    <footer id="footer" class="w-full fixed bg-white bottom-0 pt-4 p-b-safe-4">
        <div class="container mx-auto  h-full">
            <ul class="flex justify-between h-full w-full items-center">
                <li v-for="navItem in navItems" :key="navItem.name">
                    <router-link :to="navItem.route">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" :d="navItem.icon_d" />
                        </svg>
                    </router-link>
                </li>
            </ul>
        </div>
        <div data-add v-on:click="gotoRoute"
            class="absolute w-8 h-8 flex items-center justify-center bg-blue-500 text-white text-3xl rounded-full cursor-pointer -top-1 left-1/2 transform translate-x-1/2">
            +
        </div>
    </footer>
</template>

<script setup>
import { reactive } from 'vue';
import { NAV_BOTTOM_ITEMS } from '../constants/index'
import { useRouter } from 'vue-router';

const navItems = reactive(NAV_BOTTOM_ITEMS);
const router = useRouter();
const gotoRoute = () => {
    router.push({ name: 'NewTransaction', params: {} })
}
</script>

<style lang="css" scoped></style>