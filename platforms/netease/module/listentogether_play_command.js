// 一起听 发送播放状态

module.exports = (query, request) => {
  const data = {
    roomId: query.roomId,
    commandInfo: JSON.stringify({
      commandType: query.commandType,
      progress: query.progress || 0,
      playStatus: query.playStatus,
      formerSongId: query.formerSongId,
      targetSongId: query.targetSongId,
      clientSeq: query.clientSeq,
    }),
  }
  return request(
    `/api/listen/together/play/command/report`,
    data,
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
