// 关注TA的人(粉丝)

module.exports = async (query, request) => {
  const data = {
    userId: query.uid,
    time: '0',
    limit: query.limit || 30,
    offset: query.offset || 0,
    getcounts: 'true',
  }

  return await request(`/api/user/getfolloweds/${query.uid}`, data, {
    crypto: 'weapi',
    useCheckToken: false,
    MUSIC_U: query.MUSIC_U || ''
  })
}

