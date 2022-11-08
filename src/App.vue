<script setup>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import { useSiteStore } from './stores/base.js';
import { onMounted, ref } from 'vue';
import { supabase } from './supabase';

const session = ref();

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session;
  });

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session;
  });
});

const siteStore = useSiteStore();
const siteName =
  document.location.hostname === 'savegrandmas.recipes'
    ? 'Save Grandmas Recipes'
    : 'Recipe Vault Online';

siteStore.name = siteName;
</script>

<template>
  <Header />
  <RouterView v-slot="{ Component, route }">
    <transition name="scale" mode="out-in">
      <component :is="Component" :key="route.path" />
    </transition>
  </RouterView>
</template>
<!-- Style is necessary for page transition animation. -->
<style>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}
.slide-enter-to {
  position: absolute;
  right: 0;
}
.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
.slide-leave-from {
  position: absolute;
  left: 0;
}
</style>
