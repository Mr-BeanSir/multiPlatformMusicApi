// 歌手介绍

module.exports = (query, request) => {
  const data = {
    id: query.id,
  }
  return request(`/api/artist/introduction`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
