// 全部视频列表

module.exports = async (query, request) => {
  const data = {
    groupId: 0,
    offset: query.offset || 0,
    need_preview_url: 'true',
    total: true,
  }

  return await request(`/api/videotimeline/otherclient/get`, data, {
    crypto: 'weapi',
    useCheckToken: false,
    MUSIC_U: query.MUSIC_U || ''
  })
}

