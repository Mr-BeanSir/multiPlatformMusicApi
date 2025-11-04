// 操作记录

module.exports = (query, request) => {
  return request(
    `/api/feedback/weblog`,
    query.data || {},
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
