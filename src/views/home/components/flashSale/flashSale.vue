<template>
  <div class="wrapper-flash">
    <div class="flash-header">
      <div class="tips">
        <span class="tips-l">限时抢购</span>
        <span class="tips-c">07:00场</span>
        <span>
          <van-tag color="#ccc"
                   plain
                   size="large"
                   type="primary">已结束</van-tag>
        </span>
      </div>
      <div class="more">更多</div>
    </div>
    <flashSaleItem :product_list="product_list"></flashSaleItem>
  </div>
</template>
<script>
import flashSaleItem from './flashSaleItem'
export default {
  name: 'flashSale',
  props: {
    product_list: Array
  },
  components: {
    flashSaleItem
  }
}
</script>
<style lang="less" scope>
@tag-font-size: 1.4rem;
.wrapper-flash {
  margin-top: 3%;
  text-align: initial;
  background-color: white;
  .flash-header {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    height: 8vh;
    line-height: 8vh;
    margin: 0 2%;
    font-size: 1.4rem;
    .tips {
      .tips-l {
        padding-left: 10px;
        border-left: 0.2rem solid #2eb257;
      }
      .tips-c {
        margin: 10px;
        color: red;
      }
      .van-tag {
        top: -0.1rem;
      }
    }
    .more {
      color: #2eb257;
      font-size: 1.2rem;
    }
  }
}
</style>
