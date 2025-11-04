// 一起听 结束房间

module.exports = (query, request) => {
  const data = {
    roomId: query.roomId,
  }
  return request(`/api/listen/together/end/v2`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
