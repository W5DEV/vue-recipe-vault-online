import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Recipes from '../views/Recipes.vue';
import Pricing from '../views/Pricing.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Account from '../views/MyAccount.vue';
import PrintView from '../views/PrintView.vue';

const router = createRouter({
  history: createWebHistory(),
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
    {
      path: '/account',
      name: 'Account',
      component: Account,
    },
    {
      path: '/printview',
      name: 'PrintView',
      component: PrintView,
      meta: {
        hideNavbar: true,
      },
    },
  ],
});

export default router;
