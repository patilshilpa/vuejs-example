<template>
<div class="container-fluid">
<div class="form-group">

	  <input type="text" class="form-control"
	   v-model="newTodoTitle" 
	   >
	  <button type="" class="btn" @click="add">Addcity</button>
    <br/>
    <ul>
    <li v-for="city in cities">
      <a/> {{ city.title }}</a>
      </li>
      <button type="" class="btn" @click="redirect">view</button>
      </ul>
	</div>
</div>
</template>

<script type="">
export default {
  data() {
    return {
      newTodoTitle: '',
      cities: this.$store.getters.getCitiess,
      weatherData: '',
    };
  },

  methods: {
    add() {
      this.$store.dispatch('addCities', {
        title: this.newTodoTitle,
      });
    },
    redirect() {
      this.$router.push({ name: 'viewWeather' });
    },
  },
};
</script>
<style type="text/css">
	.data{
    padding: 10px;
  }
  li {
     list-style-type: none;
  }
</style>