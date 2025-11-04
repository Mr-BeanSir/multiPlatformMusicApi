// 音乐人签到

module.exports = (query, request) => {
  const data = {}
  return request(`/api/creator/user/access`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
