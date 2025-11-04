// 独家放送

module.exports = (query, request) => {
  return request(
    `/api/personalized/privatecontent`,
    {},
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
