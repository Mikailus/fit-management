import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Nutrition from './views/Nutrition.vue';
import Training from './views/Training.vue';
import Calendar from './views/Calendar.vue';
import Weather from './views/Weather.vue';

import DailyIntake from './components/modules/nutrition/DailyIntake.vue';

import moment from 'moment';

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
      children: [
        {
          path: 'days/:day',
          name: 'intake',
          component: DailyIntake,
        },
        {
          path: '/',
          redirect: {
            name: 'intake',
            params: {
              day: `${moment(new Date()).format('YYYY-MM-DD')}`
            }
          },
        },
      ],
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
    {
      path: '/',
      redirect: '/nutrition',
    }
  ],
});
