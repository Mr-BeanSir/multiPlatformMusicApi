// 签到进度

module.exports = (query, request) => {
  const data = {
    moduleId: query.moduleId || '1207signin-1207signin',
  }
  return request(
    `/api/act/modules/signin/v2/progress`,
    data,
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
