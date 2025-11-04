// 推荐视频

module.exports = async (query, request) => {
  const data = {
    offset: query.offset || 0,
    filterLives: '[]',
    withProgramInfo: 'true',
    needUrl: '1',
    resolution: '480',
  }

  return await request(`/api/videotimeline/get`, data, {
    crypto: 'weapi',
    useCheckToken: false,
    MUSIC_U: query.MUSIC_U || ''
  })
}

