// 广播电台 - 收藏/取消收藏电台

module.exports = (query, request) => {
  query.t = query.t == 1 ? 'false' : 'true'
  const data = {
    contentType: 'BROADCAST',
    contentId: query.id,
    cancelCollect: query.t,
  }
  return request(`/api/content/interact/collect`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
