// 音频上传插件
const axios = require('axios')
const Logger = require('../../../core/Logger')
const logger = new Logger({ component: 'netease-song-upload' })

module.exports = async (query, request) => {
  let ext = 'mp3'
  
  if (query.songFile.name.includes('.')) {
    ext = query.songFile.name.split('.').pop()
  }

  const filename = query.songFile.name
    .replace('.' + ext, '')
    .replace(/\s/g, '')
    .replace(/\./g, '_')

  const bucket = 'jd-musicrep-privatecloud-audio-public'

  // 获取上传令牌
  const tokenRes = await request(`/api/nos/token/alloc`, {
    bucket: bucket,
    ext: ext,
    filename: filename,
    local: false,
    nos_product: 3,
    type: 'audio',
    md5: query.songFile.md5,
  }, {
    crypto: 'weapi',
    useCheckToken: false,
    MUSIC_U: query.MUSIC_U || ''
  })

  if (!tokenRes.body || !tokenRes.body.result) {
    throw new Error('Failed to get upload token')
  }

  // 上传音频文件
  const objectKey = tokenRes.body.result.objectKey.replace('/', '%2F')
  
  try {
    // 获取上传服务器地址
    const lbs = (
      await axios({
        method: 'get',
        url: `https://wanproxy.127.net/lbs?version=1.0&bucketname=${bucket}`,
      })
    ).data

    // 上传文件
    await axios({
      method: 'post',
      url: `${lbs.upload[0]}/${bucket}/${objectKey}?offset=0&complete=true&version=1.0`,
      headers: {
        'x-nos-token': tokenRes.body.result.token,
        'Content-MD5': query.songFile.md5,
        'Content-Type': 'audio/mpeg',
        'Content-Length': String(query.songFile.size),
      },
      data: query.songFile.data,
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
    })

    logger.info('Song upload successful', {
      filename: query.songFile.name,
      size: query.songFile.size
    })
  } catch (error) {
    logger.error('Song upload failed', {
      error: error.message,
      response: error.response?.data
    })
    throw error
  }

  return {
    ...tokenRes.body,
  }
}

