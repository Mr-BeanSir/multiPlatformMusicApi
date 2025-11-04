module.exports = (query, request) => {
  const data = {}
  // /api/point/today/get
  return request(`/api/point/signed/get`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
