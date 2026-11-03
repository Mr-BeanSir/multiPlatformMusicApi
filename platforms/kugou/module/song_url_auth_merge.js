const songAuth = require('./song_auth');
const songAuthURL = require('./song_url_auth');

// 聚合获取歌曲授权与播放地址；dfid 由 /register/dev 设置到调用方 Cookie。
module.exports = async (params, useAxios) => {
  const hash = (params?.hash || '').toLowerCase();
  const album_audio_id = Number(params.album_audio_id ?? 0);
  const cookie = { ...(params?.cookie || {}) };
  if (!cookie.dfid) throw new Error('请先调用 /register/dev 获取 dfid，并随 Cookie 一起发送');
  const authorization = params.auth || cookie.auth || '';

  const authData = await songAuth({ hash, album_audio_id, auth: authorization, cookie }, useAxios);
  const { auth, open_time } = authData.body?.data || {};
  if (!auth || !open_time) {
    throw { status: 502, body: { error: '获取 auth 和 open_time 失败', status: 0 }, cookie: [] };
  }

  return songAuthURL({ ...params, cookie, auth, open_time, hash, album_audio_id }, useAxios);
};
