<template>
	<div>
		<!-- 页头 -->
		<el-breadcrumb>
			<el-breadcrumb-item :to="{ path: '/profile' }" replace style="padding-left:15px">用户</el-breadcrumb-item>
			<el-breadcrumb-item>我的订单</el-breadcrumb-item>
		</el-breadcrumb>

		<!-- 表单 -->
		<p class="text">订单记录</p>
		<el-card>
			<el-table	:data="tableData"	stripe width="100%">
				<el-table-column prop="num" label="编号" min-width="34" align="center"/>
				<el-table-column label="菜品" align="center">
					<template scope="scope">
						<img :src="scope.row.image" width="68" height="45"/>
          </template>
				</el-table-column>
				<el-table-column prop="time" label="下单时间" align="center"/>
				<el-table-column prop="name" label="联系人" align="center" min-width="70"/>
			</el-table>
    </el-card>
    <div>
      <el-pagination
        small
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-size="5"
        :page-count="total"
        layout="prev, pager, next, jumper">
      </el-pagination>
    </div>
	</div>
</template>

<script>

import { getOrderData } from 'network/profile'

import {getDate} from 'common/utils'

export default {
	name: "allList",
	data() {
		return {
			tableData:[],
      currentPage4: 1,
      total: 0
		}
	},
	methods: {
    /**
     * 网络请求相关函数
    */
    getOrderData(start) {
      getOrderData(start).then(res => {
        this.total = Math.ceil(res.total/5) - 1
        const list = []
        for(let item of res.subjects) {
          const product = {};
          product.num = item.oid*1 - 130;
          product.image = require('assets/img/resource/'+item.img_sm);
          product.name = item.user_name;
          product.time = getDate(item.order_time*1,'yyyy-MM-dd hh:mm');
          list.push(product);
        }
        this.tableData = list
      })
    },
    handleCurrentChange(val) {
      this.getOrderData((val-1)*5)
    }
	},
	mounted() {
    this.getOrderData(0)
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
	.el-card {
		width: 96%;
		margin-left: 2%;
		margin-top: 10px;
	}
	.text{
		font-size:30px;
		text-align:center;
		margin-top: 20px;
	}
	.el-table th.el-table__cell>.cell {
		text-align: center;
	}
	.el-table td.el-table__cell div {
		text-align: center;
	}
  .el-pagination {
    width: 96%;
		margin-left: 2%;
  }
	.el-pagination__jump {
		margin-left: 0px;
	}
</style>
