const KuGouPlatform = require('../../../platforms/kugou/KuGouPlatform')

describe('KuGouPlatform configuration', () => {
  const originalKugouPlatform = process.env.KUGOU_PLATFORM
  const originalPlatform = process.env.platform

  afterEach(() => {
    if (originalKugouPlatform === undefined) delete process.env.KUGOU_PLATFORM
    else process.env.KUGOU_PLATFORM = originalKugouPlatform
    if (originalPlatform === undefined) delete process.env.platform
    else process.env.platform = originalPlatform
  })

  test('defaults to the standard client and accepts lite as an optional setting', () => {
    delete process.env.KUGOU_PLATFORM
    delete process.env.platform
    expect(new KuGouPlatform().platformType).toBe('default')

    const lite = new KuGouPlatform({ platformType: 'lite' })
    expect(lite.platformType).toBe('lite')
    expect(process.env.platform).toBe('lite')
  })

  test('rejects unsupported client types', () => {
    expect(() => new KuGouPlatform({ platformType: 'mobile' })).toThrow('KUGOU_PLATFORM')
  })

  test('loads upstream API routes without exposing helper modules', async () => {
    const platform = new KuGouPlatform()
    await platform.initialize()

    expect(platform.modules.has('search')).toBe(true)
    expect(platform.modules.has('song/url')).toBe(true)
    expect(platform.modules.has('/comment')).toBe(false)
  })

  test('passes request Cookie values to upstream modules', async () => {
    const platform = new KuGouPlatform()
    platform.initialized = true
    platform.modules.set('cookie-test', async query => ({
      token: query.cookie.token,
      userid: query.cookie.userid,
      mid: query.cookie.KUGOU_API_MID
    }))

    const result = await platform.callModule('cookie-test', {
      query: { platform: 'kugou' },
      body: {},
      cookies: { token: 'test-token', userid: '123' },
      ip: '127.0.0.1',
      connection: {}
    })

    expect(result.token).toBe('test-token')
    expect(result.userid).toBe('123')
    expect(result.mid).toBeTruthy()
    expect(result.cookie.map(value => value.split('=')[0])).toEqual(expect.arrayContaining([
      'KUGOU_API_PLATFORM', 'KUGOU_API_MID', 'KUGOU_API_GUID', 'KUGOU_API_DEV', 'KUGOU_API_MAC', 'KUGOU_API_WEBGL'
    ]))
  })
})
