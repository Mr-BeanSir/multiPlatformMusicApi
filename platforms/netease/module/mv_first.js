// 最新MV

module.exports = (query, request) => {
  const data = {
    // 'offset': query.offset || 0,
    area: query.area || '',
    limit: query.limit || 30,
    total: true,
  }
  return request(`/api/mv/first`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
