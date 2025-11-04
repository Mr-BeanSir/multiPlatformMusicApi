// 视频标签/分类下的视频

module.exports = async (query, request) => {
  const data = {
    groupId: query.id,
    offset: query.offset || 0,
    need_preview_url: 'true',
    total: true,
  }

  return await request(`/api/videotimeline/videogroup/otherclient/get`, data, {
    crypto: 'weapi',
    useCheckToken: false,
    MUSIC_U: query.MUSIC_U || ''
  })
}

