// 最近听歌列表

module.exports = (query, request) => {
  const data = {}
  return request(`/api/pc/recent/listen/list`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
