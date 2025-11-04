// 广播电台 - 分类/地区信息

module.exports = (query, request) => {
  const data = {}
  return request(
    `/api/voice/broadcast/category/region/get`,
    data,
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
