// 粉丝来源
module.exports = (query, request) => {
  const data = {
    startTime: query.startTime || Date.now() - 7 * 24 * 3600 * 1000,
    endTime: query.endTime || Date.now(),
    type: query.type || 0, //新增关注:0 新增取关:1
  }
  return request(`/api/fanscenter/trend/list`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
