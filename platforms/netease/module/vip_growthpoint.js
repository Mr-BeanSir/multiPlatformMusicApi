// 会员成长值

module.exports = (query, request) => {
  const data = {}
  return request(
    `/api/vipnewcenter/app/level/growhpoint/basic`,
    data,
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
