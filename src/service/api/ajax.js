import axios from 'axios'

export default function ajax (url = '', params = {}, type = 'GET') {
  let promise
  return new Promise((resolve, reject) => {
    if (type.toUpperCase() === 'GET') {
      let paramsStr = ''
      for (const item in params) {
        paramsStr += item + '=' + params[item] + '&'
      }
      if (paramsStr) {
        paramsStr = paramsStr.substring(0, paramsStr.lastIndexOf('&'))
      }
      url += '?' + paramsStr
      promise = axios.get(url)
    } else if (type.toUpperCase() === 'POST') {
      promise = axios.post(url, params)
    }
    promise.then((response) => {
      resolve(response.data)
    }).catch((e) => {
      reject(e)
    })
  })
}
