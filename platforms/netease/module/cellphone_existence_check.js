// 检测手机号码是否已注册

module.exports = (query, request) => {
  const data = {
    cellphone: query.phone,
    countrycode: query.countrycode,
  }
  return request(`/api/cellphone/existence/check`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
