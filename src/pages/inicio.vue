
<style lang="sass">
  .busca{
    input[type="text"]{
      width: 29%;
      height: 30px;
      font-size: 1rem;
      font-family: Ubuntu;
      margin-left: 35%;
      padding-left: 1%;
    }
  }

  .postagens{
    width: 94%;
    padding: 3% 3%;

    
    h1{
      text-align: center;
      font-size: 2.5rem;
    }
    .post{
        width:100%;
        display: block;        
        
        h2{
          font-size: 1.5rem;
        }
        
        p{
          font-size: 0.9rem;
          text-align: justify;
        }
    }    
  }

  .current-page{
    color: red;    
  }

  .pagination{
    width: 100%;
    display: block;

    ul{
      position: relative;
      margin-left: 10%;
      padding: 0;
      list-style: none;

      li{
        display: inline;
        margin: 5px 5px;
      }
    }    
  }

</style>
<template>
    <div class="busca">
      <input placeholder="Pesquisar..." type="text" v-model="search">
    </div>
	  <section class="postagens">
      <h1>Postagens</h1>
      <article v-for="post in posts | filterBy search | paginate " class="post">
          <h2><a v-link='{ path: "/post/".concat(post.id) }'>{{ post.title }}</a></h2>
          <p>{{ post.body }}</p>
      </article>
    </section>
    <!--<div class="pagination">
      <ul>
        <li v-for="pageNumber in totalPages">
          <a href="#" @click="setPage(pageNumber)" :class="{'current-page': currentPage == pageNumber}">{{ pageNumber+1 }}</a>
        </li>
      </ul>
    </div> -->
    <pagination :method="setPage" :total-pages="totalPages" :current-page="currentPage"></pagination>
</template>
<script>
import Pagination from "../components/Pagination.vue"
import Post from "../services/Post.service.js"

	export default {
    
    	replace: false,
  	 
	    data() {
	      return {	        
          posts: [],
          search: '',
          currentPage: 0,
          itemsPerPage: 5,
          resultCount: 0,

	      }
	    },

      ready(){        
        this.getPosts();
      },
      methods:{
        getPosts(){
          
          let post = new Post();
          post.posts().then((successResponse) => {              
              this.$set('posts',successResponse.body);              
          }).catch((errorResponse) => {
              console.error(errorResponse);
          });

        },        
        setPage(pageNumber){
          this.currentPage = pageNumber;
        }
      },
      computed:{
        totalPages(){
          return Math.ceil(this.resultCount / this.itemsPerPage);
        }
      },
	    components:{
	       Pagination,
	    },
      filters:{
        paginate(list){        
            
          this.resultCount = list.length;
            
          if (this.currentPage >= this.totalPages) {
             this.currentPage = this.totalPages;             
          }
          
          let index = this.currentPage * this.itemsPerPage;

          return list.slice(index, index + this.itemsPerPage);
        }
      }
  	}
</script>