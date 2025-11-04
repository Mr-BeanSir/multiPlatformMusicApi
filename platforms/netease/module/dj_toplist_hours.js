// 电台24小时主播榜

module.exports = (query, request) => {
  const data = {
    limit: query.limit || 100,
    // 不支持 offset
  }
  return request(`/api/dj/toplist/hours`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
