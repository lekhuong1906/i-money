<template>
    <div class="home">Sheeh</div>
    <div v-if="user" class="mt-6">{{ user.displayName }}</div>
</template>

<script>
import { ref } from 'vue';
import { useUser } from '@/composables/useUser';
export default {
    setup() {
        const { getUser } = useUser();
        const user = getUser();        

        return { user }
    },
}
</script>
