module.exports = (query, request) => {
  const data = {}
  return request(`/api/point/today/get`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
