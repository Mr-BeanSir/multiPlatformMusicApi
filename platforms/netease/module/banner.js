// 首页轮播图
module.exports = (query, request) => {
  const type =
    {
      0: 'pc',
      1: 'android',
      2: 'iphone',
      3: 'ipad',
    }[query.type || 0] || 'pc'
  return request(
    `/api/v2/banner/get`,
    { clientType: type },
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
