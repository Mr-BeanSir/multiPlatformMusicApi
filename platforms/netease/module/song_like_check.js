// 歌曲是否喜爱

module.exports = (query, request) => {
  const data = {
    trackIds: query.ids,
  }
  return request(`/api/song/like/check`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
