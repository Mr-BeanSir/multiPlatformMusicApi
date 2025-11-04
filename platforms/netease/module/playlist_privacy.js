// 公开隐私歌单

module.exports = (query, request) => {
  const data = {
    id: query.id,
    privacy: 0,
  }
  return request(`/api/playlist/update/privacy`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
