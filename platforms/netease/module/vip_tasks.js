// 会员任务

module.exports = (query, request) => {
  const data = {}
  return request(
    `/api/vipnewcenter/app/level/task/list`,
    data,
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
