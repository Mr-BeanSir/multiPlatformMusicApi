// 相关视频

module.exports = (query, request) => {
  const data = {
    id: query.id,
    type: /^\d+$/.test(query.id) ? 0 : 1,
  }
  return request(
    `/api/cloudvideo/v1/allvideo/rcmd`,
    data,
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
