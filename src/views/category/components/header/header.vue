<template>
  <div class="header">
    <input class="search"
           type="search"
           placeholder="输入商品名称">
  </div>
</template>
<script>
export default {
  name: 'searchHeader'
}
</script>
<style lang="less" scope>
.header {
  background-color: white;
  padding: 10px;
  .search {
    border: none;
    outline: none;
    width: 90%;
    background-color: #f2f2f2;
    font-size: 18px;
    padding: 10px 0;
    padding-left: 10px;
    border-radius: 21px;
  }
}
</style>
