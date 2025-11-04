module.exports = (query, request) => {
  const data = {
    userTaskId: query.userTaskId,
    depositCode: query.depositCode || '0',
  }
  return request(
    `/api/usertool/task/point/receive`,
    data,
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
