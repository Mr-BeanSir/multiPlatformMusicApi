module.exports = (query, request) => {
  const data = {
    limit: query.limit || 100,
  }
  return request(
    `/api/play-record/song/list`,
    data,
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
