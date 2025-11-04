// 专辑简要百科信息
module.exports = (query, request) => {
  const data = {
    albumId: query.id,
  }
  return request(`/api/rep/ugc/album/get`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
