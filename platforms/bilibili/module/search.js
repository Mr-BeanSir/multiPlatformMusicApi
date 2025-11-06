/**
 * Bilibili 搜索接口
 * 支持搜索视频、番剧、用户等内容
 * 响应格式与 Netease 平台保持一致
 */

module.exports = async (query, request) => {
  const { 
    keyword,                    // 搜索关键词（必填）
    keywords,                   // 兼容 keywords 参数
    search_type = 'video',      // 搜索类型: video(视频), bili_user(用户), article(专栏), live(直播), media_bangumi(番剧)
    type,                       // 兼容 type 参数
    page = 1,                   // 页码
    page_size = 20,             // 每页数量
    limit,                      // 兼容 limit 参数
    offset,                     // 兼容 offset 参数（转换为 page）
    order = 'totalrank',        // 排序方式: totalrank(综合排序), click(最多点击), pubdate(最新发布), dm(最多弹幕), stow(最多收藏)
    duration = 0,               // 时长筛选: 0(全部), 1(0-10分钟), 2(10-30分钟), 3(30-60分钟), 4(60分钟+)
    tids = 0                    // 分区筛选: 0(全部分区), 其他见分区配置
  } = query

  // 参数兼容处理
  const searchKeyword = keyword || keywords
  const searchType = mapSearchType(search_type || type)
  const pageSize = parseInt(limit || page_size || 20)  // 默认 20
  const currentPage = offset !== undefined ? Math.floor(offset / pageSize) + 1 : parseInt(page || 1)

  // 参数验证
  if (!searchKeyword) {
    throw new Error('keyword 或 keywords 参数必填')
  }

  // 构建搜索参数
  const searchParams = {
    keyword: searchKeyword,
    search_type: searchType,
    page: currentPage,
    page_size: pageSize,
    platform: 'pc',
    __refresh__: 'true'
  }

  // 视频搜索支持更多筛选条件
  if (searchType === 'video') {
    searchParams.order = order
    if (duration > 0) {
      searchParams.duration = duration
    }
    if (tids > 0) {
      searchParams.tids = tids
    }
  }

  try {
    // 调用 Bilibili 搜索 API（使用 wbi 接口）
    const response = await request('/x/web-interface/wbi/search/type', searchParams, {
      method: 'GET',
      headers: {
        'Referer': 'https://search.bilibili.com',
        'Origin': 'https://search.bilibili.com'
      }
    })

    // 检查响应
    if (!response.data || !response.data.result) {
      return formatEmptyResult(searchType)
    }

    // 根据搜索类型格式化结果（与 Netease 格式保持一致）
    return formatSearchResultFromType(response.data, searchType, {
      keyword: searchKeyword,
      page: currentPage,
      pageSize: pageSize
    })
  } catch (error) {
    throw new Error(`Bilibili 搜索失败: ${error.message}`)
  }
}

/**
 * 映射搜索类型
 * 将不同的类型参数统一映射到 Bilibili 的类型
 */
function mapSearchType(type) {
  if (!type) return 'video'
  
  const typeMap = {
    // 视频相关
    'video': 'video',
    '1014': 'video',        // Netease 视频类型
    
    // 用户相关
    'user': 'bili_user',
    'bili_user': 'bili_user',
    '1002': 'bili_user',    // Netease 用户类型
    
    // 专栏相关
    'article': 'article',
    
    // 直播相关
    'live': 'live_room',
    'live_room': 'live_room',
    
    // 番剧相关
    'bangumi': 'media_bangumi',
    'media_bangumi': 'media_bangumi',
    'pgc': 'media_bangumi'
  }
  
  return typeMap[String(type).toLowerCase()] || 'video'
}

/**
 * 格式化搜索结果（从 search/type 接口返回）
 * 与 Netease 格式保持一致
 */
function formatSearchResultFromType(data, searchType, meta) {
  // search/type 接口直接返回对应类型的数据
  const results = data.result || []
  
  if (!results || results.length === 0) {
    return formatEmptyResult(searchType)
  }

  // 根据搜索类型格式化
  switch (searchType) {
    case 'video':
      return formatVideoSearchResult(results, data, meta)
    case 'bili_user':
      return formatUserSearchResult(results, data, meta)
    case 'article':
      return formatArticleSearchResult(results, data, meta)
    case 'live_room':
      return formatLiveSearchResult(results, data, meta)
    case 'media_bangumi':
      return formatBangumiSearchResult(results, data, meta)
    default:
      return formatVideoSearchResult(results, data, meta)
  }
}

/**
 * 格式化视频搜索结果
 */
function formatVideoSearchResult(videos, data, meta) {
  // search/type 接口的分页信息在顶层
  const total = data.numResults || data.num_results || videos.length
  const totalPages = data.numPages || data.num_pages || 1
  const hasMore = meta.page < totalPages

  return {
    result: {
      videos: videos.map(video => ({
        id: video.bvid || video.id,
        bvid: video.bvid,
        aid: video.aid,
        title: cleanHtmlTags(video.title),
        description: video.description || video.desc || '',
        pic: video.pic ? (video.pic.startsWith('//') ? 'https:' + video.pic : video.pic) : '',
        author: video.author || video.uname || '',
        mid: video.mid || video.uid || 0,
        play: video.play || 0,
        videoReview: video.video_review || video.danmaku || 0,
        favorites: video.favorites || video.favorite || 0,
        duration: parseDuration(video.duration),
        pubdate: video.pubdate || 0,
        tag: video.tag || '',
        type: video.typename || '',
        typeId: video.typeid || '',
        platform: 'bilibili'
      })),
      videoCount: total,
      hasMore: hasMore
    }
  }
}

/**
 * 格式化用户搜索结果
 */
function formatUserSearchResult(users, data, meta) {
  const total = data.numResults || data.num_results || users.length
  const totalPages = data.numPages || data.num_pages || 1
  const hasMore = meta.page < totalPages

  return {
    result: {
      users: users.map(user => ({
        userId: user.mid || user.uid || 0,
        mid: user.mid || user.uid || 0,
        nickname: user.uname || user.name || '',
        avatarUrl: user.upic || user.face || '',
        signature: user.usign || user.sign || '',
        gender: user.gender || 0,
        level: user.level || 0,
        fans: user.fans || 0,
        videos: user.videos || 0,
        officialVerify: user.official_verify ? {
          type: user.official_verify.type || -1,
          desc: user.official_verify.desc || ''
        } : null,
        vipType: user.vip?.type || 0,
        platform: 'bilibili'
      })),
      userCount: total,
      hasMore: hasMore
    }
  }
}

/**
 * 格式化专栏搜索结果
 */
function formatArticleSearchResult(articles, data, meta) {
  const total = data.numResults || data.num_results || articles.length
  const totalPages = data.numPages || data.num_pages || 1
  const hasMore = meta.page < totalPages

  return {
    result: {
      articles: articles.map(article => ({
        id: article.id,
        title: cleanHtmlTags(article.title),
        desc: article.desc || article.description || '',
        imageUrls: article.image_urls || [],
        author: {
          mid: article.mid || 0,
          name: article.name || '',
          face: article.face || ''
        },
        category: {
          id: article.category_id || 0,
          name: article.category_name || ''
        },
        view: article.view || 0,
        like: article.like || 0,
        reply: article.reply || 0,
        pubdate: article.pub_time || 0,
        platform: 'bilibili'
      })),
      articleCount: total,
      hasMore: hasMore
    }
  }
}

/**
 * 格式化直播搜索结果
 */
function formatLiveSearchResult(lives, data, meta) {
  const total = data.numResults || data.num_results || lives.length
  const totalPages = data.numPages || data.num_pages || 1
  const hasMore = meta.page < totalPages

  return {
    result: {
      lives: lives.map(live => ({
        roomid: live.roomid || 0,
        title: cleanHtmlTags(live.title),
        cover: live.cover || live.user_cover || '',
        uname: live.uname || '',
        uid: live.uid || 0,
        online: live.online || 0,
        liveStatus: live.live_status || 0,
        areaName: live.area_name || '',
        tags: live.tags || '',
        platform: 'bilibili'
      })),
      liveCount: total,
      hasMore: hasMore
    }
  }
}

/**
 * 格式化番剧搜索结果
 */
function formatBangumiSearchResult(bangumis, data, meta) {
  const total = data.numResults || data.num_results || bangumis.length
  const totalPages = data.numPages || data.num_pages || 1
  const hasMore = meta.page < totalPages

  return {
    result: {
      bangumis: bangumis.map(bangumi => ({
        seasonId: bangumi.season_id || 0,
        title: cleanHtmlTags(bangumi.title),
        cover: bangumi.cover || '',
        mediaType: bangumi.media_type || 0,
        areas: bangumi.areas || '',
        styles: bangumi.styles || '',
        cv: bangumi.cv || '',
        staff: bangumi.staff || '',
        pubtime: bangumi.pubtime || 0,
        seasonType: bangumi.season_type || 0,
        badges: bangumi.badges || [],
        platform: 'bilibili'
      })),
      bangumiCount: total,
      hasMore: hasMore
    }
  }
}

/**
 * 返回空结果
 */
function formatEmptyResult(searchType) {
  const typeMap = {
    'video': { videos: [], videoCount: 0, hasMore: false },
    'bili_user': { users: [], userCount: 0, hasMore: false },
    'article': { articles: [], articleCount: 0, hasMore: false },
    'live_room': { lives: [], liveCount: 0, hasMore: false },
    'media_bangumi': { bangumis: [], bangumiCount: 0, hasMore: false }
  }
  
  return {
    result: typeMap[searchType] || { videos: [], videoCount: 0, hasMore: false }
  }
}

/**
 * 清理 HTML 标签
 * 移除搜索结果中的高亮标签 <em class="keyword">
 */
function cleanHtmlTags(text) {
  if (!text) return ''
  return text.replace(/<[^>]*>/g, '')
}

/**
 * 解析时长
 * 将 "3:27" 格式转换为秒数
 */
function parseDuration(duration) {
  if (!duration) return 0
  if (typeof duration === 'number') return duration
  
  const parts = String(duration).split(':')
  if (parts.length === 2) {
    return parseInt(parts[0]) * 60 + parseInt(parts[1])
  } else if (parts.length === 3) {
    return parseInt(parts[0]) * 3600 + parseInt(parts[1]) * 60 + parseInt(parts[2])
  }
  return 0
}

