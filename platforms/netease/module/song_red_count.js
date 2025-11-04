// 歌曲红心数量

module.exports = (query, request) => {
  const data = {
    songId: query.id,
  }
  return request(`/api/song/red/count`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
