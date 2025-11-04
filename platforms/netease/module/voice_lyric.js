module.exports = (query, request) => {
  const data = {
    programId: query.id,
  }
  return request(`/api/voice/lyric/get`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
