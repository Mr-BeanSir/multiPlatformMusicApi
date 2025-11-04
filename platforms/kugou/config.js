/**
 * 酷狗音乐平台特定配置
 */

const configJson = require('./util/config.json')

/**
 * 应用核心配置
 */
const APP_CONF = {
  apiDomain: "https://gateway.kugou.com",
  wx_appid: configJson.wx_appid,
  wx_lite_appid: configJson.wx_lite_appid,
  wx_secret: configJson.wx_secret,
  wx_lite_secret: configJson.wx_lite_secret,
  srcappid: configJson.srcappid,
  appid: configJson.appid,
  apiver: configJson.apiver,
  clientver: configJson.clientver,
  liteAppid: configJson.liteAppid,
  liteClientver: configJson.liteClientver
}

/**
 * 缓存配置
 */
const CACHE_CONFIG = {
  enableCache: true,
  defaultTTL: 600000, // 10分钟
}

/**
 * API配置
 */
const API_CONFIG = {
  timeout: 10000, // 10秒超时
  retryCount: 3,
  retryDelay: 1000,
  userAgent: 'Android15-1070-11083-46-0-DiscoveryDRADProtocol-wifi'
}

/**
 * 平台特定验证规则
 */
const PLATFORM_VALIDATION_RULES = {
  'search': {
    keywords: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 100,
      message: 'keywords is required and must be 1-100 characters'
    },
    type: {
      type: 'string',
      default: 'song',
      enum: ['special', 'lyric', 'song', 'album', 'author', 'mv'],
      message: 'Invalid search type'
    }
  }
}

/**
 * 酷狗平台路由特定缓存配置
 * 覆盖默认缓存配置
 * 使用 ttlMinutes（分钟）更易于配置，会自动转换为毫秒
 */
const ROUTE_CACHE_CONFIGS = {
  'search': {
    enabled: true,
    ttlMinutes: 10 // 搜索结果缓存10分钟
  },
  'song/url': {
    enabled: true,
    ttlMinutes: 30 // 歌曲URL缓存30分钟
  },
  'playlist/detail': {
    enabled: true,
    ttlMinutes: 15 // 歌单详情缓存15分钟
  }
}

/**
 * 获取应用核心配置
 */
function getAppConf() {
  return { ...APP_CONF }
}

/**
 * 获取缓存配置
 */
function getCacheConfig() {
  return { ...CACHE_CONFIG }
}

/**
 * 获取API配置
 */
function getApiConfig() {
  return { ...API_CONFIG }
}

/**
 * 获取平台验证规则
 */
function getPlatformValidationRules() {
  return { ...PLATFORM_VALIDATION_RULES }
}

/**
 * 获取路由特定缓存配置
 */
function getRouteCacheConfigs() {
  return { ...ROUTE_CACHE_CONFIGS }
}

module.exports = {
  getAppConf,
  getCacheConfig,
  getApiConfig,
  getPlatformValidationRules,
  getRouteCacheConfigs
}

