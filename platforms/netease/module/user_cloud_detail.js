// 云盘数据详情

module.exports = async (query, request) => {
  const id = query.id.replace(/\s/g, '').split(',')
  const data = {
    songIds: id,
  }

  return await request(`/api/v1/cloud/get/byids`, data, {
    crypto: 'weapi',
    useCheckToken: false,
    MUSIC_U: query.MUSIC_U || ''
  })
}

