export const setStore = (shop) => {
  const jsonShop = JSON.stringify(shop)
  window.localStorage.setItem('storeShop', jsonShop)
  console.log(window.localStorage.getItem('storeShop'))
}
export const getStore = () => {
  const dataShop = window.localStorage.getItem('storeShop')
  return JSON.parse(dataShop)
}
