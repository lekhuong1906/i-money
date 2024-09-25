<template>
    <div>

        <div class="row">
            <div class="container mx-auto p-8">
                <div class="text-center">
                    <div class="w-24 h-24 rounded-full overflow-hidden mx-auto">
                        <img class="w-full h-auto object-cover"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                            alt="User's Profile Avatar" size="xs">
                    </div>
                    <div class="font-bold text-2xl text-blue-600 mt-3">{{ user.displayName }}</div>
                    <p class="font-semibold text-gray-400 mt-1">{{ user.email }}</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="container mx-auto px-8">
                <div class="grid grid-cols-1">
                    <div class="col-span-1">
                        <h3 class="font-bold text-xl text-blue-500 mb-2">General</h3>
                    </div>
                </div>
                <div class="grid grid-cols-1">
                    <ul class="">
                        <li v-for="profileOption in profileOptions" :key="profileOption.name" class="last:text-red-400">
                            <router-link :to="profileOption.route" class="flex justify-between items-center py-3">
                                <div class="flex items-center text-left">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            :d="profileOption.icon_d" />
                                    </svg>
                                    <h5 class="ml-3">{{ profileOption.name }}</h5>
                                </div>
                                <div class="text-right">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-6 text-gray-400">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue';
import { PROFILE_OPTIONS } from '@/constants/index.js';
import { useUser } from '@/composables/useUser';
export default {
    setup() {
        const profileOptions = reactive(PROFILE_OPTIONS)
        const { getUser } = useUser();
        const user = getUser();
        return { profileOptions, user }
    },
}
</script>

<style scoped></style>