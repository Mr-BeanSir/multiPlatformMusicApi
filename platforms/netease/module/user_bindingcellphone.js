// 绑定手机号

const CryptoJS = require('crypto-js')

module.exports = async (query, request) => {
  const data = {
    phone: query.phone,
    countrycode: query.countrycode || '86',
    captcha: query.captcha,
    password: query.password ? CryptoJS.MD5(query.password).toString() : '',
  }

  return await request(`/api/user/bindingCellphone`, data, {
    crypto: 'weapi',
    useCheckToken: false,
    MUSIC_U: query.MUSIC_U || ''
  })
}

