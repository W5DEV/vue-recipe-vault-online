<script setup>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import { useSiteStore } from './stores/base.js';

const siteStore = useSiteStore();
const siteName =
  document.location.hostname === 'savegrandmas.recipes'
    ? 'Save Grandmas Recipes'
    : 'Recipe Vault Online';

siteStore.name = siteName;
</script>

<template>
  <Header v-if="!$route.meta.hideNavbar" />
  <RouterView v-slot="{ Component, route }">
    <component :is="Component" :key="route.path" />
  </RouterView>
</template>
