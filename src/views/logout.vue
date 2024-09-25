<template>
    <h1>Logout Page</h1>
</template>

<script setup>

import { useLogout } from '@/composables/useLogout'
import { useRouter } from 'vue-router';

const router = useRouter();
const { error, logout } = useLogout();
async function onLogout() {
    await logout();
    if (!error.value) router.push({ name: 'Login', params: {} })
}
onLogout();

</script>
