// 用户是否互相关注

module.exports = async (query, request) => {
  const data = {
    friendid: query.uid,
  }

  return await request(`/api/user/mutualfollow/get`, data, {
    crypto: 'weapi',
    useCheckToken: false,
    MUSIC_U: query.MUSIC_U || ''
  })
}

