<template>
  <div>
		<!-- 页头 -->
    <el-breadcrumb>
			<el-breadcrumb-item :to="{ path: '/profile' }" replace style="padding-left:15px">用户</el-breadcrumb-item>
			<el-breadcrumb-item>我的资料</el-breadcrumb-item>
		</el-breadcrumb>
		<p class="text">我的资料</p>

		<!-- 功能 -->
		<el-card>
			<el-row>
				<el-col :span="12">
					<div class="grid-content bg-purple">昵称：{{this.$store.state.nickName}}</div>
				</el-col>
				<el-col :span="12">
					<div class="grid-content bg-purple-light">
						<el-button style="float:right" type="text" @click="open">点击修改</el-button>
					</div>
				</el-col>
			</el-row>
		</el-card>
	</div>
</template>

<script>
export default {
  name:'profileData',
	methods: {
		//修改昵称
		open() {
			this.$prompt('请输入新昵称','修改昵称',{
				confirmButtonText: '确定',
				cancelButtonText: '取消',
			}).then(({value}) => {
				if (value == null) {
					this.$notify({
						title: '不能输入为空',
						position: 'top-left'
					});
				} else {
					this.changeName(value)
					this.$message({
						type: 'success',
						message: '你的昵称是' + value
					});
				}
			}).catch(() => {
				this.$message({
					type: 'info',
					message: '取消输入'
				});
			});
		},
		//将新的昵称保存到store
		changeName(value) {
			const product = {}
			product.name = value
			this.$store.commit('changeNickName', product)
			this.$store.commit('renewStorage')
		}
	}
}
</script>

<style scoped>
	.el-breadcrumb {
		background-color: #f6f6f6;
		height: 40px;
		margin-top: 12px;
		font-size: 16px;
		line-height: 2.5;
	}
  .text{
		font-size:30px;
		text-align:center;
		margin-top: 20px;
	}
	.el-card {
		width: 96%;
		margin-left: 2%;
		margin-top: 10px;
	}
	.el-row {
		display:flex
	}
	.el-col {
		align-self:center
	}
</style>

<style>
  .el-message-box {
    width: 90%;
  }
</style>