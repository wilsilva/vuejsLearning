<style lang="sass">    
    
</style>
<template>
  <div class="main">
    <menu-superior></menu-superior>    
    <router-view></router-view>
    <rodape></rodape>
  </div>
</template>

<script>
  import MenuSuperior from './components/MenuSuperior.vue'
  import Rodape from './components/Rodape.vue'
  export default {
    
    replace: false,
  	
    data() {
      return {
        
      }
    },
    components:{
      MenuSuperior,
      Rodape,
    }
  }
</script>
