// 用户状态 - 相同状态的用户

module.exports = async (query, request) => {
  return await request(`/api/social/user/status/rcmd`, {}, {
    crypto: 'weapi',
    useCheckToken: false,
    MUSIC_U: query.MUSIC_U || ''
  })
}

