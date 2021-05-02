<template>
  <div class="a">
    <div class="shop-cord1 clearFix">
      <img class="shop-img"
           :src="product.small_image"
           alt="">
      <p>{{product.name}}</p>
      <div class="money1 ">
        <span>￥{{product.price}}</span>
        <div class="ic">
          <van-icon @click.native="addToCart(product)"
                    name="shopping-cart-o" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import bus from '@/config/bus'
export default {
  name: 'youLikeItem',
  props: {
    product: Object
  },
  methods: {
    addToCart (product) {
      bus.$emit('homeAddToCart', 'ADD_GOODS', product)
    }
  }
}
</script>
<style lang="less" scope>
.a {
  margin: 2.5%;
}
.shop-cord1 {
  width: 45vw;
  background-color: white;
  .shop-img {
    width: 45vw;
    height: 45vw;
  }
  p {
    margin: 3% 0;
    height: 15%;
  }
  .money1 {
    span {
      display: inline-block;
      font-size: 20px;
      color: red;
      margin-top: 6%;
    }
    .ic {
      padding: 5px 9px;
      padding-top: 9px;
      border-radius: 50%;
      float: right;
      font-size: 30px;
      color: white;
      background-color: rgb(70, 139, 70);
    }
  }
}

.clearFix::after {
  content: "";
  display: block;
  clear: both;
  visibility: hidden;
  height: 0;
}
</style>
