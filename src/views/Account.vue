<script setup>
import Account from '../components/Account.vue';
import Auth from '../components/Auth.vue';
import { onMounted, ref } from 'vue';
import { supabase } from '../supabase';

const session = ref();

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session;
  });

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session;
  });
});
</script>

<template>
  <div
    class="bg-primary-white flex flex-col flex-1 w-full justify-center items-center">
    <Account v-if="session" :session="session" />
    <Auth v-else />
  </div>
</template>
