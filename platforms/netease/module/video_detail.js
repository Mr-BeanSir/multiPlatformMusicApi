// 视频详情

module.exports = async (query, request) => {
  const data = {
    id: query.id,
  }

  return await request(`/api/cloudvideo/v1/video/detail`, data, {
    crypto: 'weapi',
    useCheckToken: false,
    MUSIC_U: query.MUSIC_U || ''
  })
}

