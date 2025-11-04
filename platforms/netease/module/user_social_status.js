// 用户状态

module.exports = async (query, request) => {
  return await request(`/api/social/user/status`, {
    visitorId: query.uid,
  }, {
    crypto: 'weapi',
    useCheckToken: false,
    MUSIC_U: query.MUSIC_U || ''
  })
}

