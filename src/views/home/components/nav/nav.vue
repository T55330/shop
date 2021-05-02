<template>
  <div class="wrapper-nav">
    <div class="option"
         v-for="(list,index) in nav_list"
         :key="index">
      <img :src="list.icon_url"
           :alt="list.public_name">
      <p>{{list.name}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'nav-item',
  props: {
    nav_list: Array
  }
}
</script>
<style lang="less" scope>
.wrapper-nav {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  background-color: white;
  padding-bottom: 5%;
  .option {
    width: 18%;
    margin: 3% 1% 0 1%;
    img {
      width: 58.823%;
      margin: 2% 0;
      border-radius: 50%;
    }
    p {
      margin: 0;
      font-size: 0.8rem;
    }
  }
}
</style>
