// 广播电台 - 我的收藏

module.exports = (query, request) => {
  const data = {
    contentType: 'BROADCAST',
    limit: query.limit || '99999',
    timeReverseOrder: 'true',
    startDate: '4762584922000',
  }
  return request(`/api/content/channel/collect/list`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
