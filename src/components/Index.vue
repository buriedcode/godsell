
<header>
<meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
</header>
<template>
  <div class="box">
    <div class="roll"><router-view></router-view></div>
    <footer style="height: 70px;" class="foot">
      <div class="div3" @click="select(1)">
        <img src="../assets/daohang_01.png"  height="30px" width="30px" alt="" slot="icon-normal" v-if="p1" >
        <img src="../assets/daohang_01_on.png" v-if="p1_on" height="30px" width="30px" alt="" slot="icon-normal"><span>首页</span>
      </div>
      <div class="div3" @click="select(2)">
        <img src="../assets/daohang_02.png" height="30px" width="30px" alt="" slot="icon-normal" hidden="true">
        <img src="../assets/daohang_02_on.png" height="30px" width="30px" alt="" slot="icon-normal"><span>详情</span>
      </div>
      <div class="div3" @click="select(3)">
        <img src="../assets/daohang_03.png" height="30px" width="30px" alt="" slot="icon-normal" hidden="true">
        <img src="../assets/daohang_03_on.png" height="30px" width="30px" alt="" slot="icon-normal"><span>报名</span>
      </div>
      <div class="div3" @click="select(4)">
        <img src="../assets/daohang_04.png" height="30px" width="30px" alt="" slot="icon-normal" hidden="true">
        <img src="../assets/daohang_04_on.png" height="30px" width="30px" alt="" slot="icon-normal"><span>搜索</span>
      </div>
      <div class="div3" @click="select(5)">
        <img src="../assets/daohang_05_on.png" height="30px" width="30px" alt="" slot="icon-normal" hidden="true">
        <img src="../assets/daohang_05.png" height="30px" width="30px" alt="" slot="icon-normal"><span>排名</span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      p1: true,
      p1_on: false,
      p2: false,
      p2_on: false,
      p3: false,
      p3_on: true,
      p4: false,
      p4_on: true,
      p5: false,
      p5_on: true
    }
  },
  methods: {
    select: function (type) {
      if (type == 1) {
        this.$router.push({
          path: '/index/home'
        })
      } else if (type == 2) {
        this.$router.push({
          path: '/index/info'
        })
      } else if (type == 3) {
        this.$router.push({
          path: '/index/signUp'
        })
      }
      console.log(type)
    }
  }

}
</script>

<style>
  html, body{ margin:0; height:100%; }
  .div3{
    width: 20%;
    height: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .box {
    display: flex;
    display: -webkit-flex;
    height: 100%;
    flex-direction: column;
  }
  .roll{
    flex: 1; width: 100%;overflow-y: auto;-webkit-overflow-scrolling: touch;height: 100%;margin: 0px;
  }
  .foot{
    display: flex;

  }

</style>
