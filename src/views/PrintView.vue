<template>
  <div
    class="printEl relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 text-left shadow-xl transition-all p-6">
    <div class="flex flex-row justify-between items-start w-full mb-8">
      <div class="flex flex-col justify-center items-start w-1/2">
        <div class="flex flex-col justify-center items-center">
          <LogoBlack class="h-14 w-14 m-4" />
          <span class="font-fredericka text-black font-bold text-2xl">{{
            siteName
          }}</span>
        </div>
      </div>
      <div class="pt-4 pr-4 flex flex-row justify-end items-center w-1/2">
        <div @click="printPage()">
          <PrinterIcon
            class="text-gray-400 h-10 w-10 m-2 cursor-pointer"
            aria-hidden="true" />
        </div>
        <HomeIcon
          class="text-gray-400 h-10 w-10 m-2 cursor-pointer"
          @click="$router.go(-1)"
          aria-hidden="true" />
      </div>
    </div>
    <div class="text-3xl leading-6 text-gray-800 font-bold">
      {{ recipe.title }}
      <span class="font-normal text-sm italic ml-6">
        Chef: {{ recipe.profiles.username }}</span
      >
    </div>
    <p class="text-base text-gray-500 my-4">Category: {{ recipe.category }}</p>
    <p class="text-base text-gray-500">Description: {{ recipe.description }}</p>
    <div class="mt-8">
      <span class="font-bold text-2xl text-gray-800">Ingredients:</span>
      <span
        v-for="ingredient in recipe.ingredients.sort((a, b) =>
          a.id > b.id ? 1 : -1
        )"
        :key="ingredient.id">
        <p
          :class="
            ingredient.amount === (null || '')
              ? `pl-1 font-semibold italic mt-8 text-gray-500 text-sm md:text-base`
              : `text-sm md:text-base mt-1 text-gray-500`
          ">
          {{ ingredient.amount }}
          {{ ingredient.ingredient }}
        </p>
      </span>
    </div>
    <div class="my-8">
      <span class="font-bold text-2xl text-gray-800">Instructions:</span>
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
import LogoBlack from '../assets/cookbook-black.svg?component';

const recipeStore = useRecipeStore();
const siteStore = useSiteStore();

const siteName = siteStore.name;
const recipe = recipeStore.recipe;

const printPage = () => {
  window.print();
};
</script>
