// 一起听 发送心跳

module.exports = (query, request) => {
  const data = {
    roomId: query.roomId,
    songId: query.songId,
    playStatus: query.playStatus,
    progress: query.progress,
  }
  return request(`/api/listen/together/heartbeat`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
