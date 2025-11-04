// 推荐新歌

module.exports = (query, request) => {
  const data = {
    type: 'recommend',
    limit: query.limit || 10,
    areaId: query.areaId || 0,
  }
  return request(
    `/api/personalized/newsong`,
    data,
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
