// 一起听创建房间

module.exports = (query, request) => {
  const data = {
    refer: 'songplay_more',
  }
  return request(`/api/listen/together/room/create`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
