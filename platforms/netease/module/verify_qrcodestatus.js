module.exports = async (query, request) => {
  const data = {
    qrCode: query.qr,
  }
  const res = await request(
    `/api/frontrisk/verify/qrcodestatus`,
    data,
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
  return res
}
