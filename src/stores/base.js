import { defineStore } from 'pinia';

export const useSiteStore = defineStore('site', {
  state: () => ({ name: 'default name' }),
  getters: {
    getSiteName: (state) => state.name,
  },
});

export const useRecipeStore = defineStore('recipe', {
  state: () => ({
    recipe: {},
    fractionalQuantities: [
      { id: 1, value: 0.125, name: '1/8' },
      { id: 2, value: 0.25, name: '1/4' },
      { id: 3, value: 0.3334, name: '1/3' },
      { id: 4, value: 0.375, name: '3/8' },
      { id: 5, value: 0.5, name: '1/2' },
      { id: 6, value: 0.625, name: '5/8' },
      { id: 7, value: 0.6667, name: '2/3' },
      { id: 8, value: 0.75, name: '3/4' },
      { id: 9, value: 0.875, name: '7/8' },
    ],
  }),
  getters: {
    getRecipe: (state) => state.recipe,
  },
});
