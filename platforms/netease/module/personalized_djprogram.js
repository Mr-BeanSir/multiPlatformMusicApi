// 推荐电台

module.exports = (query, request) => {
  return request(
    `/api/personalized/djprogram`,
    {},
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
