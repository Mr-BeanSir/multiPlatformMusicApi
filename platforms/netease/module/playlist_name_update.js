// 更新歌单名

module.exports = (query, request) => {
  const data = {
    id: query.id,
    name: query.name,
  }
  return request(`/api/playlist/update/name`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
