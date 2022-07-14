import axios from 'axios'
import qs from 'qs'

const createService = () => {
  const service = axios.create()
  service.defaults.paramsSerializer = function(params) {
    return qs.stringify(params, {arrayFormat: 'indices'})
  }
  service.defaults.timeout = 10000
  service.defaults.baseURL = 'http://120.77.13.133:5050'
  service.defaults.transformRequest = [
    function(data) {
      if (data === null || data === undefined) return
      if (data.constructor.name.toLowerCase() === 'formdata') return data

      return qs.stringify(data)
    },
  ]

  service.interceptors.response.use(
      ({data: {data, code, msg}}) => {
        if (code === 0) return data
        if (code === 40001) {
          return Promise.reject(data)
        }
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject({code, msg, data})
      },
      (err) => {
        if (!navigator.onLine) err = {msg: '网络异常，请检查后重试'}
        return Promise.reject(err)
      },
  )
  return service
}

export const $get = (url) => (params) => {
  return createService()({
    method: 'get',
    url,
    params,
  })
}
export const $post = (url) => (data) => {
  return createService()({
    method: 'post',
    url,
    data,
  })
}
