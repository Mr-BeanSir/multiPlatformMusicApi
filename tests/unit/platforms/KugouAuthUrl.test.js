jest.mock('../../../platforms/kugou/module/song_auth', () => jest.fn())
jest.mock('../../../platforms/kugou/module/song_url_auth', () => jest.fn())

const songAuth = require('../../../platforms/kugou/module/song_auth')
const songAuthUrl = require('../../../platforms/kugou/module/song_url_auth')
const songAuthMerge = require('../../../platforms/kugou/module/song_url_auth_merge')

describe('KuGou auth URL aggregation', () => {
  beforeEach(() => jest.clearAllMocks())

  test('gets auth and open_time first, then requests the URL with the registered dfid', async () => {
    const useAxios = jest.fn()
    const urlResponse = { status: 200, body: { data: { url: ['https://audio.test/song'] } }, cookie: [] }
    songAuth.mockResolvedValue({ body: { data: { auth: 'auth-value', open_time: 123456 } } })
    songAuthUrl.mockResolvedValue(urlResponse)
    const cookie = { token: 'session-token', userid: '123', dfid: 'registered-device' }

    const result = await songAuthMerge({ hash: 'ABCDEF', cookie }, useAxios)

    expect(songAuth).toHaveBeenCalledWith({
      hash: 'abcdef',
      album_audio_id: 0,
      auth: '',
      cookie
    }, useAxios)
    expect(songAuthUrl).toHaveBeenCalledWith(expect.objectContaining({
      hash: 'abcdef',
      auth: 'auth-value',
      open_time: 123456,
      cookie
    }), useAxios)
    expect(result).toBe(urlResponse)
  })

  test('does not request a URL if the auth response is incomplete', async () => {
    songAuth.mockResolvedValue({ body: { data: { auth: 'auth-value' } } })

    await expect(songAuthMerge({ hash: 'ABCDEF', cookie: { dfid: 'registered-device' } }, jest.fn()))
      .rejects.toMatchObject({ body: { error: '获取 auth 和 open_time 失败' } })
    expect(songAuthUrl).not.toHaveBeenCalled()
  })

  test('requires the dfid established by register/dev', async () => {
    await expect(songAuthMerge({ hash: 'ABCDEF', cookie: {} }, jest.fn()))
      .rejects.toThrow('先调用 /register/dev 获取 dfid')
    expect(songAuth).not.toHaveBeenCalled()
  })
})
