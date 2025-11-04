module.exports = (query, request) => {
  const data = {
    limit: query.limit || 10,
    offset: query.offset || 0,
  }
  return request(`/api/point/expense`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
