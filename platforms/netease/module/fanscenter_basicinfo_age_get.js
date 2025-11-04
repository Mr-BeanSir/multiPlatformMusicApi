// 粉丝年龄比例
module.exports = (query, request) => {
  const data = {}
  return request(`/api/fanscenter/basicinfo/age/get`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
