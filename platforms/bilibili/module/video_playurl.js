/**
 * Bilibili 获取播放地址接口
 * 获取视频/音频的播放流地址
 * 注意：主要关注 audio 字段，返回音频流地址
 */

module.exports = async (query, request) => {
  const { 
    bvid,                    // 视频BV号（必填）
    cid,                     // 视频CID（必填）
    fnval = 4048,            // 流格式标识（默认4048）
    qn = 80,                 // 清晰度（80=1080P, 64=720P, 32=480P, 16=360P）
    from_client = 'BROWSER', // 客户端类型
    is_main_page = true      // 是否主页面
  } = query

  // 参数验证
  if (!bvid) {
    throw new Error('bvid 参数必填')
  }
  
  if (!cid) {
    throw new Error('cid 参数必填')
  }

  // 构建请求参数
  const playParams = {
    bvid: bvid,
    cid: cid,
    fnval: fnval,
    qn: qn,
    from_client: from_client,
    is_main_page: is_main_page
  }

  try {
    // 调用 Bilibili 播放地址 API
    const response = await request('/x/player/wbi/playurl', playParams, {
      method: 'GET',
      headers: {
        'Referer': 'https://www.bilibili.com',
        'Origin': 'https://www.bilibili.com'
      }
    })

    // 检查响应
    if (!response.data) {
      throw new Error('获取播放地址失败：响应数据为空')
    }

    // 格式化返回数据（主要关注 audio 字段）
    return formatPlayUrlResult(response.data, {
      bvid: bvid,
      cid: cid,
      quality: qn
    })
  } catch (error) {
    throw new Error(`获取播放地址失败: ${error.message}`)
  }
}

/**
 * 格式化播放地址结果
 * 主要返回音频流地址
 */
function formatPlayUrlResult(data, meta) {
  // 基础信息
  const result = {
    bvid: meta.bvid,
    cid: meta.cid,
    quality: data.quality || meta.quality,
    format: data.format || '',
    timelength: data.timelength || 0,          // 视频总时长（毫秒）
    duration: Math.floor((data.timelength || 0) / 1000), // 转换为秒
    accept_quality: data.accept_quality || [],  // 支持的清晰度列表
    accept_description: data.accept_description || [], // 清晰度描述
    support_formats: data.support_formats || [], // 支持的格式列表
  }

  // DASH 格式数据
  if (data.dash) {
    result.dash = {
      duration: data.dash.duration || 0,
      minBufferTime: data.dash.minBufferTime || data.dash.min_buffer_time || 1.5
    }

    // 音频流数据（重点）
    if (data.dash.audio && data.dash.audio.length > 0) {
      result.audio = data.dash.audio.map(audio => ({
        id: audio.id,
        baseUrl: audio.baseUrl || audio.base_url || '',
        backupUrl: audio.backupUrl || audio.backup_url || [],
        bandwidth: audio.bandwidth || 0,
        mimeType: audio.mimeType || audio.mime_type || '',
        codecs: audio.codecs || '',
        width: audio.width || 0,
        height: audio.height || 0,
        frameRate: audio.frameRate || audio.frame_rate || '',
        sar: audio.sar || '',
        startWithSap: audio.startWithSap || audio.start_with_sap || 0,
        codecid: audio.codecid || 0,
        // 分段信息
        segment: audio.SegmentBase || audio.segment_base ? {
          initialization: (audio.SegmentBase || audio.segment_base).Initialization || 
                         (audio.SegmentBase || audio.segment_base).initialization || '',
          indexRange: (audio.SegmentBase || audio.segment_base).indexRange || 
                     (audio.SegmentBase || audio.segment_base).index_range || ''
        } : null
      }))
    } else {
      // 如果没有音频流，返回空数组
      result.audio = []
    }

    // 视频流数据（可选，用户说不用关心但保留以防需要）
    if (data.dash.video && data.dash.video.length > 0) {
      result.video = data.dash.video.map(video => ({
        id: video.id,
        baseUrl: video.baseUrl || video.base_url || '',
        backupUrl: video.backupUrl || video.backup_url || [],
        bandwidth: video.bandwidth || 0,
        mimeType: video.mimeType || video.mime_type || '',
        codecs: video.codecs || '',
        width: video.width || 0,
        height: video.height || 0,
        frameRate: video.frameRate || video.frame_rate || '',
        codecid: video.codecid || 0
      }))
    } else {
      result.video = []
    }

    // 杜比音效
    if (data.dash.dolby) {
      result.dolby = {
        type: data.dash.dolby.type || 0,
        audio: data.dash.dolby.audio || null
      }
    }

    // FLAC
    if (data.dash.flac) {
      result.flac = data.dash.flac
    }
  } else {
    // 如果没有 DASH 数据，返回空
    result.audio = []
    result.video = []
  }

  // 添加平台标识
  result.platform = 'bilibili'

  return result
}

