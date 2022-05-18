<template>
	<div>
		<cart-item 
			v-for="(item, key) in cartData" 
			:key="key"
			:cart-item="item"/>
	</div>
</template>

<script>

import CartItem from './CartItem.vue'

export default {
	name: "CartData",
	components: {	CartItem },
	props: {
		cartData: {
			type: Array,
			default() {
				return []
			}
		}
	}
}
</script>

<style scoped>

</style>
