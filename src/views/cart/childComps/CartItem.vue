<template>
	<div>
    <el-card :body-style="{ padding: '0px',margin:'0px'}">
      <el-container>
        <el-aside style="width:20px">
          <div @click="changePrice" style="align-self:center;">
            <el-checkbox v-model="cartItem.checked" disabled/>
          </div>
        </el-aside>
        <el-aside style="width:120px">
          <img :src="cartItem.imagePath">
        </el-aside>

        <el-container>
          <el-header style="height:23px">{{cartItem.name}}</el-header>
          <el-main/>
          <el-footer style="height:28px">
            <div class="price">
              <strong>￥{{cartItem.price*cartItem.count}}</strong>
            </div>
            <div style="float:right" v-if="condition==0" @click="counter">x{{cartItem.count}}</div>
            <el-input-number v-if="condition==1" v-model="num" @change="change" :min="0" size="mini"/>
          </el-footer>
        </el-container>

      </el-container>

    </el-card>
	</div>
</template>

<script>
export default {
	name: "CartItem",
  data() {
    return {
      condition: 0,
      num: 1
    }
  },
  props: {
    cartItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    counter() {
      this.condition = 1
      this.num = this.cartItem.count

      setTimeout(()=>{
        this.condition = 0
      },2000)
    },
    //通过计数器来改变购物车的餐品的数量
    //并同步到vuex中，进行管理
    change(value) {
      const product = {};
      product.did = this.cartItem.did;
      product.count = value;

      this.$store.commit('cartCount', product)
      //更新数据
      this.$store.commit('renew')
      //更新storage数据
      this.$store.commit('renewStorage')
    },

    changePrice() {
      const product = {};
      product.did = this.cartItem.did;

      this.$store.commit('cartPrice', product)

      //更新数据
      this.$store.commit('renew')
    }
  }
}

</script>

<style scoped>
  .el-card {
    width: 98%;
    margin-top: 10px;
    margin-left: 1%;
    padding: 15px;
  }

  .el-aside {
    text-align: center;
    display:flex;
  }

  .el-aside img {
    align-self:center;
    width:100%;
    height:90px
  }

  .el-header {
    padding: 0;
    font-size: 18px;
  }
  
  .el-main {
    padding: 5px 0 0 5px;
  }

  .el-footer {
    padding-left: 1%;
    padding-right: 0;
  }

  .price {
    width:75px;
    position:absolute;
    margin-top:2px;
    color:red;
  }

  .el-input-number {
    height: 20px;
    width: 90px;
    float: right;
  }
</style>
