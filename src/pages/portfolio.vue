<template>
	<h1>Hello World - PortFolio</h1>
	<input type="text" v-model="search">
	<custom-table :filter="search" :columns="columns" :data="people" ></custom-table>
</template>
<script>

import CustomTable from "../components/CustomTable.vue"  

export default {
	replace: false,
  	
  	data() {

      return {
      	search: '',
        columns: [ 'name', 'age' ],
        people: [{
        	name: 'William Douglas',
        	age: 22
        },
        {
        	name: 'Daniel Nogueira',
        	age: 25      
        },
        {
        	name: 'Tiago Henrique',
        	age: 24
        }]
      }
    },

    components:{
      CustomTable,      
   	}    
}
</script>