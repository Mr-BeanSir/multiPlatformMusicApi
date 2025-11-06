const axios = require('axios')
const bilibiliConfig = require('../config')

/**
 * Bilibili API 请求封装
 * @param {string} url - API地址（相对或绝对路径）
 * @param {Object} data - 请求参数
 * @param {Object} options - 请求选项
 * @returns {Promise} 请求结果
 */
async function request(url, data = {}, options = {}) {
  const apiConfig = bilibiliConfig.getApiConfig()
  const bilibiliConf = bilibiliConfig.getBilibiliConf()
  
  // 如果是相对路径，拼接完整URL
  const fullUrl = url.startsWith('http') ? url : `${bilibiliConf.apiDomain}${url}`
  
  // 默认请求配置
  const config = {
    method: options.method || 'GET',
    url: fullUrl,
    headers: {
      'User-Agent': options.userAgent || apiConfig.userAgent,
      'Referer': bilibiliConf.domain,
      'Origin': bilibiliConf.domain,
      ...options.headers
    },
    timeout: options.timeout || apiConfig.timeout,
    // 如果有cookie，添加到请求头
    ...(options.cookie && { headers: { ...config.headers, Cookie: options.cookie } })
  }

  // 根据请求方法设置参数
  if (config.method === 'GET') {
    config.params = data
  } else {
    config.data = data
  }

  try {
    const response = await axios(config)
    
    // Bilibili API 通常返回格式: { code: 0, message: "success", data: {...} }
    if (response.data.code !== undefined && response.data.code !== 0) {
      throw new Error(response.data.message || `API返回错误码: ${response.data.code}`)
    }
    
    return response.data
  } catch (error) {
    // 处理网络错误或API错误
    if (error.response) {
      // 服务器返回了错误响应
      throw new Error(`API请求失败: ${error.response.status} - ${error.response.statusText}`)
    } else if (error.request) {
      // 请求已发出但没有收到响应
      throw new Error('API请求超时或无响应')
    } else {
      // 其他错误
      throw error
    }
  }
}

/**
 * GET 请求
 */
async function get(url, params = {}, options = {}) {
  return request(url, params, { ...options, method: 'GET' })
}

/**
 * POST 请求
 */
async function post(url, data = {}, options = {}) {
  return request(url, data, { ...options, method: 'POST' })
}

module.exports = request
module.exports.get = get
module.exports.post = post

