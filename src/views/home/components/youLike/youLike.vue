<template>
  <div>
    <van-divider :style="{ borderColor: '#ccc', padding: '0 16px' }">猜你喜欢</van-divider>
    <div class="content">
      <youLikeItem v-for="(product) in youlike_list"
                   :key="product.id"
                   :product="product"></youLikeItem>
    </div>
  </div>
</template>

<script>
import youLikeItem from './youLikeItem'
export default {
  name: 'youLike',
  props: {
    youlike_list: Array
  },
  components: {
    youLikeItem
  }
}

</script>
<style lang="less" scope>
.content {
  display: flex;
  flex-wrap: wrap;

  text-align: initial;
  align-items: center;
}
.van-divider {
  font-size: 1.2rem;
}
</style>
