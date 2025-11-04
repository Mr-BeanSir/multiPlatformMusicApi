// 歌手相关视频

module.exports = (query, request) => {
  const data = {
    artistId: query.id,
    page: JSON.stringify({
      size: query.size || 10,
      cursor: query.cursor || 0,
    }),
    tab: 0,
    order: query.order || 0,
  }
  return request(`/api/mlog/artist/video`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
