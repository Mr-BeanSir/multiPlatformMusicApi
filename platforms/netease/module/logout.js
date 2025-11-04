// 退出登录

module.exports = (query, request) => {
  return request(`/api/logout`, {}, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
