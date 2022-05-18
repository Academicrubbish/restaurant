import axios from 'axios'

export function request(config) {

	//1.创建axios实例
	const instance = axios.create({
		baseURL: 'http://mengtion.vip/kfl-api/api',
		timeout: 5000
	})

	// //2.axios的拦截器
	instance.interceptors.response.use(res => {
		return res.data//只需要res里的data
	},err => {
		console.log(err)
	})

	//3.发送真正的网络请求
	return instance(config)
}
