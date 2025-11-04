// 视频链接

module.exports = async (query, request) => {
  const data = {
    ids: '["' + query.id + '"]',
    resolution: query.res || 1080,
  }

  return await request(`/api/cloudvideo/playurl`, data, {
    crypto: 'weapi',
    useCheckToken: false,
    MUSIC_U: query.MUSIC_U || ''
  })
}

