<!--
<template>
  <div class="m-tabbar">
    <a class="m-tabbar-item is-active">
    <span class="m-tabbar-item-icon">
       <img src="../assets/icon_home.png"/>
    </span>
      <span class="m-tabbar-item-text">
          首页
    </span>
    </a>
    <a class="m-tabbar-item">
    <span class="m-tabbar-item-icon">
       <img src="../assets/icon_home.png" alt="">
    </span>
      <span class="m-tabbar-item-text">
          书影音
    </span>
    </a>
    <a class="m-tabbar-item">
    <span class="m-tabbar-item-icon">
       <img src="../assets/icon_home.png" alt="">
    </span>
      <span class="m-tabbar-item-text">
          广播
    </span>
    </a>
    <a class="m-tabbar-item">
    <span class="m-tabbar-item-icon">
       <img src="../assets/icon_home.png" alt="">
    </span>
      <span class="m-tabbar-item-text">
          小组
    </span>
    </a>
    <a class="m-tabbar-item">
    <span class="m-tabbar-item-icon">
       <img src="../assets/icon_home.png" alt="">
    </span>
      <span class="m-tabbar-item-text">
          我的
    </span>
    </a>
  </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped lang="less">
  .m-tabbar{
    display: flex;
    flex-direction: row;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    overflow: hidden;
    height: 50px;
    background: #fff;
    border-top: 1px solid #e4e4e4;

    .m-tabbar-item{
      flex: 1;
      text-align: center;
      .m-tabbar-item-icon{
        display: block;
        padding-top: 2px;
        img{
          width: 28px;
          height: 28px;
        }
      }
      .m-tabbar-item-text{
        display: block;
        font-size: 10px;
        color:#949494;
      }
      &.is-active{
        .m-tabbar-item-text{
          color: #42bd56;
        }
      }
    }
  }

</style>
-->
<header>
<meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
</header>
<template>

  <div class="box">
    <!--<mTabbar>
      <mTabbarItem id='tab1'>
        <img src="../assets/icon_home.png" alt="" slot="icon-normal">
        首页
      </mTabbarItem>
      <mTabbarItem id='tab2'>
        <img src="../assets/icon_home.png" alt="" slot="icon-normal">
        书影音
      </mTabbarItem>
      <mTabbarItem id='tab3'>
        <img src="../assets/icon_home.png" alt="" slot="icon-normal">
        广播
      </mTabbarItem>
      <mTabbarItem id='tab4'>
        <img src="../assets/icon_home.png" alt="" slot="icon-normal">
        小组
      </mTabbarItem>
      <mTabbarItem id='tab5'>
        <img src="../assets/icon_home.png" alt="" slot="icon-normal">
        我的
      </mTabbarItem>
    </mTabbar>-->
    <div class="roll"><router-view></router-view></div>
    <footer style="height: 70px;" class="foot">
      <div class="div3" @click="select(1)">
        <img src="../assets/daohang_01_on.png"  height="30px" width="30px" alt="" slot="icon-normal">首页
      </div>
      <div class="div3" @click="select(2)">
        <img src="../assets/daohang_02_on.png" height="30px" width="30px" alt="" slot="icon-normal">详情
      </div>
      <div class="div3" @click="select(3)">
        <img src="../assets/daohang_03_on.png" height="30px" width="30px" alt="" slot="icon-normal">报名
      </div>
      <div class="div3" @click="select(4)">
        <img src="../assets/daohang_04_on.png" height="30px" width="30px" alt="" slot="icon-normal">搜索
      </div>
      <div class="div3" @click="select(5)">
        <img src="../assets/daohang_05.png" height="30px" width="30px" alt="" slot="icon-normal">排名
      </div>
    </footer>
  </div>
</template>

<script>
  /*import mTabbar from '../components/tabbar'
  import mTabbarItem from '../components/tabbar-item'*/
  export default {
    name: 'index',
    /*components: {
      mTabbar,
      mTabbarItem
    },*/
    methods:{
      select:function (type) {
        if(type==1){
          this.$router.push({
            path: '/index/home'
          })
        }else if(type==2){
          this.$router.push({
            path: '/index/info'
          })
        }else if(type==3){
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
