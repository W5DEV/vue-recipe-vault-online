<template>
  <div class="w-screen hidden md:flex">
    <div
      :class="
        !openFeedback
          ? `z-10 flex flex-col justify-end items-end fixed bottom-0 right-5 md:left-10 h-8 md:h-9 text-sm md:text-base md:hover:h-10`
          : `z-10 flex flex-col justify-end items-end fixed bottom-0 right-5 md:left-10 h-auto text-sm md:text-base rounded-t-2xl`
      ">
      <div
        :class="
          !openFeedback
            ? `h-full w-40 pt-2 rounded-t-md cursor-pointer shadow-gray-700 shadow text-white bg-gradient-to-r from-teal-500 to-cyan-600 text-center`
            : ` text-white bg-gradient-to-r from-teal-500 to-cyan-600 w-40 py-2 rounded-t-md cursor-pointer shadow-gray-700 shadow text-center`
        "
        @click="openFeedback = !openFeedback">
        <span class="text-primary-white font-bold"> Leave Feedback </span>
      </div>
      <div
        :class="
          !openFeedback
            ? `hidden`
            : `text-white bg-gradient-to-r from-teal-500 to-cyan-600 shadow w-3/5 max-h-96 flex flex-col justify-center items-center rounded-tl-3xl shadow-gray-700 p-2 pb-0`
        ">
        <div
          v-if="successContent"
          class="mt-4 text-2xl font-bold tracking-tight block bg-gradient-to-r from-teal-500 to-cyan-400 bg-clip-text pb-3 text-transparent sm:pb-5">
          Thanks for reaching out! We will review your submission shortly! Check
          out our
          <RouterLink
            to="/roadmap"
            class="text-primary italic font-bold hover:underline"
            >roadmap</RouterLink
          >
          to see where we are with current bugs and features.
        </div>
        <div
          v-else
          class="bg-primary-white text-primary rounded-t-2xl p-8 w-full max-h-96 overflow-scroll">
          <span
            class="mt-4 text-xl font-bold tracking-tight block bg-gradient-to-r from-teal-500 to-cyan-400 bg-clip-text pb-3 text-transparent sm:pb-5">
            Leave feedback for any issues or improvements!</span
          >
          <form ref="form" @submit.prevent="sendEmail">
            <div class="sm:col-span-3 mb-4">
              <label for="name" class="block text-sm font-medium text-gray-700"
                >Name</label
              >
              <div class="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="focus:border-primary focus:ring-primary block w-full rounded-md border-gray-300 shadow-sm sm:text-sm" />
              </div>
            </div>
            <div class="sm:col-span-3 mb-4">
              <label for="email" class="block text-sm font-medium text-gray-700"
                >Email Address</label
              >
              <div class="mt-1">
                <input
                  type="text"
                  name="email"
                  id="email"
                  class="focus:border-primary focus:ring-primary block w-full rounded-md border-gray-300 shadow-sm sm:text-sm" />
              </div>
            </div>
            <div class="sm:col-span-3 mb-4">
              <label
                for="feedback-type"
                class="block text-sm font-medium text-gray-700"
                >Feedback Type:</label
              >
              <div class="mt-1">
                <select
                  id="feedback-type"
                  name="feedback-type"
                  class="focus:border-primary focus:ring-primary block w-full rounded-md border-gray-300 shadow-sm sm:text-sm">
                  <option>Error/Bug</option>
                  <option>Suggestion/Improvement</option>
                  <option>Request to Join the Beta</option>
                  <option>Something Else</option>
                </select>
              </div>
            </div>
            <div class="col-span-3 mb-4">
              <label
                for="reason"
                class="block text-sm font-medium text-gray-700"
                >Please describe the reason you are reaching out:</label
              >
              <div class="mt-1">
                <textarea
                  id="reason"
                  name="reason"
                  rows="3"
                  class="focus:border-primary focus:ring-primary mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                  placeholder="Add a brief description of what you were doing that prompted you to provide feedback, along with any erorr messages you may have recieved." />
              </div>
            </div>
            <div class="col-span-3 mb-4">
              <label
                for="suggestion"
                class="block text-sm font-medium text-gray-700"
                >Please describe any changes that might help make your
                experience better:</label
              >
              <div class="mt-1">
                <textarea
                  id="suggestion"
                  name="suggestion"
                  rows="3"
                  class="focus:border-primary focus:ring-primary mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                  placeholder="Provide a brief description of any changes you would like to see implemented that might make your experience better next time!" />
              </div>
            </div>
            <fieldset class="mt-6">
              <p class="text-sm text-gray-700">
                Would you like to be contacted regarding your feedback?
              </p>
              <div class="mt-4 space-y-4">
                <div class="flex items-center">
                  <input
                    id="contact-me"
                    name="contact-option"
                    type="radio"
                    value="Yes, Contact Me"
                    class="text-primary focus:ring-primary h-4 w-4 border-gray-300" />
                  <label for="contact-me" class="ml-3">
                    <span class="block text-sm font-medium text-gray-700"
                      >Yes, please contact me!</span
                    >
                  </label>
                </div>
                <div class="flex items-center">
                  <input
                    id="do-not-contact"
                    name="contact-option"
                    type="radio"
                    value="Do Not Contact"
                    class="text-primary focus:ring-primary h-4 w-4 border-gray-300" />
                  <label for="do-not-contact" class="ml-3">
                    <span class="block text-sm font-medium text-gray-700"
                      >No, do not contact me.</span
                    >
                  </label>
                </div>
              </div>
            </fieldset>
            <button
              type="submit"
              @click="(successContent = true), sendEmail()"
              value="Send"
              class="bg-primary text-primary-white px-6 py-2 mt-4 rounded-lg">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const openFeedback = ref(false);
const successContent = ref(false);
</script>
<script>
import emailjs from '@emailjs/browser';
import { RouterLink } from 'vue-router';

export default {
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          'service_gpr40ls',
          'template_7sbsh3t',
          this.$refs.form,
          'mKBdNpWg2NKzi-rpo'
        )
        .then(
          (result) => {
            console.log('SUCCESS!', result.text);
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        );
    },
  },
  components: { RouterLink },
};
</script>
