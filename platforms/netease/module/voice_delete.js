module.exports = (query, request) => {
  const data = {
    ids: query.ids,
  }
  return request('/api/content/voice/delete', data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
