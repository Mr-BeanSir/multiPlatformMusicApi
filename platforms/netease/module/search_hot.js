// 热门搜索

module.exports = (query, request) => {
  const data = {
    type: 1111,
  }
  return request(`/api/search/hot`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
