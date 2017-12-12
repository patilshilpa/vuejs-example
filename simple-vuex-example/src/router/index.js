import Vue from 'vue';
import Router from 'vue-router';
import CreateCities from '@/components/CreateCities';
import viewWeather from '@/components/viewWeather';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/cities',
      name: 'CreateCities',
      component: CreateCities,
    },
    {
      path: '/viewWeather',
      name: 'viewWeather',
      component: viewWeather,
    },
  ],
});
