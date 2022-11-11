<template>
  <div class="flex flex-col justify-center items-center mt-4">
    <span class="text-primary text-2xl font-bold mb-4">Demo Recipes</span>
    <span
      class="text-primary-dark md: text-lg font-normal mb-4 w-full md:w-4/5 px-12">
      Below are a collection of recipes that our members have made global for
      everyone to check out. Click a recipe to view the full recipe. Subscribers
      have access to add, modify, delete and share recipes among other
      subscribers as well!
    </span>
    <span
      class="text-primary-dark md: text-base font-normal mb-4 w-full md:w-4/5 px-12">
      Feel free to check out our roadmap by clicking the button below to see
      existing bugs and planned features.
    </span>
    <RouterLink
      to="/roadmap"
      class="text-primary-white bg-primary font-bold hidden md:flex mx-4 py-2 text-lg px-4 rounded-lg">
      <span>Roadmap</span>
    </RouterLink>
  </div>
  <div
    class="bg-primary-light mt-4 w-full md:w-4/5 p-4 md:p-8 flex justify-center items-center rounded-2xl">
    <div class="bg-white rounded-2xl w-full">
      <!-- Begin Global Recipe Render -->
      <div>
        <div class="overflow-hidden bg-white shadow rounded-2xl">
          <ul role="list" class="divide-y divide-gray-200">
            <li v-for="recipe in globalRecipes" :key="recipe.id">
              <a
                href="#"
                class="block hover:bg-gray-50"
                @click="(open = true), (modalRecipe = recipe)">
                <div class="p-4 sm:px-6">
                  <div
                    class="flex flex-col md:flex-row items-start md:items-center justify-between">
                    <p
                      class="text-primary truncate text-sm font-medium mb-2 md:mb-0">
                      {{ recipe.title }}
                    </p>
                    <div class="md:ml-2 flex flex-shrink-0">
                      <p
                        class="bg-primary-light text-primary-muted inline-flex rounded-full px-2 md:mx-2 text-xs font-semibold leading-5">
                        {{ recipe.category }}
                      </p>
                      <p
                        class="bg-blue-100 text-blue-800 inline-flex rounded-full px-2 ml-2 md:mx-2 text-xs font-semibold leading-5 italic">
                        {{ recipe.profiles.username }}
                      </p>
                    </div>
                  </div>
                  <div class="mt-2 sm:flex sm:justify-between">
                    <div class="sm:flex">
                      <p class="flex items-center text-sm text-gray-500">
                        {{ recipe.description }}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- End Global Recipe Render -->
    </div>
  </div>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0">
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center md:p-4 text-center sm:items-center">
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 w-full md:mx-24 p-6">
              <div class="absolute top-0 right-0 pt-4 pr-4 sm:block">
                <div class="flex justify-end items-center flex-row">
                  <RouterLink
                    type="button"
                    @click="saveRecipe(modalRecipe)"
                    to="/printview"
                    class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none cursor-pointer">
                    <span class="sr-only">Print</span>
                    <PrinterIcon class="h-6 w-6 mr-2" />
                  </RouterLink>
                  <button
                    type="button"
                    class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
                    @click="open = false">
                    <span class="sr-only">Close</span>
                    <XMarkIcon class="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div>
                <div class="mt-10 text-start md:mt-5">
                  <DialogTitle
                    as="h3"
                    class="flex flex-row text-3xl leading-6 text-gray-900 font-bold"
                    >{{ modalRecipe.title }}
                    <span
                      class="hidden md:flex font-normal text-sm italic ml-6">
                      Chef: {{ modalRecipe.profiles.username }}</span
                    ></DialogTitle
                  >
                  <span class="flex md:hidden font-normal text-sm italic mt-1">
                    Chef: {{ modalRecipe.profiles.username }}</span
                  >
                  <p class="text-sm md:text-base text-gray-500 mt-2">
                    Category: {{ modalRecipe.category }}
                  </p>
                  <p class="text-sm md:text-base text-gray-500 mt-2">
                    Description: {{ modalRecipe.description }}
                  </p>
                  <div class="mt-4">
                    <span class="font-bold">Ingredients:</span>
                    <span
                      v-for="ingredient in modalRecipe.ingredients.sort(
                        (a, b) => (a.id > b.id ? 1 : -1)
                      )"
                      :key="ingredient.id">
                      <p
                        v-if="ingredient.units.name === 'unit'"
                        class="text-sm md:text-base mt-1 text-gray-500">
                        {{ ingredient.amount }}
                        {{ ingredient.ingredient }}
                      </p>
                      <p v-else class="text-sm md:text-base mt-1 text-gray-500">
                        {{ ingredient.amount }} {{ ingredient.units.name }}
                        {{ ingredient.ingredient }}
                      </p>
                    </span>
                  </div>
                  <div class="mt-4">
                    <span class="font-bold">Instructions:</span>
                    <span
                      class="flex flex-col justify-center items-start"
                      v-for="(
                        instruction, index
                      ) in modalRecipe.instructions.sort((a, b) =>
                        a.id > b.id ? 1 : -1
                      )"
                      :key="instruction.id">
                      <span
                        class="text-sm md:text-base my-2 w-4/5 overflow-hidden text-gray-500">
                        {{ index + 1 + '. ' }}
                        {{ instruction.step }}</span
                      >
                    </span>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { supabase } from '../supabase';
import { onMounted, ref } from 'vue';
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue';

import { XMarkIcon, PrinterIcon } from '@heroicons/vue/24/outline';
import { RouterLink } from 'vue-router';
import { useRecipeStore } from '../stores/base';

const recipeStore = useRecipeStore();

const saveRecipe = (recipe) => {
  recipeStore.recipe = recipe;
};

const open = ref(false);
const modalRecipe = ref({});
const globalRecipes = ref([]);
const loading = ref(true);
onMounted(() => {
  getRecipes();
});

async function getRecipes() {
  try {
    loading.value = true;

    let {
      data: recipes,
      error,
      status,
    } = await supabase
      .from('recipes')
      .select(
        'id, title, description, global, active, category, profiles(username), ingredients(id, ingredient, amount, units(name)), instructions(id, step)'
      )
      .eq('global', true)
      .order('title', { ascending: true });

    if (error && status !== 406) throw error;
    if (recipes) {
      globalRecipes.value = recipes;
    }
  } catch (error) {
    alert(error.message);
  } finally {
    loading.value = false;
  }
}
</script>
