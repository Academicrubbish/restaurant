<template>
	<div>
    <el-breadcrumb>
			<el-breadcrumb-item :to="{ path: '/cart' }" replace style="padding-left:15px">购物车</el-breadcrumb-item>
			<el-breadcrumb-item>订单页</el-breadcrumb-item>
		</el-breadcrumb>
    <el-card>
      <el-form>
        <el-form-item label="联系人：">
          <el-input v-model="name"></el-input>
        </el-form-item>
        <el-form-item label="性别：">			
          <el-radio v-model="radio" label="1">男</el-radio>
          <el-radio v-model="radio" label="2">女</el-radio>
        </el-form-item>
        <el-form-item label="联系电话：">
          <el-input v-model="phone"/>
        </el-form-item>
        <el-form-item label="送餐地址：">
          <el-input v-model="address" type="textarea" :rows="5"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" @click="onSubmit" style="width:100%">确定下单</el-button>
        </el-form-item>
      </el-form>
    </el-card>
	</div>
</template>

<script>
import { formatDate } from 'common/utils'

import { addOrder } from 'network/order'

export default {
	name: "Order",
  data() {
    return {
      radio: '0',
      name: this.$store.state.nickName,
      phone: '',
      address: this.$store.state.address
    }
  },
  methods: {
    addOrder(did,tel,uerName,sex,address) {
      addOrder(did,tel,uerName,sex,address).then(res => {})
    },
    onSubmit() {
      //判断信息是否都输入
      this.name = this.name.trim()//去掉无效空格
      if (this.name == '' || this.radio == 0 || this.phone == '' || this.address == '') {
        this.$notify({
          title: '下单失败',
          message:'您的订单信息没有填写完全',
          position: 'top-left'
        });
      } else {
        //判断手机号是否合法
        var telPatt = /^1[356789]\d{9}$/
        if (!telPatt.test(this.phone)) {
          this.$notify({
            title: '下单失败',
            message:'您的手机号填写不合法',
            position: 'top-left'
          });
        } else {

          //将数据传给后端
          for(let item of this.$store.state.cartList){
            if(item.checked == true) {
              this.addOrder(item.did, this.phone, this.name, this.radio, this.address);
            }
          }

          var time = formatDate('yyyy-MM-dd hh:mm'); //获取当前时间
          const product = {};
          product.time = time;
          product.name = this.name;
          //将选中的商品信息传至订单页

          this.$store.commit('changeOrderList',product);

          //删除购物车里的已经被结算的商品
          this.$store.commit('deleteCartList');
          this.$store.commit('renew');
          //更新storage数据
          this.$store.commit('renewStorage')

          this.$notify({
            title: '下单成功',
            message:'您可以在用户中心查看订单状态',
            position: 'top-left'
          });
          this.$router.back();
        }
      }
    }
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
</style>
