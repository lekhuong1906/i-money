<template>
    <NavigationHeader />
    <slot />
    <NavigationBottom v-if="meta.isShowFooter" />
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import NavigationBottom from "../components/NavigationBottom.vue"
import NavigationHeader from "@/components/NavigationHeader.vue";

const route = useRoute();
const meta = computed(() => route.meta)
</script>