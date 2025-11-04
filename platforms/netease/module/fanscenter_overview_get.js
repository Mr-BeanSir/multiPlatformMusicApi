// 粉丝数量
module.exports = (query, request) => {
  const data = {}
  return request(`/api/fanscenter/overview/get`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
