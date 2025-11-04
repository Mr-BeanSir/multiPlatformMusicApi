// 广播电台 - 全部电台

module.exports = (query, request) => {
  const data = {
    categoryId: query.categoryId || '0',
    regionId: query.regionId || '0',
    limit: query.limit || '20',
    lastId: query.lastId || '0',
    score: query.score || '-1',
  }
  return request(`/api/voice/broadcast/channel/list`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
