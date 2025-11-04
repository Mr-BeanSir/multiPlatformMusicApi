// 批量请求接口

module.exports = (query, request) => {
  const data = {}
  Object.keys(query).forEach((i) => {
    if (/^\/api\//.test(i)) {
      data[i] = query[i]
    }
  })
  return request(`/api/batch`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
