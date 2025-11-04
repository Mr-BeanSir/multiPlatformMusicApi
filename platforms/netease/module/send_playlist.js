// 私信歌单

module.exports = (query, request) => {
  const data = {
    id: query.playlist,
    type: 'playlist',
    msg: query.msg,
    userIds: '[' + query.user_ids + ']',
  }
  return request(`/api/msg/private/send`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
