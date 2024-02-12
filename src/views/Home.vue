<template>
  <div class="bg-white">
    <div class="relative overflow-hidden">
      <main>
        <div
          class="bg-gray-900 pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
          <div class="mx-auto max-w-7xl lg:px-8">
            <div class="lg:grid lg:grid-cols-2 lg:gap-8">
              <div
                class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                <div class="lg:py-24">
                  <RouterLink
                    to="/roadmap"
                    class="inline-flex items-center rounded-full bg-black p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base">
                    <span
                      class="rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 px-3 py-0.5 text-sm font-semibold leading-5 text-white"
                      >Coming soon</span
                    >
                    <span class="ml-4 text-sm">Check out our roadmap</span>
                    <ChevronRightIcon
                      class="ml-2 h-5 w-5 text-gray-500"
                      aria-hidden="true" />
                  </RouterLink>
                  <h1
                    class="mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span class="block">A better way to</span>
                    <span
                      class="block bg-gradient-to-r from-teal-200 to-cyan-400 bg-clip-text pb-3 text-transparent sm:pb-5"
                      >store recipes</span
                    >
                  </h1>
                  <p
                    class="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                    Stop wasting time searching through binders and boxes for
                    your favorite recipes. Securely save your recipes in one
                    place and access them anywhere.
                  </p>
                  <div class="mt-10 sm:mt-12">
                    <form
                      ref="form"
                      class="sm:mx-auto sm:max-w-xl lg:mx-0"
                      @submit.prevent="sendEmail">
                      <div class="sm:flex" v-if="!successContent">
                        <div class="min-w-0 flex-1">
                          <label for="email" class="sr-only"
                            >Email address</label
                          >
                          <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            class="block w-full rounded-md border-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900" />
                        </div>
                        <div class="mt-3 sm:mt-0 sm:ml-3">
                          <button
                            type="submit"
                            @click="validateEmail"
                            class="block w-full rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 py-3 px-4 font-medium text-white shadow hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900">
                            Notify me
                          </button>
                        </div>
                      </div>
                      <div
                        class="sm:flex justify-center items-center w-2/5"
                        v-else>
                        <div
                          class="min-w-0 flex-1 w-2/3 rounded-full bg-gradient-to-r text-center from-teal-500 to-cyan-600 p-3 text-lg font-semibold leading-5 text-white">
                          Thanks for signing up!
                        </div>
                      </div>
                      <p class="mt-3 text-sm text-gray-300 sm:mt-4">
                        By providing your email, you agree to sign up for
                        periodical updates. No purchase necessary. Unsubscribe
                        at any time.
                      </p>
                    </form>
                  </div>
                </div>
              </div>
              <div class="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
                <div
                  class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                  <!-- Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ -->
                  <img
                    class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="https://tailwindui.com/img/component-images/cloud-illustration-teal-cyan.svg"
                    alt="" />
                  <!-- <PanelIllustraion
                    class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    alt="" /> -->
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Feature section with screenshot -->
        <div class="relative bg-gray-50 pt-16 sm:pt-24 lg:pt-32">
          <div
            class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <div>
              <h2 class="text-lg font-semibold text-cyan-600">Mess-free</h2>
              <p
                class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Say goodbye to the mess and clutter.
              </p>
              <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500">
                Gone are the days of ruining paper-based recipes with messy
                ingredients during meal prep. Ditch the paper. Ditch the
                notecards. Kick the binders to the curb.
              </p>
            </div>
            <div class="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
              <img
                class="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
                src="../assets/rvo-dashboard.png"
                alt="" />
            </div>
          </div>
        </div>

        <!-- Feature section with grid -->
        <div class="relative bg-white py-16 sm:py-24 lg:py-32">
          <div
            class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 class="text-lg font-semibold text-cyan-600">Cloud storage</h2>
            <p
              class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Your recipes. Accessible <i>everywhere.</i>
            </p>
            <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500">
              Any device. Any platform. Anywhere. Access the Online Cookbook
              from your favorite device and reference your recipes easily at any
              time.*
            </p>
            <div class="mt-12">
              <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div
                  v-for="feature in features"
                  :key="feature.name"
                  class="pt-6">
                  <div class="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                    <div class="-mt-6">
                      <div>
                        <span
                          class="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 p-3 shadow-lg">
                          <component
                            :is="feature.icon"
                            class="h-6 w-6 text-white"
                            aria-hidden="true" />
                        </span>
                      </div>
                      <h3
                        class="mt-8 text-lg font-medium tracking-tight text-gray-900">
                        {{ feature.name }}
                      </h3>
                      <p class="mt-5 text-base text-gray-500">
                        {{ feature.description }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p class="mt-3 text-sm text-gray-300 sm:mt-4">
              *Requires an active internet connection on modern devices capable
              of viewing web pages hosted in the United States.
            </p>
          </div>
        </div>

        <!-- Testimonial section -->
        <div
          class="bg-gradient-to-r from-teal-500 to-cyan-600 pb-16 lg:relative lg:z-10 lg:pb-0">
          <div
            class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
            <div class="relative lg:-my-8">
              <div
                aria-hidden="true"
                class="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden" />
              <div
                class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
                <div
                  class="aspect-w-10 aspect-h-6 sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none overflow-hidden rounded-xl shadow-xl lg:h-auto">
                  <img
                    class="object-cover lg:h-full lg:w-full"
                    src="https://images.unsplash.com/photo-1556911073-52527ac43761?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
                    alt="" />
                </div>
              </div>
            </div>
            <div class="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
              <div
                class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
                <blockquote>
                  <div>
                    <svg
                      class="h-12 w-12 text-white opacity-25"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true">
                      <path
                        d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p class="mt-6 text-2xl font-medium text-white">
                      Online Cookbook is my best friend and personal sous chef
                      in the kitchen. I can easily access my recipes and
                      reference them without worrying about ruining them
                      forever!
                    </p>
                  </div>
                  <footer class="mt-6">
                    <p class="text-base font-medium text-white">Judith Black</p>
                    <p class="text-base font-medium text-cyan-100">
                      Amateur Chef, New Orleans, LA
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <!-- Blog section -->
        <div class="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
          <div class="relative">
            <div
              class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
              <h2 class="text-lg font-semibold text-cyan-600">Learn</h2>
              <p
                class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Helpful Resources
              </p>
              <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500">
                Discover new recipes and find resources to help you make the
                most of Online Cookbook and your kitchen.
              </p>
            </div>
            <div
              class="mx-auto mt-12 grid max-w-md gap-8 px-4 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:grid-cols-3 lg:px-8">
              <div
                v-for="post in blogPosts"
                :key="post.id"
                class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div class="flex-shrink-0">
                  <img
                    class="h-48 w-full object-cover"
                    :src="post.imageUrl"
                    alt="" />
                </div>
                <div class="flex flex-1 flex-col justify-between bg-white p-6">
                  <div class="flex-1">
                    <p class="text-sm font-medium text-cyan-600">
                      <a :href="post.category.href" class="hover:underline">{{
                        post.category.name
                      }}</a>
                    </p>
                    <a :href="post.href" class="mt-2 block">
                      <p class="text-xl font-semibold text-gray-900">
                        {{ post.title }}
                      </p>
                      <p class="mt-3 text-base text-gray-500">
                        {{ post.preview }}
                      </p>
                    </a>
                  </div>
                  <div class="mt-6 flex items-center">
                    <div class="flex-shrink-0">
                      <a :href="post.author.href">
                        <img
                          class="h-10 w-10 rounded-full"
                          :src="post.author.imageUrl"
                          :alt="post.author.name" />
                      </a>
                    </div>
                    <div class="ml-3">
                      <p class="text-sm font-medium text-gray-900">
                        <a :href="post.author.href" class="hover:underline">{{
                          post.author.name
                        }}</a>
                      </p>
                      <div class="flex space-x-1 text-sm text-gray-500">
                        <time :datetime="post.datetime">{{ post.date }}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{{ post.readingLength }} read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="relative bg-gray-900">
          <div
            class="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
            <img
              class="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="" />
            <div
              aria-hidden="true"
              class="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 mix-blend-multiply" />
          </div>
          <div
            class="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
            <div class="md:ml-auto md:w-1/2 md:pl-10">
              <h2 class="text-lg font-semibold text-gray-300">
                Support when you need it
              </h2>
              <p
                class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                We’re here to help
              </p>
              <p class="mt-3 text-lg text-gray-300">
                Online Cookbook was developed by cullinary enthusiasts for
                cullinary enthusiasts. All feedback is highly valued and
                priority is placed on making sure your experience is free from
                bugs and errors.
              </p>
              <div class="mt-8">
                <div class="inline-flex rounded-md shadow">
                  <a
                    href="#"
                    class="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-50">
                    Visit the help center
                    <ArrowTopRightOnSquareIcon
                      class="-mr-1 ml-3 h-5 w-5 text-gray-400"
                      aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer class="bg-gray-50" aria-labelledby="footer-heading">
        <h2 id="footer-heading" class="sr-only">Footer</h2>
        <div
          class="mx-auto max-w-md px-4 pt-12 sm:max-w-7xl sm:px-6 lg:px-8 lg:pt-16">
          <div class="mt-12 border-t border-gray-200 py-8">
            <p class="text-base text-gray-400 xl:text-center">
              &copy; {{ currentYear }} Online Cookbook | All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  PrinterIcon,
  ClipboardDocumentListIcon,
  NoSymbolIcon,
} from '@heroicons/vue/24/outline';
import {
  ArrowTopRightOnSquareIcon,
  ChevronRightIcon,
} from '@heroicons/vue/20/solid';
import { useSiteStore } from '../stores/base';
import { ref } from 'vue';

import emailjs from '@emailjs/browser';
/* import PanelIllustraion from '../assets/panel-illustration.svg'; */

const site = useSiteStore();

const siteName = site.name;

window.document.title = siteName;

const currentYear = new Date().getFullYear();

const successContent = ref(false);

function sendEmail() {
  emailjs
    .sendForm(
      'service_gpr40ls',
      'template_londrad',
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
}

function validateEmail() {
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
    this.msg['email'] = 'Please enter a valid email address';
  } else {
    this.msg['email'] = '';
    sendEmail();
    successContent.value = true;
  }
}

const features = [
  {
    name: 'Cloud Storage',
    description:
      'All recipes are stored in the cloud so they are accessible by you from anywhere.*',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Printer Friendly',
    description:
      'Easy to use templates to print your recipes for situations when you just need a paper copy.',
    icon: PrinterIcon,
  },
  {
    name: 'Quick Shopping Lists',
    description:
      'Easily select a recipe and generate a shopping list for all of the ingredients you need.',
    icon: ClipboardDocumentListIcon,
  },
  {
    name: 'Continual Updates',
    description:
      'We are constantly adding new features and improving our app based on your feedback.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Secure Access',
    description:
      'Your recipes are only editable by you, and you can choose who can see your recipes.',
    icon: LockClosedIcon,
  },
  {
    name: 'Forever Ad-Free',
    description:
      'We hate ads as much as you, so you will never see an ad on our site or in our app.',
    icon: NoSymbolIcon,
  },
];
const blogPosts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { name: 'Article', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    author: {
      name: 'Roel Aufderehar',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    readingLength: '6 min',
  },
  {
    id: 2,
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    category: { name: 'Video', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    author: {
      name: 'Brenna Goyette',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    readingLength: '4 min',
  },
  {
    id: 3,
    title: 'Improve your customer experience',
    href: '#',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    category: { name: 'Case Study', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    author: {
      name: 'Daniela Metz',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    readingLength: '11 min',
  },
];
</script>
