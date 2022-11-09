<template>
  <div>
    <div class="sm:hidden">
      <label for="tabs" class="sr-only">Select a tab</label>
      <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
      <select
        id="tabs"
        name="tabs"
        class="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
        <option
          v-for="tab in tabs"
          :key="tab.name"
          :selected="tab.name === currentTab">
          {{ tab.name }}
        </option>
      </select>
    </div>
    <div class="hidden sm:block">
      <div class="border-b border-gray-200">
        <nav class="-mb-px flex" aria-label="Tabs">
          <div
            v-for="tab in tabs"
            :key="tab.name"
            @click="currentTab = tab.name"
            :class="[
              tab.name === currentTab
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-500 hover:text-primary hover:border-primary cursor-pointer',
              'w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm',
            ]"
            :aria-current="currentTab === tab.name ? 'page' : undefined">
            {{ tab.name }}
          </div>
        </nav>
      </div>
    </div>
    <div
      v-if="currentTab === 'My Profile'"
      class="bg-primary-white flex flex-col flex-1 w-full justify-center items-center">
      <ProfileComponent v-if="session" :session="session" />
      <Auth v-else />
    </div>
    <div
      v-if="currentTab === 'My Recipes'"
      class="bg-primary-white flex flex-col flex-1 w-full justify-center items-center">
      <RecipeComponent v-if="session" :session="session" />
    </div>
  </div>
</template>
<script setup>
import ProfileComponent from '../components/ProfileComponent.vue';
import Auth from '../components/Auth.vue';
import { onMounted, ref } from 'vue';
import { supabase } from '../supabase';
import RecipeComponent from '../components/RecipeComponent.vue';

const session = ref();

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session;
  });

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session;
  });
});
const currentTab = ref('My Recipes');
const tabs = [
  { name: 'My Recipes' },
  { name: 'My Profile' },
  /* { name: 'My Subscription',  href: '/subscription' }, */
];
</script>
