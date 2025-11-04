// 用户评论历史

module.exports = async (query, request) => {
  const data = {
    compose_reminder: 'true',
    compose_hot_comment: 'true',
    limit: query.limit || 10,
    user_id: query.uid,
    time: query.time || 0,
  }

  return await request(`/api/comment/user/comment/history`, data, {
    crypto: 'weapi',
    useCheckToken: false,
    MUSIC_U: query.MUSIC_U || ''
  })
}

