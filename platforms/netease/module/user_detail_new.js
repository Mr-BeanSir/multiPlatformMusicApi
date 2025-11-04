// 用户详情（新版）

module.exports = async (query, request) => {
  const data = {
    all: 'true',
    userId: query.uid,
  }

  return await request(`/api/w/v1/user/detail/${query.uid}`, data, {
    crypto: 'eapi',
    useCheckToken: false,
    MUSIC_U: query.MUSIC_U || ''
  })
}

