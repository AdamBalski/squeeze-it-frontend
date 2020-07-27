import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import MinifiedLinkReceiver from '../views/MinifiedLinkReceiver.vue';
import Error404NotFound from '../views/Error404NotFoundView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'squeeze it',
    },
  },
  {
    path: '/:link',
    name: 'MinifiedLinkReceiver',
    component: MinifiedLinkReceiver,
    meta: {
      title: 'Redirection is being performed ...',
    },
  },
  {
    path: '*',
    name: 'Error404NotFound',
    component: Error404NotFound,
    meta: {
      title: 'Error 404 Not Found',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
