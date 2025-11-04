// 编辑用户信息

module.exports = async (query, request) => {
  const data = {
    birthday: query.birthday,
    city: query.city,
    gender: query.gender,
    nickname: query.nickname,
    province: query.province,
    signature: query.signature,
  }

  return await request(`/api/user/profile/update`, data, {
    crypto: 'weapi',
    useCheckToken: false,
    MUSIC_U: query.MUSIC_U || ''
  })
}

