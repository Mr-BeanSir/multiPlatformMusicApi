// 领取会员成长值

module.exports = (query, request) => {
  const data = {
    taskIds: query.ids,
  }
  return request(
    `/api/vipnewcenter/app/level/task/reward/get`,
    data,
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
