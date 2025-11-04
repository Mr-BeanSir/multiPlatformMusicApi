// 匿名注册
// 注意：此功能需要特殊的设备ID生成逻辑

const CryptoJS = require('crypto-js')

const ID_XOR_KEY_1 = '3go8&$8*3*3h0k(2)2'

function cloudmusic_dll_encode_id(some_id) {
  let xoredString = ''
  for (let i = 0; i < some_id.length; i++) {
    const charCode =
      some_id.charCodeAt(i) ^ ID_XOR_KEY_1.charCodeAt(i % ID_XOR_KEY_1.length)
    xoredString += String.fromCharCode(charCode)
  }
  const wordArray = CryptoJS.enc.Utf8.parse(xoredString)
  const digest = CryptoJS.MD5(wordArray)
  return CryptoJS.enc.Base64.stringify(digest)
}

function generateDeviceId() {
  // 生成随机设备ID
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0
    const v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

module.exports = async (query, request) => {
  const deviceId = generateDeviceId()
  const encodedId = CryptoJS.enc.Base64.stringify(
    CryptoJS.enc.Utf8.parse(
      `${deviceId} ${cloudmusic_dll_encode_id(deviceId)}`,
    ),
  )

  const data = {
    username: encodedId,
  }

  let result = await request(`/api/register/anonimous`, data, {
    crypto: 'weapi',
    useCheckToken: false,
    MUSIC_U: ''
  })

  if (result.body.code === 200) {
    result = {
      status: 200,
      body: {
        ...result.body,
        cookie: result.cookie.join(';'),
      },
      cookie: result.cookie,
    }
  }

  return result
}

