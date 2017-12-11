import Vue from 'vue';
import Router from 'vue-router';
import CreateCities from '@/components/CreateCities';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/city',
      name: 'CreateCities',
      component: CreateCities,
    },
  ],
});
