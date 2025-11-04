// mv简要百科信息
module.exports = (query, request) => {
  const data = {
    mvId: query.id,
  }
  return request(`/api/rep/ugc/mv/get`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
