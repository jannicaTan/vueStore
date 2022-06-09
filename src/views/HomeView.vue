<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
import {JingpinApi} from '@/request/api'
export default {
  name: 'HomeView',
  components: {
  },
  created(){
    JingpinApi().then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
  },
  methods:{
    getData(){
      
    }
  }
}
</script>
