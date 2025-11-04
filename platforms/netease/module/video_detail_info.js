// 视频点赞转发评论数数据

module.exports = async (query, request) => {
  const data = {
    threadid: `R_VI_62_${query.vid}`,
    composeliked: true,
  }

  return await request(`/api/comment/commentthread/info`, data, {
    crypto: 'weapi',
    useCheckToken: false,
    MUSIC_U: query.MUSIC_U || ''
  })
}

