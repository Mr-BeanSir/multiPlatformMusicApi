// 发送验证码

module.exports = (query, request) => {
  const data = {
    ctcode: query.ctcode || '86',
    secrete: 'music_middleuser_pclogin',
    cellphone: query.phone,
  }
  return request(`/api/sms/captcha/sent`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
