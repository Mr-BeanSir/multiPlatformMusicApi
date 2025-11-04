// 歌手热门 50 首歌曲
module.exports = (query, request) => {
  const data = {
    id: query.id,
  }
  return request(`/api/artist/top/song`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
