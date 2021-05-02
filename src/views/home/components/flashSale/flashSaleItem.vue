<template>
  <div class="shop-item">
    <div class="box">
      <div class="shop-cord"
           v-for="(product) in product_list"
           :key="product.id">
        <img class="shop-img"
             :src="product.small_image"
             alt="">
        <p>{{product.name}}</p>
        <em>￥{{product.origin_price}}</em>
        <div class="money">
          <span>￥{{product.price}}</span>
          <div class="ic">
            <van-icon name="shopping-cart-o" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'flashSaleItem',
  props: {
    product_list: Array
  },
  data () {
    return {

    }
  }
}
</script>
<style lang="less" scope>
.box {
  display: flex;
}
.shop-item {
  padding: 0 2%;
  overflow: scroll;
  .shop-cord {
    margin-right: 2%;
    .shop-img {
      width: 30vw;
      height: 40%;
    }
    p {
      margin: 3% 0;
      height: 30%;
    }
    em {
      font-style: normal;
      text-decoration: line-through;
    }
  }
  .money {
    span {
      font-size: 20px;
      color: red;
    }
    .ic {
      padding: 5px;
      border-radius: 50%;
      float: right;
      font-size: 30px;
      color: white;
      background-color: rgb(70, 139, 70);
    }
  }
}
</style>
