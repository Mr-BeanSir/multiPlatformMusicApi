module.exports = (query, request) => {
  const data = {
    startTime: query.startTime || Date.now(),
    endTime: query.endTime || Date.now(),
  }
  return request(`/api/mcalendar/detail`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
