// 相似用户

module.exports = (query, request) => {
  const data = {
    songid: query.id,
    limit: query.limit || 50,
    offset: query.offset || 0,
  }
  return request(`/api/discovery/simiUser`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
