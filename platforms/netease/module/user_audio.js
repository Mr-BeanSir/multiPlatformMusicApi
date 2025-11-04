// 用户创建的电台

module.exports = async (query, request) => {
  const data = {
    userId: query.uid,
  }

  return await request(`/api/djradio/get/byuser`, data, {
    crypto: 'weapi',
    useCheckToken: false,
    MUSIC_U: query.MUSIC_U || ''
  })
}

