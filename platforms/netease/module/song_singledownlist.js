// 已购买单曲

module.exports = (query, request) => {
  const data = {
    limit: query.limit || '20',
    offset: query.offset || '0',
    total: 'true',
  }
  return request(`/api/member/song/singledownlist`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
