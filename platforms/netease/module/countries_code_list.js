// 国家编码列表
module.exports = (query, request) => {
  const data = {}
  return request(`/api/lbs/countries/v1`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
