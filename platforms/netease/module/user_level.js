// 用户等级

module.exports = async (query, request) => {
  const data = {}

  return await request(`/api/user/level`, data, {
    crypto: 'weapi',
    useCheckToken: false,
    MUSIC_U: query.MUSIC_U || ''
  })
}

