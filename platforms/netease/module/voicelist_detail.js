module.exports = (query, request) => {
  const data = {
    id: query.id,
  }
  return request(
    `/api/voice/workbench/voicelist/detail`,
    data,
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
