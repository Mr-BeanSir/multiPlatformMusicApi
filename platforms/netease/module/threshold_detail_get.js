// 获取达人达标信息
module.exports = (query, request) => {
  const data = {}
  return request(
    `/api/influencer/web/apply/threshold/detail/get`,
    data,
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
