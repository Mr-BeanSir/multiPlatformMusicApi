// 听歌足迹 - 本周/本月收听时长
module.exports = (query, request) => {
  return request(
    `/api/content/activity/listen/data/realtime/report`,
    {
      type: query.type || 'week', //周 week 月 month
    },
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
