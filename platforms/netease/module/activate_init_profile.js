// 初始化名字

module.exports = (query, request) => {
  const data = {
    nickname: query.nickname,
  }
  return request(`/api/activate/initProfile`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
