// 收藏与取消收藏视频

module.exports = async (query, request) => {
  const action = query.t == 1 ? 'sub' : 'unsub'
  const data = {
    id: query.id,
  }

  return await request(`/api/cloudvideo/video/${action}`, data, {
    crypto: 'weapi',
    useCheckToken: false,
    MUSIC_U: query.MUSIC_U || ''
  })
}

