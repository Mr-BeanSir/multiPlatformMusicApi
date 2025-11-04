// 歌词摘录 - 歌词摘录信息

module.exports = (query, request) => {
  const data = {
    songId: query.id,
  }
  return request(`/api/song/play/lyrics/mark/song`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
