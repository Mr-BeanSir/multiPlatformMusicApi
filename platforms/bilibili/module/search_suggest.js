/**
 * Bilibili 搜索建议接口
 * 根据关键词获取搜索建议列表（自动补全）
 */

module.exports = async (query, request) => {
  const { 
    keyword,              // 搜索关键词（必填）
    highlight = 0         // 是否高亮显示（0:不高亮, 1:高亮）
  } = query

  // 参数验证
  if (!keyword) {
    throw new Error('keyword 参数必填')
  }

  try {
    // 调用 Bilibili 搜索建议 API
    const result = await request('/x/web-interface/suggest', {
      term: keyword,
      highlight: highlight,
      spmid: 0,
      web_location: '0.0'
    }, {
      method: 'GET',
      headers: {
        'Referer': 'https://search.bilibili.com',
        'Origin': 'https://search.bilibili.com'
      }
    })

    // 检查返回数据
    if (!result.data || !result.data.result || !result.data.result.tag) {
      return {
        keyword: keyword,
        suggestions: [],
        total: 0
      }
    }

    const suggestions = result.data.result.tag

    // 格式化返回数据
    return {
      keyword: keyword,
      total: result.data.total_count || suggestions.length,
      suggestions: suggestions.map(item => ({
        value: item.value,           // 建议值（用于搜索）
        term: item.term,             // 原始搜索词
        name: cleanHtmlTags(item.name), // 显示名称（已清理HTML标签）
        name_raw: item.name,         // 原始名称（包含高亮标签）
        type: item.type || 'tag',    // 类型
        ref: item.ref                // 引用计数
      }))
    }
  } catch (error) {
    throw new Error(`获取搜索建议失败: ${error.message}`)
  }
}

/**
 * 清理 HTML 标签
 * 移除搜索结果中的高亮标签 <em class="suggest_high_light">
 * @param {string} text - 包含HTML标签的文本
 * @returns {string} 纯文本
 */
function cleanHtmlTags(text) {
  if (!text) return ''
  // 移除所有 HTML 标签
  return text.replace(/<[^>]*>/g, '')
}

