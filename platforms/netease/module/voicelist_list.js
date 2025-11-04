module.exports = (query, request) => {
  const data = {
    limit: query.limit || '200',
    offset: query.offset || '0',
    voiceListId: query.voiceListId,
  }
  return request(
    `/api/voice/workbench/voices/by/voicelist`,
    data,
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
