// 曲风偏好

module.exports = (query, request) => {
  const data = {}
  return request(
    `/api/tag/my/preference/get`,
    data,
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
