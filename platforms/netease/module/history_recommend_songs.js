// 历史每日推荐歌曲

module.exports = (query, request) => {
  const data = {}
  return request(
    `/api/discovery/recommend/songs/history/recent`,
    data,
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
