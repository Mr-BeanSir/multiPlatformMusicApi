// 歌单收藏者

module.exports = (query, request) => {
  const data = {
    id: query.id,
    limit: query.limit || 20,
    offset: query.offset || 0,
  }
  return request(`/api/playlist/subscribers`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
