<style lang="sass">
	.titulo-blog{
		font-size: 2.5rem;
		font-family: Ubuntu Mono;
		text-align: center;
	}
	.subtitulo-blog{
		font-size: 1.5rem;
		font-family: Ubuntu;
		text-align: center;
	}
	.formulario-blog{
		width: 70%;
		margin-left: 30%;
		margin-bottom: 10%;
		input[type="text"]{
			width: 60%;
			height: 25px;
			display: block;
			margin-bottom: 1%;			
		}
		textarea{
			width: 60%;
			height: 150px;
			display: block;
			margin-bottom: 1%;			
		}		
	}
</style>
<template>
	<h1 class="titulo-blog">Blog</h1>
	<h2 class="subtitulo-blog">Cadastro de Conteudo</h2>	
	<div class="formulario-blog">
		<input type="text" placeholder="Titulo" v-model="titulo">
		<textarea placeholder="Conteúdo" v-model="conteudo"></textarea>
		<button class="btn" v-on:click="cadastrarConteudo">Cadastrar</button>
	</div>
	<div class="lista-conteudo">
		<h3>Conteudos</h3>
		<input type="text" v-model="pesquisa">
		<custom-table :columns="colunas" :data="conteudos" :filter="pesquisa"></custom-table>
	</div>
</template>

<script> 
import CustomTable from "../components/CustomTable.vue"

  export default {
    replace: false,
  	data() {
      return {
      	pesquisa: '',
      	titulo: '',
      	conteudo: '',
        conteudos: [],
        colunas: [ 'titulo','conteudo']
      }
    },
    methods:{

    	cadastrarConteudo: function(){
    		
    		if(this.titulo == '' || this.conteudo == '')
    			return;

    		this.conteudos.push({
    			titulo: this.titulo,
    			conteudo: this.conteudo,
    		});

    		this.titulo = '';
    		this.conteudo = '';
    	},

    	removeConteudo: function(index){
    		this.conteudos.splice(index,1);
    	}
    },
    components:{
    	CustomTable,
    }    
  }
</script>