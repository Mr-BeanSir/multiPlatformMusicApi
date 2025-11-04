// 推荐节目

module.exports = (query, request) => {
  const data = {
    cateId: query.type,
    limit: query.limit || 10,
    offset: query.offset || 0,
  }
  return request(
    `/api/program/recommend/v1`,
    data,
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
