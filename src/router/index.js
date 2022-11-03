import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Recipes from '../views/Recipes.vue';
import Pricing from '../views/Pricing.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/recipes',
      name: 'Recipes',
      component: Recipes,
    },
    {
      path: '/pricing',
      name: 'Pricing',
      component: Pricing,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
  ],
});

export default router;
