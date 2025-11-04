// 发送与删除评论

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

  const action = {
    1: 'add',
    0: 'delete',
    2: 'reply',
  }[query.t]

  const type = resourceTypeMap[query.type]
  const data = {
    threadId: type + query.id,
  }

  if (type == 'A_EV_2_') {
    data.threadId = query.threadId
  }
  
  if (action == 'add') {
    data.content = query.content
  } else if (action == 'delete') {
    data.commentId = query.commentId
  } else if (action == 'reply') {
    data.commentId = query.commentId
    data.content = query.content
  }

  return await request(`/api/resource/comments/${action}`, data, {
    crypto: 'weapi',
    useCheckToken: false,
    MUSIC_U: query.MUSIC_U || ''
  })
}

