// 更换手机

module.exports = (query, request) => {
  const data = {
    captcha: query.captcha,
    phone: query.phone,
    oldcaptcha: query.oldcaptcha,
    ctcode: query.ctcode || '86',
  }
  return request(
    `/api/user/replaceCellphone`,
    data,
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
