// 搜索歌手
// 可传关键字或者歌手id
module.exports = (query, request) => {
  const data = {
    keyword: query.keyword,
    limit: query.limit || 40,
  }
  return request(`/api/rep/ugc/artist/search`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
