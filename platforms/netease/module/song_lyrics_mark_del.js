// 歌词摘录 - 删除摘录歌词

module.exports = (query, request) => {
  const data = {
    markIds: query.id,
  }
  return request(`/api/song/play/lyrics/mark/del`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
