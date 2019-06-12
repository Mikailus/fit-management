import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Nutrition from './views/Nutrition.vue';
import Training from './views/Training.vue';
import Calendar from './views/Calendar.vue';
import Weather from './views/Weather.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/nutrition',
      name: 'nutrition',
      component: Nutrition,
    },
    {
      path: '/training',
      name: 'training',
      component: Training,
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: Calendar,
    },
    {
      path: '/weather',
      name: 'weather',
      component: Weather,
    },
  ],
});
