import Vue from 'vue'
import VueRouter from 'vue-router'

//1.安装插件
Vue.use(VueRouter)

//2.创建router
const routes = [
  {
		path:'/',
		redirect:'/open'
  },
  {
		path: '/open',//开屏页
		component:() => import('../views/open/Open')
  },

  {
		path: '/home',//首页
		component:() => import('../views/home/Home')
  },
  {
		path: '/detail',//详情页
		component:() => import('../views/detail/Detail')
  },

  {
    path: '/cart',//购物车
    component:() => import('../views/cart/Cart')
	},
  {
    path: '/order',//下单页
    component:() => import('../views/cart/childComps/Order')
  },

  {
		path: '/profile',//我的
		component:() => import('../views/profile/Profile')
  },
  {
		path: '/list',//订单页
		component:() => import('../views/profile/childviews/List')
  },
  {
		path: '/profileData',//用户资料页
		component:() => import('../views/profile/childviews/profileData')
  },
  {
		path: '/profileAddress',//用户地址页
		component:() => import('../views/profile/childviews/profileAddress')
  },
  {
		path: '/pending',//用户待收货页
		component:() => import('../views/profile/childviews/pending')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

//3.导出
export default router
