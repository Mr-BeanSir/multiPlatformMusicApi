// 分享歌曲到动态

module.exports = (query, request) => {
  const data = {
    type: query.type || 'song', // song,playlist,mv,djprogram,djradio,noresource
    msg: query.msg || '',
    id: query.id || '',
  }
  return request(`/api/share/friends/resource`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
