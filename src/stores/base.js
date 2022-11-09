import { defineStore } from 'pinia';

export const useSiteStore = defineStore('site', {
  state: () => ({ name: 'default name' }),
  getters: {
    getSiteName: (state) => state.name,
  },
});

export const useRecipeStore = defineStore('recipe', {
  state: () => ({ recipe: {} }),
  getters: {
    getRecipe: (state) => state.recipe,
  },
});
