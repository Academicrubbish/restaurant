<template>
	<div>
    <el-empty description="购物车空空如也，去购物吧">
      <el-button type="primary" @click="click">购物</el-button>
    </el-empty>
	</div>
</template>

<script>


export default {
	name: "NoShop",
  methods: {
    click() {
      this.$router.replace('/home')
    }
  }
}
</script>

<style scoped>

</style>
