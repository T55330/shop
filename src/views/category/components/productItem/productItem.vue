<template>
  <div>
    <div class="content-top">推荐</div>
    <div v-for="(cate,index) in categoriesDetail[0].products"
         :key="index"
         class="shop-cord">
      <img class="shop-photo"
           :src="cate.small_image"
           alt="">
      <div class="describe">
        <h4 class="describe-title">{{cate.name}}</h4>
        <p class="describe-text"> {{cate.spec}} </p>
        <div class="price">
          <span class="money">￥{{cate.price}}</span>
          <span class="add"
                @click="addToCart(cate)"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import bus from '@/config/bus'
export default {
  name: 'productItem',
  props: {
    categoriesDetail: Array
  },
  methods: {
    addToCart (cate) {
      bus.$emit('homeAddToCart', 'ADD_GOODS', cate)
    }
  }
}
</script>
<style lang="less" scope>
.content-top {
  height: 20px;
  background-color: #f8f8f8;
  text-align: left;
  padding-left: 5px;
}
.shop-cord {
  .shop-photo {
    width: 30%;
    float: left;
    margin-right: 10px;
  }
  .describe {
    text-align: left;
    padding-left: 10px;
    .price {
      margin-top: 20px;
    }
    .describe-title {
      margin-bottom: 0;
      font-size: 20px;
    }
    .describe-text {
      margin: 0;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      color: #ccc;
    }
    .money {
      display: inline-block;
      color: red;
      font-weight: 700;
      margin-top: 10px;
    }
    .add {
      width: 40px;
      height: 40px;
      background-color: #3cb963;
      border-radius: 50%;
      float: right;
      margin-right: 10px;
    }
  }
}
</style>
