// 私信内容

module.exports = (query, request) => {
  const data = {
    userId: query.uid,
    limit: query.limit || 30,
    time: query.before || 0,
    total: 'true',
  }
  return request(`/api/msg/private/history`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
