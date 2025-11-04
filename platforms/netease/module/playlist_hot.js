// 热门歌单分类

module.exports = (query, request) => {
  return request(`/api/playlist/hottags`, {}, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
