// 领取云豆

module.exports = async (query, request) => {
  const data = {
    userMissionId: query.id,
    period: query.period,
  }

  return await request(`/api/nmusician/workbench/mission/reward/obtain/new`, data, {
    crypto: 'weapi',
    useCheckToken: false,
    MUSIC_U: query.MUSIC_U || ''
  })
}

