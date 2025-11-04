module.exports = (query, request) => {
  const data = {
    actid: query.actid,
  }
  return request(`/api/act/detail`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
