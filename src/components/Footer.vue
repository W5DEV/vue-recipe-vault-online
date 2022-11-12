<template>
  <div
    class="bg-primary-muted text-primary-white w-full flex flex-row justify-center items-center">
    <span class="text-sm py-2 text-center"
      >{{ siteName }} &copy; {{ currentYear }} John Larson | All Rights
      Reserved.</span
    >
  </div>
</template>
<script setup>
import { useSiteStore } from '../stores/base.js';

const store = useSiteStore();

const siteName = store.name;

const currentYear = new Date().getFullYear();
</script>
