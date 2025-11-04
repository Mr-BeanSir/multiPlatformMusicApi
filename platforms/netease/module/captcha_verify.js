// 校验验证码

module.exports = (query, request) => {
  const data = {
    ctcode: query.ctcode || '86',
    cellphone: query.phone,
    captcha: query.captcha,
  }
  return request(`/api/sms/captcha/verify`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
