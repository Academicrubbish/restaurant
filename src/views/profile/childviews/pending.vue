<template>
	<div>
		<!-- 页头 -->
		<el-breadcrumb>
			<el-breadcrumb-item :to="{ path: '/profile' }" replace style="padding-left:15px">用户</el-breadcrumb-item>
			<el-breadcrumb-item>我的订单</el-breadcrumb-item>
		</el-breadcrumb>

		<!-- 表单 -->
		<p class="text">订单记录</p>
		<el-card>
			<el-table	:data="tableData"	stripe width='100%'>
				<el-table-column prop="num" label="编号" min-width="50"	align="center"/>
				<el-table-column label="菜品"	align="center">
					<template scope="scope">
						<img :src="scope.row.image" width="68" height="45"/>
          </template>
				</el-table-column>
				<el-table-column prop="time" label="下单时间" align="center"/>
				<el-table-column prop="name" label="联系人" align="center"/>
			</el-table>
	</el-card>
	</div>
</template>

<script>
export default {
	name: "pending",
	data() {
		return {
			tableData:[]
		}
	},
	methods: {
		//展示数据
		obtainData() {
			var i = 1;
			for(let item of this.$store.state.pendingList) {
				const product = {};
				product.num = i;
				product.image = item.image;
				product.name = item.name;
				product.time = item.time;
				this.tableData.push(product);
				i++;
			}
		}
	},
	mounted() {
		this.obtainData()
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
	.el-card {
		width: 96%;
		margin-left: 2%;
		margin-top: 10px;
	}
	.text{
		font-size:30px;
		text-align:center;
		margin-top: 20px;
	}
</style>
