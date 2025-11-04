// 音乐人数据概况

module.exports = (query, request) => {
  const data = {}
  return request(
    `/api/creator/musician/statistic/data/overview/get`,
    data,
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
