// MV评论

module.exports = async (query, request) => {
  const data = {
    rid: query.id,
    limit: query.limit || 20,
    offset: query.offset || 0,
    beforeTime: query.before || 0,
  }

  return await request(`/api/v1/resource/comments/R_MV_5_${query.id}`, data, {
    crypto: 'weapi',
    useCheckToken: false,
    MUSIC_U: query.MUSIC_U || ''
  })
}

