// 最近联系

module.exports = (query, request) => {
  const data = {}
  return request(
    `/api/msg/recentcontact/get`,
    data,
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
