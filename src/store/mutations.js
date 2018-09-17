// 更改用户信息
export const userStatus = (state, user) => {
  if (user) {
    state.currentUser = user
    state.isLogin = true
  } else if (user == null) {
    // 退出的时候清空sessionStorage中的数据
    sessionStorage.setItem('userName', null)
    sessionStorage.setItem('userToken', '')
    state.currentUser = null
    state.isLogin = false
    state.token = ''
  }
}
