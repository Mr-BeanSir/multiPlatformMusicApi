// 删除动态

module.exports = (query, request) => {
  const data = {
    id: query.evId,
  }
  return request(`/api/event/delete`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
