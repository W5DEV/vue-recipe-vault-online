<template>
  <Popover as="header" class="relative">
    <div class="bg-gray-900 pt-6">
      <nav
        class="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6"
        aria-label="Global">
        <div class="flex flex-1 items-center">
          <div class="flex w-full items-center justify-between md:w-auto">
            <RouterLink
              to="/"
              class="flex flex-col justify-center items-center text-center">
              <!-- Logo -->
              <LogoWhite class="w-auto h-auto" />
              <span
                class="text-primary-white font-fredericka hidden md:flex font-bold text-2xl"
                >{{ siteName }}</span
              >
            </RouterLink>
            <div class="-mr-2 flex items-center md:hidden">
              <PopoverButton
                class="focus-ring-inset inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white">
                <span class="sr-only">Open main menu</span>
                <Bars3Icon class="h-6 w-6" aria-hidden="true" />
              </PopoverButton>
            </div>
          </div>
          <div class="hidden space-x-8 md:ml-10 md:flex">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              class="text-base font-medium text-white hover:text-gray-300"
              >{{ item.name }}</a
            >
          </div>
        </div>
        <div class="hidden md:flex md:items-center md:space-x-6">
          <RouterLink
            to="/sign-in"
            class="inline-flex items-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-base font-medium text-white hover:bg-gray-700"
            v-if="!session"
            >Sign In</RouterLink
          >
          <RouterLink
            to="/dashboard"
            class="inline-flex items-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-base font-medium text-white hover:bg-gray-700"
            v-else
            >Dashboard</RouterLink
          >
        </div>
      </nav>
    </div>

    <transition
      enter-active-class="duration-150 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95">
      <PopoverPanel
        focus
        class="z-50 absolute inset-x-0 top-0 origin-top transform p-2 transition md:hidden">
        <div
          class="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
          <div class="flex items-center justify-between px-5 pt-4">
            <div>
              <LogoColor class="w-8 h-auto" />
            </div>
            <div class="-mr-2">
              <PopoverButton
                class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                <span class="sr-only">Close menu</span>
                <XMarkIcon class="h-6 w-6" aria-hidden="true" />
              </PopoverButton>
            </div>
          </div>
          <div class="pt-5 pb-6">
            <div class="space-y-1 px-2">
              <RouterLink
                v-for="item in navigation"
                :key="item.name"
                :to="item.href"
                class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                >{{ item.name }}</RouterLink
              >
            </div>
            <div class="mt-6 px-5">
              <RouterLink
                to="/sign-in"
                class="block w-full rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 py-3 px-4 text-center font-medium text-white shadow hover:from-teal-600 hover:to-cyan-700"
                v-if="!session"
                >Sign In</RouterLink
              >
              <RouterLink
                to="/dashboard"
                class="block w-full rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 py-3 px-4 text-center font-medium text-white shadow hover:from-teal-600 hover:to-cyan-700"
                v-else
                >Dashboard</RouterLink
              >
            </div>
            <div class="mt-6 px-5">
              <p class="text-center text-base font-medium text-gray-500">
                New customer?
                <a href="#" class="text-gray-900 hover:underline"
                  >Join our beta tester program!</a
                >
              </p>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';
import { useSiteStore } from '../stores/base';
import LogoWhite from '../assets/cookbook-white.svg?component';
import LogoColor from '../assets/cookbook-color.svg?component';
import { RouterLink } from 'vue-router';
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

const site = useSiteStore();

const siteName = site.name;

window.document.title = siteName;
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Recipes', href: '/demo' },
  { name: 'Roadmap', href: '/roadmap' },
];
</script>
