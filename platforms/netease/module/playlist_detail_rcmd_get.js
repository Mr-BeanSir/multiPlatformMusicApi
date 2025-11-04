// 相关歌单推荐

module.exports = (query, request) => {
  const data = {
    scene: 'playlist_head',
    playlistId: query.id,
    newStyle: 'true',
  }
  return request(`/api/playlist/detail/rcmd/get`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
