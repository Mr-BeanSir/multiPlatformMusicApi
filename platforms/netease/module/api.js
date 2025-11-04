// 通用API接口

module.exports = async (query, request) => {
  const uri = query.uri
  let data = {}
  
  try {
    data = typeof query.data === 'string' ? JSON.parse(query.data) : query.data || {}
  } catch (e) {
    data = {}
  }

  const crypto = query.crypto || ''

  return await request(uri, data, {
    crypto: crypto,
    useCheckToken: false,
    MUSIC_U: query.MUSIC_U || ''
  })
}

