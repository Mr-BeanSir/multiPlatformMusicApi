// 已购单曲

module.exports = (query, request) => {
  const data = {
    limit: query.limit || 20,
    offset: query.offset || 0,
  }
  return request(
    `/api/single/mybought/song/list`,
    data,
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
