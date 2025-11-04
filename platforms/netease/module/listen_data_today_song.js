// 听歌足迹 - 今日收听
module.exports = (query, request) => {
  return request(
    `/api/content/activity/listen/data/today/song/play/rank`,
    {},
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
