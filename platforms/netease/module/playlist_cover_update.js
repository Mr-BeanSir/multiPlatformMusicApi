// 歌单封面更新
const uploadPlugin = require('../util/upload')

module.exports = async (query, request) => {
  if (!query.imgFile) {
    return {
      status: 400,
      body: {
        code: 400,
        msg: 'imgFile is required',
      },
    }
  }

  if (!query.id) {
    return {
      status: 400,
      body: {
        code: 400,
        msg: 'Playlist id is required',
      },
    }
  }

  try {
    // 上传图片
    const uploadInfo = await uploadPlugin(query, request)
    
    // 更新歌单封面
    const res = await request(`/api/playlist/cover/update`, {
      id: query.id,
      coverImgId: uploadInfo.imgId,
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
          ...uploadInfo,
          ...res.body,
        },
      },
    }
  } catch (error) {
    return {
      status: 500,
      body: {
        code: 500,
        msg: error.message || 'Upload failed',
      },
    }
  }
}

