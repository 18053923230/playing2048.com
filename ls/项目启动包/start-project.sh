#!/bin/bash

# 2048游戏平台项目启动脚本
# 使用方法: bash start-project.sh

set -e

echo "🚀 开始创建2048游戏平台项目..."

# 检查Node.js版本
echo "📋 检查Node.js版本..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js未安装，请先安装Node.js 18+"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js版本过低，需要18+版本"
    exit 1
fi

echo "✅ Node.js版本检查通过: $(node -v)"

# 检查pnpm
echo "📋 检查pnpm..."
if ! command -v pnpm &> /dev/null; then
    echo "📦 安装pnpm..."
    npm install -g pnpm
fi

echo "✅ pnpm已安装: $(pnpm --version)"

# 创建项目
echo "📁 创建Next.js项目..."
npx create-next-app@latest playing2048 --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --yes

cd playing2048

echo "📦 安装依赖..."
pnpm install

echo "📦 安装额外依赖..."
pnpm add @heroicons/react
pnpm add -D @types/node

echo "🎨 初始化shadcn/ui..."
npx shadcn@latest init --yes

echo "🔧 安装shadcn/ui组件..."
npx shadcn@latest add button card input select badge --yes

# 创建目录结构
echo "📁 创建项目目录结构..."
mkdir -p src/components/game
mkdir -p src/components/seo
mkdir -p src/components/layout
mkdir -p src/lib/game
mkdir -p src/lib/storage
mkdir -p src/lib/seo
mkdir -p src/lib/utils
mkdir -p src/types
mkdir -p src/styles
mkdir -p src/app/cupcakes
mkdir -p src/app/christmas
mkdir -p src/app/halloween
mkdir -p src/app/unblocked
mkdir -p src/app/strategy
mkdir -p src/app/how-to-play
mkdir -p src/app/what-is-2048-cupcakes
mkdir -p src/app/faq

# 创建类型定义文件
echo "📝 创建类型定义文件..."
cat > src/types/game.ts << 'EOF'
export type Direction = 'up' | 'down' | 'left' | 'right';
export type GameTheme = 'cupcakes' | 'christmas' | 'halloween' | 'classic';
export type GameStatus = 'playing' | 'won' | 'lost' | 'paused';

export interface GameTile {
  id: string;
  value: number;
  position: [number, number];
  mergedFrom?: string[];
  isNew?: boolean;
}

export interface GameState {
  board: GameTile[][];
  score: number;
  bestScore: number;
  status: GameStatus;
  theme: GameTheme;
  moves: number;
  startTime: number;
  lastMoveTime: number;
}

export interface GameConfig {
  size: number;
  targetValue: number;
  theme: GameTheme;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface ThemeConfig {
  name: string;
  colors: {
    background: string;
    tile: string;
    text: string;
    accent: string;
  };
  tiles: Record<number, {
    label: string;
    color: string;
    emoji?: string;
  }>;
}
EOF

# 创建SEO配置
echo "🔍 创建SEO配置..."
cat > src/lib/seo/seoConfig.ts << 'EOF'
export const seoConfig = {
  home: {
    title: 'Play 2048 Cupcakes Online - Free Puzzle Game | Playing2048.com',
    description: 'Play 2048 Cupcakes online for free! Join numbers and get to the winning tile. Customize your base number and difficulty for endless fun. No download required.',
    keywords: '2048 cupcakes, play 2048 cupcakes, 2048 cupcakes online, free 2048 game, puzzle game',
    canonical: 'https://playing2048.com'
  },
  cupcakes: {
    title: '2048 Cupcakes - Play Online Free | The Most Delicious 2048 Game',
    description: 'Play 2048 Cupcakes online for free! The most delicious version of the classic 2048 puzzle game. Merge cupcakes to reach the golden cupcake!',
    keywords: '2048 cupcakes, 2048 cupcakes unblocked, play 2048 cupcakes online, cupcake puzzle game',
    canonical: 'https://playing2048.com/cupcakes'
  },
  christmas: {
    title: '2048 Cupcakes Christmas Edition - Holiday Puzzle Game',
    description: 'Celebrate the holidays with 2048 Cupcakes Christmas Edition! Festive puzzle game with holiday-themed cupcakes and Christmas magic.',
    keywords: '2048 cupcakes christmas, christmas 2048, holiday puzzle game, christmas cupcakes game',
    canonical: 'https://playing2048.com/christmas'
  },
  halloween: {
    title: '2048 Cupcakes Halloween Edition - Spooky Puzzle Game',
    description: 'Get spooky with 2048 Cupcakes Halloween Edition! Merge Halloween-themed cupcakes in this thrilling puzzle game.',
    keywords: '2048 cupcakes halloween, halloween 2048, spooky puzzle game, halloween cupcakes',
    canonical: 'https://playing2048.com/halloween'
  },
  unblocked: {
    title: '2048 Cupcakes Unblocked - Play at School or Work',
    description: 'Play 2048 Cupcakes unblocked! Access the game from anywhere - school, work, or home. No restrictions, just pure puzzle fun.',
    keywords: '2048 cupcakes unblocked, unblocked 2048, play 2048 at school, work games',
    canonical: 'https://playing2048.com/unblocked'
  },
  strategy: {
    title: 'How to Win 2048 Cupcakes - Complete Strategy Guide',
    description: 'Learn how to win 2048 Cupcakes with our complete strategy guide. Master the game with proven tips and tricks.',
    keywords: 'how to win 2048 cupcakes, 2048 cupcakes strategy, 2048 tips and tricks, cupcake game guide',
    canonical: 'https://playing2048.com/strategy'
  }
};
EOF

# 创建游戏主题配置
echo "🎨 创建游戏主题配置..."
cat > src/lib/game/gameThemes.ts << 'EOF'
import { ThemeConfig } from '@/types/game';

export const gameThemes: Record<string, ThemeConfig> = {
  cupcakes: {
    name: 'Cupcakes',
    colors: {
      background: '#fdf6e3',
      tile: '#f0e68c',
      text: '#2f4f4f',
      accent: '#ff69b4'
    },
    tiles: {
      2: { label: 'Vanilla', color: '#f0e68c', emoji: '🧁' },
      4: { label: 'Chocolate', color: '#8b4513', emoji: '🍫' },
      8: { label: 'Strawberry', color: '#ff69b4', emoji: '🍓' },
      16: { label: 'Blueberry', color: '#4169e1', emoji: '🫐' },
      32: { label: 'Lemon', color: '#ffff00', emoji: '🍋' },
      64: { label: 'Orange', color: '#ffa500', emoji: '🍊' },
      128: { label: 'Mint', color: '#98fb98', emoji: '🌿' },
      256: { label: 'Caramel', color: '#d2691e', emoji: '🍯' },
      512: { label: 'Raspberry', color: '#dc143c', emoji: '🍒' },
      1024: { label: 'Rainbow', color: '#ff1493', emoji: '🌈' },
      2048: { label: 'Golden', color: '#ffd700', emoji: '👑' },
      4096: { label: 'Diamond', color: '#00ffff', emoji: '💎' }
    }
  },
  christmas: {
    name: 'Christmas',
    colors: {
      background: '#f0f8ff',
      tile: '#90ee90',
      text: '#2f4f4f',
      accent: '#ff0000'
    },
    tiles: {
      2: { label: 'Snowflake', color: '#ffffff', emoji: '❄️' },
      4: { label: 'Candy Cane', color: '#ff0000', emoji: '🍭' },
      8: { label: 'Holly', color: '#228b22', emoji: '🎄' },
      16: { label: 'Gift', color: '#ff69b4', emoji: '🎁' },
      32: { label: 'Star', color: '#ffd700', emoji: '⭐' },
      64: { label: 'Bell', color: '#ffa500', emoji: '🔔' },
      128: { label: 'Santa', color: '#ff0000', emoji: '🎅' },
      256: { label: 'Reindeer', color: '#8b4513', emoji: '🦌' },
      512: { label: 'Elf', color: '#228b22', emoji: '🧝' },
      1024: { label: 'Angel', color: '#ffffff', emoji: '👼' },
      2048: { label: 'Christmas Tree', color: '#228b22', emoji: '🎄' },
      4096: { label: 'North Pole', color: '#00ffff', emoji: '🧭' }
    }
  },
  halloween: {
    name: 'Halloween',
    colors: {
      background: '#2f2f2f',
      tile: '#8b4513',
      text: '#ffffff',
      accent: '#ff8c00'
    },
    tiles: {
      2: { label: 'Pumpkin', color: '#ff8c00', emoji: '🎃' },
      4: { label: 'Ghost', color: '#ffffff', emoji: '👻' },
      8: { label: 'Bat', color: '#2f2f2f', emoji: '🦇' },
      16: { label: 'Spider', color: '#8b0000', emoji: '🕷️' },
      32: { label: 'Witch', color: '#800080', emoji: '🧙‍♀️' },
      64: { label: 'Skeleton', color: '#f5f5dc', emoji: '💀' },
      128: { label: 'Vampire', color: '#8b0000', emoji: '🧛' },
      256: { label: 'Werewolf', color: '#696969', emoji: '🐺' },
      512: { label: 'Zombie', color: '#228b22', emoji: '🧟' },
      1024: { label: 'Mummy', color: '#f5f5dc', emoji: '👻' },
      2048: { label: 'Frankenstein', color: '#228b22', emoji: '🧟‍♂️' },
      4096: { label: 'Dracula', color: '#8b0000', emoji: '🧛‍♂️' }
    }
  }
};
EOF

# 创建SEO头部组件
echo "🔍 创建SEO头部组件..."
cat > src/components/seo/SEOHead.tsx << 'EOF'
import Head from 'next/head';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords: string;
  ogImage?: string;
  canonical?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  ogImage = '/og-image.jpg',
  canonical
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Playing2048.com" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Additional meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#3b82f6" />
    </Head>
  );
};
EOF

# 更新首页
echo "🏠 更新首页..."
cat > src/app/page.tsx << 'EOF'
import { SEOHead } from '@/components/seo/SEOHead';
import { seoConfig } from '@/lib/seo/seoConfig';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <SEOHead {...seoConfig.home} />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">
          <header className="text-center mb-12">
            <h1 className="text-6xl font-bold mb-4">
              <span className="text-red-500">20</span>
              <span className="text-teal-500">48</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join numbers and get to the winning tile! Customize your base number 
              and difficulty for endless fun.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href="/cupcakes" className="group">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🧁</div>
                <h2 className="text-2xl font-bold mb-2">Cupcakes</h2>
                <p className="text-gray-600">The most delicious version of 2048</p>
              </div>
            </Link>

            <Link href="/christmas" className="group">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🎄</div>
                <h2 className="text-2xl font-bold mb-2">Christmas</h2>
                <p className="text-gray-600">Holiday-themed puzzle fun</p>
              </div>
            </Link>

            <Link href="/halloween" className="group">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🎃</div>
                <h2 className="text-2xl font-bold mb-2">Halloween</h2>
                <p className="text-gray-600">Spooky puzzle adventure</p>
              </div>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/strategy"
              className="inline-block bg-teal-500 text-white px-8 py-3 rounded-lg hover:bg-teal-600 transition-colors"
            >
              Learn How to Play
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
EOF

# 创建Cupcakes游戏页面
echo "🧁 创建Cupcakes游戏页面..."
cat > src/app/cupcakes/page.tsx << 'EOF'
'use client';

import { SEOHead } from '@/components/seo/SEOHead';
import { seoConfig } from '@/lib/seo/seoConfig';

export default function CupcakesPage() {
  return (
    <>
      <SEOHead {...seoConfig.cupcakes} />
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">2048 Cupcakes</h1>
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-4">
              The most delicious version of 2048!
            </p>
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
              <p className="text-gray-500">Game coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
EOF

# 创建其他主题页面
echo "🎨 创建其他主题页面..."

# Christmas页面
cat > src/app/christmas/page.tsx << 'EOF'
'use client';

import { SEOHead } from '@/components/seo/SEOHead';
import { seoConfig } from '@/lib/seo/seoConfig';

export default function ChristmasPage() {
  return (
    <>
      <SEOHead {...seoConfig.christmas} />
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-green-100">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">🎄 2048 Cupcakes Christmas</h1>
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-4">
              Celebrate the holidays with festive cupcakes!
            </p>
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
              <p className="text-gray-500">Christmas edition coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
EOF

# Halloween页面
cat > src/app/halloween/page.tsx << 'EOF'
'use client';

import { SEOHead } from '@/components/seo/SEOHead';
import { seoConfig } from '@/lib/seo/seoConfig';

export default function HalloweenPage() {
  return (
    <>
      <SEOHead {...seoConfig.halloween} />
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-purple-100">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">🎃 2048 Cupcakes Halloween</h1>
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-4">
              Get spooky with Halloween-themed cupcakes!
            </p>
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
              <p className="text-gray-500">Halloween edition coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
EOF

# Strategy页面
cat > src/app/strategy/page.tsx << 'EOF'
import { SEOHead } from '@/components/seo/SEOHead';
import { seoConfig } from '@/lib/seo/seoConfig';

export default function StrategyPage() {
  return (
    <>
      <SEOHead {...seoConfig.strategy} />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">How to Win 2048 Cupcakes</h1>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Complete Strategy Guide</h2>
              <div className="prose max-w-none">
                <h3>Basic Strategy</h3>
                <ul>
                  <li>Always keep your highest value tile in a corner</li>
                  <li>Build chains of increasing values</li>
                  <li>Avoid random movements</li>
                  <li>Plan your moves ahead</li>
                </ul>
                
                <h3>Advanced Techniques</h3>
                <ul>
                  <li>Use the "snake" pattern</li>
                  <li>Maintain a consistent direction</li>
                  <li>Don't break your chain</li>
                  <li>Be patient and strategic</li>
                </ul>
                
                <h3>Common Mistakes to Avoid</h3>
                <ul>
                  <li>Moving randomly without a plan</li>
                  <li>Breaking your value chain</li>
                  <li>Not keeping high values in corners</li>
                  <li>Getting impatient and making hasty moves</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
EOF

# 创建环境变量文件
echo "🔧 创建环境变量文件..."
cat > .env.local << 'EOF'
NEXT_PUBLIC_SITE_URL=https://playing2048.com
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=
NEXT_PUBLIC_GOOGLE_ADSENSE_ID=
EOF

# 创建.gitignore
echo "📝 更新.gitignore..."
cat >> .gitignore << 'EOF'

# Environment variables
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db
EOF

echo "✅ 项目创建完成！"
echo ""
echo "🎉 下一步："
echo "1. 进入项目目录: cd playing2048"
echo "2. 启动开发服务器: pnpm dev"
echo "3. 访问 http://localhost:3000 查看项目"
echo ""
echo "📋 今日任务："
echo "- [ ] 实现游戏核心逻辑"
echo "- [ ] 创建游戏组件"
echo "- [ ] 添加本地存储功能"
echo "- [ ] 优化移动端体验"
echo ""
echo "🚀 祝你开发顺利！" 