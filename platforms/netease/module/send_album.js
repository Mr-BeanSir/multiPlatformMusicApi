// 私信专辑

module.exports = (query, request) => {
  const data = {
    id: query.id,
    msg: query.msg || '',
    type: 'album',
    userIds: '[' + query.user_ids + ']',
  }
  return request(`/api/msg/private/send`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
