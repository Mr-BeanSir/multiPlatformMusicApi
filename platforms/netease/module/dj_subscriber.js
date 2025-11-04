// 电台详情

module.exports = (query, request) => {
  const data = {
    time: query.time || '-1',
    id: query.id,
    limit: query.limit || '20',
    total: 'true',
  }
  return request(`/api/djradio/subscriber`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
