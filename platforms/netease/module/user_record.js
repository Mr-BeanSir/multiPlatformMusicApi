// 听歌排行

module.exports = async (query, request) => {
  const data = {
    uid: query.uid,
    type: query.type || 0, // 1: 最近一周, 0: 所有时间
  }

  return await request(`/api/v1/play/record`, data, {
    crypto: 'weapi',
    useCheckToken: false,
    MUSIC_U: query.MUSIC_U || ''
  })
}

