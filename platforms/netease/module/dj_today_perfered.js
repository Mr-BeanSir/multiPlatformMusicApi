// 电台今日优选

module.exports = (query, request) => {
  const data = {
    page: query.page || 0,
  }
  return request(
    `/api/djradio/home/today/perfered`,
    data,
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
