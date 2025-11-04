// 私信和通知接口
module.exports = (query, request) => {
  const data = {}
  return request(`/api/pl/count`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
