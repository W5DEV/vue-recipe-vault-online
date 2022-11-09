<template>
  <div
    class="bg-primary-light flex min-h-full flex-col md:flex-row justify-center items-center p-8 w-full md:w-4/5 rounded-2xl mt-14">
    <Avatar
      v-model:path="avatar_url"
      @upload="updateProfile"
      size="10"
      class="w-full md:w-1/3 md:mr-4" />
    <div class="sm:mx-auto w-full flex flex-col justify-center items-center">
      <span class="my-4 text-2xl font-bold text-center w-full"
        >Profile Information</span
      >
      <div
        class="bg-primary-white py-8 px-4 shadow rounded-2xl sm:px-10 w-full">
        <form class="form-widget" @submit.prevent="updateProfile">
          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700" for="email"
              >Email</label
            >
            <input
              id="email"
              type="text"
              :value="session.user.email"
              class="my-2 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              disabled />
          </div>
          <div class="mb-6">
            <label
              class="block text-sm font-medium text-gray-700"
              for="username"
              >Username</label
            >
            <input
              class="my-2 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              id="username"
              type="text"
              v-model="username" />
          </div>
          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700" for="website"
              >Website</label
            >
            <input
              class="my-2 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              id="website"
              type="website"
              v-model="website" />
          </div>
          <div>
            <input
              type="submit"
              class="bg-primary hover:bg-primary-muted my-2 flex w-full text-center justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer"
              :value="loading ? 'Loading ...' : 'Update'"
              :disabled="loading" />
          </div>
          <div>
            <input
              class="bg-primary-white hover:bg-primary-light text-primary border-primary-light my-2 flex w-full text-center justify-center rounded-md border py-2 px-4 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer"
              @click="signOut"
              :disabled="loading"
              value="Sign Out" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { supabase } from '../supabase';
import { onMounted, ref, toRefs } from 'vue';
import Avatar from './Avatar.vue';

const props = defineProps(['session']);
const { session } = toRefs(props);

const loading = ref(true);
const username = ref('');
const website = ref('');
const avatar_url = ref('');

onMounted(() => {
  getProfile();
});

async function getProfile() {
  try {
    loading.value = true;
    const { user } = session.value;

    let { data, error, status } = await supabase
      .from('profiles')
      .select(`username, website, avatar_url`)
      .eq('id', user.id)
      .single();

    if (error && status !== 406) throw error;

    if (data) {
      username.value = data.username;
      website.value = data.website;
      avatar_url.value = data.avatar_url;
    }
  } catch (error) {
    alert(error.message);
  } finally {
    loading.value = false;
  }
}

async function updateProfile() {
  try {
    loading.value = true;
    const { user } = session.value;

    const updates = {
      id: user.id,
      username: username.value,
      website: website.value,
      avatar_url: avatar_url.value,
      updated_at: new Date(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);

    if (error) throw error;
  } catch (error) {
    alert(error.message);
  } finally {
    loading.value = false;
  }
}

async function signOut() {
  try {
    loading.value = true;
    let { error } = await supabase.auth.signOut();
    if (error) throw error;
  } catch (error) {
    alert(error.message);
  } finally {
    loading.value = false;
  }
}
</script>
