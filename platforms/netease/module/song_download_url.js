// 获取客户端歌曲下载链接

module.exports = (query, request) => {
  const data = {
    id: query.id,
    br: parseInt(query.br || 999000),
  }
  return request(`/api/song/enhance/download/url`, data, {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    })
}
