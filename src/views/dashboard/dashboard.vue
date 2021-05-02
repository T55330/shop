<template>
  <div id="dashboard">
    <router-view></router-view>
    <van-tabbar v-model="active"
                active-color="#75a342">
      <van-tabbar-item replace
                       to="/dashboard/home"
                       icon="home-o">
        首页
      </van-tabbar-item>
      <van-tabbar-item replace
                       to="/dashboard/category"
                       icon="bars">分类</van-tabbar-item>
      <van-tabbar-item replace
                       to="/dashboard/card"
                       :badge="shopCount === 0? '':shopCount"
                       icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item replace
                       to="/dashboard/mine"
                       icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'dashboard',
  data () {
    return {
      active: 0
    }
  },
  computed: {
    ...mapState(['shopCart']),
    shopCount () {
      if (this.shopCart) {
        let sum = 0
        // Object.values(this.shopCart).forEach((goods, index) => {
        //   sum += goods.num
        // })
        for (const goods in this.shopCart) {
          sum += this.shopCart[goods].num
        }
        return sum
      }
      return 0
    }
  },
  methods: {
    ...mapMutations(['INIT_SHOP_CART'])
  },
  mounted () {
    this.INIT_SHOP_CART()
    console.log(this.shopCount)
  }
}
</script>
<style lang="less" scope>
#dashboard {
  width: 100%;
  height: 100%;
}
</style>
