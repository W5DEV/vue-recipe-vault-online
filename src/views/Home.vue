<template>
  <div>
    <div class="flex flex-col justify-center items-center w-full h-full">
      <div
        class="bg-primary-white text-primary-dark min-h-96 w-full py-16 px-12 text-center">
        <div class="flex flex-col justify-center items-center w-full h-full">
          <span class="text-primary text-4xl font-bold mb-6"
            >Welcome to the future of cooking!</span
          >
          <span class="text-xl font-normal mb-6"
            >Gone are the days of worrying about ruining your precious recipes
            that were handed down from generation to generation! Securely save
            your recipes with <strong>{{ siteName }}</strong> and access them
            from anywhere in the world!</span
          >
          <button
            class="bg-primary text-primary-white hover:bg-primary-muted w-48 h-16 mt-4 rounded-lg text-xl font-bold">
            Sign Up Now!
          </button>
        </div>
      </div>
      <div
        class="bg-primary-light text-primary-dark w-full h-auto flex flex-col md:flex-row justify-center items-center">
        <div
          class="flex flex-col justify-center items-center w-full md:w-3/5 h-full text-center px-4 py-16 order-2 md:order-1">
          <span class="text-primary text-4xl font-bold mb-6"
            >Your Virtual Cookbook Awaits</span
          >
          <span class="text-xl font-normal mb-6"
            >Comptible with any modern phone, tablet or computer,
            <strong>{{ siteName }}</strong> allows you to access all of your
            favorite recipes from any device for quick reference so you can
            focus on cullinary perfection!</span
          >
        </div>
        <div
          class="bg-primary-white flex flex-col justify-center items-center w-full md:w-2/5 h-full text-center order-1 md:order-2">
          <img
            class="h-64 md:h-[30rem] w-full object-cover"
            src="./../assets/cooking-stock-1.jpeg" />
        </div>
      </div>
      <div
        class="bg-primary-white text-primary-dark w-full h-auto flex flex-col md:flex-row justify-center items-center">
        <div
          class="bg-primary-white flex flex-col justify-center items-center w-full md:w-2/5 h-full text-center">
          <img
            class="h-64 md:h-[30rem] w-full object-cover"
            src="./../assets/cookbook-stock-1.jpeg" />
        </div>
        <div
          class="flex flex-col justify-center items-center w-full md:w-3/5 h-full text-center px-4 py-16">
          <span class="text-primary text-4xl font-bold mb-6"
            >Easily Print and Share in Seconds!</span
          >
          <span class="text-xl font-normal mb-6"
            >Share your favorite recipes with your friends with a click of a
            button! Publish your cullinary masterpieces for the world to see!
            Create printer-frinedly hardcopies of your recipes with ease!</span
          >
        </div>
      </div>
      <div
        class="bg-primary-dark text-primary-white min-h-96 w-full py-16 px-12 text-center">
        <div class="flex flex-col justify-center items-center w-full h-full">
          <span class="text-primary-light text-4xl font-bold mb-8"
            >Sign up now to experience recipe management in a whole new
            way!</span
          >
          <span class="text-xl font-normal mb-8"
            >Sign up is easy, and our plans are guaranteed to fit your
            needs!</span
          >
          <button
            class="bg-primary text-primary-white hover:bg-primary-muted w-48 h-16 mt-4 rounded-lg text-xl font-bold">
            Sign Up Now!
          </button>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script setup>
import Footer from '../components/Footer.vue';
import { useSiteStore } from '../stores/base';

const site = useSiteStore();

const siteName = site.name;

window.document.title = siteName;
</script>
