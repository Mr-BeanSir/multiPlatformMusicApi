// 获取专辑歌曲的音质

module.exports = (query, request) => {
  const data = {
    id: query.id,
  }
  return request(`/api/album/privilege`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
