// 更新歌单描述

module.exports = (query, request) => {
  const data = {
    id: query.id,
    desc: query.desc,
  }
  return request(`/api/playlist/desc/update`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
