// 曲风-专辑

module.exports = (query, request) => {
  const data = {
    cursor: query.cursor || 0,
    size: query.size || 20,
    tagId: query.tagId,
    sort: query.sort || 0,
  }
  return request(
    `/api/style-tag/home/album`,
    data,
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
