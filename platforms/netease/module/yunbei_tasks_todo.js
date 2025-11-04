module.exports = (query, request) => {
  const data = {}
  return request(
    `/api/usertool/task/todo/query`,
    data,
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
