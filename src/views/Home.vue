<template>
  <div class="home">
    <section class="banxin">
     hahah
    </section>
  </div>
</template>

<script>
import { JingpinApi } from '@/request/api'
export default {
  name: 'HomeView',
  components: {
  },
  created() {
    JingpinApi().then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    getData() {

    }
  }
}
</script>
<style lang="less" scoped>
@import '@/total.less';
.home{
  height: 960px;
  section{
    background-color: pink;
    height: 100%;
  }
}
</style>