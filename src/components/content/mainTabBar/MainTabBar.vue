<template>
<div>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" src="@/assets/img/tabbar/home.svg">
      <img slot="item-active-icon" src="@/assets/img/tabbar/home-active.svg">
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="@/assets/img/tabbar/shopcart.svg">
      <img slot="item-active-icon" src="@/assets/img/tabbar/shopcart-active.svg">
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="@/assets/img/tabbar/profile.svg">
      <img slot="item-active-icon" src="@/assets/img/tabbar/profile-active.svg">
    </tab-bar-item>
  </tab-bar>
</div>
</template>

<script>
  import TabBar from 'components/common/tabbar/tabbar.vue'
  import TabBarItem from 'components/common/tabbar/tabbaritem.vue'

export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>
