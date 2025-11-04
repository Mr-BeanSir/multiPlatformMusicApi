// 一起听 当前列表获取

module.exports = (query, request) => {
  const data = {
    roomId: query.roomId,
  }
  return request(
    `/api/listen/together/sync/playlist/get`,
    data,
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
