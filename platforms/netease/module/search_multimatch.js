// 多类型搜索

module.exports = (query, request) => {
  const data = {
    type: query.type || 1,
    s: query.keywords || '',
  }
  return request(
    `/api/search/suggest/multimatch`,
    data,
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
