// 购买数字专辑

module.exports = (query, request) => {
  const data = {
    business: 'Album',
    paymentMethod: query.payment,
    digitalResources: JSON.stringify([
      {
        business: 'Album',
        resourceID: query.id,
        quantity: query.quantity,
      },
    ]),
    from: 'web',
  }
  return request(
    `/api/ordering/web/digital`,
    data,
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
