// 曲风列表

module.exports = (query, request) => {
  const data = {}
  return request(`/api/tag/list/get`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
