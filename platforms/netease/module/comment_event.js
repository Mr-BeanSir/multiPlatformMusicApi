// 获取动态评论

module.exports = async (query, request) => {
  const data = {
    limit: query.limit || 20,
    offset: query.offset || 0,
    beforeTime: query.before || 0,
  }

  return await request(`/api/v1/resource/comments/${query.threadId}`, data, {
    crypto: 'weapi',
    useCheckToken: false,
    MUSIC_U: query.MUSIC_U || ''
  })
}

