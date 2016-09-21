<style lang="sass">
	.rodape{
		width: 100%;
		height: 0px;
		padding-bottom: 20%;		
		background-color: #E1E1E1;
		

		p{
			&:nth-child(1){
				padding-top: 10%;
			}
			text-align:center;			
		}
	}
</style>

<template>
	<footer class="rodape">
		<p>William Silva</p>
		<p>&copy 2016</p>
	</footer>
</template>

<script>  
  export default {
    replace: false,
  	data() {
      return {
        
      }
    }
  }
</script>
