// 粉丝省份比例
module.exports = (query, request) => {
  const data = {}
  return request(
    `/api/fanscenter/basicinfo/province/get`,
    data,
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
