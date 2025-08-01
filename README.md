# Playing2048.com - 2048 游戏平台

一个基于 Next.js 14 构建的现代化 2048 游戏平台，支持多种主题和 SEO 优化。

## 🎮 游戏特色

- **多种主题**: Cupcakes、Christmas、Halloween 等精美主题
- **响应式设计**: 完美适配桌面和移动设备
- **本地存储**: 自动保存游戏进度和最高分
- **SEO 优化**: 针对搜索引擎优化的页面结构和内容
- **现代化 UI**: 使用 Tailwind CSS 和 shadcn/ui 组件库

## 🚀 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看项目。

### 构建生产版本

```bash
pnpm build
```

### 启动生产服务器

```bash
pnpm start
```

## 📁 项目结构

```
src/
├── app/                    # Next.js App Router 页面
│   ├── page.tsx           # 首页
│   ├── cupcakes/          # Cupcakes 主题游戏
│   ├── christmas/         # Christmas 主题游戏
│   ├── halloween/         # Halloween 主题游戏
│   ├── strategy/          # 游戏攻略页面
│   └── layout.tsx         # 根布局
├── components/            # React 组件
│   ├── game/             # 游戏相关组件
│   ├── layout/           # 布局组件
│   ├── seo/              # SEO 组件
│   └── ui/               # shadcn/ui 组件
├── lib/                  # 工具库
│   ├── game/             # 游戏逻辑
│   └── seo/              # SEO 配置
└── types/                # TypeScript 类型定义
```

## 🎯 核心功能

### 游戏逻辑

- 完整的 2048 游戏算法实现
- 支持四个方向的移动和合并
- 游戏状态管理（进行中、胜利、失败）
- 本地存储自动保存

### 主题系统

- **Cupcakes**: 美味的纸杯蛋糕主题
- **Christmas**: 温馨的圣诞节日主题
- **Halloween**: 神秘的万圣节主题

### SEO 优化

- 针对高流量关键词优化
- 动态 meta 标签和 Open Graph
- 结构化数据标记
- 响应式图片和性能优化

## 🎮 游戏控制

- **键盘控制**: 方向键或 WASD 移动
- **触摸控制**: 移动设备支持滑动操作
- **游戏控制**: 新游戏、重置、继续游戏

## 📊 SEO 策略

项目针对以下关键词进行优化：

- "2048 cupcakes" (74,000 月搜索量)
- "2048 cupcakes unblocked" (2,900 月搜索量)
- "2048 cupcakes christmas" (260 月搜索量)
- "how to win 2048 cupcakes" (长尾关键词)

## 🛠️ 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **组件库**: shadcn/ui
- **图标**: Heroicons
- **部署**: Vercel

## 📈 性能优化

- 静态页面生成 (SSG)
- 图片优化和懒加载
- 代码分割和树摇优化
- 缓存策略优化

## 🚀 部署

项目已配置为可直接部署到 Vercel：

1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. 配置域名 `playing2048.com`
4. 自动部署完成

## 📝 开发计划

### 已完成

- [x] 基础游戏逻辑实现
- [x] 多主题支持
- [x] 响应式设计
- [x] SEO 基础优化
- [x] 本地存储功能

### 进行中

- [ ] 用户系统集成
- [ ] 排行榜功能
- [ ] 更多游戏主题
- [ ] 移动端手势优化

### 计划中

- [ ] 社交分享功能
- [ ] 成就系统
- [ ] 广告集成
- [ ] 数据分析

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

## 📞 联系

如有问题或建议，请通过 GitHub Issues 联系我们。
