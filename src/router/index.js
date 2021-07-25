import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import PuppiesIndex from '../views/PuppiesIndex.vue';
import PuppiesShow from '../views/PuppiesShow.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/puppies',
    name: 'Puppies Index',
    component: PuppiesIndex
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/puppies/:id',
    name: 'Puppies Show',
    component: PuppiesShow
  }

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
