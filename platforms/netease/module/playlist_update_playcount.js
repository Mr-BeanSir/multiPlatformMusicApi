// 歌单打卡

module.exports = (query, request) => {
  const data = {
    id: query.id,
  }
  return request(`/api/playlist/update/playcount`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
