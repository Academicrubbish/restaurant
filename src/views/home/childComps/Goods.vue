<template>
	<div>
		<goods-item 
			v-for="(item, key) in goods" 
			:key="key"
			:goods-item="item"/>
	</div>
</template>

<script>

import GoodsItem from './GoodsItem.vue'

export default {
	name: "Goods",
	components: { GoodsItem },
	props: {
		goods: {
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
