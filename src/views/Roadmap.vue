<template>
  <div
    class="flex flex-col w-full justify-start items-center mt-14 p-8 bg-gray-900">
    <div
      class="flex flex-col w-full h-full justify-start items-start bg-white rounded-3xl p-16 pb-8">
      <h1
        class="my-4 text-4xl font-bold tracking-tight text-gray-800 sm:mt-5 sm:text-5xl lg:mt-6">
        <span class="block">Roadmap</span>
      </h1>
      <p
        class="text-base w-4/5 lg:w-full text-gray-800 sm:text-xl lg:text-lg xl:text-xl">
        This section was designed to give a general overview of any outstanding
        bugs and planned features.
      </p>
      <div
        class="text-primary-dark flex flex-col w-full justify-center items-start text-base mb-8 px-4">
        <h1
          class="mt-4 text-3xl font-bold tracking-tight text-white sm:mt-5 sm:text-3xl lg:mt-6">
          <span
            class="block bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text pb-3 text-transparent sm:pb-5"
            >Bugs</span
          >
        </h1>
        <p
          class="text-base w-4/5 lg:w-full text-gray-700 sm:text-xl lg:text-lg xl:text-xl">
          The following bugs have been observed and are currently being worked
          on.
        </p>
        <ul class="list-disc text-gray-700 lg:text-lg xl:text-xl py-4">
          <li class="my-1 mx-12">
            Sign-Out Button causes an error, but still works after dismissing
            the error.
          </li>
          <!-- <li class="my-1 mx-12"><i>Nothing to report! :)</i></li> -->
        </ul>
      </div>
      <div
        class="text-primary-dark text-base flex flex-col w-full justify-center items-start mb-8 px-4">
        <h1
          class="mt-4 text-3xl font-bold tracking-tight text-white sm:mt-5 sm:text-3xl lg:mt-6">
          <span
            class="block bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text pb-3 text-transparent sm:pb-5"
            >Upcoming Features</span
          >
        </h1>
        <p
          class="text-base w-4/5 lg:w-full text-gray-700 sm:text-xl lg:text-lg xl:text-xl">
          This section outlines any upcoming features that should be implemented
          in the near future.
        </p>
        <ul class="list-disc text-gray-700 lg:text-lg xl:text-xl py-4">
          <li class="my-1 mx-12">
            Add ability to share recipes with other logged in users, add shared
            recipes section under user dashboard.
          </li>
          <li class="my-1 mx-12">
            Add a "Shopping List" button that will generate a printable list of
            ingredients for the selected recipe.
          </li>
          <li class="my-1 mx-12">
            Create a "Favorites" section that will allow users to save recipes
            to a list and display under user dashboard.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
