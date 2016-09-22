<style lang="sass">
	.custom-table{
		width: 100%;
		min-height: 100px;
		margin-top: 2%;

		th,td{
			border-bottom: 1px solid #212121;
			padding: 1%;		
		}
	}
</style>
<template>
	<div>
		<table class="custom-table">
			<thead>
				<tr>
					<th v-for="key in columns">{{ key[0].toUpperCase().concat(key.substring(1).toLowerCase()) }}</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="input in data | filterBy filter">
					<td v-for="key in columns">
						{{ input[key.toLowerCase()] }}
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>  
  export default {
    replace: false,
  	
  	props:{
  		columns: Array,
  		data: Array,
  		filter: String,
  	},

  	data() {
      return {
        
      }
    },    
  }
</script>