<template>
  <div>
    <div class="sm:hidden">
      <label for="tabs" class="sr-only">Select a tab</label>
      <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
      <select
        id="tabs"
        name="tabs"
        class="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
        <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">
          {{ tab.name }}
        </option>
      </select>
    </div>
    <div class="hidden sm:block">
      <div class="border-b border-gray-200">
        <nav class="-mb-px flex" aria-label="Tabs">
          <RouterLink
            v-for="tab in tabs"
            :key="tab.name"
            :to="tab.href"
            :class="[
              tab.current
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-500 hover:text-primary-muted hover:border-primary-muted',
              'w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm',
              tab.isDisabled ? 'cursor-not-allowed' : 'cursor-pointer',
            ]"
            :aria-current="tab.current ? 'page' : undefined"
            >{{ tab.name }}</RouterLink
          >
        </nav>
      </div>
    </div>
    <div
      class="bg-primary-white flex flex-col flex-1 w-full justify-center items-center">
      <RecipeComponent v-if="session" :session="session" />
    </div>
  </div>
</template>
<script setup>
import RecipeComponent from '../components/RecipeComponent.vue';
import { onMounted, ref } from 'vue';
import { supabase } from '../supabase';
import { RouterLink } from 'vue-router';

const session = ref();

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session;
  });

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session;
  });
});

const tabs = [
  {
    name: 'My Recipes',
    href: '/my-recipes',
    current: true,
  },
  { name: 'My Profile', href: '/profile', current: false },
  /* {
    name: 'My Subscription',
    href: '/subscription',
    current: false,
  }, */
];
</script>
