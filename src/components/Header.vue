<template>
  <Popover class="bg-primary relative">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <div
        class="flex items-center justify-between py-6 md:justify-start md:space-x-10">
        <div class="flex justify-start mr-8 lg:flex-1">
          <RouterLink
            to="/"
            class="flex flex-col justify-center items-center text-center">
            <!-- Logo -->
            <LogoWhite class="w-auto h-auto" />
            <span
              class="text-primary-white font-fredericka font-bold text-2xl"
              >{{ siteName.name }}</span
            >
          </RouterLink>
        </div>
        <div class="-my-2 -mr-2 md:hidden">
          <PopoverButton
            class="bg-primary text-primary-white hover:text-primary-muted inline-flex items-center justify-center rounded-md p-2 focus:outline-none">
            <span class="sr-only">Open menu</span>
            <Bars3Icon class="h-8 w-8" aria-hidden="true" />
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden space-x-10 md:flex">
          <RouterLink
            to="/"
            class="text-primary-white hover:text-primary-muted text-base lg:text-xl font-medium"
            >Home</RouterLink
          >
          <RouterLink
            to="Recipes"
            class="text-primary-white hover:text-primary-muted text-base lg:text-xl font-medium"
            >Recipes</RouterLink
          >
          <RouterLink
            to="Pricing"
            class="text-primary-white hover:text-primary-muted text-base lg:text-xl font-medium"
            >Pricing</RouterLink
          >
        </PopoverGroup>
        <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
          <a
            href="#"
            class="text-primary-white hover:text-primary-muted whitespace-nowrap text-base lg:text-xl font-medium"
            >Sign in</a
          >
          <a
            href="#"
            class="bg-primary-white text-primary hover:bg-primary-light ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent px-4 py-2 text-base lg:text-xl font-medium shadow-sm"
            >Sign up</a
          >
        </div>
      </div>
    </div>

    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95">
      <PopoverPanel
        focus
        class="absolute inset-x-0 top-0 origin-top-right transform p-2 transition lg:hidden px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
        <div
          class="bg-primary-light divide-y-2 divide-gray-50 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
          <div class="px-5 pt-5 pb-6">
            <div class="flex items-center justify-between">
              <div
                class="w-full h-full flex flex-col justify-center items-center">
                <!-- Logo -->
                <LogoColor class="w-auto h-auto" />
                <span
                  class="text-primary font-fredericka font-bold text-xl md:text-base lg:text-xl"
                  >{{ siteName.name }}</span
                >
              </div>
              <div class="-mr-2">
                <PopoverButton
                  class="bg-primary-light text-primary-muted hover:bg-primary-muted hover:text-primary-light inline-flex items-center justify-center rounded-md p-2 focus:outline-none">
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-8">
                <a
                  v-for="item in solutions"
                  :key="item.name"
                  :href="item.href"
                  class="text-primary-muted hover:bg-primary-muted hover:text-primary-light -m-3 flex items-center rounded-md p-3">
                  <component
                    :is="item.icon"
                    class="h-6 w-6 flex-shrink-0"
                    aria-hidden="true" />
                  <span class="ml-3 text-base font-medium">{{
                    item.name
                  }}</span>
                </a>
              </nav>
            </div>
          </div>
          <div class="space-y-6 py-6 px-5">
            <div>
              <a
                href="#"
                class="bg-primary text-primary-white hover:bg-primary-muted flex w-full items-center justify-center rounded-md border border-transparent px-4 py-2 text-base font-medium shadow-sm"
                >Sign Up</a
              >
              <p
                class="text-primary-dark mt-6 text-center text-base font-medium">
                Existing customer?
                {{ ' ' }}
                <a href="#" class="text-primary hover:text-primary-muted"
                  >Sign in</a
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
import LogoWhite from '../assets/cookbook-white.svg?component';
import LogoColor from '../assets/cookbook-color.svg?component';
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/vue';
import {
  Bars3Icon,
  XMarkIcon,
  /*  BeakerIcon, */
  BanknotesIcon,
  BoltIcon,
  CakeIcon,
  /* FireIcon,
  BellIcon, */
  ChatBubbleOvalLeftEllipsisIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/vue/24/outline';
import { RouterLink } from 'vue-router';
import { useSiteStore } from '../stores/base';

const siteName = useSiteStore();

const solutions = [
  {
    name: 'Home',
    description: 'Return to our homepage to learn more!',
    href: '#',
    icon: BoltIcon,
  },
  {
    name: 'Recipes',
    description:
      'Browse our extensive database of recipes or search for a specific one!',
    href: '#',
    icon: CakeIcon,
  },
  {
    name: 'About',
    description:
      'Learn more about our company and the benefits to using our service!',
    href: '#',
    icon: QuestionMarkCircleIcon,
  },
  {
    name: 'Pricing',
    description: 'Check out our plans or become a beta tester today!',
    href: '#',
    icon: BanknotesIcon,
  },
  {
    name: 'Contact',
    description: 'Drop us a message and let us know what you are thinking!',
    href: '#',
    icon: ChatBubbleOvalLeftEllipsisIcon,
  },
];
</script>
