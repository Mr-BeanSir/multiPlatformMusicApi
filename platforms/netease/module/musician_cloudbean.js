// 账号云豆数

module.exports = async (query, request) => {
  const data = {}
  
  return await request(`/api/cloudbean/get`, data, {
    crypto: 'weapi',
    useCheckToken: false,
    MUSIC_U: query.MUSIC_U || ''
  })
}

