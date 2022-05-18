<template>
	<div>
    <el-card>
      <el-container>

        <el-aside style="width:60px;display:flex">
          <img :src="squareUrl">
        </el-aside>

        <el-container>

          <el-header style="height:45px;display:flex">
            <strong style="align-self:center">{{this.$store.state.nickName}}</strong>
          </el-header>

          <el-main style="height:45px">
            <div style="align-self:center">用户名：mengtion</div>
          </el-main>
          
        </el-container>

      </el-container>
    </el-card>
	</div>
</template>

<script>

 export default {
	name: "UserData",
  data () {
      return {
        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      }
    }
 }
</script>

<style scoped>
  img {
    align-self:center;
    width: 60px;
    height: 60px;
  }
  .el-card {
		width: 96%;
		margin-left: 2%;
		margin-top: 10px;
	}
  .el-container {
    height: 90px;
  }
  .el-main {
    display: flex;
    padding: 0;
    padding-left: 20px;
  }
</style>
