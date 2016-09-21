<style lang="sass">
 	.menu-superior{
 		width: 100%;
 		height: 80px;
 		margin-bottom: 2%; 		
 		display:block;
 		background-color: #E1E1E1; 		

    h2{
      width: 30%;
      font-family: Ubuntu Mono;
      font-size: 2rem;    
      float: left;
      margin-left: 20%;
    }

 		ul{
      width: 50%;
 			padding: 0px;
 			margin: 0px; 
      position: relative;
      top: 30%;			 			
 			list-style: none;
 			float: right;

 			li{
 				display: inline; 				 			
 			}
 		} 		
 	}

 	.menu-superior ul li a{ // deixando o menu horizontal
 		padding: 2px 10px;
 		display: inline-block; 		

 		color: #3498db;
 		text-decoration: none; 		
 		font-family: Ubuntu Mono;
 		font-size: 1.5rem;

 		&:hover{
			color:#2980b9;
 		}
 	}
</style>
<template>
  <nav class="menu-superior">
    <h2>Meu Site</h2>
  	<ul>
  		<li><a v-link="{ path: '/' }">Inicio</a></li>
  		<li><a v-link="{ path: '/blog' }">Blog</a></li>
  		<li><a v-link="{ path: '/portfolio' }">Portfólio</a></li>
  		<li><a v-link="{ path: '/servicos' }">Serviços</a></li>
  		<li><a v-link="{ path: '/contato' }">Contato</a></li>
  	</ul>
  </nav>
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
