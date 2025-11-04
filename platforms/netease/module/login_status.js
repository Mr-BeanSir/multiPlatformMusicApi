// 登录状态

module.exports = async (query, request) => {
  const data = {}
  
  let result = await request(`/api/w/nuser/account/get`, data, {
    crypto: 'weapi',
    useCheckToken: false,
    MUSIC_U: query.MUSIC_U || ''
  })

  if (result.body.code === 200) {
    result = {
      status: 200,
      body: {
        data: {
          ...result.body,
        },
      },
      cookie: result.cookie,
    }
  }

  return result
}

