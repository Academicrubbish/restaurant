<template>
  <div>
    <nav-bar class="nav">
      <div slot="left">开饭啦</div>
      <el-button slot="right" icon="el-icon-more"/>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: "mainNavBar",
  components: {
    NavBar
  }
}
</script>

<style scoped>
  .nav {
    background-color: #f6f6f6;
    color: #999;
    font-size: 18px;
    
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 2;
  }
  .el-button {
    color: #999;
    background-color: #f6f6f6;
  }
</style>
