module.exports = (query, request) => {
  const data = {
    nicknames: query.nicknames,
  }
  return request(`/api/user/getUserIds`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
