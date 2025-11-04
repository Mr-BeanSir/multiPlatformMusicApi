// 乐谱预览
module.exports = (query, request) => {
  const data = {
    id: query.id,
  }
  return request(`/api/music/sheet/preview/info`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
