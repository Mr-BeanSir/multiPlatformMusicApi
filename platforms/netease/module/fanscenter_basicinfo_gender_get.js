// 粉丝性别比例
module.exports = (query, request) => {
  const data = {}
  return request(
    `/api/fanscenter/basicinfo/gender/get`,
    data,
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
