// 音乐百科基础信息
module.exports = (query, request) => {
  const data = {
    songId: query.id,
  }
  return request(`/api/song/play/about/block/page`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
