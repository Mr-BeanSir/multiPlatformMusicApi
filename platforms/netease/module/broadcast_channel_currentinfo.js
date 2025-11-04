// 广播电台 - 电台信息

module.exports = (query, request) => {
  const data = {
    channelId: query.id,
  }
  return request(
    `/api/voice/broadcast/channel/currentinfo`,
    data,
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
