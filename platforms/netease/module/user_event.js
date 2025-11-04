// 用户动态

module.exports = async (query, request) => {
  const data = {
    getcounts: true,
    time: query.lasttime || -1,
    limit: query.limit || 30,
    total: false,
  }

  return await request(`/api/event/get/${query.uid}`, data, {
    crypto: 'weapi',
    useCheckToken: false,
    MUSIC_U: query.MUSIC_U || ''
  })
}

