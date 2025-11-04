module.exports = (query, request) => {
  const data = {
    limit: query.limit || 100,
  }
  return request(
    `/api/play-record/playlist/list`,
    data,
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
