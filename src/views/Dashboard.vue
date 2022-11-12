<template>
  <div class="flex h-screen bg-white overflow-hidden">
    <DashboardComponent
      v-model:path="avatar_url"
      v-model:username="username"
      v-model:session="session" />
  </div>
</template>

<script setup>
import { onMounted, ref, toRefs } from 'vue';
import { supabase } from '../supabase';
import DashboardComponent from '../components/DashboardComponent.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const loading = ref(true);
const username = ref();
const avatar_url = ref();
const website = ref();

const props = defineProps(['session']);
const { session } = toRefs(props);

onMounted(() => {
  getProfile();
});

async function getProfile() {
  try {
    loading.value = true;
    const { user } = session.value;

    let { data } = await supabase
      .from('profiles')
      .select(`username, website, avatar_url`)
      .eq('id', user.id)
      .single();

    if (data) {
      username.value = data.username;
      website.value = data.website;
      avatar_url.value = data.avatar_url;
    }
  } catch (error) {
    if (!session.value) {
      router.push('/sign-in');
    }
  } finally {
    loading.value = false;
  }
}
</script>
