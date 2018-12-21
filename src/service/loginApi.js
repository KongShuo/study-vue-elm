import commonApi from '../config/axiosConfig'

export default {
  // 获取验证码
  getCaptchas () {
    return commonApi.post('/api/v1/captchas')
  },
  // 账号登录
  accountLogin (username, password, captchaCode) {
    return commonApi.post('/api/v2/login', {
      username: username,
      password: password,
      captcha_code: captchaCode
    })
  },
  // 获取用户信息
  getUser (userId) {
    return commonApi.get('/api/v1/user', { user_id: userId })
  }
}
