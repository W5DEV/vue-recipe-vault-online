<template>
  <div>
    <div v-if="session">
      <div class="block">
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
        <ProfileComponent :session="session" />
      </div>
      <div
        v-if="currentTab === 'My Recipes'"
        class="bg-primary-white flex flex-col flex-1 w-full justify-center items-center">
        <RecipeComponent :session="session" />
      </div>
    </div>
    <div class="w-full flex justify-center items-center" v-else>
      <Auth />
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
  /* { name: 'My Subscription' }, */
];
</script>
