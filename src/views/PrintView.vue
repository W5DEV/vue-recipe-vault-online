<template>
  <div
    class="printEl relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 text-left shadow-xl transition-all p-6">
    <div class="flex flex-row justify-between items-start w-full mb-8">
      <div class="flex flex-col justify-center items-start w-1/2">
        <div class="flex flex-col justify-center items-center">
          <LogoColor class="h-14 w-14 m-4" />
          <span class="text-primary font-fredericka font-bold text-2xl">{{
            siteName
          }}</span>
        </div>
      </div>
      <div class="pt-4 pr-4 flex flex-row justify-end items-center w-1/2">
        <div @click="printPage()">
          <PrinterIcon
            class="text-primary h-10 w-10 m-2 cursor-pointer"
            aria-hidden="true" />
        </div>
        <RouterLink to="/account">
          <HomeIcon class="text-primary h-10 w-10 m-2" aria-hidden="true" />
        </RouterLink>
      </div>
    </div>
    <div class="text-3xl leading-6 text-gray-900 font-bold">
      {{ recipe.title }}
      <span class="font-normal text-sm italic ml-6">
        Chef: {{ recipe.profiles.username }}</span
      >
    </div>
    <p class="text-base text-gray-500 my-4">Category: {{ recipe.category }}</p>
    <p class="text-base text-gray-500">Description: {{ recipe.description }}</p>
    <div class="mt-8">
      <span class="font-bold text-2xl">Ingredients:</span>
      <span
        v-for="ingredient in recipe.ingredients.sort((a, b) =>
          a.id > b.id ? 1 : -1
        )"
        :key="ingredient.id">
        <p class="text-sm md:text-base mt-1 text-gray-500">
          {{ ingredient.amount }}
          {{ ingredient.ingredient }}
        </p>
      </span>
    </div>
    <div class="my-8">
      <span class="font-bold text-2xl">Instructions:</span>
      <span
        class="flex flex-col justify-center items-start"
        v-for="instruction in recipe.instructions.sort((a, b) =>
          a.id > b.id ? 1 : -1
        )"
        :key="instruction.id">
        <span
          v-if="instruction.heading"
          class="text-base md:text-base font-bold mt-4 w-4/5 overflow-hidden text-gray-500">
          {{ instruction.heading }}</span
        >
        <span
          class="text-sm md:text-base my-2 w-4/5 overflow-hidden text-gray-500">
          {{ instruction.description }}</span
        >
      </span>
    </div>
  </div>
</template>
<style>
@media all {
  .printEl {
    width: 8.5in !important;
  }
}
</style>
<script setup>
import { useRecipeStore, useSiteStore } from '../stores/base';
import { HomeIcon, PrinterIcon } from '@heroicons/vue/24/outline';
import { RouterLink } from 'vue-router';
import LogoColor from '../assets/cookbook-color.svg?component';

const recipeStore = useRecipeStore();
const siteStore = useSiteStore();

const siteName = siteStore.name;
const recipe = recipeStore.recipe;

const printPage = () => {
  window.print();
};
</script>
