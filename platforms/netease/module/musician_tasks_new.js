// 获取音乐人任务

module.exports = (query, request) => {
  const data = {}
  return request(
    `/api/nmusician/workbench/mission/stage/list `,
    data,
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
