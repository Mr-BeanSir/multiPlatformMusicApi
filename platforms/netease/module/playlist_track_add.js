// 歌单添加歌曲

const Logger = require('../../../core/Logger')
const logger = new Logger({ component: 'netease-playlist-track-add' })

module.exports = async (query, request) => {
  query.ids = query.ids || ''
  const data = {
    id: query.pid,
    tracks: JSON.stringify(
      query.ids.split(',').map((item) => {
        return { type: 3, id: item }
      }),
    ),
  }

  logger.info('Adding tracks to playlist', data)

  return await request(`/api/playlist/track/add`, data, {
    crypto: 'weapi',
    useCheckToken: false,
    MUSIC_U: query.MUSIC_U || ''
  })
}

