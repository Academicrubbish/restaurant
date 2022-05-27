<template>
	<div>
		<!-- 购物车为空展示页 -->
		<no-shop v-if="this.$store.state.cartList.length == 0"/>

		<!-- 购物车页 -->
		<div v-else>
			<!-- 购物车列表页 -->
			<cart-data :cartData="cartList"/>
			<!-- 底部导航页 -->
			<cart-bottom/>
			<!-- 下单页 -->
			<order v-if="condition == 1"/>
		</div>

		<!-- 撑起被bottom挡住的内容 -->
		<div style="height:50px"/>
	</div>
</template>

<script>
import CartBottom from './childComps/CartBottom'
import CartData from './childComps/CartData'
import Order from './childComps/Order.vue'
import NoShop from './childComps/NoShop.vue'

export default {
	name: "Cart",
  components: { 
		CartData,
    Order,
    CartBottom,
    NoShop
	},
	data() {
		return {
			condition: 0,
			cartList: []
		}
	},
	methods: {
		getStoreData() {
			this.cartList = this.$store.state.cartList
		}
	},
	mounted() {
		this.getStoreData()
	}
}
</script>

<style scoped>

</style>
