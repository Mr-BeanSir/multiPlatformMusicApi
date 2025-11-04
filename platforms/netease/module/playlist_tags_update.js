// 更新歌单标签

module.exports = (query, request) => {
  const data = {
    id: query.id,
    tags: query.tags,
  }
  return request(`/api/playlist/tags/update`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
