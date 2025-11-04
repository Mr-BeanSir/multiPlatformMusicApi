// 楼层评论

module.exports = async (query, request) => {
  const resourceTypeMap = {
    '0': 'R_SO_4_',
    '1': 'R_MV_5_',
    '2': 'A_PL_0_',
    '3': 'R_AL_3_',
    '4': 'A_DJ_1_',
    '5': 'R_VI_62_',
    '6': 'A_EV_2_',
    '7': 'A_DR_14_'
  }

  const type = resourceTypeMap[query.type]
  const data = {
    parentCommentId: query.parentCommentId,
    threadId: type + query.id,
    time: query.time || -1,
    limit: query.limit || 20,
  }

  return await request(`/api/resource/comment/floor/get`, data, {
    crypto: 'weapi',
    useCheckToken: false,
    MUSIC_U: query.MUSIC_U || ''
  })
}

