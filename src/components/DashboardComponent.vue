<template>
  <div class="flex h-screen bg-white overflow-hidden w-full">
    <!-- Dynaimic Sidebar -->
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        class="relative z-40 lg:hidden"
        @close="sidebarOpen = false">
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>
        <div class="fixed inset-0 z-40 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full">
            <DialogPanel
              class="relative flex w-full max-w-xs flex-1 flex-col bg-gray-900 focus:outline-none">
              <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0">
                <div class="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    @click="sidebarOpen = false">
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <div class="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                <div class="flex flex-shrink-0 items-center px-4">
                  <RouterLink
                    to="/"
                    class="flex flex-row items-end justify-center">
                    <LogoWhite class="h-8 w-auto" />
                    <span
                      class="font-fredericka text-white hidden md:flex font-bold text-lg ml-2">
                      Online Cookbook</span
                    >
                  </RouterLink>
                </div>
                <nav class="mt-5 flex-1" aria-label="Sidebar">
                  <div class="space-y-1 px-2">
                    <a
                      v-for="item in navigation"
                      :key="item.name"
                      @click="item.disabled ? '' : (dashboardType = item.name)"
                      :href="item.href"
                      :class="[
                        dashboardType === item.name
                          ? 'bg-gray-700 text-gray-300'
                          : '',
                        item.disabled
                          ? 'cursor-not-allowed text-gray-500 hover:text-gray-500 hover:bg-gray-900'
                          : 'cursor-pointer text-gray-300 hover:bg-gray-50 hover:text-gray-900',
                        'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                      ]"
                      :aria-current="
                        dashboardType === item.name ? 'page' : undefined
                      ">
                      <component
                        :is="item.icon"
                        :class="[
                          dashboardType === item.name
                            ? 'bg-gray-700 text-gray-900 group-hover:bg-gray-50'
                            : '',
                          item.disabled
                            ? 'cursor-not-allowed text-gray-400 hover:text-gray-500 group-hover:bg-gray-900'
                            : 'cursor-pointer text-gray-400 group-hover:bg-gray-50 group-hover:text-gray-600',
                          'mr-3 flex-shrink-0 h-6 w-6',
                        ]"
                        aria-hidden="true" />
                      {{ item.name }}
                    </a>
                  </div>
                  <hr
                    class="my-5 border-t border-gray-800"
                    aria-hidden="true" />
                  <div class="flex-1 space-y-1 px-2">
                    <a
                      v-for="item in secondaryNavigation"
                      :key="item.name"
                      @click="dashboardType = item.name"
                      :href="item.href"
                      :class="[
                        dashboardType === item.name
                          ? 'bg-gray-200 text-gray-900'
                          : '',
                        item.disabled
                          ? 'cursor-not-allowed text-gray-600 hover:text-gray-600 hover:bg-gray-100'
                          : 'cursor-pointer text-gray-300 hover:bg-gray-50 hover:text-gray-900',
                        'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                      ]">
                      <component
                        :is="item.icon"
                        :class="[
                          dashboardType === item.name
                            ? 'bg-gray-200 text-gray-900 group-hover:bg-gray-50'
                            : '',
                          item.disabled
                            ? 'cursor-not-allowed text-gray-400 hover:text-gray-600 group-hover:bg-gray-100'
                            : 'cursor-pointer text-gray-400 group-hover:bg-gray-50 group-hover:text-gray-600',
                          'mr-3 flex-shrink-0 h-6 w-6',
                        ]"
                        aria-hidden="true" />
                      {{ item.name }}
                    </a>
                  </div>
                </nav>
              </div>
              <div class="flex flex-shrink-0 border-t border-gray-800 p-4">
                <a
                  href="#"
                  @click="dashboardType = 'Settings'"
                  class="group block w-full flex-shrink-0">
                  <div class="flex items-center">
                    <div>
                      <img
                        v-if="src"
                        :src="src"
                        alt="Avatar"
                        class="avatar image h-8 w-auto rounded-full" />
                    </div>
                    <div class="ml-3">
                      <p
                        class="text-sm font-medium text-gray-300 group-hover:text-gray-900">
                        {{ username }}
                      </p>
                      <p
                        class="text-xs font-medium text-gray-400 group-hover:text-gray-700">
                        View profile
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </DialogPanel>
          </TransitionChild>
          <div class="w-14 flex-shrink-0" aria-hidden="true">
            <!-- Force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:flex lg:flex-shrink-0">
      <div class="flex w-64 flex-col">
        <div
          class="flex min-h-0 flex-1 flex-col border-r border-gray-800 bg-gray-900">
          <div class="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
            <div class="flex flex-shrink-0 items-center px-4">
              <RouterLink to="/" class="flex flex-row items-end justify-center">
                <LogoWhite class="h-8 w-auto" />
                <span
                  class="font-fredericka text-white hidden md:flex font-bold text-lg ml-2">
                  Online Cookbook</span
                >
              </RouterLink>
            </div>
            <nav class="mt-5 flex-1" aria-label="Sidebar">
              <div class="space-y-1 px-2">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  @click="item.disabled ? '' : (dashboardType = item.name)"
                  :href="item.href"
                  :class="[
                    dashboardType === item.name
                      ? 'bg-gray-700 text-gray-300'
                      : '',
                    item.disabled
                      ? 'cursor-not-allowed text-gray-500 hover:text-gray-500 hover:bg-gray-900'
                      : 'cursor-pointer text-gray-300 hover:bg-gray-50 hover:text-gray-900',
                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                  ]"
                  :aria-current="
                    dashboardType === item.name ? 'page' : undefined
                  ">
                  <component
                    :is="item.icon"
                    :class="[
                      dashboardType === item.name
                        ? 'bg-gray-700 text-gray-900 group-hover:bg-gray-50'
                        : '',
                      item.disabled
                        ? 'cursor-not-allowed text-gray-400 hover:text-gray-500 group-hover:bg-gray-900'
                        : 'cursor-pointer text-gray-400 group-hover:bg-gray-50 group-hover:text-gray-600',
                      'mr-3 flex-shrink-0 h-6 w-6',
                    ]"
                    aria-hidden="true" />
                  {{ item.name }}
                </a>
              </div>
              <hr class="my-5 border-t border-gray-800" aria-hidden="true" />
              <div class="flex-1 space-y-1 px-2">
                <a
                  v-for="item in secondaryNavigation"
                  :key="item.name"
                  @click="dashboardType = item.name"
                  :href="item.href"
                  :class="[
                    dashboardType === item.name
                      ? 'bg-gray-200 text-gray-900'
                      : '',
                    item.disabled
                      ? 'cursor-not-allowed text-gray-600 hover:text-gray-600 hover:bg-gray-100'
                      : 'cursor-pointer text-gray-300 hover:bg-gray-50 hover:text-gray-900',
                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                  ]">
                  <component
                    :is="item.icon"
                    :class="[
                      dashboardType === item.name
                        ? 'bg-gray-200 text-gray-900 group-hover:bg-gray-50'
                        : '',
                      item.disabled
                        ? 'cursor-not-allowed text-gray-400 hover:text-gray-600 group-hover:bg-gray-100'
                        : 'cursor-pointer text-gray-400 group-hover:bg-gray-50 group-hover:text-gray-600',
                      'mr-3 flex-shrink-0 h-6 w-6',
                    ]"
                    aria-hidden="true" />
                  {{ item.name }}
                </a>
              </div>
            </nav>
          </div>
          <div class="z-20 flex flex-shrink-0 border-t border-gray-800 p-4">
            <a
              href="#"
              @click="dashboardType = 'Settings'"
              class="group block w-full flex-shrink-0">
              <div class="flex items-center">
                <div>
                  <img
                    v-if="src"
                    :src="src"
                    alt="Avatar"
                    class="avatar image h-8 w-auto rounded-full" />
                </div>
                <div class="ml-3">
                  <p
                    class="text-sm font-medium text-gray-300 group-hover:text-gray-900">
                    {{ username }}
                  </p>
                  <p
                    class="text-xs font-medium text-gray-400 group-hover:text-gray-700">
                    View profile
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="flex min-w-0 flex-1 flex-col overflow-hidden">
      <!-- Mobile Header -->
      <div class="lg:hidden">
        <div
          class="w-full flex items-center justify-between border-b border-gray-200 bg-gray-900 px-4 py-1.5">
          <div class="flex flex-row">
            <RouterLink to="/" class="flex flex-row items-end justify-center">
              <LogoWhite class="h-8 w-auto" />
              <span
                class="font-fredericka text-white hidden md:flex font-bold text-lg ml-2">
                Online Cookbook</span
              >
            </RouterLink>
          </div>
          <div>
            <button
              type="button"
              class="-mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-300 hover:text-gray-500 focus:outline-none"
              @click="sidebarOpen = true">
              <span class="sr-only">Open sidebar</span>
              <Bars3Icon class="h-7 w-7" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <!-- Private Recipe Content -->
      <div
        v-if="dashboardType === 'My Recipes'"
        class="relative z-0 flex flex-1 overflow-hidden">
        <main
          class="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last">
          <!-- Breadcrumb -->
          <nav
            class="flex items-start px-4 py-3 sm:px-6 lg:px-8 xl:hidden"
            aria-label="Breadcrumb">
            <a
              v-if="recipeList === false"
              @click="recipeList = true"
              class="inline-flex items-center space-x-3 text-sm font-medium text-gray-900">
              <ChevronRightIcon
                class="bg-gray-400 rounded -ml-2 h-6 w-6 text-white font-bold hover:bg-gray-300 cursor-pointer"
                aria-hidden="true" />
              <span>Recipe List</span>
            </a>
          </nav>
          <nav class="xl:flex items-start py-3 hidden" aria-label="Breadcrumb">
            <span class="h-6 w-6"></span>
          </nav>

          <article v-if="recipeStore.recipe.title">
            <!-- Profile header -->
            <div>
              <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <div class="sm:flex sm:items-end sm:space-x-5">
                  <div
                    class="sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                    <div class="mb-6 min-w-0 flex-1 sm:hidden 2xl:block">
                      <h1
                        class="truncate text-2xl py-4 font-bold text-gray-900">
                        {{ recipeStore.recipe.title }}
                      </h1>
                      <span
                        class="text-sm md:text-base w-4/5 overflow-hidden text-gray-500">
                        {{ recipeStore.recipe.description }}</span
                      >
                    </div>
                    <div
                      class="justify-stretch flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                      <button
                        type="button"
                        @click="update = true"
                        class="lg:inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 hidden">
                        <PencilSquareIcon
                          class="-ml-1 mr-2 h-5 w-5 text-gray-400"
                          aria-hidden="true" />
                        <span>Modify</span>
                      </button>
                      <RouterLink
                        type="button"
                        @click="saveRecipe(recipeStore.recipe)"
                        to="/printview"
                        class="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
                        <PrinterIcon
                          class="-ml-1 mr-2 h-5 w-5 text-gray-400"
                          aria-hidden="true" />
                        <span>Print</span>
                      </RouterLink>
                    </div>
                  </div>
                </div>
                <div class="mt-6 hidden min-w-0 flex-1 sm:block 2xl:hidden">
                  <h1 class="truncate text-2xl py-4 font-bold text-gray-900">
                    {{ recipeStore.recipe.title }}
                  </h1>
                  <span
                    class="text-sm md:text-base w-4/5 overflow-hidden text-gray-500">
                    {{ recipeStore.recipe.description }}</span
                  >
                </div>
              </div>
            </div>

            <!-- Tabs -->
            <div class="mt-6 sm:mt-2 2xl:mt-5">
              <div class="border-b border-gray-200">
                <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                  <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                    <a
                      v-for="tab in tabs"
                      :key="tab.name"
                      @click="activeTab = tab.name"
                      :class="[
                        activeTab === tab.name
                          ? 'border-pink-500 text-gray-900'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                        'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm cursor-pointer',
                      ]"
                      :aria-current="tab.current ? 'page' : undefined"
                      >{{ tab.name }}</a
                    >
                  </nav>
                </div>
              </div>
            </div>

            <!-- Ingredients -->
            <div
              v-if="
                activeTab === 'Ingredients' && recipeStore.recipe.ingredients
              "
              class="mx-auto mt-6 w-full px-4 sm:px-6 lg:px-8">
              <div class="sm:col-span-1 text-black">
                <div class="mb-8">
                  <span class="font-bold text-2xl">Ingredients:</span>
                  <span
                    v-for="ingredient in recipeStore.recipe.ingredients.sort(
                      (a, b) => (a.id > b.id ? 1 : -1)
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
              </div>
            </div>
            <!-- Instructions -->
            <div
              v-if="
                activeTab === 'Instructions' && recipeStore.recipe.instructions
              "
              class="mx-auto mt-6 w-full px-4 sm:px-6 lg:px-8">
              <div class="sm:col-span-1 text-black">
                <div class="mb-8">
                  <span class="font-bold text-2xl">Instructions:</span>
                  <span
                    class="flex flex-col justify-center items-start"
                    v-for="instruction in recipeStore.recipe.instructions.sort(
                      (a, b) => (a.id > b.id ? 1 : -1)
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
            </div>

            <!-- Team member list -->
            <!-- <div class="mx-auto mt-8 max-w-5xl px-4 pb-12 sm:px-6 lg:px-8">
              <<<<<<< Shared User Component Here >>>>>>
            </div> -->
          </article>
          <article v-else>
            <div
              class="pt-48 h-full w-full flex justify-center items-center mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              <div class="py-12 h-full w-full flex justify-center items-center">
                <div
                  class="text-center h-full w-full flex flex-col justify-center items-center">
                  <h1
                    class="text-4xl font-bold text-gray-300 sm:text-5xl sm:tracking-tight lg:text-6xl">
                    <span class="block"
                      >Please Select a Recipe from the Recipe List</span
                    >
                  </h1>
                  <ArrowLeftIcon class="w-16 h-16 text-gray-300 my-12" />
                </div>
              </div>
            </div>
          </article>
        </main>
        <aside
          class="w-96 flex-shrink-0 border-r border-gray-200 order-first hidden xl:flex flex-col bg-neutral-100">
          <div class="w-full flex flex-row justify-end items-center mt-4 pr-2">
            <button
              class="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
              type="button"
              @click="(newRecipeModal = true), newRecipeCreation()">
              <PlusIcon class="-ml-1 mr-2 h-5 w-5 text-gray-400" />
              <span>Add New Recipe</span>
            </button>
          </div>
          <div class="px-6 pt-2 pb-4">
            <h2 class="text-lg font-medium text-gray-900">Private Recipes</h2>

            <p v-if="userSearchTerm === ''" class="mt-1 text-sm text-gray-600">
              Search {{ userRecipes.length }} recipes
            </p>
            <p v-else class="mt-1 text-sm text-gray-600">
              Searching for '{{ userSearchTerm }}'
            </p>
            <span class="mt-6 space-x-4 flex flex-row">
              <div class="min-w-0 flex-1">
                <label for="search" class="sr-only">Search</label>
                <div class="relative rounded-md shadow-sm">
                  <div
                    class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <MagnifyingGlassIcon
                      class="h-5 w-5 text-gray-400"
                      aria-hidden="true" />
                  </div>
                  <input
                    type="search"
                    name="search"
                    id="search"
                    v-model="inputValue"
                    class="block w-full rounded-md border-gray-300 pl-10 focus:border-pink-500 focus:ring-pink-500 sm:text-sm text-gray-800"
                    :placeholder="
                      userSearchTerm ? userSearchTerm : 'Search...'
                    " />
                </div>
              </div>
              <span
                @click="filterUserRecipes(inputValue), (inputValue = '')"
                class="inline-flex justify-center rounded-md border border-gray-300 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
                <XMarkIcon
                  v-if="userSearchTerm"
                  class="h-5 w-5 text-red-600 font-extrabold cursor-pointer"
                  aria-hidden="true" />
                <FunnelIcon
                  v-else
                  class="h-5 w-5 text-gray-400 cursor-pointer"
                  aria-hidden="true" />
                <span class="sr-only">Search</span>
              </span>
            </span>
          </div>
          <!-- Recipe list -->
          <nav
            class="min-h-0 flex-1 overflow-y-auto border-y border-gray-200 bg-neutral-100"
            aria-label="Directory">
            <ul
              v-for="recipe in filteredUserRecipes"
              :key="recipe.id"
              role="list"
              class="relative z-0 divide-y divide-gray-200 border-b border-gray-200 bg-white">
              <li>
                <div
                  class="relative flex items-center space-x-3 px-6 py-5 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500 hover:bg-gray-50">
                  <div class="min-w-0 flex-1">
                    <a
                      href="#"
                      @click="
                        (modalRecipe = recipe),
                          saveRecipe(recipe),
                          (modalRecipe.ingredients =
                            modalRecipe.ingredients.sort((a, b) =>
                              a.ingredient > b.ingredient ? 1 : -1
                            ))
                      "
                      class="focus:outline-none flex flex-col">
                      <!-- Extend touch target to entire panel -->
                      <span class="absolute inset-0" aria-hidden="true" />
                      <span
                        class="flex flex-row text-sm font-medium text-gray-900">
                        <p class="mr-4">{{ recipe.title }}</p>
                        <p
                          class="bg-green-100 text-green-800 max-h-5 inline-flex rounded-full px-2 text-xs font-semibold leading-5 italic">
                          {{ recipe.category }}
                        </p>
                        <p
                          :class="
                            recipe.global
                              ? `bg-blue-100 text-blue-800 max-h-5 inline-flex rounded-full px-2 ml-2 text-xs font-semibold leading-5 italic`
                              : `bg-red-100 text-red-800 max-h-5 inline-flex rounded-full px-2 ml-2 text-xs font-semibold leading-5 italic`
                          ">
                          {{ recipe.global ? 'Global' : 'Private' }}
                        </p>
                      </span>
                      <span
                        class="clamp-2 line-clamp-2 mt-2 flex flex-row text-sm font-normal text-gray-600">
                        <p>{{ recipe.description }}</p>
                      </span>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </aside>
        <aside
          v-if="recipeList === true"
          class="w-96 flex-shrink-0 border-r border-gray-200 order-first flex xl:hidden flex-col bg-neutral-100">
          <div class="w-full flex flex-row justify-between items-center pr-2">
            <a
              v-if="recipeList === true"
              @click="recipeList = false"
              class="inline-flex items-center space-x-3 text-sm font-medium text-gray-900">
              <ChevronLeftIcon
                class="bg-gray-400 rounded ml-4 h-6 w-6 text-white font-bold hover:bg-gray-300 cursor-pointer"
                aria-hidden="true" />
              <span>Hide List</span>
            </a>
            <button
              class="mt-2 inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
              type="button"
              @click="(newRecipeModal = true), newRecipeCreation()">
              <PlusIcon
                class="-ml-1 mr-2 h-5 w-5 text-gray-400"
                aria-hidden="true" />
              <span>Add New Recipe</span>
            </button>
          </div>
          <div class="px-6 pt-2 pb-4">
            <h2 class="text-lg font-medium text-gray-900">Private Recipes</h2>
            <p v-if="userSearchTerm === ''" class="mt-1 text-sm text-gray-600">
              Search {{ userRecipes.length }} recipes
            </p>
            <p v-else class="mt-1 text-sm text-gray-600">
              Searching for '{{ userSearchTerm }}'
            </p>
            <span class="mt-6 space-x-4 flex flex-row">
              <div class="min-w-0 flex-1">
                <label for="search" class="sr-only">Search</label>
                <div class="relative rounded-md shadow-sm">
                  <div
                    class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <MagnifyingGlassIcon
                      class="h-5 w-5 text-gray-400"
                      aria-hidden="true" />
                  </div>
                  <input
                    type="search"
                    name="search"
                    id="search"
                    v-model="inputValue"
                    class="block w-full rounded-md border-gray-300 pl-10 focus:border-pink-500 focus:ring-pink-500 sm:text-sm text-gray-800"
                    :placeholder="
                      userSearchTerm ? userSearchTerm : 'Search...'
                    " />
                </div>
              </div>
              <span
                @click="filterUserRecipes(inputValue), (inputValue = '')"
                class="inline-flex justify-center rounded-md border border-gray-300 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
                <XMarkIcon
                  v-if="userSearchTerm"
                  class="h-5 w-5 text-red-600 font-extrabold cursor-pointer"
                  aria-hidden="true" />
                <FunnelIcon
                  v-else
                  class="h-5 w-5 text-gray-400 cursor-pointer"
                  aria-hidden="true" />
                <span class="sr-only">Search</span>
              </span>
            </span>
          </div>
          <!-- Recipe list -->
          <nav
            class="min-h-0 flex-1 overflow-y-auto border-y border-gray-200 bg-neutral-100"
            aria-label="Directory">
            <ul
              v-for="recipe in filteredUserRecipes"
              :key="recipe.id"
              role="list"
              class="relative z-0 divide-y divide-gray-200 border-b border-gray-200 bg-white">
              <li>
                <div
                  class="relative flex items-center space-x-3 px-6 py-5 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500 hover:bg-gray-50">
                  <div class="min-w-0 flex-1">
                    <a
                      href="#"
                      @click="
                        (modalRecipe = recipe),
                          saveRecipe(recipe),
                          (modalRecipe.ingredients =
                            modalRecipe.ingredients.sort((a, b) =>
                              a.ingredient > b.ingredient ? 1 : -1
                            ))
                      "
                      class="focus:outline-none flex flex-col">
                      <!-- Extend touch target to entire panel -->
                      <span class="absolute inset-0" aria-hidden="true" />
                      <span
                        class="flex flex-row text-sm font-medium text-gray-900">
                        <p class="mr-4">{{ recipe.title }}</p>
                        <p
                          class="bg-green-100 text-green-800 max-h-5 inline-flex rounded-full px-2 text-xs font-semibold leading-5 italic">
                          {{ recipe.category }}
                        </p>
                        <p
                          :class="
                            recipe.global
                              ? `bg-blue-100 text-blue-800 inline-flex max-h-5 rounded-full px-2 ml-2 text-xs font-semibold leading-5 italic`
                              : `bg-red-100 text-red-800 inline-flex max-h-5 rounded-full px-2 ml-2 text-xs font-semibold leading-5 italic`
                          ">
                          {{ recipe.global ? 'Global' : 'Private' }}
                        </p>
                      </span>
                      <span
                        class="clamp-2 line-clamp-2 mt-2 flex max-h-5 flex-row text-sm font-normal text-gray-600">
                        <p>{{ recipe.description }}</p>
                      </span>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </aside>
      </div>
      <!-- Global Recipe Content -->
      <div
        v-if="dashboardType === 'Global Recipes'"
        class="relative z-0 flex flex-1 overflow-hidden">
        <main
          class="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last">
          <!-- Breadcrumb -->
          <nav
            class="flex items-start px-4 py-3 sm:px-6 lg:px-8 xl:hidden"
            aria-label="Breadcrumb">
            <a
              v-if="recipeList === false"
              @click="recipeList = true"
              class="inline-flex items-center space-x-3 text-sm font-medium text-gray-900">
              <ChevronRightIcon
                class="bg-gray-400 rounded -ml-2 h-6 w-6 text-white font-bold hover:bg-gray-300 cursor-pointer"
                aria-hidden="true" />
              <span>Recipe List</span>
            </a>
          </nav>
          <nav class="xl:flex items-start py-3 hidden" aria-label="Breadcrumb">
            <span class="h-6 w-6"></span>
          </nav>

          <article v-if="recipeStore.recipe.title">
            <!-- Profile header -->
            <div>
              <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <div class="sm:flex sm:items-end sm:space-x-5">
                  <div
                    class="sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                    <div class="mb-6 min-w-0 flex-1 sm:hidden 2xl:block">
                      <h1
                        class="truncate text-2xl py-4 font-bold text-gray-900">
                        {{ recipeStore.recipe.title }}
                      </h1>
                      <span
                        class="text-sm md:text-base w-4/5 overflow-hidden text-gray-500">
                        {{ recipeStore.recipe.description }}</span
                      >
                    </div>
                    <div
                      class="justify-stretch flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                      <RouterLink
                        type="button"
                        @click="saveRecipe(recipeStore.recipe)"
                        to="/printview"
                        class="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
                        <PrinterIcon
                          class="-ml-1 mr-2 h-5 w-5 text-gray-400"
                          aria-hidden="true" />
                        <span>Print</span>
                      </RouterLink>
                    </div>
                  </div>
                </div>
                <div class="mt-6 hidden min-w-0 flex-1 sm:block 2xl:hidden">
                  <h1 class="truncate text-2xl py-4 font-bold text-gray-900">
                    {{ recipeStore.recipe.title }}
                  </h1>
                  <span
                    class="text-sm md:text-base w-4/5 overflow-hidden text-gray-500">
                    {{ recipeStore.recipe.description }}</span
                  >
                </div>
              </div>
            </div>

            <!-- Tabs -->
            <div class="mt-6 sm:mt-2 2xl:mt-5">
              <div class="border-b border-gray-200">
                <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                  <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                    <a
                      v-for="tab in tabs"
                      :key="tab.name"
                      @click="activeTab = tab.name"
                      :class="[
                        activeTab === tab.name
                          ? 'border-pink-500 text-gray-900'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                        'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm cursor-pointer',
                      ]"
                      :aria-current="tab.current ? 'page' : undefined"
                      >{{ tab.name }}</a
                    >
                  </nav>
                </div>
              </div>
            </div>

            <!-- Ingredients -->
            <div
              v-if="
                activeTab === 'Ingredients' && recipeStore.recipe.ingredients
              "
              class="mx-auto mt-6 w-full px-4 sm:px-6 lg:px-8">
              <div class="sm:col-span-1 text-black">
                <div class="mb-8">
                  <span class="font-bold text-2xl">Ingredients:</span>
                  <span
                    v-for="ingredient in recipeStore.recipe.ingredients.sort(
                      (a, b) => (a.id > b.id ? 1 : -1)
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
              </div>
            </div>
            <!-- Instructions -->
            <div
              v-if="
                activeTab === 'Instructions' && recipeStore.recipe.instructions
              "
              class="mx-auto mt-6 w-full px-4 sm:px-6 lg:px-8">
              <div class="sm:col-span-1 text-black">
                <div class="mb-8">
                  <span class="font-bold text-2xl">Instructions:</span>
                  <span
                    class="flex flex-col justify-center items-start"
                    v-for="instruction in recipeStore.recipe.instructions.sort(
                      (a, b) => (a.id > b.id ? 1 : -1)
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
            </div>

            <!-- Team member list -->
            <!-- <div class="mx-auto mt-8 max-w-5xl px-4 pb-12 sm:px-6 lg:px-8">
              <<<<<<< Shared User Component Here >>>>>>
            </div> -->
          </article>
          <article v-else>
            <div
              class="pt-48 h-full w-full flex justify-center items-center mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              <div class="py-12 h-full w-full flex justify-center items-center">
                <div
                  class="text-center h-full w-full flex flex-col justify-center items-center">
                  <h1
                    class="text-4xl font-bold text-gray-300 sm:text-5xl sm:tracking-tight lg:text-6xl">
                    <span class="block"
                      >Please Select a Recipe from the Recipe List</span
                    >
                  </h1>
                  <ArrowLeftIcon class="w-16 h-16 text-gray-300 my-12" />
                </div>
              </div>
            </div>
          </article>
        </main>
        <aside
          class="w-96 flex-shrink-0 border-r border-gray-200 order-first hidden xl:flex flex-col bg-neutral-100">
          <div class="px-6 pt-6 pb-4">
            <h2 class="text-lg font-medium text-gray-900">Global Recipes</h2>
            <p
              v-if="globalSearchTerm === ''"
              class="mt-1 text-sm text-gray-600">
              Search {{ globalRecipes.length }} recipes
            </p>
            <p v-else class="mt-1 text-sm text-gray-600">
              Searching for '{{ globalSearchTerm }}'
            </p>
            <span class="mt-6 space-x-4 flex flex-row">
              <div class="min-w-0 flex-1">
                <label for="search" class="sr-only">Search</label>
                <div class="relative rounded-md shadow-sm">
                  <div
                    class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <MagnifyingGlassIcon
                      class="h-5 w-5 text-gray-400"
                      aria-hidden="true" />
                  </div>
                  <input
                    type="search"
                    name="search"
                    id="search"
                    v-model="inputValue"
                    class="block w-full rounded-md border-gray-300 pl-10 focus:border-pink-500 focus:ring-pink-500 sm:text-sm text-gray-800"
                    :placeholder="
                      globalSearchTerm ? globalSearchTerm : 'Search...'
                    " />
                </div>
              </div>
              <span
                @click="filterGlobalRecipes(inputValue), (inputValue = '')"
                class="inline-flex justify-center rounded-md border border-gray-300 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
                <XMarkIcon
                  v-if="globalSearchTerm"
                  class="h-5 w-5 text-red-600 font-extrabold cursor-pointer"
                  aria-hidden="true" />
                <FunnelIcon
                  v-else
                  class="h-5 w-5 text-gray-400 cursor-pointer"
                  aria-hidden="true" />
                <span class="sr-only">Search</span>
              </span>
            </span>
          </div>
          <!-- Recipe list -->
          <nav
            class="min-h-0 flex-1 overflow-y-auto border-y border-gray-200 bg-neutral-100"
            aria-label="Directory">
            <ul
              v-for="recipe in filteredGlobalRecipes"
              :key="recipe.id"
              role="list"
              class="relative z-0 divide-y divide-gray-200 border-b border-gray-200 bg-white">
              <li>
                <div
                  class="relative flex items-center space-x-3 px-6 py-5 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500 hover:bg-gray-50">
                  <div class="min-w-0 flex-1">
                    <a
                      href="#"
                      @click="
                        (modalRecipe = recipe),
                          saveRecipe(recipe),
                          (modalRecipe.ingredients =
                            modalRecipe.ingredients.sort((a, b) =>
                              a.ingredient > b.ingredient ? 1 : -1
                            ))
                      "
                      class="focus:outline-none flex flex-col">
                      <!-- Extend touch target to entire panel -->
                      <span class="absolute inset-0" aria-hidden="true" />
                      <span
                        class="flex flex-row text-sm font-medium text-gray-900">
                        <p class="mr-4">{{ recipe.title }}</p>
                        <p
                          class="bg-green-100 text-green-800 max-h-5 inline-flex rounded-full px-2 text-xs font-semibold leading-5 italic">
                          {{ recipe.category }}
                        </p>
                        <p
                          class="bg-blue-100 text-blue-800 max-h-5 inline-flex rounded-full px-2 ml-2 text-xs font-semibold leading-5 italic">
                          {{ recipe.profiles.username }}
                        </p>
                      </span>
                      <span
                        class="clamp-2 line-clamp-2 mt-2 flex flex-row text-sm font-normal text-gray-600">
                        <p>{{ recipe.description }}</p>
                      </span>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </aside>
        <aside
          v-if="recipeList === true"
          class="w-96 flex-shrink-0 border-r border-gray-200 order-first flex xl:hidden flex-col bg-neutral-100">
          <div class="px-6 pt-3 pb-4">
            <a
              v-if="recipeList === true"
              @click="recipeList = false"
              class="inline-flex items-center space-x-3 text-sm font-medium text-gray-900">
              <ChevronLeftIcon
                class="bg-gray-400 rounded -ml-2 h-6 w-6 text-white font-bold hover:bg-gray-300 cursor-pointer"
                aria-hidden="true" />
              <span>Hide List</span>
            </a>
            <h2 class="text-lg font-medium text-gray-900">Global Recipes</h2>
            <p
              v-if="globalSearchTerm === ''"
              class="mt-1 text-sm text-gray-600">
              Search {{ globalRecipes.length }} recipes
            </p>
            <p v-else class="mt-1 text-sm text-gray-600">
              Searching for '{{ globalSearchTerm }}'
            </p>
            <span class="mt-6 space-x-4 flex flex-row">
              <div class="min-w-0 flex-1">
                <label for="search" class="sr-only">Search</label>
                <div class="relative rounded-md shadow-sm">
                  <div
                    class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <MagnifyingGlassIcon
                      class="h-5 w-5 text-gray-400"
                      aria-hidden="true" />
                  </div>
                  <input
                    type="search"
                    name="search"
                    id="search"
                    v-model="inputValue"
                    class="block w-full rounded-md border-gray-300 pl-10 focus:border-pink-500 focus:ring-pink-500 sm:text-sm text-gray-800"
                    :placeholder="
                      globalSearchTerm ? globalSearchTerm : 'Search...'
                    " />
                </div>
              </div>
              <span
                @click="filterGlobalRecipes(inputValue), (inputValue = '')"
                class="inline-flex justify-center rounded-md border border-gray-300 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
                <XMarkIcon
                  v-if="globalSearchTerm"
                  class="h-5 w-5 text-red-600 font-extrabold cursor-pointer"
                  aria-hidden="true" />
                <FunnelIcon
                  v-else
                  class="h-5 w-5 text-gray-400 cursor-pointer"
                  aria-hidden="true" />
                <span class="sr-only">Search</span>
              </span>
            </span>
          </div>
          <!-- Recipe list -->
          <nav
            class="min-h-0 flex-1 overflow-y-auto border-y border-gray-200 bg-neutral-100"
            aria-label="Directory">
            <ul
              v-for="recipe in filteredGlobalRecipes"
              :key="recipe.id"
              role="list"
              class="relative z-0 divide-y divide-gray-200 border-b border-gray-200 bg-white">
              <li>
                <div
                  class="relative flex items-center space-x-3 px-6 py-5 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500 hover:bg-gray-50">
                  <div class="min-w-0 flex-1">
                    <a
                      href="#"
                      @click="
                        (modalRecipe = recipe),
                          saveRecipe(recipe),
                          (modalRecipe.ingredients =
                            modalRecipe.ingredients.sort((a, b) =>
                              a.ingredient > b.ingredient ? 1 : -1
                            ))
                      "
                      class="focus:outline-none flex flex-col">
                      <!-- Extend touch target to entire panel -->
                      <span class="absolute inset-0" aria-hidden="true" />
                      <span
                        class="flex flex-row text-sm font-medium text-gray-900">
                        <p class="mr-4">{{ recipe.title }}</p>
                        <p
                          class="bg-green-100 text-green-800 max-h-5 inline-flex rounded-full px-2 text-xs font-semibold leading-5 italic">
                          {{ recipe.category }}
                        </p>
                        <p
                          class="bg-blue-100 text-blue-800 max-h-5 inline-flex rounded-full px-2 ml-2 text-xs font-semibold leading-5 italic">
                          {{ recipe.profiles.username }}
                        </p>
                      </span>
                      <span
                        class="clamp-2 line-clamp-2 mt-2 flex flex-row text-sm font-normal text-gray-600">
                        <p>{{ recipe.description }}</p>
                      </span>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </aside>
      </div>
      <!-- Bug/Feature Announcements? -->
      <div
        v-if="dashboardType === 'Announcements'"
        class="relative z-0 flex flex-1 overflow-hidden bg-gray-900">
        <Announcements />
      </div>
      <!-- Settings -->
      <div
        v-if="dashboardType === 'Settings'"
        class="relative z-0 flex w-full flex-1 overflow-hidden bg-gray-900 text-black">
        <DashboardProfile :session="session" />
      </div>
    </div>
  </div>
  <!-- Edit Recipe Modal -->
  <TransitionRoot as="template" :show="update === true">
    <Dialog as="div" class="relative z-30" @close="open = false">
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

      <div class="fixed inset-0 z-30 overflow-y-auto">
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
              <div
                class="absolute top-0 right-0 pt-4 pr-4 sm:block text-gray-900">
                <div
                  class="flex justify-end items-center flex-row text-gray-900">
                  <span class="text-gray-900 font-medium italic">Global?</span>
                  <Switch
                    v-model="modalRecipe.global"
                    :class="modalRecipe.global ? 'bg-cyan-500' : 'bg-gray-200'"
                    class="relative inline-flex h-6 w-11 items-center rounded-full mr-16 ml-2">
                    <span class="sr-only">Make Global</span>
                    <span
                      :class="
                        modalRecipe.global ? 'translate-x-6' : 'translate-x-1'
                      "
                      class="inline-block h-4 w-4 transform rounded-full bg-white transition" />
                  </Switch>
                  <button
                    class="text-primary-white bg-cyan-500 font-bold mx-4 py-2 text-lg px-8 rounded-lg"
                    type="button"
                    @click="
                      updateRecipe(),
                        (update = false),
                        (recipeStore.recipe = {})
                    ">
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
                    @click="
                      (update = false), (open = true), (recipeStore.recipe = {})
                    ">
                    <span class="sr-only">Close</span>
                    <XMarkIcon class="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div class="w-4/5">
                <div class="mt-16 text-start w-full">
                  <label
                    class="text-gray-900 flex font-normal text-sm italic mt-1"
                    for="modalRecipe.title">
                    Title:
                  </label>
                  <input
                    class="text-gray-900 my-2 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    id="modalRecipe.title"
                    type="text"
                    v-model="modalRecipe.title" />
                  <label
                    class="text-gray-900 flex font-normal text-sm italic mt-1"
                    for="modalRecipe.profiles.username">
                    Description:
                  </label>
                  <textarea
                    class="text-gray-900 my-2 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    id="modalRecipe.profiles.username"
                    type="text"
                    v-model="modalRecipe.description" />
                  <label
                    class="text-gray-900 flex font-normal text-sm italic mt-1"
                    for="modalRecipe.category">
                    Category:
                  </label>
                  <input
                    class="text-gray-900 my-2 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    id="modalRecipe.title"
                    type="text"
                    v-model="modalRecipe.category" />
                  <div class="mt-4 w-full">
                    <span class="text-gray-900 font-bold w-full"
                      >Ingredients:</span
                    >
                    <span
                      class="w-full"
                      v-for="ingredient in modalRecipe.ingredients"
                      :key="ingredient.id">
                      <div
                        class="text-gray-900 flex flex-row justify-start items-center w-full">
                        <input
                          class="w-1/6 m-2 block appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          type="text"
                          v-model="ingredient.amount" />
                        <input
                          class="my-2 block w-3/4 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
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
                      class="w-full text-gray-900"
                      v-for="(ingredient, index) in insertIngredients"
                      :key="index">
                      <div
                        class="text-gray-900 flex flex-row justify-start items-center w-full">
                        <input
                          class="text-gray-900 w-1/6 m-2 block appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          type="text"
                          v-model="ingredient.amount" />
                        <input
                          class="text-gray-900 my-2 block w-3/4 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
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
                    <button
                      class="text-primary-white bg-cyan-500 font-bold mx-4 py-2 text-lg px-4 rounded-lg cursor-pointer"
                      @click="addIngredient()">
                      Add Ingredient
                    </button>
                  </div>
                  <div class="mt-4">
                    <span class="font-bold text-gray-900"
                      >Instructions:
                      <i class="font-normal text-sm text-gray-600"
                        >(Leave blank if not needed...)</i
                      ></span
                    >
                    <span
                      class="text-gray-900 flex flex-col justify-center items-start"
                      v-for="instruction in modalRecipe.instructions"
                      :key="instruction.id">
                      <div
                        class="flex flex-col justify-start items-center w-full">
                        <div
                          class="flex flex-row justify-start items-center w-full">
                          <label
                            class="flex w-1/5 font-normal text-sm italic mt-1"
                            for="modalRecipe.category">
                            Heading:
                          </label>
                          <input
                            class="appearance-none my-2 block w-2/3 rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            id="instruction.step"
                            type="text"
                            v-model="instruction.heading" />
                        </div>

                        <div
                          class="flex flex-row justify-start items-center w-full">
                          <label
                            class="flex w-1/5 font-normal text-sm italic mt-1"
                            for="modalRecipe.category">
                            Description:
                          </label>
                          <textarea
                            class="h-32 appearance-none my-2 block w-2/3 rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            id="instruction.step"
                            type="text"
                            v-model="instruction.description" />

                          <TrashIcon
                            class="text-red-500 w-8 h-8 mx-4 text-lg rounded-lg cursor-pointer"
                            @click="
                              (deleteModal = true),
                                (deleteType = 'instruction'),
                                (deleteInstructionId = instruction.id)
                            " />
                        </div>
                      </div>
                    </span>
                    <span
                      class="text-gray-900 flex flex-col justify-center items-start"
                      v-for="(instruction, index) in insertInstructions"
                      :key="index">
                      <div
                        class="flex flex-col justify-start items-center w-full">
                        <div
                          class="flex flex-row justify-start items-center w-full">
                          <label
                            class="flex w-1/5 font-normal text-sm italic mt-1"
                            for="modalRecipe.category">
                            Heading:
                          </label>
                          <input
                            class="appearance-none my-2 block w-2/3 rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            id="instruction.step"
                            type="text"
                            v-model="instruction.heading" />
                        </div>

                        <div
                          class="flex flex-row justify-start items-center w-full">
                          <label
                            class="flex w-1/5 font-normal text-sm italic mt-1"
                            for="modalRecipe.category">
                            Description:
                          </label>
                          <textarea
                            class="h-32 appearance-none my-2 block w-2/3 rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            id="instruction.step"
                            type="text"
                            v-model="instruction.description" />
                        </div>
                      </div>
                    </span>
                    <button
                      class="text-primary-white bg-cyan-500 font-bold mx-4 py-2 text-lg px-4 rounded-lg cursor-pointer"
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
  <TransitionRoot as="template" :show="newRecipeModal === true">
    <Dialog
      as="div"
      class="relative z-30"
      @close="(newRecipeModal = false), (recipeStore.recipe = {})">
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

      <div class="fixed inset-0 z-30 overflow-y-auto text-gray-600">
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
                    class="text-primary-white bg-cyan-500 font-bold mx-4 py-2 text-lg px-4 rounded-lg"
                    type="button"
                    @click="
                      saveNewRecipe(),
                        (newRecipeModal = false),
                        (recipeStore.recipe = {})
                    ">
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
                    class="flex font-normal text-sm italic mt-1 px-2"
                    for="modalRecipe.title">
                    Enter a Recipe Title:
                  </label>
                  <input
                    class="my-2 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    id="modalRecipe.title"
                    type="text"
                    v-model="newRecipe.title" />
                  <label
                    class="flex font-normal text-sm italic mt-1 px-2"
                    for="modalRecipe.category">
                    Enter a Recipe Category:
                  </label>
                  <input
                    class="my-2 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    id="newRecipe.category"
                    type="text"
                    v-model="newRecipe.category" />
                  <label
                    class="flex font-normal text-sm italic mt-1 px-2"
                    for="newrecipe.description">
                    Enter a Recipe Description:
                  </label>
                  <textarea
                    class="my-2 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    id="newRecipe.description"
                    v-model="newRecipe.description" />
                  <span class="px-2 font-normal text-sm"
                    ><i
                      >Note: do not enter ingredients or instructions here. You
                      can do this at a later time!</i
                    ></span
                  >
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
  <!-- Delete Confirm Modal -->
  <TransitionRoot
    as="template"
    :show="deleteModal === true"
    class="text-gray-600">
    <Dialog as="div" class="relative z-30" @close="deleteModal = false">
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

      <div class="fixed inset-0 z-30 overflow-y-auto">
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
                  @click="
                    (deleteModal = false),
                      deleteRecipe(modalRecipe.id),
                      (recipeStore.recipe = loadedRecipe.value[0])
                  ">
                  Yes, Delete This Recipe
                </button>
                <button
                  v-if="deleteType === 'ingredient'"
                  type="button"
                  class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                  @click="
                    (deleteModal = false),
                      removeIngredient(deleteIngredientId),
                      (recipeStore.recipe = loadedRecipe.value[0])
                  ">
                  Yes, Delete This Ingredient
                </button>
                <button
                  v-if="deleteType === 'instruction'"
                  type="button"
                  class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                  @click="
                    (deleteModal = false),
                      removeInstruction(deleteInstructionId),
                      (recipeStore.recipe = loadedRecipe.value[0])
                  ">
                  Yes, Delete This Instruction
                </button>
                <button
                  type="button"
                  class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
                  @click="
                    (deleteModal = false),
                      (recipeStore.recipe = loadedRecipe.value[0])
                  "
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
import { onMounted, ref, toRefs, watch } from 'vue';
import LogoWhite from '../assets/cookbook-white.svg?component';
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
  Switch,
} from '@headlessui/vue';
import {
  Bars3Icon,
  CalendarIcon,
  CogIcon,
  HomeIcon,
  MagnifyingGlassCircleIcon,
  MegaphoneIcon,
  UserGroupIcon,
  XMarkIcon,
  PrinterIcon,
  TrashIcon,
  ExclamationTriangleIcon,
  PlusIcon,
  PencilSquareIcon,
  ArrowLeftIcon,
} from '@heroicons/vue/24/outline';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
} from '@heroicons/vue/20/solid';
import { supabase } from '../supabase';
import { useRecipeStore } from '../stores/base';
import Announcements from './Announcements.vue';
import DashboardProfile from './DashboardProfile.vue';
import { RouterLink } from 'vue-router';

const props = defineProps(['path', 'username', 'session']);
const { path, username, session } = toRefs(props);
const recipeStore = useRecipeStore();

const saveRecipe = (recipe) => {
  recipeStore.recipe = recipe;
};
const globalRecipes = ref([]);
const userRecipes = ref([]);
const loading = ref(true);
const avatarLoading = ref(true);
const activeTab = ref('Ingredients');
const recipeList = ref(false);
const dashboardType = ref('My Recipes');
const update = ref('false');
const modalRecipe = ref({});
const deleteModal = ref(false);
const deleteType = ref('');
const newRecipeModal = ref(false);
const deleteIngredientId = ref('');
const deleteInstructionId = ref('');
const loadedRecipe = ref({});
const filteredUserRecipes = ref({});
const filteredGlobalRecipes = ref({});
const globalSearchTerm = ref('');
const userSearchTerm = ref('');

const filterUserRecipes = (searchTerm) => {
  if (searchTerm === '' || searchTerm === null || searchTerm === undefined) {
    filteredUserRecipes.value = userRecipes.value;
    userSearchTerm.value = '';
  } else {
    filteredUserRecipes.value = userRecipes.value.filter((recipe) => {
      userSearchTerm.value = searchTerm;
      return recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }
};
const filterGlobalRecipes = (searchTerm) => {
  if (searchTerm === '' || searchTerm === null || searchTerm === undefined) {
    filteredGlobalRecipes.value = userRecipes.value;
    globalSearchTerm.value = '';
  } else {
    filteredGlobalRecipes.value = userRecipes.value.filter((recipe) => {
      globalSearchTerm.value = searchTerm;
      return recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }
};

onMounted(() => {
  getRecipes();
});
const insertIngredients = ref([]);

const addIngredient = () => {
  insertIngredients.value.push({
    ingredient: '',
    amount: '',
    recipe_id: modalRecipe.value.id,
  });
};

const insertInstructions = ref([]);

const addInstruction = () => {
  insertInstructions.value.push({
    description: '',
    heading: '',
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

watch(path, () => {
  if (path.value) {
    downloadImage();
  }
});

const src = ref('');

const downloadImage = async () => {
  try {
    avatarLoading.value = true;
    const { data, error } = await supabase.storage
      .from('avatars')
      .download(path.value);
    if (error) throw error;
    src.value = URL.createObjectURL(data);
  } catch (error) {
    console.error('Error downloading image: ', error.message);
  } finally {
    avatarLoading.value = false;
  }
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
        'id, title, description, global, active, user_id, category, profiles(username), ingredients(id, ingredient, amount), instructions(id, heading, description)'
      )
      .order('title', { ascending: true });

    if (error && status !== 406) throw error;

    if (recipes) {
      globalRecipes.value = recipes.filter((recipe) => recipe.global === true);
      userRecipes.value = recipes.filter(
        (recipe) => recipe.user_id === user.id
      );
      filteredUserRecipes.value = userRecipes.value;
      filteredGlobalRecipes.value = globalRecipes.value;
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
      global: modalRecipe.value.global,
      description: modalRecipe.value.description,
      category: modalRecipe.value.category,
      user_id: modalRecipe.value.user_id,
    };
    const updatedIngredients = modalRecipe.value.ingredients;

    const formattedIngredients = {};

    for (let i = 0; i < updatedIngredients.length; i++) {
      formattedIngredients[i] = {
        id: updatedIngredients[i].id,
        ingredient: updatedIngredients[i].ingredient,
        amount: updatedIngredients[i].amount,
        recipe_id: updatedRecipe.id,
      };
    }

    const updatedInstructions = {};
    for (let i = 0; i < modalRecipe.value.instructions.length; i++) {
      updatedInstructions[i] = {
        id: modalRecipe.value.instructions[i].id,
        description: modalRecipe.value.instructions[i].description,
        heading: modalRecipe.value.instructions[i].heading,
        recipe_id: updatedRecipe.id,
      };
    }

    const newInsertIngredients = {};
    for (let i = 0; i < insertIngredients.value.length; i++) {
      if (insertIngredients.value[i].ingredient !== '') {
        newInsertIngredients[i] = {
          ingredient: insertIngredients.value[i].ingredient,
          amount: insertIngredients.value[i].amount,
          recipe_id: insertIngredients.value[i].recipe_id,
          created_by: session.value.user.id,
        };
      }
    }
    const newInsertInstructions = {};
    for (let i = 0; i < insertInstructions.value.length; i++) {
      if (insertInstructions.value[i].description !== '') {
        newInsertInstructions[i] = {
          description: insertInstructions.value[i].description,
          heading: insertInstructions.value[i].heading,
          recipe_id: insertInstructions.value[i].recipe_id,
          created_by: session.value.user.id,
        };
      }
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
    insertIngredients.value = [];
    insertInstructions.value = [];
  }

  update.value = false;
  recipeStore.recipe = {};
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
  recipeStore.recipe = {};
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
  recipeStore.recipe = {};
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
  recipeStore.recipe = {};
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
  recipeStore.recipe = {};
  getRecipes();
}

const navigation = [
  { name: 'My Recipes', href: '#', icon: HomeIcon, disabled: false },
  { name: 'Shared With Me', href: '#', icon: CalendarIcon, disabled: true },
  { name: 'Favorites', href: '#', icon: UserGroupIcon, disabled: true },
  {
    name: 'Global Recipes',
    href: '#',
    icon: MagnifyingGlassCircleIcon,
    disabled: false,
  },
  { name: 'Announcements', href: '#', icon: MegaphoneIcon, disabled: false },
];
const secondaryNavigation = [
  { name: 'Settings', href: '#', icon: CogIcon, disabled: false },
];
const tabs = [{ name: 'Ingredients' }, { name: 'Instructions' }];

const sidebarOpen = ref(false);
</script>
<script>
export default {
  data: function () {
    return {
      inputValue: '',
    };
  },
};
</script>
