// 一起听 房间情况

module.exports = (query, request) => {
  const data = {
    roomId: query.roomId,
  }
  return request(`/api/listen/together/room/check`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
