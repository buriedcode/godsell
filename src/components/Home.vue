<header>
  <meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
</header>
<template>
    <div style="height: 100%;width: 100%" id="app">
      <SECTION>
     <!--   <swiper :options="swiperOption">
        <swiper-slide  class="my-swp-silde" v-for="(slide, key) in swiperList" :key="key" data-id="slide.id">
          <img class="my-swp-img" :src="slide.imgUrl" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>-->
      <div  class="container" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
        <div class="waterfall">
        <div :key="item.id" v-for="item in userList"  >
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
    },
    loadMore () {
      console.log('more执行')
    },
    onScroll: function () {
      console.log('123456789')
      // 可滚动容器的高度
      let innerHeight = document.querySelector('#app').clientHeight
      // 屏幕尺寸高度
      let outerHeight = document.documentElement.clientHeight
      // 可滚动容器超出当前窗口显示范围的高度
      let scrollTop = document.documentElement.scrollTop
      // scrollTop在页面为滚动时为0，开始滚动后，慢慢增加，滚动到页面底部时，出现innerHeight < (outerHeight + scrollTop)的情况，严格来讲，是接近底部。
      console.log(innerHeight + ' ' + outerHeight + ' ' + scrollTop)
      if (innerHeight < (outerHeight + scrollTop)) {
        // 加载更多操作
        console.log('loadmore')
      }
    }
  },
  mounted () {
    this.scroller = this.$el
  },
  created: function () {
    this.getbanaer()
    this.getuserlist()
    // window.addEventListener('scroll', () => { console.log(window.scrollY) })
    /* window.onscroll = function () {
      // 变量scrollTop是滚动条滚动时，距离顶部的距离
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      // 变量windowHeight是可视区的高度
      var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
      // 变量scrollHeight是滚动条的总高度
      var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      // 滚动条到底部的条件
      if (scrollTop + windowHeight == scrollHeight) {
        // 写后台加载数据的函数
        console.log('距顶部' + scrollTop + '可视区高度' + windowHeight + '滚动条总高度' + scrollHeight);
      }
    } */
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
