// 会员本月下载歌曲记录

module.exports = (query, request) => {
  const data = {
    limit: query.limit || '20',
    offset: query.offset || '0',
    total: 'true',
  }
  return request(`/api/member/song/monthdownlist`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
