// 创建二维码
const QRCode = require('qrcode')

module.exports = async (query, request) => {
  return new Promise(async (resolve) => {
    let url = `https://music.163.com/login?codekey=${query.key}`
    const qrimg = query.qrimg ? await QRCode.toDataURL(url) : ''

    return resolve({
      code: 200,
      status: 200,
      body: {
        code: 200,
        data: {
          qrurl: url,
          qrimg,
        },
      },
    })
  })
}

