<template>
  <div class="logout">
    <div class="version">Version:1.0.0</div>
    <el-button type="success" round @click="logout">退出登录</el-button>
	</div>
</template>

<script>

 export default {
	name: "Logout",
	methods: {
		logout() {
			this.$store.commit('Logout')
		}
	}
}
</script>

<style scoped>
  .logout {
		width: 96%;
		margin-left: 2%;
		margin-top: 25px;
	}
	.version {
		text-align: center;
		font-size: 12px;
		color: #aaa;
	}
	.el-button {
		width: 100%;
	}
</style>
