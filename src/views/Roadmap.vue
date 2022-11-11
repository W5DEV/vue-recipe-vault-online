<template>
  <div class="flex flex-col w-full justify-start items-center p-8">
    <h1 class="text-primary text-3xl mb-4 font-bold">Roadmap</h1>
    <p class="text-primary-dark text-base mb-4">
      This section was designed to give a general overview of any outstanding
      bugs and planned features.
    </p>
    <div
      class="text-primary-dark flex flex-col w-full justify-center items-start text-base mb-8 px-4">
      <h2 class="text-primary text-xl mb-4 font-bold">Bugs</h2>
      <p class="text-primary-dark text-base mb-4">
        The following bugs have been observed and are currently being worked on.
      </p>
      <ul class="list-disc">
        <li class="my-1">
          When adding new ingredients, the unit of measure will always default
          to "Unit" upon save.
          <i class="text-primary-muted underline"
            >Workaround: save the recipe, then go back and change the units of
            measure after the initial save</i
          >
        </li>
        <li class="my-1">
          Sometimes ingredients don't save properly when initially saving recipe
          details.
        </li>
        <li class="my-1">
          There is no way to change the recipe description after the first time
          you save it.
        </li>
        <li class="my-1">Home page footer doesn't line up on mobile</li>
        <li class="my-1">
          Feedback area prevents clicking on the bottom of the page
        </li>
      </ul>
    </div>
    <div
      class="text-primary-dark text-base flex flex-col w-full justify-center items-start mb-8 px-4">
      <h3 class="text-primary text-xl mb-4 font-bold">Upcoming Features</h3>
      <p class="text-primary-dark text-base mb-4">
        This section outlines any upcoming features that should be implemented
        in the near future.
      </p>
      <ul class="list-disc">
        <li class="my-1">Add Description Edit to Recipe Edit screen.</li>
        <li class="my-1">
          Add ability to share recipes with other logged in users.
        </li>
        <li class="my-1">
          Add ability to sort ingredients and instructions with a new field.
        </li>
      </ul>
    </div>
  </div>
</template>
