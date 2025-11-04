// 获取动态列表

module.exports = (query, request) => {
  const data = {
    pagesize: query.pagesize || 20,
    lasttime: query.lasttime || -1,
  }
  return request(`/api/v1/event/get`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
