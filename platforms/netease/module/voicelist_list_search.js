//声音搜索
module.exports = (query, request) => {
  const data = {
    limit: query.limit || '200',
    offset: query.offset || '0',
    name: query.name || null,
    displayStatus: query.displayStatus || null,
    type: query.type || null,
    voiceFeeType: query.voiceFeeType || null,
    radioId: query.voiceListId,
  }
  return request('/api/voice/workbench/voice/list', data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
