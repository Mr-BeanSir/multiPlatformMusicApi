module.exports = (query, request) => {
  const data = {
    actid: query.actid,
  }
  return request(`/api/act/event/hot`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
