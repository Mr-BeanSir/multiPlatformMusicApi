module.exports = (query, request) => {
  const data = {
    refer: 'inbox_invite',
    roomId: query.roomId,
    inviterId: query.inviterId,
  }
  return request(
    `/api/listen/together/play/invitation/accept`,
    data,
    {
      crypto: 'weapi',
      useCheckToken: false,
      MUSIC_U: query.MUSIC_U || ''
    },
  )
}
