# 酷狗音乐平台 API

酷狗音乐平台已成功集成到 multiPlatformMusicApi 项目中。

## 功能特性

- ✅ 151个API模块全部迁移
- ✅ 完整的加密和签名支持
- ✅ 支持普通版和精简版（lite）模式
- ✅ 统一的缓存和并发控制
- ✅ 完整的日志记录

## 模块列表

### 搜索相关
- `search` - 搜索（歌曲/歌手/专辑/歌词/MV/歌单）
- `search/complex` - 复杂搜索
- `search/mixed` - 混合搜索
- `search/hot` - 热门搜索
- `search/default` - 默认搜索
- `search/suggest` - 搜索建议
- `search/lyric` - 歌词搜索

### 歌曲相关
- `song/url` - 获取歌曲播放地址
- `song/url/new` - 获取歌曲播放地址（新版）
- `song/climax` - 歌曲高潮部分
- `song/ranking` - 歌曲排行
- `audio` - 音频信息
- `audio/related` - 相关音频
- `lyric` - 歌词

### 歌单相关
- `playlist/detail` - 歌单详情
- `playlist/add` - 添加歌单
- `playlist/del` - 删除歌单
- `playlist/tracks/add` - 添加歌曲到歌单
- `playlist/tracks/del` - 从歌单删除歌曲
- `playlist/track/all` - 歌单全部歌曲
- `playlist/similar` - 相似歌单
- `playlist/tags` - 歌单标签

### 歌手相关
- `artist/detail` - 歌手详情
- `artist/albums` - 歌手专辑
- `artist/audios` - 歌手音频
- `artist/videos` - 歌手视频
- `artist/follow` - 关注歌手
- `artist/unfollow` - 取消关注歌手
- `artist/honour` - 歌手荣誉
- `singer/list` - 歌手列表

### 专辑相关
- `album` - 专辑信息
- `album/detail` - 专辑详情
- `album/songs` - 专辑歌曲
- `album/shop` - 专辑商店

### 排行榜相关
- `rank/list` - 排行榜列表
- `rank/info` - 排行榜信息
- `rank/top` - 排行榜Top
- `rank/audio` - 音频排行
- `top/song` - 热门歌曲
- `top/album` - 热门专辑
- `top/playlist` - 热门歌单

### 用户相关
- `user/detail` - 用户详情
- `user/playlist` - 用户歌单
- `user/follow` - 用户关注
- `user/history` - 播放历史
- `user/listen` - 收听记录
- `user/vip/detail` - VIP详情

### 登录相关
- `login` - 登录
- `login/cellphone` - 手机号登录
- `login/qr/create` - 创建二维码登录
- `login/qr/check` - 检查二维码登录状态
- `login/qr/key` - 二维码key
- `login/wx/create` - 微信登录创建
- `login/wx/check` - 微信登录检查
- `login/token` - Token登录

### 推荐相关
- `everyday/recommend` - 每日推荐
- `everyday/style/recommend` - 风格推荐
- `recommend/songs` - 推荐歌曲
- `fm/recommend` - FM推荐
- `ai/recommend` - AI推荐

### 其他功能
- `comment/music` - 音乐评论
- `video/detail` - 视频详情
- `video/url` - 视频地址
- `scene/lists` - 场景列表
- `theme/music` - 主题音乐
- `youth/channel/all` - 青春频道

## 使用方法

### 基本使用

```javascript
// 搜索歌曲
GET http://localhost:3000/search?keywords=周杰伦&platform=kugou

// 获取歌曲播放地址
GET http://localhost:3000/song/url?hash=XXXXX&platform=kugou

// 获取歌单详情
GET http://localhost:3000/playlist/detail?ids=12345&platform=kugou
```

### Cookie认证

酷狗平台支持以下Cookie参数：
- `token` - 用户token
- `userid` - 用户ID
- `dfid` - 设备ID

可以通过Cookie或Query参数传递：

```javascript
// 通过Cookie
GET http://localhost:3000/user/playlist
Cookie: token=xxx; userid=123456; dfid=xxx

// 通过Query参数
GET http://localhost:3000/user/playlist?token=xxx&userid=123456&dfid=xxx
```

### 平台类型

酷狗支持两种平台模式：
- `default` - 普通版（默认）
- `lite` - 精简版

通过环境变量设置：
```bash
export KUGOU_PLATFORM=lite
```

## 配置说明

### 缓存配置

在 `platforms/kugou/config.js` 中可以配置路由级别的缓存：

```javascript
const ROUTE_CACHE_CONFIGS = {
  'search': {
    enabled: true,
    ttlMinutes: 10 // 搜索结果缓存10分钟
  },
  'song/url': {
    enabled: true,
    ttlMinutes: 30 // 歌曲URL缓存30分钟
  }
}
```

### API配置

```javascript
const API_CONFIG = {
  timeout: 10000,      // 10秒超时
  retryCount: 3,       // 重试3次
  retryDelay: 1000,    // 重试延迟1秒
  userAgent: 'Android15-1070-11083-46-0-DiscoveryDRADProtocol-wifi'
}
```

## 技术细节

### 加密方式

酷狗API支持多种加密方式：
- `android` - Android版签名加密（默认）
- `web` - Web版签名加密
- `register` - 注册版签名加密

### 工具函数

位于 `platforms/kugou/util/` 目录：
- `request.js` - HTTP请求封装
- `crypto.js` - 加密/解密函数（MD5、SHA1、AES、RSA）
- `helper.js` - 签名辅助函数
- `util.js` - 通用工具函数
- `proxy.js` - 代理配置

## 迁移说明

本平台从原 KuGouMusicApi 项目完整迁移，保持了所有原有功能：
- ✅ 所有151个模块文件
- ✅ 所有工具函数
- ✅ 加密和签名逻辑
- ✅ 配置文件

同时增强了以下功能：
- ✅ 统一的缓存管理
- ✅ 并发请求控制
- ✅ 结构化日志记录
- ✅ 参数验证
- ✅ 错误处理

## 开发者

迁移日期：2025年11月4日
原项目：KuGouMusicApi

