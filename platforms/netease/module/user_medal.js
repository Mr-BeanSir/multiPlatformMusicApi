// 用户徽章

module.exports = async (query, request) => {
  return await request(`/api/medal/user/page`, {
    uid: query.uid,
  }, {
    crypto: 'weapi',
    useCheckToken: false,
    MUSIC_U: query.MUSIC_U || ''
  })
}

