// 评论

module.exports = (query, request) => {
  const data = {
    beforeTime: query.before || '-1',
    limit: query.limit || 30,
    total: 'true',
    uid: query.uid,
  }

  return request(
    `/api/v1/user/comments/${query.uid}`,
    data,
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
