// 本地歌曲匹配音乐信息

module.exports = (query, request) => {
  let songs = [
    {
      title: query.title || '',
      album: query.album || '',
      artist: query.artist || '',
      duration: query.duration || 0,
      persistId: query.md5,
    },
  ]
  const data = {
    songs: JSON.stringify(songs),
  }
  return request(`/api/search/match/new`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
