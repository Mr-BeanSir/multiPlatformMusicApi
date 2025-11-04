// 一起听 更新播放列表

module.exports = (query, request) => {
  const data = {
    roomId: query.roomId,
    playlistParam: JSON.stringify({
      commandType: query.commandType,
      version: [
        {
          userId: query.userId,
          version: query.version,
        },
      ],
      anchorSongId: '',
      anchorPosition: -1,
      randomList: query.randomList.split(','),
      displayList: query.displayList.split(','),
    }),
  }
  return request(
    `/api/listen/together/sync/list/command/report`,
    data,
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
