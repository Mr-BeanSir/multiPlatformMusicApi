// 电台新人榜
module.exports = (query, request) => {
  const data = {
    limit: query.limit || 100,
    offset: query.offset || 0,
  }
  return request(`/api/dj/toplist/newcomer`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
