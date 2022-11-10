<template>
  <Popover class="bg-primary relative">
    <div class="mx-auto max-w-7xl pr-2 md:px-4 sm:px-6">
      <div class="flex items-center justify-between py-6">
        <div class="flex justify-start md:mr-8 lg:flex-1">
          <RouterLink
            to="/"
            class="flex flex-col justify-center items-center text-center">
            <!-- Logo -->
            <LogoWhite class="w-auto h-auto" />
            <span
              class="text-primary-white font-fredericka hidden md:flex font-bold text-2xl"
              >{{ siteName.name }}</span
            >
          </RouterLink>
        </div>
        <div class="flex items-center justify-end flex-1 lg:w-0">
          <RouterLink
            to="/"
            class="text-primary-white hover:text-primary-muted text-base lg:text-xl font-medium mx-4"
            >Home</RouterLink
          >
          <RouterLink
            to="/demo"
            class="text-primary-white hover:text-primary-muted text-base lg:text-xl font-medium md:mx-4"
            >Demo</RouterLink
          >
          <RouterLink
            to="/account"
            class="bg-primary-white text-primary hover:bg-primary-light ml-4 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent px-4 py-2 text-base lg:text-xl font-medium shadow-sm"
            v-if="!session"
            >Sign In</RouterLink
          >
          <RouterLink
            to="/account"
            class="bg-primary-white text-primary hover:bg-primary-light ml-4 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent px-4 py-2 text-base lg:text-xl font-medium shadow-sm"
            v-else
            >Account</RouterLink
          >
        </div>
      </div>
    </div>
  </Popover>
</template>

<script setup>
import LogoWhite from '../assets/cookbook-white.svg?component';
import { Popover } from '@headlessui/vue';
import { RouterLink } from 'vue-router';
import { useSiteStore } from '../stores/base';
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

const siteName = useSiteStore();
</script>
