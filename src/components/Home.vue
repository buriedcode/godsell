<header>
  <meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
</header>
<template>
    <div style="width: 100%;height:auto" id="app">
      <SECTION>
        <swiper :options="swiperOption">
        <swiper-slide  class="my-swp-silde" v-for="(slide, key) in swiperList" :key="key" data-id="slide.id">
          <img class="my-swp-img" :src="slide.imgUrl" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div  class="container" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
        <div class="waterfall">
        <div :key="item.id" v-for="item in userList">
          <div  class="item">
            <img :src="item.img" style="width: 100%;"/>
            <span>{{item.info}}</span>
          </div>
        </div>
        </div>
      </div>

      </SECTION>
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
  // el: '#app',
  data () {
    return {
      scroller: null,
      loading: false,
      busy: false,
      check: false,
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
      userList: [],
      page: 1,
      pagesize: 5,
      i: 0
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
      }).catch(function (error) {
        console.log(error)
      })
    },
    getuserlist: function () {
      var that = this
      that.busy = true
      that.$axios({
        method: 'post',
        url: 'http://localhost:8016/user/users',
        data: {
          'pageSize': that.pagesize,
          'currentPage': that.page
        },
        headers: {}
      }).then(function (response) {
        console.log(response.data)
        that.busy = false
        if (response.data.data.length == 0) {
          that.busy = true
        }
        for (that.i = 0; that.i < response.data.data.length; that.i++) {
          that.userList.push(response.data.data[that.i])
        }
      }).catch(function (error) {
        console.log(error)
      })
    },
    loadMore () {
      console.log('more执行')
      this.page++
      this.getuserlist()
    }
  },
  mounted () {
    this.scroller = this.$el
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
  .container{width:100%;height:100%;margin: 0 auto}

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
