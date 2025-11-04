// 更新歌曲顺序

module.exports = (query, request) => {
  const data = {
    pid: query.pid,
    trackIds: query.ids,
    op: 'update',
  }

  return request(`/api/playlist/manipulate/tracks`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
