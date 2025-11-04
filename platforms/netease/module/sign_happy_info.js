module.exports = (query, request) => {
  const data = {}
  return request(`/api/sign/happy/info`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
