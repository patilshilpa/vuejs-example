<template>
<div class="container-fluid">
	<div class="form-group">
	  <input type="text" class="form-control"
	   v-model="newTodoTitle" 
	   >
	  <button type="" class="btn" @click="add">Addcity</button>
    <br/>
	 <li v-for="city in cities">{{ city.title }}
   <button @click ='report(city)' >show</button>

   <li>humidity:{{ hum }}</li>
   <li>temp_max:{{ temp_max }} </li>
   <li>temp_min:{{ temp_min }} </li>
   <button class="data" @click="remove(city)">delete</button>
    </li>
	</div>
</div>
</template>

<script type="">
 import axios from 'axios';

export default {
   data() {
     return {
       newTodoTitle: '',
       cities: this.$store.getters.getCitiess,
       weatherData: '',
       hum: '',
       temp_max: '',
       temp_min: '',
       wind: {},

     };
   },

   methods: {
     add() {
       this.$store.dispatch('addCities', {
         title: this.newTodoTitle,
       });
     },
     remove(city) {
       this.$store.dispatch('removeCity', city);
     },
     report(city) {
       const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city.title}&appid=f1c63622ebb017ff838af2fe27593ead`;
       axios({
         method: 'get',
         url: URL })
      .then((response) => {
        const self = this;
        self.weatherData = response;
        self.hum = self.weatherData.data.main.humidity;
        self.temp_max = self.weatherData.data.main.temp_max;
        self.temp_min = self.weatherData.data.main.temp_min;
      });
     },
 
   },
 };
</script>
<style type="text/css">
	.data{
    padding: 10px;
  }
</style>