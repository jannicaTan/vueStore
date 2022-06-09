<template>
  <div id="app">
    <Header></Header>
    <Nav></Nav>
    <router-view/>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '@/components/public/Header'
import Footer from '@/components/public/Footer'
import Nav from '@/components/public/Nav'
export default {
  components:{
    Header,
    Footer,
    Nav
  }
}
</script>
<style>
</style>
