<template>
	<div>
		<!-- 搜索区 -->
		<div>
      <el-input placeholder="搜索菜品名称和原料..." type="text" v-model="input">
        <el-button slot="append" icon="el-icon-search" @click="searchHomeData"/>
      </el-input>
    </div>
		<!-- 商品列表 -->
		<goods :goods="goodsList"/>
		<!-- 点击加载 -->
		<div @click="loadMore" class="el-input">
			<el-alert v-if="condition == 1" title="点击加载更多" type="success" :closable="false" center effect="dark"/>
		</div>
		<!-- 没有更多数据了 -->
		<el-alert v-if="condition == 0" title="没有更多数据了！" type="error" center show-icon/>
	</div>
</template>

<script>

import { getHomeData,searchHomeData } from 'network/home'

import Goods from './childComps/Goods.vue'

export default {
	name: "Home",
	components: {
		Goods	
	},
	data() {
		return {
			total: 0,
			goodsList: [],
			start: 0,
			condition: 1,
			input: ''
		}
	},
	methods: {
		/**
		 * 网络请求相关函数 */ 
		getHomeData(start) {
			getHomeData(start).then(res => {
				this.total = res.total
				this.goodsList.push(...res.subjects)
				//(...res.data.list)
        //将请求过来的数组解构一个一个存到我们的数组里去
        //因为如果直接传值的话，后面的就会覆盖前面的
			})
		},

		searchHomeData() {
			var value = this.input.trim()
			if (value == '') {
				this.condition = 1
			} else {
				this.condition = 0
			}
			searchHomeData(value).then(res => {
				res.subjects.forEach(element => {
					//匹配value 对应字符 g 全局匹配
					var patt = new RegExp(value,"g");
					element.name = element.name.replace(patt,`<span style="color: red">${value}</span>`);
					element.material = element.material.replace(patt,`<span style="color: red">${value}</span>`);

				});
				this.goodsList = res.subjects
			}).catch(err => {
				this.$notify({
					title: '搜索不到噢',
					message: '可能是输入关键词错啦',
					position: 'top-left'
				});
			})
		},
		/**
		 * 事件监听相关函数 */
		loadMore() {
			if (this.goodsList.length == this.total) {
				this.condition = 0
			} else {
				this.condition = 1
				this.start = this.goodsList.length
				this.getHomeData(this.start)
			}
    }
	},
	mounted() {
		this.getHomeData()
	}
}
</script>

<style scoped>
  .el-input {
		margin-top: 15px;
    width: 98%;
		margin-left:1%;
  }
</style>
