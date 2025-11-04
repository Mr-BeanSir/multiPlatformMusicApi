// 曲风详情

module.exports = (query, request) => {
  const data = {
    tagId: query.tagId,
  }
  return request(`/api/style-tag/home/head`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
