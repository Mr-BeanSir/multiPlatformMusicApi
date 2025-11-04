// 用户绑定信息

module.exports = async (query, request) => {
  const data = {}

  return await request(`/api/v1/user/bindings/${query.uid}`, data, {
    crypto: 'weapi',
    useCheckToken: false,
    MUSIC_U: query.MUSIC_U || ''
  })
}

