// 歌词摘录 - 我的歌词本

module.exports = (query, request) => {
  const data = {
    limit: query.limit || 10,
    offset: query.offset || 0,
  }
  return request(
    `/api/song/play/lyrics/mark/user/page`,
    data,
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
