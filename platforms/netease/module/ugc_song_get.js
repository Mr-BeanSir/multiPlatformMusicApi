// 歌曲简要百科信息
module.exports = (query, request) => {
  const data = {
    songId: query.id,
  }
  return request(`/api/rep/ugc/song/get`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
