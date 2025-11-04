// 歌手简要百科信息
module.exports = (query, request) => {
  const data = {
    artistId: query.id,
  }
  return request(`/api/rep/ugc/artist/get`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
