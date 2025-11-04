// 创建二维码

module.exports = async (query, request) => {
  return new Promise(async (resolve) => {
    const platform = query.platform || 'pc'
    let url = `https://music.163.com/login?codekey=${query.key}`
    
    // 如果需要生成二维码图片，需要安装 qrcode 模块
    // const QRCode = require('qrcode')
    // const qrimg = query.qrimg ? await QRCode.toDataURL(url) : ''
    
    return resolve({
      code: 200,
      status: 200,
      body: {
        code: 200,
        data: {
          qrurl: url,
          qrimg: '', // 需要安装 qrcode 模块才能生成图片
        },
      },
    })
  })
}

