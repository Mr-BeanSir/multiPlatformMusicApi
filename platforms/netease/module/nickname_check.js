module.exports = (query, request) => {
  const data = {
    nickname: query.nickname,
  }
  return request(`/api/nickname/duplicated`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
