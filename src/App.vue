<script setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import { useSiteStore } from './stores/base.js';
import { supabase } from './supabase.js';
import Feedback from './components/Feedback.vue';

const siteStore = useSiteStore();

const session = ref();
const siteName = 'Online Cookbook';

siteStore.name = siteName;

supabase.auth.getSession().then(({ data }) => {
  session.value = data.session;
});

supabase.auth.onAuthStateChange((_, _session) => {
  session.value = _session;
});
</script>
<template>
  <Header v-if="!$route.meta.hideNavbar" />
  <RouterView v-slot="{ Component, route }">
    <component :is="Component" :key="route.path" :session="session" />
  </RouterView>
  <Feedback v-show="$route.path !== '/'" />
</template>
