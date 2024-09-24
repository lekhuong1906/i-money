<template>
    <div class="container mx-auto">
        <form class="flex flex-col justify-start" @submit.prevent="onSubmit">
            <div class="row">
                <label class="flex flex-col" for="email">
                    Email
                </label>
                <input class="w-full px-4 py-3 text-[#333] rounded-md mt-1 border-[1px] border-[#d3d3d3]" type="text"
                    name="email" id="email" autocomplete="username" v-model="email">
            </div>
            <div class="row">
                <label class="flex flex-col" for="password">
                    Password
                </label>
                <input class="w-full px-4 py-3 text-[#333] rounded-md mt-1 border-[1px] border-[#d3d3d3]" type="text"
                    name="password" id="password" autocomplete="current-password" v-model="password">
            </div>
            <div class="w-full text-center mt-6">
                <span class="">I'm a new user.</span>
                <span class="ml-1 text-[#7393B3]">
                    <router-link :to="{ name: 'Register', params: {} }">Sign Up</router-link>
                </span>
            </div>
            <button v-if="!isPending" class="w-full p-4 mt-3 text-[#fff] text-center bg-blue-400 rounded-md"
                type="submit">Sign
                In</button>
            <button v-else type="button"
                class="w-full p-4 mt-3 text-[#fff] text-center bg-blue-400 rounded-md cursor-not-allowed"
                disabled>Loading....</button>
        </form>
        <div v-if="error" class="text-left mt-6 text-red-500">
            <span>{{ error }}</span>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useSignIn } from '@/composables/useSignIn';

export default {
    setup() {
        const { error, isPending, signin } = useSignIn();
        const router = useRouter();

        const email = ref("");
        const password = ref("");

        const onSubmit = async () => {
            await signin(email.value, password.value)
            if (!error.value) router.push({ name: 'Index', params: {} })
        }

        return { email, password, onSubmit, error, isPending }
    }
}
</script>