const BasePlatform = require('../base/BasePlatform')
const { createRequest } = require('./util/request')
const path = require('path')
const kugouConfig = require('./config')

/**
 * 酷狗音乐平台适配器
 * 封装酷狗音乐API到统一接口
 */
class KuGouPlatform extends BasePlatform {
  constructor(config = {}) {
    super({
      name: 'kugou',
      ...kugouConfig.getCacheConfig(), // 使用平台特定的缓存配置
      ...config
    })
    
    // 平台配置
    this.appConfig = kugouConfig.getAppConf()
    this.apiConfig = kugouConfig.getApiConfig()
    
    // 酷狗的标准版 / 概念版配置，与统一 API 的 platform=kugou 参数分开。
    this.platformType = config.platformType || process.env.KUGOU_PLATFORM || process.env.platform || 'default'
    if (!['default', 'lite'].includes(this.platformType)) {
      throw new Error('KUGOU_PLATFORM must be "default" or "lite"')
    }
    process.env.platform = this.platformType === 'lite' ? 'lite' : ''

    const { calculateMid, cryptoMd5, generateWebGLHash, getGuid, isUUIDv4, randomString } = require('./util/util')
    const configuredGuid = process.env.KUGOU_API_GUID
    const envGuid = configuredGuid
      ? (isUUIDv4(configuredGuid) ? cryptoMd5(configuredGuid) : configuredGuid)
      : undefined
    const guid = envGuid ?? getGuid()
    this.deviceCookies = {
      KUGOU_API_PLATFORM: process.env.platform,
      KUGOU_API_MID: calculateMid(envGuid ?? guid),
      KUGOU_API_GUID: guid,
      KUGOU_API_DEV: (process.env.KUGOU_API_DEV ?? randomString(10)).toUpperCase(),
      KUGOU_API_MAC: (process.env.KUGOU_API_MAC ?? '02:00:00:00:00:00').toUpperCase(),
      KUGOU_API_WEBGL: process.env.KUGOU_API_WEBGL ?? generateWebGLHash()
    }
    
    this.logger.debug('KuGou platform initialized with config', {
      platformType: this.platformType,
      appid: this.appConfig.appid
    })
  }

  /**
   * 初始化平台
   */
  async doInitialize() {
    const modulePath = path.join(__dirname, 'module')

    // 异步动态加载模块
    await this.loadModules(modulePath)

    this.logger.debug(`KuGou platform initialized with ${this.modules.size} modules`)
  }

  async callModule(route, req) {
    const { cookieToJson } = require('./util')
    const query = { ...req.query, ...req.body }
    const suppliedCookie = typeof query.cookie === 'string'
      ? cookieToJson(query.cookie)
      : query.cookie || {}
    const cookie = { ...this.deviceCookies, ...(req.cookies || {}), ...suppliedCookie }
    for (const key of ['token', 'userid', 'dfid']) {
      if (cookie[key] === undefined && query[key] !== undefined) cookie[key] = query[key]
    }

    const adaptedReq = Object.create(req)
    adaptedReq.query = { ...req.query, cookie }
    adaptedReq.body = { ...req.body, cookie }
    const result = await super.callModule(route, adaptedReq)
    const cookiesToSet = Object.entries(this.deviceCookies)
      .filter(([name]) => !req.cookies?.[name])
      .map(([name, value]) => `${name}=${value}`)
    result.cookie = [...cookiesToSet, ...(result.cookie || [])]
    return result
  }

  /**
   * 模块调用前的验证
   */
  async beforeModuleCall(query, route) {
    // 酷狗平台特定的验证逻辑
    // 例如：token验证、用户ID验证等
    this.logger.debug(`Before module call for route: ${route}`)
  }

  /**
   * 创建请求函数
   * 返回酷狗平台专用的请求函数
   */
  createRequestFunction(req) {
    return (options) => {
      let ip = options.ip || req?.ip || req?.connection?.remoteAddress
      if (ip?.startsWith('::ffff:')) ip = ip.slice(7)
      // 注入平台配置
      const requestOptions = {
        ...options,
        platformType: this.platformType
      }

      return createRequest({
        ...requestOptions,
        ip
      })
    }
  }

  /**
   * 设置平台类型
   * @param {string} type - 'default' 或 'lite'
   */
  setPlatformType(type) {
    if (type !== 'default' && type !== 'lite') {
      throw new Error('Platform type must be "default" or "lite"')
    }
    this.platformType = type
    process.env.platform = type === 'lite' ? 'lite' : ''
    this.logger.info(`KuGou platform type set to: ${type}`)
  }
}

module.exports = KuGouPlatform

