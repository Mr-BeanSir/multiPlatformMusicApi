// 歌手粉丝数量

module.exports = (query, request) => {
  const data = {
    id: query.id,
  }
  return request(
    `/api/artist/follow/count/get`,
    data,
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
