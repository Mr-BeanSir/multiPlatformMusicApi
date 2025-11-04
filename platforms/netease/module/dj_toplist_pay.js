// 付费精品
module.exports = (query, request) => {
  const data = {
    limit: query.limit || 100,
    // 不支持 offset
  }
  return request(`/api/djradio/toplist/pay`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
