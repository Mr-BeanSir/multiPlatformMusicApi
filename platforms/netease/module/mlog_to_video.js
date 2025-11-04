// 将mlog id转为video id

module.exports = (query, request) => {
  const data = {
    mlogId: query.id,
  }
  return request(
    `/api/mlog/video/convert/id`,
    data,
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
