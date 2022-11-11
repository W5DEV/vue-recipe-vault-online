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
      @click="(toggleName = 'Global Recipes'), (globalRecipe = true)"
      type="button"
      :class="
        toggleName === 'Global Recipes'
          ? 'text-primary-muted bg-primary-light relative inline-flex items-center rounded-r-md border border-gray-300 px-4 py-2 text-sm font-medium focus:z-10 focus:outline-none cursor-auto'
          : 'text-primary-muted hover:bg-primary-light relative inline-flex items-center rounded-r-md border border-gray-300 bg-primary-white px-4 py-2 text-sm font-medium focus:z-10 focus:outline-none'
      ">
      Global Recipes
    </button>
  </span>
  <div class="w-3/4 flex flex-row justify-end items-center">
    <button
      class="text-primary-white bg-primary hidden md:flex mx-4 py-2 text-lg px-4 rounded-lg"
      type="button"
      @click="(newRecipeModal = true), newRecipeCreation()">
      Add New Recipe
    </button>
  </div>
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
                @click="
                  (open = true),
                    (modalRecipe = recipe),
                    saveRecipe(modalRecipe),
                    (globalRecipe = false),
                    (recipeGlobal = recipe.global)
                ">
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
                @click="
                  (open = true),
                    (modalRecipe = recipe),
                    (modalRecipe.ingredients = modalRecipe.ingredients.sort(
                      (a, b) => (a.ingredient > b.ingredient ? 1 : -1)
                    )),
                    (modalRecipe.step = modalRecipe.step.sort((a, b) =>
                      a.id > b.id ? 1 : -1
                    ))
                ">
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
  <!-- View Recipe Modal -->
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
                  <button
                    v-if="!globalRecipe"
                    class="text-primary-white bg-primary hidden md:flex mx-4 py-2 text-lg px-4 rounded-lg"
                    type="button"
                    @click="
                      saveRecipe(modalRecipe), (open = false), (update = true)
                    ">
                    Update
                  </button>
                  <RouterLink
                    type="button"
                    @click="saveRecipe(modalRecipe)"
                    to="/printview"
                    class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none cursor-pointer">
                    <span class="sr-only">Print</span>
                    <PrinterIcon class="h-6 w-6 mx-2" />
                  </RouterLink>
                  <button
                    type="button"
                    class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
                    @click="open = false">
                    <span class="sr-only">Close</span>
                    <XMarkIcon class="h-6 w-6 mx-2" />
                  </button>
                </div>
              </div>
              <div>
                <div class="mt-16 text-start">
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
  <!-- Edit Recipe Modal -->
  <TransitionRoot as="template" :show="update">
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
              class="relative flex flex-col transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 w-full md:mx-24 p-6">
              <div class="absolute top-0 right-0 pt-4 pr-4 sm:block">
                <div class="flex justify-end items-center flex-row">
                  <Switch
                    v-model="recipeGlobal"
                    :class="recipeGlobal ? 'bg-primary' : 'bg-gray-200'"
                    class="relative inline-flex mx-4 h-6 w-11 items-center rounded-full">
                    <span class="sr-only">Make Global</span>
                    <span
                      :class="recipeGlobal ? 'translate-x-6' : 'translate-x-1'"
                      class="inline-block h-4 w-4 transform rounded-full bg-white transition" />
                  </Switch>
                  <button
                    class="text-primary-white bg-primary mx-4 py-2 text-lg px-4 rounded-lg"
                    type="button"
                    @click="updateRecipe(), (update = false)">
                    Save
                  </button>
                  <TrashIcon
                    v-if="!globalRecipe"
                    class="text-red-500 mx-4 text-lg rounded-lg w-10 h-10 cursor-pointer"
                    type="button"
                    @click="(deleteModal = true), (deleteType = 'recipe')" />
                  <button
                    type="button"
                    class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
                    @click="(update = false), (open = true)">
                    <span class="sr-only">Close</span>
                    <XMarkIcon class="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div>
                <div class="mt-16 text-start">
                  <label
                    class="flex font-normal text-sm italic mt-1"
                    for="modalRecipe.title">
                    Title:
                  </label>
                  <input
                    class="my-2 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    id="modalRecipe.title"
                    type="text"
                    v-model="modalRecipe.title" />
                  <label
                    class="flex font-normal text-sm italic mt-1"
                    for="modalRecipe.profiles.username">
                    Chef:
                  </label>
                  <input
                    class="my-2 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    id="modalRecipe.profiles.username"
                    type="text"
                    v-model="modalRecipe.profiles.username" />
                  <label
                    class="flex font-normal text-sm italic mt-1"
                    for="modalRecipe.category">
                    Category:
                  </label>
                  <input
                    class="my-2 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    id="modalRecipe.title"
                    type="text"
                    v-model="modalRecipe.category" />
                  <div class="mt-4">
                    <span class="font-bold">Ingredients:</span>
                    <span
                      v-for="ingredient in modalRecipe.ingredients"
                      :key="ingredient.id">
                      <div class="flex flex-row justify-start items-center">
                        <input
                          class="w-16 my-2 block appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          id="ingredient.amount"
                          type="text"
                          v-model="ingredient.amount" />
                        <select
                          class="w-32 m-2 block appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          id="ingredient.units.name"
                          v-model="ingredient.units.name">
                          <option
                            v-for="unit in unitsOfMeasure.sort((a, b) =>
                              a.name > b.name ? 1 : -1
                            )"
                            :value="unit.name"
                            :key="unit.id"
                            :selected="unit.id === ingredient.units.id">
                            {{ unit.name }}
                          </option>
                        </select>
                        <input
                          class="my-2 block w-2/5 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          id="ingredient.amount"
                          type="text"
                          v-model="ingredient.ingredient" />

                        <TrashIcon
                          class="text-red-500 w-8 h-8 mx-4 text-lg rounded-lg cursor-pointer"
                          @click="
                            (deleteModal = true),
                              (deleteType = 'ingredient'),
                              (deleteIngredientId = ingredient.id)
                          " />
                      </div>
                    </span>
                    <span
                      v-for="(ingredient, index) in insertIngredients"
                      :key="index">
                      <div class="flex flex-row justify-start items-center">
                        <input
                          class="w-16 my-2 block appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          id="ingredient.amount"
                          type="text"
                          v-model="ingredient.amount" />
                        <select
                          class="w-32 m-2 block appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          id="ingredient.units.name"
                          v-model="ingredient.units.name">
                          <option
                            v-for="unit in unitsOfMeasure"
                            :value="unit.name"
                            :key="unit.id"
                            :selected="unit.id === ingredient.unit_id">
                            {{ unit.name }}
                          </option>
                        </select>
                        <input
                          class="my-2 block w-2/5 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          id="ingredient.amount"
                          type="text"
                          v-model="ingredient.ingredient" />
                      </div>
                    </span>
                    <button
                      class="text-primary-white bg-primary mx-4 py-2 text-lg px-4 rounded-lg cursor-pointer"
                      @click="addIngredient()">
                      Add Ingredient
                    </button>
                  </div>
                  <div class="mt-4">
                    <span class="font-bold">Instructions:</span>
                    <span
                      class="flex flex-col justify-center items-start"
                      v-for="instruction in modalRecipe.instructions"
                      :key="instruction.id">
                      <div
                        class="flex flex-row justify-start items-center w-full">
                        <textarea
                          class="h-36 appearance-none my-2 block w-4/5 rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          id="instruction.step"
                          type="text"
                          v-model="instruction.step" />
                        <TrashIcon
                          class="text-red-500 w-8 h-8 mx-4 text-lg rounded-lg cursor-pointer"
                          @click="
                            (deleteModal = true),
                              (deleteType = 'instruction'),
                              (deleteInstructionId = instruction.id)
                          " />
                      </div>
                    </span>
                    <span
                      class="flex flex-col justify-center items-start"
                      v-for="(instruction, index) in insertInstructions"
                      :key="index">
                      <div
                        class="flex flex-row justify-start items-center w-full">
                        <textarea
                          class="my-2 block w-4/5 h-36 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          id="instruction.step"
                          type="text"
                          v-model="instruction.step" />
                      </div>
                    </span>
                    <button
                      class="text-primary-white bg-primary mx-4 py-2 text-lg px-4 rounded-lg cursor-pointer"
                      @click="addInstruction()">
                      Add Instruction
                    </button>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
  <!-- New Recipe Modal -->
  <TransitionRoot as="template" :show="newRecipeModal">
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
                  <button
                    class="text-primary-white bg-primary mx-4 py-2 text-lg px-4 rounded-lg"
                    type="button"
                    @click="saveNewRecipe(), (newRecipeModal = false)">
                    Save
                  </button>
                  <button
                    type="button"
                    class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
                    @click="(newRecipeModal = false), (open = false)">
                    <span class="sr-only">Close</span>
                    <XMarkIcon class="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div>
                <div class="mt-10 text-start md:mt-5">
                  <label
                    class="flex font-normal text-sm italic mt-1"
                    for="modalRecipe.title">
                    Title:
                  </label>
                  <input
                    class="my-2 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    id="modalRecipe.title"
                    type="text"
                    v-model="newRecipe.title" />
                  <label
                    class="flex font-normal text-sm italic mt-1"
                    for="modalRecipe.category">
                    Category:
                  </label>
                  <input
                    class="my-2 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    id="newRecipe.category"
                    type="text"
                    v-model="newRecipe.category" />
                  <label
                    class="flex font-normal text-sm italic mt-1"
                    for="newrecipe.description">
                    Description:
                  </label>
                  <input
                    class="my-2 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    id="newRecipe.description"
                    type="text"
                    v-model="newRecipe.description" />
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
  <!-- Delete Confirm Modal -->
  <TransitionRoot as="template" :show="deleteModal">
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
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
              <div class="sm:flex sm:items-start">
                <div
                  class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <ExclamationTriangleIcon
                    class="h-6 w-6 text-red-600"
                    aria-hidden="true" />
                </div>
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <DialogTitle
                    as="h3"
                    class="text-lg font-medium leading-6 text-gray-900 capitalize"
                    >Delete {{ deleteType }}</DialogTitle
                  >
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                      Are you sure you want to delete this {{ deleteType }}? By
                      clicking yes, this {{ deleteType }} will be permanently
                      removed from the system. This action cannot be undone.
                    </p>
                  </div>
                </div>
              </div>
              <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <button
                  v-if="deleteType === 'recipe'"
                  type="button"
                  class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                  @click="(deleteModal = false), deleteRecipe(modalRecipe.id)">
                  Yes, Delete This Recipe
                </button>
                <button
                  v-if="deleteType === 'ingredient'"
                  type="button"
                  class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                  @click="
                    (deleteModal = false), removeIngredient(deleteIngredientId)
                  ">
                  Yes, Delete This Ingredient
                </button>
                <button
                  v-if="deleteType === 'instruction'"
                  type="button"
                  class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                  @click="
                    (deleteModal = false),
                      removeInstruction(deleteInstructionId)
                  ">
                  Yes, Delete This Instruction
                </button>
                <button
                  type="button"
                  class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
                  @click="deleteModal = false"
                  ref="cancelButtonRef">
                  Cancel
                </button>
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
  Switch,
} from '@headlessui/vue';

import {
  XMarkIcon,
  PrinterIcon,
  ExclamationTriangleIcon,
  TrashIcon,
} from '@heroicons/vue/24/outline';
import { RouterLink } from 'vue-router';
import { useRecipeStore } from '../stores/base';

const recipeStore = useRecipeStore();

const saveRecipe = (recipe) => {
  recipeStore.recipe = recipe;
};

const props = defineProps(['session']);
const { session } = toRefs(props);

const toggleName = ref('Private Recipes');
const globalRecipe = ref('false');
const open = ref(false);
const update = ref(false);
const deleteModal = ref(false);
const deleteType = ref('');
const newRecipeModal = ref(false);
const recipeGlobal = ref(false);
const deleteIngredientId = ref('');
const deleteInstructionId = ref('');
const modalRecipe = ref({});
const globalRecipes = ref([]);
const userRecipes = ref([]);
const unitsOfMeasure = ref([]);
const loading = ref(true);
onMounted(() => {
  getRecipes();
});

const insertIngredients = ref([]);

const addIngredient = () => {
  insertIngredients.value.push({
    ingredient: '',
    amount: '',
    unit_id: 1,
    recipe_id: modalRecipe.value.id,
    units: {
      name: 'unit',
    },
  });
};

const insertInstructions = ref([]);

const addInstruction = () => {
  insertInstructions.value.push({
    step: '',
    recipe_id: modalRecipe.value.id,
  });
};

const newRecipe = ref();

const newRecipeCreation = () => {
  newRecipe.value = {
    title: '',
    active: true,
    global: false,
    description: '',
    category: '',
    user_id: session.value.user.id,
  };
};

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
        'id, title, description, global, active, user_id, category, profiles(username), ingredients(id, ingredient, amount, unit_id, units(name, abbreviation, id)), instructions(id, step)'
      );
    let { data: units } = await supabase.from('units').select('name, id');

    if (error && status !== 406) throw error;
    if (units) {
      unitsOfMeasure.value = units.filter((unit) => unit);
    }
    if (recipes) {
      globalRecipes.value = recipes.filter((recipe) => recipe.global === true);
      userRecipes.value = recipes.filter(
        (recipe) => recipe.user_id === user.id
      );
    }
  } catch (error) {
    alert(error.message);
  } finally {
    loading.value = false;
  }
}

async function updateRecipe() {
  try {
    loading.value = true;

    const updatedRecipe = {
      id: modalRecipe.value.id,
      title: modalRecipe.value.title,
      active: modalRecipe.value.active,
      global: recipeGlobal.value,
      description: modalRecipe.value.description,
      category: modalRecipe.value.category,
      user_id: modalRecipe.value.user_id,
    };
    const newIngredients = modalRecipe.value.ingredients;
    for (let i = 0; i < newIngredients.length; i++) {
      for (let j = 0; j < unitsOfMeasure.value.length; j++) {
        if (newIngredients[i].units.name === unitsOfMeasure.value[j].name) {
          newIngredients[i].unit_id = unitsOfMeasure.value[j].id;
        }
      }
    }

    const formattedIngredients = {};
    for (let i = 0; i < newIngredients.length; i++) {
      formattedIngredients[i] = {
        id: newIngredients[i].id,
        ingredient: newIngredients[i].ingredient,
        amount: newIngredients[i].amount,
        unit_id: newIngredients[i].unit_id,
        recipe_id: updatedRecipe.id,
      };
    }

    const updatedInstructions = {};
    for (let i = 0; i < modalRecipe.value.instructions.length; i++) {
      updatedInstructions[i] = {
        id: modalRecipe.value.instructions[i].id,
        step: modalRecipe.value.instructions[i].step,
        recipe_id: updatedRecipe.id,
      };
    }

    const newInsertIngredients = {};
    for (let i = 0; i < insertIngredients.value.length; i++) {
      newInsertIngredients[i] = {
        ingredient: insertIngredients.value[i].ingredient,
        amount: insertIngredients.value[i].amount,
        unit_id: insertIngredients.value[i].unit_id,
        recipe_id: insertIngredients.value[i].recipe_id,
        created_by: session.value.user.id,
      };
    }
    const newInsertInstructions = {};
    for (let i = 0; i < insertInstructions.value.length; i++) {
      newInsertInstructions[i] = {
        step: insertInstructions.value[i].step,
        recipe_id: insertInstructions.value[i].recipe_id,
        created_by: session.value.user.id,
      };
    }

    let { error } = await supabase.from('recipes').upsert(updatedRecipe);

    if (insertIngredients.value.length > 0) {
      for (let i = 0; i < insertIngredients.value.length; i++) {
        await supabase.from('ingredients').insert(newInsertIngredients[i]);
      }
    }
    if (insertInstructions.value.length > 0) {
      for (let i = 0; i < insertInstructions.value.length; i++) {
        await supabase.from('instructions').insert(newInsertInstructions[i]);
      }
    }
    for (let i = 0; i < modalRecipe.value.ingredients.length; i++) {
      await supabase.from('ingredients').upsert(formattedIngredients[i]);
    }

    for (let i = 0; i < modalRecipe.value.instructions.length; i++) {
      await supabase.from('instructions').upsert(updatedInstructions[i]);
    }

    if (error) throw error;
  } catch (error) {
    alert(error.message);
  } finally {
    loading.value = false;
  }

  update.value = false;
  getRecipes();
}
async function removeIngredient(id) {
  try {
    loading.value = true;
    let { error } = await supabase.from('ingredients').delete().eq('id', id);
    if (error) throw error;
  } catch (error) {
    alert(error.message);
  } finally {
    loading.value = false;
  }

  update.value = false;
  close.value = false;
  getRecipes();
}
async function removeInstruction(id) {
  try {
    loading.value = true;
    let { error } = await supabase.from('instructions').delete().eq('id', id);
    if (error) throw error;
  } catch (error) {
    alert(error.message);
  } finally {
    loading.value = false;
  }

  update.value = false;
  close.value = false;
  getRecipes();
}
async function deleteRecipe(id) {
  try {
    loading.value = true;
    await supabase.from('ingredients').delete().eq('recipe_id', id);
    await supabase.from('instructions').delete().eq('recipe_id', id);
    let { error } = await supabase.from('recipes').delete().eq('id', id);
    if (error) throw error;
  } catch (error) {
    alert(error.message);
  } finally {
    loading.value = false;
  }

  update.value = false;
  close.value = false;
  getRecipes();
}
async function saveNewRecipe() {
  try {
    loading.value = true;
    let { error } = await supabase.from('recipes').insert(newRecipe.value);
    if (error) throw error;
  } catch (error) {
    alert(error.message);
  } finally {
    loading.value = false;
  }

  newRecipeModal.value = false;
  update.value = false;
  close.value = false;
  getRecipes();
}
</script>
