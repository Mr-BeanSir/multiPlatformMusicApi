// 视频标签列表

module.exports = async (query, request) => {
  const data = {}

  return await request(`/api/cloudvideo/group/list`, data, {
    crypto: 'weapi',
    useCheckToken: false,
    MUSIC_U: query.MUSIC_U || ''
  })
}

