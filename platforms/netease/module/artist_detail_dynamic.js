// 歌手动态信息

module.exports = (query, request) => {
  const data = {
    id: query.id,
  }
  return request(`/api/artist/detail/dynamic`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
