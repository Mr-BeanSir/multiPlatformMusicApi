// 设置

module.exports = (query, request) => {
  const data = {}
  return request(`/api/user/setting`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
