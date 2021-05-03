<template>
  <div class="parent-content">
    <header class="cart-header">
      <span>购物车</span>
      <button @click="clearShop"
              class="clear-cart">清空购物车</button>
    </header>
    <div class="content-wrapper">
      <div v-for="(shopItem,key,index) in shopCart"
           :key="index"
           class="cart-item">
        <div class="btn">
          <van-checkbox v-model="shopItem.checked"
                        @click.native="shopChecked(index,shopItem.checked,shopItem.id)"
                        checked-color="#2eb257"></van-checkbox>
        </div>
        <img :src="shopItem.smallImage"
             class="cart-img"
             alt="">
        <div class="cart-right">
          <h4>{{shopItem.name}}</h4>
          <div class="shop-price">
            <span>￥{{shopItem.price}}</span>
            <div class="shop-num">
              <button @click="reduce(shopItem.id,shopItem.num)"
                      class="btn-reduce">-</button>
              <span class="number">{{shopItem.num}}</span>
              <button @click="add(shopItem)">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="total">
      <div class="select-all">
        <van-checkbox v-model="checked"
                      @click.native="selectAll"
                      checked-color="#2eb257">全选</van-checkbox>
      </div>
      <div class="total-price">
        合计:
        <em class="price">${{sumPrice}}</em>
      </div>
      <span class="settlement">去结算({{count}})</span>
    </footer>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import { Dialog } from 'vant'
export default {
  name: 'shopCart',
  data () {
    return {
      checked: false,
      count: 0,
      sumPrice: 0
    }
  },
  methods: {
    ...mapMutations(['REDUCE_CART', 'CLEAR_SHOP', 'ADD_GOODS', 'SELECTED_SINGLE_GOODS', 'SELECTED_ALL_GOODS']),
    reduce (id, num) {
      if (num === 1) {
        Dialog.confirm({
          title: '温馨提示',
          message: '确定删除该商品吗？'
        })
          .then(() => {
            this.REDUCE_CART({ goodsId: id })
          })
          .catch(() => {
            // on cancel
          })
      } else {
        this.REDUCE_CART({ goodsId: id })
      }
    },
    add (shopItem) {
      this.ADD_GOODS({
        goodsId: shopItem.id,
        goodsName: shopItem.name,
        smallImage: shopItem.smallImage,
        goodsPrice: shopItem.price,
        checked: shopItem.checked
      })
      console.log(shopItem)
    },
    listConfirm () {
      this.checked = true
      this.count = 0
      this.sumPrice = 0
      console.log(this.shopCart)
      for (const shopChan in this.shopCart) {
        if (!this.shopCart[shopChan].checked) {
          this.checked = false
          continue
        }
        this.count += this.shopCart[shopChan].num
        this.sumPrice += parseInt(this.shopCart[shopChan].price) * this.shopCart[shopChan].num
      }
    },
    shopChecked (index, checked, id) {
      this.SELECTED_SINGLE_GOODS({ goodsId: id })
      // if (!checked) {
      //   this.count++
      // } else {
      //   this.count--
      // }
      // if (this.count === 0) {
      //   this.checked = true
      // } else {
      //   this.checked = false
      // }
    },
    selectAll () {
      this.checked = !this.checked
      this.SELECTED_ALL_GOODS({ checked: this.checked })
    },
    clearShop () {
      Dialog.confirm({
        title: '温馨提示',
        message: '确定清除商品吗？'
      })
        .then(() => {
          this.CLEAR_SHOP()
          this.checked = false
        })
        .catch(() => {
          // on cancel
        })
    }
  },
  computed: {
    ...mapState(['shopCart'])
  },
  watch: {
    shopCart: {
      handler: function () {
        this.listConfirm()
      },
      deep: true
    }
  }
}
</script>
<style lang="less" scope>
.parent-content {
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.cart-header {
  text-align: center;
  background-color: white;
  height: 50px;
  line-height: 50px;
  span {
    font: normal 700 1.3rem "";
  }
  .clear-cart {
    position: absolute;
    outline: none;
    // float: right;
    border: none;
    background-color: transparent;
    color: red;
    right: 10px;
  }
}
.content-wrapper {
  margin-top: 20px;
  flex: 1;
  overflow: scroll;
  .cart-item ~ .cart-item {
    border-top: 1px solid rgb(165, 164, 164);
  }
  .cart-item {
    position: relative;
    width: 100%;
    background-color: white;
    text-align: initial;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .btn {
      flex-basis: 0;
      margin-left: 20px;
    }
    .cart-img {
      width: 25%;
      height: 100px;
      flex-basis: 0;
      margin: 0 20px;
    }
    .cart-right {
      text-align: left;
      flex-basis: 0;
      flex: 1;
    }
  }
}
.content-wrapper {
  .shop-price {
    display: flex;
    justify-content: space-between;
    .shop-num {
      margin-right: 20px;
      .btn-reduce {
        display: inline-block;
        padding-bottom: 3px;
      }
      .number {
        margin: 0 10px;
      }
    }
  }
}
.total {
  display: flex;
  height: 50px;
  align-items: center;
  border-top: 1px solid rgb(146, 144, 144);
  .select-all {
    margin: 0 10px;
  }
  .total-price {
    flex: 1;
    text-align: left;
    font: normal 400 20px "";
    .price {
      font-style: normal;
      color: red;
    }
  }
  .settlement {
    display: inline-block;
    margin-right: 10px;
    padding: 10px;
    background-color: red;
    color: white;
    border-radius: 25px;
  }
}
</style>
