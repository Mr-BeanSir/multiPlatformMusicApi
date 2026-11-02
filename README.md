<div align="center">

# Multi-Platform Music API

> 🎵 统一的多平台音乐API服务，支持网易云音乐、QQ音乐、酷狗音乐、Bilibili 等平台

[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![GitHub](https://img.shields.io/badge/GitHub-Mr--BeanSir-blue?logo=github)](https://github.com/Mr-BeanSir/multiPlatformMusicApi)

</div>

已有更好的项目, 此项目停更: https://github.com/CharlesPikachu/musicdl

---

## ✨ 特性

- 🎯 **统一接口** - 一套API，多个平台，通过参数切换
- 🚀 **高性能** - 智能缓存、并发控制、异步日志
- 🔒 **安全可靠** - 参数验证、错误处理
- 📦 **开箱即用** - Docker部署、环境变量配置、健康检查
- 🎨 **易于扩展** - 模块化设计、工厂模式、适配器模式

---

## 🎼 支持平台

| 平台 | API数量 | 支持功能 |
|------|:-------:|----------|
| 网易云音乐 | 362 | 搜索、歌曲、专辑、歌手、榜单、歌词、评论、MV、用户等 |
| QQ音乐 | 69 | 搜索、歌曲、专辑、歌手、榜单、歌词、评论、MV、用户等 |
| 酷狗音乐 | 151 | 搜索、歌曲、专辑、歌手、榜单、歌词、评论、视频、用户、FM等 |
| Bilibili | 3 | 搜索建议、综合搜索、视频/音频播放地址 |

---

## 🚀 快速开始

### 环境要求

- Node.js >= 18.0.0
- npm 或 yarn

### 本地运行

```bash
# 1. 克隆项目
git clone https://github.com/Mr-BeanSir/multiPlatformMusicApi.git
cd multiPlatformMusicApi

# 2. 安装依赖
npm install

# 3. 启动服务
npm start

# 4. 测试接口
curl "http://localhost:3000/status"
```

### Docker 部署

**本地构建方式**（推荐）：

```bash
# 启动并构建
docker compose up -d --build
```

> **注意**：首次本地构建需要 3-5 分钟（下载依赖）

**使用 Docker Compose**：

```bash
# 默认启动（端口 3000）
HOST_PORT=3000 docker compose up -d
```

编辑 `docker-compose.yml` 自定义配置：
```yaml
music-api:
  build:
    context: .
    dockerfile: Dockerfile
  ports:
    - "${HOST_PORT:-3000}:3000"
  environment:
    - CORS_ALLOW_ORIGIN=*
```

---

## 📖 API 文档

本项目提供了完整的 API 文档，包含所有平台的详细接口说明：

### Wiki 文档

访问 [Wiki 主页](https://github.com/Mr-BeanSir/multiPlatformMusicApi/wiki) 查看完整文档。

Wiki 文档包括：
- 📋 各平台 API 完整列表
  - [网易云音乐 API (362个接口)](https://github.com/Mr-BeanSir/multiPlatformMusicApi/wiki/Netease-API-Overview)
  - [QQ音乐 API (69个接口)](https://github.com/Mr-BeanSir/multiPlatformMusicApi/wiki/QQMusic-API-Overview)
  - [酷狗音乐 API (151个接口)](https://github.com/Mr-BeanSir/multiPlatformMusicApi/wiki/KuGou-API-Overview)
  - [Bilibili 平台接口说明](platforms/bilibili/README.md)
- 🔍 详细的接口参数说明
- 💡 使用示例和最佳实践
- 🔐 认证和授权指南

### 接口标准

本项目基于 [NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi) 进行自定义及平台扩展。

- **重要**: 所有请求参数需要添加 `platform` 参数（如 `platform=netease`、`platform=qqmusic`、`platform=kugou` 或 `platform=bilibili`）
- **参考文档**: https://neteasecloudmusicapi.js.org/

### 认证说明

部分接口需要登录后才能访问，可以通过Cookie或Query参数传递认证信息：

#### 网易云音乐

```bash
# Cookie 方式
curl -H "Cookie: MUSIC_U=your_music_u_value" \
  "http://localhost:3000/user/detail?platform=netease"

# Query 方式
curl "http://localhost:3000/user/detail?platform=netease&MUSIC_U=your_music_u_value"
```

#### QQ 音乐

```bash
# Cookie 方式
curl -H "Cookie: uin=your_uin; qm_keyst=your_keyst" \
  "http://localhost:3000/user/detail?platform=qqmusic"

# Query 方式
curl "http://localhost:3000/user/detail?platform=qqmusic&uin=your_uin&qm_keyst=your_keyst"
```

#### 酷狗音乐

```bash
# Cookie 方式
curl -H "Cookie: token=your_token; userid=your_userid; dfid=your_dfid" \
  "http://localhost:3000/user/detail?platform=kugou"

# Query 方式
curl "http://localhost:3000/user/detail?platform=kugou&token=your_token&userid=your_userid"
```

---

## ⚙️ 配置

### 环境变量

创建 `.env` 文件（参考 `.env.example`）：

```env
# 服务配置
PORT=3000                # 服务端口
HOST=0.0.0.0            # 监听地址
NODE_ENV=production     # 运行环境

# 日志配置
LOG_LEVEL=info          # 日志级别: debug, info, warn, error

# CORS 配置
CORS_ALLOW_ORIGIN=*     # 允许的源，生产环境建议指定具体域名
```

### 启动选项

```bash
# 默认启动
npm start

# 调试模式（显示详细日志）
npm run debug

# 自定义端口
PORT=8080 npm start

# 自定义日志级别
LOG_LEVEL=debug npm start
```

---

## 🏗️ 技术栈

### 核心技术

- **运行时**: Node.js >= 18.0.0
- **Web 框架**: Express 4.x
- **HTTP 客户端**: Axios, Got
- **测试框架**: Jest, Supertest
- **容器化**: Docker, Docker Compose

### 核心特性

| 特性 | 说明 |
|------|------|
| 智能缓存系统 | LRU 缓存策略，可配置 TTL |
| 并发控制 | 防止系统资源耗尽，默认最大 300 并发 |
| 异步日志 | 减少 I/O 阻塞，支持敏感信息脱敏 |
| 健康检查 | Docker 健康检查，自动监控服务状态 |
| 工厂模式 | 统一平台管理，易于扩展新平台 |
| 适配器模式 | 统一接口标准，屏蔽平台差异 |

---

## 📁 项目结构

```
multiPlatformMusicApi/
├── app.js                 # 应用入口
├── server.js              # HTTP服务器
├── core/                  # 核心模块
│   ├── Logger.js         # 日志系统
│   ├── PlatformCache.js  # 缓存管理
│   ├── ConcurrencyLimiter.js  # 并发控制
│   ├── PlatformConfig.js # 配置管理
│   └── Result.js         # 响应格式化
├── platforms/            # 平台适配器
│   ├── PlatformFactory.js    # 平台工厂
│   ├── base/
│   │   └── BasePlatform.js   # 平台基类
│   ├── netease/          # 网易云音乐
│   │   ├── NeteasePlatform.js
│   │   └── module/       # API模块（362个）
│   ├── qqmusic/          # QQ音乐
│   │   ├── QQMusicPlatform.js
│   │   └── module/       # API模块（69个）
│   ├── kugou/            # 酷狗音乐
│   │   ├── KuGouPlatform.js
│   │   ├── config.js
│   │   ├── util/         # 工具函数（加密、签名等）
│   │   └── module/       # API模块（151个）
│   └── bilibili/         # Bilibili
│       ├── BilibiliPlatform.js
│       ├── config.js
│       ├── README.md
│       └── module/       # API模块（3个）
├── tests/                # 测试文件
├── package.json
├── Dockerfile
├── docker-compose.yml
└── .env.example
```

---

## 🧪 测试

```bash
# 运行所有测试
npm test

# 运行单元测试
npm run test:unit

# 运行集成测试
npm run test:integration

# 生成覆盖率报告
npm run test:coverage

# 监听模式
npm run test:watch
```

---

## 🙏 致谢

站在巨人的肩膀上前进,感谢下面项目.

- [multiPlatformMusicApi by tlyanyu](https://github.com/tlyanyu/multiPlatformMusicApi) - 原始项目
- [NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi)
- [NeteaseCloudMusicApiEnhanced](https://github.com/neteasecloudmusicapienhanced/api-enhanced)
- [KuGouMusicApi](https://github.com/xlh001/KuGouMusicApi) 

---

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

## 📄 许可证

本项目采用 [MIT License](LICENSE) 开源协议。

---

## ⚠️ 免责声明

- 本项目仅供学习交流使用，请勿用于商业用途
- 所有音乐版权归原平台所有
- 使用本项目所造成的一切后果由使用者自行承担

---

<div align="center">

### Made with ❤️ by [Mr-BeanSir](https://github.com/Mr-BeanSir)

如果觉得项目不错，请给个 ⭐ **Star** 支持一下！

[GitHub](https://github.com/Mr-BeanSir/multiPlatformMusicApi) • [Issues](https://github.com/Mr-BeanSir/multiPlatformMusicApi/issues) • [Wiki文档](https://github.com/Mr-BeanSir/multiPlatformMusicApi/wiki)

</div>
