// 会员成长值领取记录

module.exports = (query, request) => {
  const data = {
    limit: query.limit || 20,
    offset: query.offset || 0,
  }
  return request(
    `/api/vipnewcenter/app/level/growth/details`,
    data,
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
