// 一起听状态

module.exports = (query, request) => {
  return request(
    `/api/listen/together/status/get`,
    {},
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
