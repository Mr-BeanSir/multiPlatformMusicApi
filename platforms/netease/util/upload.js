// 图片上传插件
const axios = require('axios')

module.exports = async (query, request) => {
  const data = {
    bucket: 'yyimgs',
    ext: 'jpg',
    filename: query.imgFile.name,
    local: false,
    nos_product: 0,
    return_body: `{"code":200,"size":"$(ObjectSize)"}`,
    type: 'other',
  }

  // 获取上传令牌
  const res = await request(`/api/nos/token/alloc`, data, {
    crypto: 'weapi',
    useCheckToken: false,
    MUSIC_U: query.MUSIC_U || ''
  })

  if (!res.body || !res.body.result) {
    throw new Error('Failed to get upload token')
  }

  // 上传图片到网易云存储
  const uploadUrl = `https://nosup-hz1.127.net/yyimgs/${res.body.result.objectKey}?offset=0&complete=true&version=1.0`
  
  const res2 = await axios({
    method: 'post',
    url: uploadUrl,
    headers: {
      'x-nos-token': res.body.result.token,
      'Content-Type': 'image/jpeg',
    },
    data: query.imgFile.data,
  })

  return {
    url_pre: 'https://p1.music.126.net/' + res.body.result.objectKey,
    imgId: res.body.result.docId,
    objectKey: res.body.result.objectKey,
    token: res.body.result.token,
  }
}

