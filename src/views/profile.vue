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
                    <div class="font-bold text-2xl text-blue-600 mt-3">Sky Albert</div>
                    <p class="font-semibold text-gray-400 mt-1">trantoan.fox.07@gmail.com</p>
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
                                        :d="profileOption.icon_d"/>
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

export default {
    setup() {
        const profileOptions = reactive([
            {
                name: 'My Wallet',
                icon_d: 'M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3',
                route: {
                    name: 'Home',
                    params: {}
                }
            },
            {
                name: 'Tool',
                icon_d: 'M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z',
                route: {
                    name: 'Home',
                    params: {}
                }
            },
            {
                name: 'Privacy',
                icon_d: 'M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z',
                route: {
                    name: 'Home',
                    params: {}
                }
            },
            {
                name: 'About',
                icon_d: 'm11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z',
                route: {
                    name: 'Home',
                    params: {}
                }
            },
            {
                name: 'Logout',
                icon_d: 'M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15',
                route: {
                    name: 'Home',
                    params: {}
                }
            }
        ])
        return { profileOptions }
    },
}
</script>

<style scoped></style>