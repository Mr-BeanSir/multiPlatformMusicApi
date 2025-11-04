// mlog链接

module.exports = (query, request) => {
  const data = {
    id: query.id,
    resolution: query.res || 1080,
    type: 1,
  }
  return request(`/api/mlog/detail/v1`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
