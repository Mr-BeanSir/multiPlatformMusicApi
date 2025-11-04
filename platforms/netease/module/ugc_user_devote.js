// 用户贡献条目、积分、云贝数量
module.exports = (query, request) => {
  const data = {}
  return request(`/api/rep/ugc/user/devote`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
