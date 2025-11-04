// 用户状态 - 支持设置的状态

module.exports = async (query, request) => {
  return await request(`/api/social/user/status/support`, {}, {
    crypto: 'weapi',
    useCheckToken: false,
    MUSIC_U: query.MUSIC_U || ''
  })
}

