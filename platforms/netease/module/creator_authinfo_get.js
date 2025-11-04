// 获取达人用户信息
module.exports = (query, request) => {
  const data = {}
  return request(`/api/user/creator/authinfo/get`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
