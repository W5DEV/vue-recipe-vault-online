import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Demo from '../views/Demo.vue';
import Account from '../views/MyAccount.vue';
import PrintView from '../views/PrintView.vue';
import Roadmap from '../views/Roadmap.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo,
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
    {
      path: '/roadmap',
      name: 'Roadmap',
      component: Roadmap,
    },
  ],
});

export default router;
