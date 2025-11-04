// 头像上传
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

  try {
    // 上传图片
    const uploadInfo = await uploadPlugin(query, request)
    
    // 调用头像更新接口
    const res = await request(`/api/user/avatar/upload/v1`, {
      imgid: uploadInfo.imgId,
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

