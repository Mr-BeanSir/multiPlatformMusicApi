// TA关注的人(关注)

module.exports = async (query, request) => {
  const data = {
    offset: query.offset || 0,
    limit: query.limit || 30,
    order: true,
  }

  return await request(`/api/user/getfollows/${query.uid}`, data, {
    crypto: 'weapi',
    useCheckToken: false,
    MUSIC_U: query.MUSIC_U || ''
  })
}

