// 数字专辑销量

module.exports = (query, request) => {
  const data = {
    albumIds: query.ids,
  }
  return request(
    `/api/vipmall/albumproduct/album/query/sales`,
    data,
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
