// 用户电台节目

module.exports = async (query, request) => {
  const data = {
    limit: query.limit || 30,
    offset: query.offset || 0,
  }

  return await request(`/api/dj/program/${query.uid}`, data, {
    crypto: 'weapi',
    useCheckToken: false,
    MUSIC_U: query.MUSIC_U || ''
  })
}

