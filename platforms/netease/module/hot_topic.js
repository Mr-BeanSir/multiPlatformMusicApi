//热门话题

module.exports = (query, request) => {
  const data = {
    limit: query.limit || 20,
    offset: query.offset || 0,
  }
  return request(`/api/act/hot`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
