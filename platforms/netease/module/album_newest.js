// 最新专辑

module.exports = (query, request) => {
  return request(`/api/discovery/newAlbum`, {}, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
