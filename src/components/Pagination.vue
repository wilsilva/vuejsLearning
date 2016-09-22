<style lang="sass">
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
	<div class="pagination">
      <ul>
        <li v-for="pageNumber in totalPages">
          <a href="#" @click="callMethod(pageNumber)" :class="{'current-page': currentPage == pageNumber}">{{ pageNumber+1 }}</a>
        </li>
      </ul>
    </div>  
</template>
<script>
	export default{
		replace: false,
		props:{
			method: Function,
			totalPages: Number,
			currentPage: Number,
		},
		methods:{
			callMethod(pageNumber){
				this.method(pageNumber);
			}
		}
	}
</script>