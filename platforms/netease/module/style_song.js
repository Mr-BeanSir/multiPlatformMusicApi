// 曲风-歌曲

module.exports = (query, request) => {
  const data = {
    cursor: query.cursor || 0,
    size: query.size || 20,
    tagId: query.tagId,
    sort: query.sort || 0,
  }
  return request(`/api/style-tag/home/song`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
