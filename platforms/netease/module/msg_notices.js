// 通知

module.exports = (query, request) => {
  const data = {
    limit: query.limit || 30,
    time: query.lasttime || -1,
  }
  return request(`/api/msg/notices`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
