// 相似MV

module.exports = (query, request) => {
  const data = {
    mvid: query.mvid,
  }
  return request(`/api/discovery/simiMV`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
