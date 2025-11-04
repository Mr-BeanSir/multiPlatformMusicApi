// 历史每日推荐歌曲详情

module.exports = (query, request) => {
  const data = {
    date: query.date || '',
  }
  return request(
    `/api/discovery/recommend/songs/history/detail`,
    data,
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
