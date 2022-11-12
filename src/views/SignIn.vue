<template>
  <div class="bg-gray-900 pt-6 pb-12">
    <div class="w-full flex justify-center items-center">
      <Auth />
    </div>
  </div>
</template>
<script setup>
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
