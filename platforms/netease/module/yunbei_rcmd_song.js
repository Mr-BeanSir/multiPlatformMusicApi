// 云贝推歌

module.exports = (query, request) => {
  const data = {
    songId: query.id,
    reason: query.reason || '好歌献给你',
    scene: '',
    fromUserId: -1,
    yunbeiNum: query.yunbeiNum || 10,
  }
  return request(
    `/api/yunbei/rcmd/song/submit`,
    data,
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
