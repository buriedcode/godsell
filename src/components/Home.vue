<template>
    <div style="height: 100%;width: 100%">
      <section class="swiper">
      <swiper :options="swiperOption">
        <swiper-slide  class="my-swp-silde" v-for="(slide, key) in swiperList" :key="key" data-id="slide.id">
          <img class="my-swp-img" :src="slide.imgUrl" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      </section>
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
        autoplay: 3000,
        autoHeight: true,
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true
      },
      swiperList: []
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
    }
  },
  created: function () {
    this.getbanaer()
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

</style>
