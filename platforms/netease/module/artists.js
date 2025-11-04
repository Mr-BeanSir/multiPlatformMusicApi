// 歌手单曲

module.exports = (query, request) => {
  return request(`/api/v1/artist/${query.id}`, {}, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
