import { ADD_GOODS, INIT_SHOP_CART, REDUCE_CART, SELECTED_SINGLE_GOODS } from './mutations-type'
import { setStore, getStore } from './../config/global'
export default {
  [ADD_GOODS] (state, { goodsId, goodsName, smallImage, goodsPrice }) {
    const shopCart = state.shopCart
    console.log(state)
    if (goodsId in shopCart) {
      shopCart[goodsId].num++
    } else {
      console.log(222)
      shopCart[goodsId] = {
        num: 1,
        id: goodsId,
        name: goodsName,
        smallImage: smallImage,
        price: goodsPrice,
        checked: true
      }
    }
    state.shopCart = { ...shopCart }
    console.log(shopCart)
    setStore(shopCart)
  },
  [REDUCE_CART] (state, { goodsId }) {
    const shopCart = state.shopCart
    if (shopCart[goodsId].num > 1) {
      shopCart[goodsId].num -= 1
    } else {
      delete shopCart[goodsId]
      state.shopCart = { ...shopCart }
    }
    setStore(shopCart)
  },
  [SELECTED_SINGLE_GOODS] (state, { goodsId }) {
    const shopCart = state.shopCart
    const goodsTarget = shopCart[goodsId]
    console.log(goodsTarget.checked)
    if (goodsTarget.checked) {
      goodsTarget.checked = !goodsTarget.checked
    } else {
      goodsTarget.checked = !goodsTarget.checked
    }
    state.shopCart = { ...shopCart }
    setStore(shopCart)
  },
  [INIT_SHOP_CART] (state) {
    const Sdata = getStore()
    if (Sdata) {
      state.shopCart = getStore()
    } else {
      state.shopCart = {}
    }
    console.log(getStore(), state)
  }
}
