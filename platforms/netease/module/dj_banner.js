// 电台banner

module.exports = (query, request) => {
  return request(`/api/djradio/banner/get`, {}, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
