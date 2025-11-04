// 听歌足迹 - 总收听时长
module.exports = (query, request) => {
  return request(
    `/api/content/activity/listen/data/total`,
    {},
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
