// 歌单导入 - 任务状态
module.exports = (query, request) => {
  return request(
    `/api/playlist/import/task/status/v2`,
    {
      taskIds: JSON.stringify([query.id]),
    },
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
