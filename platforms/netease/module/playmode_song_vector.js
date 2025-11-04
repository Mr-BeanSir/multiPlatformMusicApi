// 云随机播放
module.exports = (query, request) => {
  const data = {
    ids: query.ids,
  }
  return request(`/api/playmode/song/vector/get`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
