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
    
    // 设置平台类型（默认或lite）
    this.platformType = process.env.KUGOU_PLATFORM || 'default' // 'default' 或 'lite'
    
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
  createRequestFunction() {
    return (options) => {
      // 注入平台配置
      const requestOptions = {
        ...options,
        platformType: this.platformType
      }

      return createRequest(requestOptions)
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
    process.env.platform = type === 'lite' ? 'lite' : undefined
    this.logger.info(`KuGou platform type set to: ${type}`)
  }
}

module.exports = KuGouPlatform

