module.exports = (query, request) => {
  const data = {}
  return request(`/api/v1/user/info`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
