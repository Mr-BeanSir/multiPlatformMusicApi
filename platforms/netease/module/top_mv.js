// MV排行榜

module.exports = (query, request) => {
  const data = {
    area: query.area || '',
    limit: query.limit || 30,
    offset: query.offset || 0,
    total: true,
  }
  return request(`/api/mv/toplist`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
