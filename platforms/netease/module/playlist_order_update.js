// 编辑歌单顺序

module.exports = (query, request) => {
  const data = {
    ids: query.ids,
  }
  return request(
    `/api/playlist/order/update`,
    data,
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
