<template>
  <div class="bg-gray-900 pt-6 pb-12">
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
                  ? 'border-cyan-300 bg-gradient-to-r from-teal-200 to-cyan-400 bg-clip-text text-transparent '
                  : 'border-gray-300 text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-teal-200 to-cyan-400 hover:border-cyan-300 cursor-pointer',
                'w-1/2 py-4 px-1 text-center border-b-2 font-bold text-base',
              ]"
              :aria-current="currentTab === tab.name ? 'page' : undefined">
              {{ tab.name }}
            </div>
          </nav>
        </div>
      </div>
      <div
        v-if="currentTab === 'My Profile'"
        class="bg-gray-900 flex flex-col flex-1 w-full justify-center items-center">
        <ProfileComponent :session="session" />
      </div>
      <div
        v-if="currentTab === 'My Recipes'"
        class="bg-gray-900 flex flex-col flex-1 w-full justify-center items-center">
        <RecipeComponent :session="session" />
      </div>
    </div>
    <div class="w-full flex justify-center items-center" v-else>
      <Auth />
    </div>
    <Feedback />
  </div>
</template>
<script setup>
import ProfileComponent from '../components/ProfileComponent.vue';
import Auth from '../components/Auth.vue';
import { onMounted, ref } from 'vue';
import { supabase } from '../supabase';
import RecipeComponent from '../components/RecipeComponent.vue';
import Feedback from '../components/Feedback.vue';

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
