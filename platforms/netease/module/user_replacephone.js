// 更换绑定手机

module.exports = async (query, request) => {
  const data = {
    phone: query.phone,
    captcha: query.captcha,
    oldcaptcha: query.oldcaptcha,
    countrycode: query.countrycode || '86',
  }

  return await request(`/api/user/replaceCellphone`, data, {
    crypto: 'weapi',
    useCheckToken: false,
    MUSIC_U: query.MUSIC_U || ''
  })
}

