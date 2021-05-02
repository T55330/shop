<template>
  <div class="category">
    <searchHeader class="header"></searchHeader>
    <div class="left-category">
      <ul>
        <li v-for="(optionValue,index) in categories"
            :key="index"
            @click="identification(index)"
            :class="{'shop-option':true,'state-active': active === index}">
          <span class="option-text">{{optionValue.name}}</span>
        </li>
      </ul>
    </div>
    <productItem v-if="categoriesDetail[0]"
                 :categoriesDetail="categoriesDetail"
                 class="content-view"></productItem>
  </div>
</template>
<script>
import searchHeader from './components/header/header'
import productItem from './components/productItem/productItem'
import { getCategories, getCategoriesDetail } from '@/service/api/index'
export default {
  name: 'catgegory',
  data () {
    return {
      categories: [],
      categoriesDetail: [],
      active: 0
    }
  },
  methods: {
    async initDate () {
      const leftRes = await getCategories()
      console.log(leftRes)
      if (leftRes.success) {
        this.categories = leftRes.data.cate
      }
      const rightRes = await getCategoriesDetail('/lk001')
      console.log(rightRes)
      if (rightRes.success) {
        this.categoriesDetail = rightRes.data.cate
      }
    },
    identification (id) {
      this.active = id
    }
  },
  created () {
    this.initDate()
  },
  components: {
    searchHeader,
    productItem
  }
}
</script>
<style lang="less" scope>
.category {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  .header {
    width: 100%;
  }
  .left-category {
    width: 25%;
    height: 100vh;
    overflow: auto;
    font: normal 400 18px "";
    .shop-option {
      padding: 10px 0;
      border-bottom: 0.5px solid #ccc;
      text-align: left;
    }
    .option-text {
      display: inline-block;
      padding: 5px 0;
      padding-left: 10px;
      border-left: 3.5px solid transparent;
    }
    .state-active {
      background-color: white;
      font-weight: 700;
    }
    .state-active > .option-text {
      border-left: 3.5px solid #3cb963;
    }
  }
  .content-view {
    width: 75%;
    height: 100vh;
    overflow: scroll;
    background-color: white;
  }
}
</style>
