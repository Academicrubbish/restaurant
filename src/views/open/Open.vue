<template>
<div>
	<!-- 文字图片区 -->
	<div class="container">
		<p class="text">开饭啦</p>
		<img src="../../assets/img/resource/kid-foods.jpg">
		<div class="baseline"></div>
	</div>
	<!-- 计时器 -->
	<div class="seconds" @click="click">{{seconds}}</div>

</div>
</template>

<script>

 export default {
	name: "Open",
	data() {
		return {
			second: 5,
			seconds: ''
		}
	},
	methods: {
		login() {
			var timeId = setInterval(() => { //周期性定时器
				if (this.second < 0) {
					//关停计时器
					clearInterval(timeId)

					//计时页面变成'点击跳过'
					this.seconds = "点击跳过"

					//三秒内没有点击就自动跳转页面
					setTimeout(()=>{
						this.click()
					},3000)

				} else {
					this.seconds = this.second + 's'
					this.second--
				}
			},1000)
		},
		click() {
			if (this.second < 0) { //使其在计时时 点击无响应
				this.$router.replace('/home')
			}
		}
	},
	mounted() {
		this.login()
	}
 }
</script>

<style scoped>
	img{
		width:100%;
		height: 90px;
		vertical-align:top;
	}

	.container{
		position:fixed;
		width:100%;
		top:40%;
		transform:translateY(-50%);
	}

	.text{
		color:#5184b8;
		font-size:80px;
		text-align:center;
	}

	.baseline{
		margin-top: 7px;
		border-top: 1px solid #ddd;
	}
	.seconds{
		position:absolute;
		right:2px;
		top:2px;
		width:70px;
		border-radius:5px;
		background:rgba(0,0,0,.5);
		color: white;
		text-align:center;
	}
</style>
