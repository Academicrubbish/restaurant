<template>
	<div>
		<!-- 页头 -->
		<el-breadcrumb>
			<el-breadcrumb-item :to="{ path: '/home' }" replace style="padding-left:15px">首页</el-breadcrumb-item>
			<el-breadcrumb-item>详情</el-breadcrumb-item>
		</el-breadcrumb>
		<!-- 详情内容 -->
		<el-card :body-style="{ padding: '0px' }">
			<div style="width: 94%;margin-left: 3%;">
				<!-- 标题 -->
				<div class="name" v-html="name"></div>
				<el-divider/><!-- 分割线 -->
				<!-- 图片 -->
				<img :src="imagePath">
				<!-- 内容区 -->
				<div class="textBox">
					<div class="text">
						<div><strong>主要原料：</strong>{{material}}</div>
						<div class="detail">{{detail}}</div>
						<el-divider/><!-- 分割线 -->
						<div class="price">￥{{price}}</div>
					</div>
				</div>
			</div>
    </el-card>
		<!-- 订餐 -->
		<div class="shopBox">
			<div v-if="cartListLength == 0">
				<el-button type="success" @click="addToCart">加入购物车</el-button>
			</div>
			<div v-else>
				<el-badge :value="cartListLength">
					<el-button type="success" @click="addToCart">加入购物车</el-button>
				</el-badge>
			</div>
			<el-button type="warning" class="button" @click="goBack">我再看看</el-button>
		</div>
	</div>
</template>

<script>

import { getDetailData } from 'network/detail'

export default {
	name: "Detail",
	data() {
		return {
			did: this.$route.query.did,
			name: '',
			imagePath: '',
			material: '',
			detail: '',
			price: ''
		}
	},
	computed: {
		cartListLength() {
			return this.$store.state.cartList.length
		}
	},
	methods: {
		//返回首页
		goBack() {
			this.$router.back()
		},
		//把详情页的图片，did，用户，以及点餐时间 传到购物车
		addToCart() { 
			if (!this.$store.state.token) {
				this.$notify({
					title: '还没有登录噢',
					message: '请前往用户页登录先噢，亲',
					position: 'top-left'
				});
			} else {
				

				const product = {};
				product.did = this.did;
				product.imagePath = this.imagePath;
				product.name = this.name;
				product.price = this.price;
				product.checked = false;

				this.$store.commit('addCart', product)
				this.$store.commit('renewStorage')
			}
		},
		// 网络请求相关函数
		getDetailData() {
			getDetailData(this.did).then(res => {
				this.name = res.subjects[0].name
				this.imagePath = require('assets/img/resource/'+res.subjects[0].img_lg)
				this.material = res.subjects[0].material
				this.detail = res.subjects[0].detail
				this.price = res.subjects[0].price
			})
		}
	},
	created() {
		this.getDetailData()
	}
}
</script>

<style scoped>
	.el-breadcrumb {
		background-color: #f6f6f6;
		height: 40px;
		width: 94%;
		margin-left: 3%;
		margin-top: 12px;
		font-size: 16px;
		line-height: 2.5;
	}
	.el-card {
		width: 94%;
		margin-left: 3%;
	}
	.el-card .name {
		font-size:25px;
		margin-top:10px;
	}
	.el-card img {
		width: 100%;
		margin-bottom:-6px;
	}
	.el-card .textBox {
		background-color: #f1f1f1;
		margin-bottom: 10px;
		border-radius: 5px;/* 边框圆角 */
	}
	.el-card .text {
		width: 92%;
		margin-left: 4%;
		padding: 10px;
	}
	.el-card .detail {
		margin-top: 10px;
		font-size: 14px;
	}
	.el-card .price {
		height: 37px;
		color: red;
		font-size: 18px;
	}
	.shopBox {
		width: 94%;
		margin-left: 3%;
		height: 60px;
		background-color: #f1f1f1;
		border-radius: 4px;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
	.el-divider {
		margin-top: 12px;
		margin-bottom: 12px;
	}
	.button{
		margin-right:12px;
		margin-left:5px;
	}
</style>