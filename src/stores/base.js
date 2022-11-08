import { defineStore } from 'pinia';

export const useSiteStore = defineStore('site', {
  state: () => ({ name: 'default name' }),
  getters: {
    getSiteName: (state) => state.name,
  },
});

export const useRecipeStore = defineStore('recipe', {
  state: () => ({ name: null, ingredients: [], instructions: [] }),
  getters: {
    getRecipeName: (state) => state.name,
    getRecipeIngredients: (state) => state.ingredients,
    getRecipeInstructions: (state) => state.instructions,
  },
  actions: {
    setRecipeName: (state, name) => (state.name = name),
    setRecipeIngredients: (state, ingredients) =>
      (state.ingredients = ingredients),
    setRecipeInstructions: (state, instructions) =>
      (state.instructions = instructions),
  },
});
