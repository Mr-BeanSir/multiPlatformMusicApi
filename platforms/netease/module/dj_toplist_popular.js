// 电台最热主播榜

module.exports = (query, request) => {
  const data = {
    limit: query.limit || 100,
    // 不支持 offset
  }
  return request(`/api/dj/toplist/popular`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
