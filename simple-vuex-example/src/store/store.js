import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cities: [],
    wetherData: [],
  },
  mutations: {
    addCities(state, city) {
      state.cities.push(city);
      window.console.log('Mutation: Ok, cities has been added');
    },
    removeCity(state, city) {
      const cities = state.cities;
      cities.splice(cities.indexOf(city), 1);
    },
  },

  actions: {

    addCities({ commit }, city) {
      commit('addCities', city);
    },
    removeCity({ commit }, city) {
      commit('removeCity', city);
    },
  },
  getters: {
    getCitiess(state) {
      return state.cities;
    },
  },
});

export default store;

