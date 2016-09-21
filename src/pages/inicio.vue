
<style lang="sass">
  .hello p{
    color: red;
    cursor: pointer;
    
    &:hover{
      color: black;
    }
  }

</style>
<template>
	<input type="text" v-model="text" />
    <div class="hello"><p>Hello {{ text }}!</p></div>
    <br>
</template>
<script>
	export default {
    
    	replace: false,
  	
	    data() {
	      return {
	        text: 'vue'
	      }
	    },

	    components:{
	    	      
	    }
  	}
</script>