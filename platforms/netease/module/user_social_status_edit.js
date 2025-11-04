// 用户状态 - 编辑

module.exports = async (query, request) => {
  return await request(`/api/social/user/status/edit`, {
    content: JSON.stringify({
      type: query.type,
      iconUrl: query.iconUrl,
      content: query.content,
      actionUrl: query.actionUrl,
    }),
  }, {
    crypto: 'weapi',
    useCheckToken: false,
    MUSIC_U: query.MUSIC_U || ''
  })
}

