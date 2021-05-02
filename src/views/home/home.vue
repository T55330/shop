<template>
  <div>
    <header-search></header-search>
    <swiper :swiper_list="swiper_list"></swiper>
    <nav-item :nav_list="nav_list"></nav-item>
    <flashSale :product_list="product_list"></flashSale>
    <youLike :youlike_list="youlike_list"></youLike>
    <markPage v-if="showBackStatus"
              @back-top="backViewTop"></markPage>
  </div>
</template>
<script>
import Header from './components/header/header.vue'
import swiper from './components/swiper/swiper'
import nav from './components/nav/nav'
import flashSale from './components/flashSale/flashSale'
import youLike from './components/youLike/youLike'
import markPage from './components/markPage/markPage'
import bus from '@/config/bus'
import { Toast } from 'vant'
import { mapMutations } from 'vuex'
import { getHomeData } from './../../service/api/index'
export default {
  name: 'home',
  data () {
    return {
      swiper_list: [],
      nav_list: [],
      product_list: [],
      youlike_list: [],
      showBackStatus: ''
    }
  },
  components: {
    'header-search': Header,
    'nav-item': nav,
    swiper,
    flashSale,
    youLike,
    markPage
  },
  methods: {
    ...mapMutations(['ADD_GOODS']),
    backViewTop () {
    }
  },
  created () {
    getHomeData()
      .then((response) => {
        console.log(response)
        this.swiper_list = response.data.list[0].icon_list
        this.nav_list = response.data.list[2].icon_list
        this.product_list = response.data.list[3].product_list
        this.youlike_list = response.data.list[12].product_list
      })
      .catch(e => {
        console.log(e)
      })
  },
  mounted () {
    bus.$on('homeAddToCart', (message, goods) => {
      console.log(1)
      if (message === 'ADD_GOODS') {
        console.log(goods.id)
        this.ADD_GOODS({
          goodsId: goods.id,
          goodsName: goods.name,
          smallImage: goods.small_image,
          goodsPrice: goods.price
        })
        Toast({
          message: '添加到购物车成功！',
          duration: 800
        })
      }
    })
  }
}

</script>
