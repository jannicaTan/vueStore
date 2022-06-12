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
<style lang="less">
@import url('https://at.alicdn.com/t/font_2730880_ylrio3ahhx.css');
body{
  font-size: 16px;
  font-family: SourceHanSansSC;
  color: #333;
}
</style>
