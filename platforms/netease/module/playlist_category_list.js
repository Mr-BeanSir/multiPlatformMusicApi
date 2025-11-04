// 歌单分类列表

module.exports = (query, request) => {
  const data = {
    cat: query.cat || '全部',
    limit: query.limit || 24,
    newStyle: true,
  }
  return request(`/api/playlist/category/list`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
