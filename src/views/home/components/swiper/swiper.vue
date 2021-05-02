<template>
  <swiper ref="mySwiper"
          class="swiper"
          :options="swiperOptions">
    <swiper-slide v-for="(value,index) in swiper_list"
                  :key="index">
      <img :src="value.icon_url"
           :alt="value.public_name">
    </swiper-slide>
    <div class="swiper-pagination"
         slot="pagination"></div>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import Swiper2, { Navigation, Pagination, Autoplay } from 'swiper'

Swiper2.use([Navigation, Pagination, Autoplay])
export default {
  name: 'swiper-shop',
  props: {
    swiper_list: Array
  },
  data () {
    return {
      swiperOptions: {
        notNextTick: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          bulletActiveClass: 'my-swiper-select'
        },
        loop: true,
        autoplay: {
          disableOnInteraction: false,
          delay: 1000
        },
        speed: 600,
        direction: 'horizontal',
        on: {
          slideChangeTransitionEnd () {
          }
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted () {
    console.log('Current Swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, true)
  },
  components: {
    Swiper,
    SwiperSlide
  },
  directive: {
    swiper: directive
  }
}
</script>

<style lang="less" scope>
.swiper {
  height: 30vh;
  width: 100%;
  background-color: #f00;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
