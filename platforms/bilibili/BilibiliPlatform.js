const BasePlatform = require('../base/BasePlatform')
const request = require('./util/request')
const path = require('path')
const bilibiliConfig = require('./config')

/**
 * Bilibili平台适配器
 * 封装Bilibili API到统一接口
 */
class BilibiliPlatform extends BasePlatform {
  constructor(config = {}) {
    super({
      name: 'bilibili',
      ...bilibiliConfig.getCacheConfig(), // 使用平台特定的缓存配置
      ...config
    })
  }

  /**
   * 初始化平台
   */
  async doInitialize() {
    const modulePath = path.join(__dirname, 'module')

    // 异步动态加载模块
    await this.loadModules(modulePath)

    this.logger.debug(`Bilibili platform initialized with ${this.modules.size} modules`)
  }

  /**
   * 模块调用前的验证
   * 可以在此处添加 Bilibili 特定的验证逻辑
   */
  async beforeModuleCall(query, route) {
    // 如果需要验证用户 Cookie 或其他参数，可以在此处添加
    // 例如验证 SESSDATA 等 Bilibili 特有的认证信息
  }

  /**
   * 创建请求函数
   */
  createRequestFunction() {
    return (url, data, options = {}) => {
      return request(url, data, options)
    }
  }
}

module.exports = BilibiliPlatform

