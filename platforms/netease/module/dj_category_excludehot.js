// 电台非热门类型

module.exports = (query, request) => {
  return request(
    `/api/djradio/category/excludehot`,
    {},
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
