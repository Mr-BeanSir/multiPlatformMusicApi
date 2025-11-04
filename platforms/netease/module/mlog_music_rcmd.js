// 歌曲相关视频

module.exports = (query, request) => {
  const data = {
    id: query.mvid || 0,
    type: 2,
    rcmdType: 20,
    limit: query.limit || 10,
    extInfo: JSON.stringify({ songId: query.songid }),
  }
  return request(`/api/mlog/rcmd/feed/list`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
