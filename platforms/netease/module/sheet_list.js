// 乐谱列表
module.exports = (query, request) => {
  const data = {
    id: query.id,
    abTest: query.ab || 'b',
  }
  return request(`/api/music/sheet/list/v1`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
