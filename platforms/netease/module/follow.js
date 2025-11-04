// 关注与取消关注用户

module.exports = (query, request) => {
  query.t = query.t == 1 ? 'follow' : 'delfollow'
  return request(
    `/api/user/${query.t}/${query.id}`,
    {},
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
