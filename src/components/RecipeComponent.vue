<script setup>
import { supabase } from '../supabase';
import { onMounted, ref, toRefs } from 'vue';

const props = defineProps(['session']);
const { session } = toRefs(props);

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
      .select('id, title, description, global, active, user_id');

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
<template>
  <div
    class="w-full justify-center items-center flex flex-col"
    v-for="recipe in userRecipes"
    v-bind:key="recipe">
    <div
      class="border-primary-dark flex flex-row justify-start items-center w-4/5 border">
      <span class="border-primary-dark w-8 border-x p-2">{{ recipe.id }}</span>
      <span class="border-primary-dark w-36 border-x p-2">{{
        recipe.title
      }}</span>
      <span class="border-primary-dark flex-grow border-x p-2">{{
        recipe.description
      }}</span>
    </div>
  </div>
</template>
