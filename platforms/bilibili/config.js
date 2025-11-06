/**
 * Bilibili平台特定配置
 */

/**
 * 应用核心配置
 */
const BILIBILI_CONF = {
  apiDomain: "https://api.bilibili.com",
  domain: "https://www.bilibili.com",
  appKey: "", // Bilibili APP Key (如需要)
  appSecret: "", // Bilibili APP Secret (如需要)
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
  userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

/**
 * 音视频分类配置
 * Bilibili 分区ID映射
 */
const PARTITION_CONFIG = {
  music: 3,        // 音乐区
  dance: 129,      // 舞蹈区
  game: 4,         // 游戏区
  knowledge: 36,   // 知识区
  tech: 188,       // 科技区
  sports: 234,     // 运动区
  car: 223,        // 汽车区
  life: 160,       // 生活区
  food: 211,       // 美食区
  animal: 217,     // 动物圈
  kichiku: 119,    // 鬼畜区
  fashion: 155,    // 时尚区
  information: 202,// 资讯区
  ent: 5,          // 娱乐区
  movie: 181,      // 影视区
  documentary: 177,// 纪录片
}

/**
 * Bilibili平台特定验证规则
 */
const PLATFORM_VALIDATION_RULES = {
  'search': {
    keyword: {
      type: 'string',
      required: false,  // 改为 false，因为可以使用 keywords 参数
      minLength: 1,
      maxLength: 100,
      message: 'keyword must be 1-100 characters'
    },
    keywords: {
      type: 'string',
      required: false,  // 兼容 Netease 的 keywords 参数
      minLength: 1,
      maxLength: 100,
      message: 'keywords must be 1-100 characters'
    },
    search_type: {
      type: 'string',
      default: 'video',
      enum: ['video', 'bili_user', 'user', 'article', 'live', 'live_room', 'media_bangumi', 'bangumi', 'pgc'],
      message: 'Invalid search type'
    },
    type: {
      type: 'string',
      required: false,  // 兼容 Netease 的 type 参数
      message: 'Invalid type parameter'
    }
  },
  'search/suggest': {
    keyword: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 50,
      message: 'keyword is required and must be 1-50 characters'
    }
  },
  'video/playurl': {
    bvid: {
      type: 'string',
      required: true,
      pattern: /^BV[a-zA-Z0-9]+$/,
      message: 'bvid is required and must be a valid BV format'
    },
    cid: {
      type: 'integer',
      required: true,
      message: 'cid is required and must be an integer'
    }
  }
}

/**
 * Bilibili平台路由特定缓存配置
 * 覆盖默认缓存配置
 * 使用 ttlMinutes（分钟）更易于配置，会自动转换为毫秒
 */
const ROUTE_CACHE_CONFIGS = {
  // 播放地址 - 缓存10分钟（URL会过期，不宜缓存太久）
  'video/playurl': {
    enabled: true,
    ttlMinutes: 10
  },
  // 搜索 - 缓存10分钟
  'search': {
    enabled: true,
    ttlMinutes: 10
  },
  // 搜索建议 - 缓存5分钟（热点词变化较快）
  'search/suggest': {
    enabled: true,
    ttlMinutes: 5
  },
}

/**
 * 获取Bilibili配置
 */
function getBilibiliConf() {
  return { ...BILIBILI_CONF }
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
 * 获取分区配置
 */
function getPartitionConfig() {
  return { ...PARTITION_CONFIG }
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
  getBilibiliConf,
  getCacheConfig,
  getApiConfig,
  getPartitionConfig,
  getPlatformValidationRules,
  getRouteCacheConfigs
}

