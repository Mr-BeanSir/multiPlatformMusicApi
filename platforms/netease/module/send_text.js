// 私信

module.exports = (query, request) => {
  const data = {
    type: 'text',
    msg: query.msg,
    userIds: '[' + query.user_ids + ']',
  }
  return request(`/api/msg/private/send`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
