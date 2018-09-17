import axios from 'axios'
// 配置请求地址的前缀
axios.defaults.baseURL = 'http://127.0.0.1:8080/'
// 设置post请求头部
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// axios拦截数据
axios.interceptors.response.use((res) => {
  return res.data
})
// 请求定位城市数据
export function getGuessCityData () {
  return axios.get('v1/cities?type=guess')
}
// 请求热门城市数据
export function getHotCityData () {
  return axios.get('v1/cities?type=hot')
}
// 请求热门城市数据
export function getGroupCityData () {
  return axios.get('v1/cities?type=group')
}
// 请求某一城市数据
export function getOneCityData (id) {
  return axios.get(`v1/cities/${id}`)
}
// 请求某一城市中与搜索地点有关的数据
export function getPlaceListData (cityid, value) {
  // const params = new URLSearchParams()
  // params.append('city_id', cityid)
  // params.append('keyword', value)
  return axios.get(`v1/pois?city_id=${cityid}&keyword=${value}&type=search`)
}
// 请求某一经纬度数据
export function getOnePlaceData (geohash) {
  return axios.get(`v2/pois/${geohash}`)
}
// 请求商品分类数据
export function getShopclassData () {
  return axios.get('v2/index_entry')
}
// 请求附近商店数据
export function getNearshopData () {
  return axios.get('https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762')
}
// wangxiaokong
export function getSearchData (value) {
  return axios.get(`https://elm.cangdu.org/v4/restaurants?geohash=31.22967,121.4762&keyword=${value}`)
}
// 可用红包
export function getUser () {
  return axios.get('https://elm.cangdu.org/promotion/v2/users/1/hongbaos?limit=20&offset=0')
}

// 历史红包
export function getHisPage () {
  return axios.get('https://elm.cangdu.org/promotion/v2/users/1/expired_hongbaos?limit=20&offset=0')
}

// 兑换红包
export function getcaptchas () {
  const params = new URLSearchParams()
  return axios.post('/v1/captchas', params)
}

export function exChangeHongbao (id, ecode, ccode) {
  const params = new URLSearchParams()
  params.append('user_id', id)
  params.append('exchange_code', ecode)
  params.append('captcha_code', ccode)
  return axios.post('/v1/users/' + id + '/hongbao/exchange', params)
}

export function getCotegory () {
  return axios.get('/v2/restaurant/category')
}

export function deng (username, password, code) {
  // const params = new URLSearchParams()
  // params.append('username', name)
  // params.append('password', pwd)
  // params.append('captcha_code', code)
  var params = {
    'username': username,
    'password': password,
    'captcha_code': code
  }
  return axios.post('v2/login', params)
}

export function getCaptchas () {
  return axios.post('/v1/captchas')
}
