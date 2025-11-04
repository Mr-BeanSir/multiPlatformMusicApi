// 年度听歌报告2017-2023
module.exports = (query, request) => {
  const data = {}
  const key =
    ['2017', '2018', '2019'].indexOf(query.year) > -1 ? 'userdata' : 'data'
  return request(
    `/api/activity/summary/annual/${query.year}/${key}`,
    data,
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
