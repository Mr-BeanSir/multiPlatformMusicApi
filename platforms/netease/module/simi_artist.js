// 相似歌手
module.exports = (query, request) => {
  const data = {
    artistid: query.id,
  }
  return request(
    `/api/discovery/simiArtist`,
    data,
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
