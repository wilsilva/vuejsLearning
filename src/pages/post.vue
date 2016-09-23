
<style lang="sass">  
  .post-unique{
    width:100%;
    display: block;        
    font-family: Ubuntu Mono;
    margin: 5% 5%;
    text-align: justify;    
        
    h2{
      font-size: 1.5rem;
      text-align:center;
    }
       
    p{
      font-size: 0.9rem;
      text-align: justify;
    }
  }        
</style>

<template>    	 

    <article class="post-unique">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
    </article>    

</template>

<script>
import Post from '../services/Post.service.js';
	export default {
    
   	replace: false,
  	 
    data() {
      return {	        
          post: {},         
      }
    },

    ready(){
       this.getPost();        
    },
      
    methods:{
        
      getPost(){
        let post = new Post();  
        post.post(this.$route.params.id).then((successResponse) => {                        
          this.$set('post',successResponse.body);              
        },(errorResponse) => {
          console.error(errorResponse);
        });
      }

    },

    components:{
	    	      
	  }      
  }
</script>