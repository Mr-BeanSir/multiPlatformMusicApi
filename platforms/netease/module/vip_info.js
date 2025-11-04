// 获取 VIP 信息

module.exports = (query, request) => {
  return request(
    `/api/music-vip-membership/front/vip/info`,
    {
      userId: query.uid || '',
    },
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
