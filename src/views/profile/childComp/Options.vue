<template>
  <div style="margin-top:10px">
		<div @click="dataClick">
			<el-card>我的资料</el-card>
		</div>
		<div @click="addressClick">
			<el-card>默认地址</el-card>
		</div>
		<div @click="listClick">
			<el-card>用户订单</el-card>
		</div>
		<div @click="pendingClick">
			<el-card>待收货</el-card>
		</div>
		<div @click="allListClick">
			<el-card>全部订单</el-card>
		</div>
	</div>
</template>

<script>

 export default {
	name: "Options",
	methods: {
		dataClick() {
			this.$router.push('/profileData')
		},
		addressClick() {
			this.$router.push('/profileAddress')
		},
		listClick() {
			this.$router.push('/list')
		},
		pendingClick() {
			this.$router.push('/pending')
		},
		allListClick() {
			this.$router.push('/allList')
		}
	}
}
</script>

<style scoped>
	.el-card {
		width: 96%;
		margin-left: 2%;
	}
</style>
