module.exports = (query, request) => {
  const data = {}
  return request(
    `/api/playlist/video/recent`,
    data,
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
