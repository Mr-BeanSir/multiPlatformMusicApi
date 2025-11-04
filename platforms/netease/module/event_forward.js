// 转发动态

module.exports = (query, request) => {
  const data = {
    forwards: query.forwards,
    id: query.evId,
    eventUserId: query.uid,
  }
  return request(`/api/event/forward`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
