// 听歌足迹 - 年度听歌足迹
module.exports = (query, request) => {
  return request(
    `/api/content/activity/listen/data/year/report`,
    {},
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
