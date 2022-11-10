<template>
  <span class="isolate inline-flex rounded-md shadow-sm mt-8">
    <button
      @click="toggleName = 'Private Recipes'"
      type="button"
      :class="
        toggleName === 'Private Recipes'
          ? 'text-primary-muted bg-primary-light relative inline-flex items-center rounded-l-md border border-gray-300 px-4 py-2 text-sm font-medium focus:z-10 focus:outline-none cursor-auto'
          : 'text-primary-muted hover:bg-primary-light relative inline-flex items-center rounded-l-md border border-gray-300 bg-primary-white px-4 py-2 text-sm font-medium focus:z-10 focus:outline-none'
      ">
      Private Recipes
    </button>
    <button
      @click="toggleName = 'Global Recipes'"
      type="button"
      :class="
        toggleName === 'Global Recipes'
          ? 'text-primary-muted bg-primary-light relative inline-flex items-center rounded-r-md border border-gray-300 px-4 py-2 text-sm font-medium focus:z-10 focus:outline-none cursor-auto'
          : 'text-primary-muted hover:bg-primary-light relative inline-flex items-center rounded-r-md border border-gray-300 bg-primary-white px-4 py-2 text-sm font-medium focus:z-10 focus:outline-none'
      ">
      Global Recipes
    </button>
  </span>
  <div
    class="bg-primary-light mt-8 w-full md:w-4/5 p-4 md:p-8 flex justify-center items-center rounded-2xl">
    <div class="bg-white rounded-2xl w-full">
      <!-- Begin User Recipe Render -->
      <div v-if="toggleName === 'Private Recipes'">
        <div class="overflow-hidden bg-white shadow rounded-2xl">
          <ul role="list" class="divide-y divide-gray-200">
            <li v-for="recipe in userRecipes" :key="recipe.id">
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
                        :class="
                          recipe.global
                            ? `bg-blue-100 text-blue-800 inline-flex rounded-full px-2 ml-2 md:mx-2 text-xs font-semibold leading-5 italic`
                            : `bg-red-100 text-red-800 inline-flex rounded-full px-2 ml-2 md:mx-2 text-xs font-semibold leading-5 italic`
                        ">
                        {{ recipe.global ? 'Global' : 'Private' }}
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
      <!-- End User Recipe Render, Begin Global Recipe Render -->
      <div v-if="toggleName === 'Global Recipes'">
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
                    class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none">
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
                      v-for="ingredient in modalRecipe.ingredients"
                      :key="ingredient.id">
                      <p class="text-sm md:text-base mt-1 text-gray-500">
                        {{ ingredient.amount }} {{ ingredient.units.name }}
                        {{ ingredient.ingredient }}
                      </p>
                    </span>
                  </div>
                  <div class="mt-4">
                    <span class="font-bold">Instructions:</span>
                    <span
                      v-for="instruction in modalRecipe.instructions"
                      :key="instruction.id">
                      <span
                        class="flex flex-col justify-center items-start"
                        v-for="(step, index) in instruction.instructions"
                        :key="index">
                        <span class="text-sm md:text-base mt-1 text-gray-500"
                          >{{ index + 1 + '.' }} {{ step }}</span
                        >
                      </span>
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
import { onMounted, ref, toRefs } from 'vue';
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

const props = defineProps(['session']);
const { session } = toRefs(props);

const toggleName = ref('Private Recipes');
const open = ref(false);
const modalRecipe = ref({});
const globalRecipes = ref([]);
const userRecipes = ref([]);
const loading = ref(true);
onMounted(() => {
  getRecipes();
});

async function getRecipes() {
  try {
    loading.value = true;

    const { user } = session.value;
    let {
      data: recipes,
      error,
      status,
    } = await supabase
      .from('recipes')
      .select(
        'id, title, description, global, active, user_id, category, profiles(username), ingredients(id, ingredient, amount, units(name)), instructions(id, instructions)'
      );

    if (error && status !== 406) throw error;
    if (recipes) {
      globalRecipes.value = recipes.filter((recipe) => recipe.global === true);
      userRecipes.value = recipes.filter(
        (recipe) => recipe.global === false || recipe.user_id === user.id
      );
    }
  } catch (error) {
    alert(error.message);
  } finally {
    loading.value = false;
  }
}
</script>
