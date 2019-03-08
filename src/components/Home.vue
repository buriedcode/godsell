<template>
    <div style="height: 100%;width: 100%">

      <swiper :options="swiperOption">
        <swiper-slide  class="my-swp-silde" v-for="(slide, key) in swiperList" :key="key" data-id="slide.id">
          <img class="my-swp-img" :src="slide.imgUrl" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div  class="container" >
        <div class="waterfall">
        <div :key="item.id" v-for="item in userList"  >
          <div  class="item">
            <img :src="item.img" style="width: 100%;"/>
            <span>{{item.info}}</span>
          </div>
        </div>
        </div>
      </div>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Home',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {

      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: true,
        speed: 1000,
        autoHeight: true,
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true
      },
      swiperList: [],
      playList: [],
      userList: []
    }
  },
  methods: {
    getbanaer: function () {
      var that = this
      that.$axios({
        method: 'get',
        url: 'http://localhost:8016/user/banaer',
        data: {
        },
        headers: {}
      }).then(function (response) {
        console.log(response.data)
        that.swiperList = response.data.data
        console.log('12345' + response.data.data)
        console.log('12345' + response.data.data[0].imgUrl)
      }).catch(function (error) {
        console.log(error)
      })
    },
    getuserlist: function () {
      var that = this
      that.$axios({
        method: 'get',
        url: 'http://localhost:8016/user/users',
        data: {
        },
        headers: {}
      }).then(function (response) {
        console.log(response.data)
        that.userList = response.data.data
      }).catch(function (error) {
        console.log(error)
      })
    }
  },
  created: function () {
    this.getbanaer()
    this.getuserlist()
  }
}
</script>
<style>
  .swiper .swiper-pagination-bullet-active{
    background-color: #FFF; /* 改变轮播图下方分页按钮颜色*/
  }
</style>
<style scoped>
  swp-silde{
    height: 100%;
  }
  .my-swp-img{
    height: 100%;
    width: 100%;
  }
  .container{width:100%;margin: 0 auto;}

  /*瀑布流层*/

  .waterfall{

    -moz-column-count:2; /* Firefox */

    -webkit-column-count:2; /* Safari 和 Chrome */

    column-count:2;

    -moz-column-gap: 1em;

    -webkit-column-gap: 1em;

    column-gap: 1em;

  }

  /*一个内容层*/

  .item{

    padding: 0.5em;

    margin: 0 0 1em 0;

    -moz-page-break-inside: avoid;

    -webkit-column-break-inside: avoid;

    break-inside: avoid;

    border: 1px solid #000;

  }

  .item img{

    width: 100%;

    margin-bottom:10px;

  }
</style>
