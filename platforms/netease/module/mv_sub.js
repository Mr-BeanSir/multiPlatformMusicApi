// 收藏与取消收藏MV

module.exports = (query, request) => {
  query.t = query.t == 1 ? 'sub' : 'unsub'
  const data = {
    mvId: query.mvid,
    mvIds: '["' + query.mvid + '"]',
  }
  return request(`/api/mv/${query.t}`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
