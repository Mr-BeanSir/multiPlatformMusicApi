module.exports = (query, request) => {
  const data = {}
  return request(`/api/pointmall/user/sign`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
