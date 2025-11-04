// 回忆坐标

module.exports = (query, request) => {
  const data = {
    songId: query.id,
  }
  return request(
    `/api/content/activity/music/first/listen/info`,
    data,
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
