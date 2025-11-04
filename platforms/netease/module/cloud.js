// 云盘歌曲上传
const songUploadPlugin = require('../util/songUpload')
const Logger = require('../../../core/Logger')
const logger = new Logger({ component: 'netease-cloud-upload' })

module.exports = async (query, request) => {
  if (!query.songFile) {
    return {
      status: 400,
      body: {
        code: 400,
        msg: 'songFile is required',
      },
    }
  }

  try {
    let ext = 'mp3'
    if (query.songFile.name.includes('.')) {
      ext = query.songFile.name.split('.').pop()
    }

    // 解码文件名（处理中文）
    query.songFile.name = Buffer.from(query.songFile.name, 'latin1').toString('utf-8')
    
    const filename = query.songFile.name
      .replace('.' + ext, '')
      .replace(/\s/g, '')
      .replace(/\./g, '_')

    const bitrate = 999000

    // 如果没有 MD5，需要计算（命令行上传场景）
    if (!query.songFile.md5) {
      const md5 = require('crypto').createHash('md5').update(query.songFile.data).digest('hex')
      query.songFile.md5 = md5
      query.songFile.size = query.songFile.data.byteLength || query.songFile.data.length
    }

    // 检查是否需要上传
    const checkRes = await request(`/api/cloud/upload/check`, {
      bitrate: String(bitrate),
      ext: '',
      length: query.songFile.size,
      md5: query.songFile.md5,
      songId: '0',
      version: 1,
    }, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })

    // 解析音频元数据
    let artist = ''
    let album = ''
    let songName = ''

    try {
      // 如果安装了 music-metadata，尝试解析
      const mm = require('music-metadata')
      const metadata = await mm.parseBuffer(
        query.songFile.data,
        query.songFile.mimetype,
      )
      const info = metadata.common

      if (info.title) songName = info.title
      if (info.album) album = info.album
      if (info.artist) artist = info.artist

      logger.info('Audio metadata parsed', { songName, artist, album })
    } catch (error) {
      logger.warn('Failed to parse audio metadata, using filename', {
        error: error.message
      })
    }

    // 获取上传令牌
    const tokenRes = await request(`/api/nos/token/alloc`, {
      bucket: '',
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

    // 如果需要上传文件
    if (checkRes.body.needUpload) {
      const uploadInfo = await songUploadPlugin(query, request)
      logger.info('Song uploaded', { resourceId: uploadInfo.result?.resourceId })
    }

    // 提交云盘信息
    const infoRes = await request(`/api/upload/cloud/info/v2`, {
      md5: query.songFile.md5,
      songid: checkRes.body.songId,
      filename: query.songFile.name,
      song: songName || filename,
      album: album || '未知专辑',
      artist: artist || '未知艺术家',
      bitrate: String(bitrate),
      resourceId: tokenRes.body.result.resourceId,
    }, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })

    // 发布到云盘
    const pubRes = await request(`/api/cloud/pub/v2`, {
      songid: infoRes.body.songId,
    }, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })

    return {
      status: 200,
      body: {
        code: 200,
        data: {
          ...checkRes.body,
          ...pubRes.body,
        },
      },
      cookie: checkRes.cookie,
    }
  } catch (error) {
    logger.error('Cloud upload failed', { error: error.message })
    return {
      status: 500,
      body: {
        code: 500,
        msg: error.message || 'Cloud upload failed',
      },
    }
  }
}

