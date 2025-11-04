// 推荐MV

module.exports = (query, request) => {
  return request(`/api/personalized/mv`, {}, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
