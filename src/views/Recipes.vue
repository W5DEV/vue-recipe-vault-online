<template>
  <div class="flex flex-col justify-center items-center w-full h-full py-36">
    <div
      class="bg-primary-light text-primary-dark mb-6 w-96 h-auto flex flex-col justify-center items-center p-16">
      <span class="text-2xl font-bold">Recipes</span>
    </div>
    <RecipeComponent v-if="session" :session="session" />
  </div>
</template>
<script setup>
import RecipeComponent from '../components/RecipeComponent.vue';
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
