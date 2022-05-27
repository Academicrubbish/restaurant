<template>
	<div>
    <el-card>
			<div><p>开饭啦</p></div>
			<el-input style="margin-bottom:8px" placeholder="请输入账号" v-model="userName"/>
			<el-input placeholder="请输入密码" v-model="password" show-password/>
			<el-button type="success" round class="button" @click="login">登录</el-button>
		</el-card>
	</div>
</template>

<script>
import { loginToken } from 'network/login'

export default {
	name: "Login",
  data() {
    return {
			userName: this.$store.state.userName,
			password: ''
    }
  },
  methods: {
		//登录
    login() {
			loginToken(this.userName,this.password).then(res => {
				//登陆成功
				if (res.code == 1000){

					//记录当前的用户token
					//用于判断当前是哪个用户
					const product = {};
					product.token = res.subjects.token;
					product.userName = this.userName;

					this.$store.commit('changeToken',product)

					//在浏览器中，如果该token存在，则找到该token对应的缓存信息赋值给store
					//如果不存在，就创建token对象，并初始化
					var tokenKey = JSON.parse(localStorage.getItem(res.subjects.token))

					if (tokenKey != null) {

						const product = {};
						product.orderList = tokenKey.orderList,//用户曾经的订单
						product.nowCartList = tokenKey.nowCartList,//用户当前的购物车记录
						product.address = tokenKey.address,//用户默认地址
						product.nickName = tokenKey.nickName//用户昵称

						this.$store.commit('renewState', product)

					} else {//给新用户初始化

						const orderList = [];//用户曾经的订单
						const nowCartList = [];//用户当前的购物车记录
						const address = '';//用户默认地址
						const nickName = '未命名';//用户昵称
						var str = JSON.stringify({orderList,nowCartList,address,nickName})
						localStorage.setItem(res.subjects.token, str); //用token的值来命名

					}
					// console.log(this.$store.state.token)
					//记住密码
					// const list = [1,2,3,4,5]//可以存数组
					// var str = JSON.stringify({userName:this.userName,password:this.password,orderList:list})
					// localStorage.setItem(res.subjects.token, str); //用token的值来命名
					// console.log(JSON.parse(localStorage.getItem(res.subjects.token)))
				} else {
					this.$notify({
						title: '没有登陆成功哦',
						message: '可能是账号或密码错啦',
						duration: 0,
						position: 'top-left'
					});
				}
			})
		}
  }
}
</script>

<style scoped>
	p {
		text-align: center;
		font-size: 18px;
		color: #999;
		font-weight: 600;
		margin-bottom: 10px;
	}
	.el-input {
		width: 90%;
		margin-left: 5%;
	}
	.el-checkbox {
		margin-left: 7%;
		margin-top: 5px;
	}
	.el-card {
		width: 96%;
		margin-left: 2%;
		margin-top: 10px;
	}
	.button {
		width: 90%;
		margin-left: 5%;
		margin-top: 25px;
	}
</style>
