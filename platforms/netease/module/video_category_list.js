// 视频分类列表

module.exports = async (query, request) => {
  const data = {
    offset: query.offset || 0,
    total: 'true',
    limit: query.limit || 99,
  }

  return await request(`/api/cloudvideo/category/list`, data, {
    crypto: 'weapi',
    useCheckToken: false,
    MUSIC_U: query.MUSIC_U || ''
  })
}

