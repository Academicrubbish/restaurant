<template>
  <div class="nav-bar">
  <div class="left"><slot name="left"></slot></div>
  <div class="center"><slot name="center"></slot></div>
  <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default{
    name: "NavBar"
}
</script>

<style scoped>
  .nav-bar {
    display: flex;
    height: 50px;
    line-height: 50px;/* 字体大小 */
    text-align: center;
    box-shadow: 0 1px 1px rgba(224, 224, 224, 1);
  }
  .left, .right {
    width: 84px;
  }
  .center {
    flex: 1;
  }
</style>
