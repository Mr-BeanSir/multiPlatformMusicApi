// 收藏的专栏

module.exports = (query, request) => {
  const data = {
    limit: query.limit || 50,
    offset: query.offset || 0,
    total: true,
  }
  return request(`/api/topic/sublist`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
