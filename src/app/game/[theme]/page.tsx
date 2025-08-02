"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { SEOHead } from "@/components/seo/SEOHead";
import { GameBoard } from "@/components/game/GameBoard";
import { GameControls } from "@/components/game/GameControls";
import { GameStats } from "@/components/game/GameStats";
import { GameOverlay } from "@/components/game/GameOverlay";
import { GameTileLegend } from "@/components/game/GameTileLegend";
import { MobileGameLayout } from "@/components/game/MobileGameLayout";
import { Game2048 } from "@/lib/game/gameLogic";
import { GameState, Direction } from "@/types/game";

import { getHolidayByTheme } from "@/lib/game/holidayThemes";

// 主题配置
const themeConfigs = {
  cupcakes: {
    name: "🎮 2048 Cupcakes",
    description: "The most delicious version of 2048 - Play for FREE!",
    emoji: "🧁",
    seo: {
      title: "🎮 2048 Cupcakes - Play Online Free | No Download Required",
      description:
        "🎮 Play 2048 Cupcakes online for FREE! The most delicious version of 2048 with sweet treats and colorful cupcakes. No download, no registration - play instantly!",
      keywords:
        "2048 cupcakes, free puzzle game, online 2048, brain games, sweet treats, free online games",
      canonical: "https://playing2048.com/game/cupcakes",
    },
  },
  christmas: {
    name: "🎮 2048 Christmas",
    description: "Holiday-themed puzzle fun - Play for FREE!",
    emoji: "🎄",
    seo: {
      title: "🎮 2048 Christmas - Play Online Free | Holiday Puzzle Game",
      description:
        "🎮 Play 2048 Christmas online for FREE! Celebrate the holidays with festive puzzle fun. No download, no registration - play instantly!",
      keywords:
        "2048 christmas, free puzzle game, holiday game, online 2048, brain games, free online games",
      canonical: "https://playing2048.com/game/christmas",
    },
  },
  halloween: {
    name: "🎮 2048 Halloween",
    description: "Spooky puzzle adventure - Play for FREE!",
    emoji: "🎃",
    seo: {
      title: "🎮 2048 Halloween - Play Online Free | Spooky Puzzle Game",
      description:
        "🎮 Play 2048 Halloween online for FREE! Spooky puzzle adventure with ghosts and pumpkins. No download, no registration - play instantly!",
      keywords:
        "2048 halloween, free puzzle game, spooky game, online 2048, brain games, free online games",
      canonical: "https://playing2048.com/game/halloween",
    },
  },
};

export default function GamePage() {
  const params = useParams();
  const themeName = params.theme as string;
  const [game, setGame] = useState<Game2048 | null>(null);
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>("#FF6B6B");

  // 检查是否是节日主题
  const holiday = getHolidayByTheme(themeName);
  const isHolidayTheme = holiday !== null;
  const themeConfig = themeConfigs[themeName as keyof typeof themeConfigs];

  useEffect(() => {
    if (!themeName) return;

    const newGame = new Game2048({
      size: 4,
      targetValue: 4096,
      theme: themeName,
      difficulty: "medium",
    });

    newGame.loadGame();
    setGame(newGame);
    setGameState(newGame.getState());
  }, [themeName]);

  const handleMove = (direction: Direction) => {
    if (!game) return;

    const moved = game.move(direction);
    if (moved) {
      setGameState(game.getState());
    }
  };

  const handleNewGame = () => {
    if (!game) return;

    game.newGame();
    setGameState(game.getState());
  };

  const handleReset = () => {
    if (!game) return;

    game.resetGame();
    setGameState(game.getState());
  };

  const handleContinue = () => {
    if (!game) return;

    game.continueGame();
    setGameState(game.getState());
  };

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  if (!gameState) {
    return <div>Loading...</div>;
  }

  // 生成SEO配置
  let seoConfig;
  if (isHolidayTheme && holiday) {
    seoConfig = {
      title: `2048 ${holiday.name} - Play Online Free`,
      description: `Play 2048 ${holiday.name} online for free! ${holiday.description}`,
      keywords: `2048 ${holiday.name.toLowerCase()}, ${holiday.keywords.join(
        ", "
      )}, puzzle game`,
      canonical: `https://playing2048.com/game/${themeName}`,
    };
  } else if (themeConfig) {
    seoConfig = themeConfig.seo;
  } else {
    seoConfig = {
      title: "2048 Game - Play Online Free",
      description:
        "Play 2048 online for free! Join numbers and get to the winning tile.",
      keywords: "2048, puzzle game, online game, free game",
      canonical: `https://playing2048.com/game/${themeName}`,
    };
  }

  return (
    <>
      <SEOHead {...seoConfig} />

      {/* 移动端布局 */}
      <MobileGameLayout
        gameState={gameState}
        theme={themeName}
        selectedColor={selectedColor}
        onMove={handleMove}
        onNewGame={handleNewGame}
        onReset={handleReset}
        onContinue={handleContinue}
        title={
          isHolidayTheme && holiday
            ? `${holiday.emojis[0]} 2048 ${holiday.name}`
            : themeConfig
            ? `${themeConfig.emoji} ${themeConfig.name}`
            : "2048 Game"
        }
        description={
          isHolidayTheme && holiday
            ? holiday.description
            : themeConfig
            ? themeConfig.description
            : "Join numbers and get to the winning tile!"
        }
      />

      {/* 桌面端布局 */}
      <div className="hidden md:block min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-8">
              {isHolidayTheme && holiday ? (
                <>
                  <h1 className="text-4xl font-bold mb-2">
                    {holiday.emojis[0]} 2048 {holiday.name} {holiday.emojis[1]}
                  </h1>
                  <p className="text-gray-600 mb-4">{holiday.description}</p>
                  <div className="flex justify-center gap-2 mb-4">
                    {holiday.emojis.map((emoji: string, index: number) => (
                      <span key={index} className="text-2xl">
                        {emoji}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm text-gray-500">
                    {holiday.country} • {holiday.category}
                  </div>
                </>
              ) : themeConfig ? (
                <>
                  <h1 className="text-4xl font-bold mb-2">
                    {themeConfig.emoji} {themeConfig.name}
                  </h1>
                  <p className="text-gray-600 mb-4">
                    {themeConfig.description}
                  </p>
                </>
              ) : (
                <>
                  <h1 className="text-4xl font-bold mb-2">2048 Game</h1>
                  <p className="text-gray-600 mb-4">
                    Join numbers and get to the winning tile!
                  </p>
                </>
              )}
            </header>

            <div className="grid md:grid-cols-3 gap-8">
              {/* 游戏控制面板 */}
              <div className="md:col-span-1">
                <GameStats
                  score={gameState.score}
                  bestScore={gameState.bestScore}
                  moves={gameState.moves}
                  selectedColor={selectedColor}
                />
                <GameControls
                  onNewGame={handleNewGame}
                  onReset={handleReset}
                  onMove={handleMove}
                  selectedColor={selectedColor}
                />
              </div>

              {/* 游戏棋盘 */}
              <div className="md:col-span-2 flex flex-col items-center max-w-4xl">
                <GameBoard
                  board={gameState.board}
                  theme={themeName}
                  selectedColor={selectedColor}
                />
                <GameTileLegend
                  theme={themeName}
                  selectedColor={selectedColor}
                  onColorChange={handleColorChange}
                />
              </div>
            </div>

            {/* 节日知识文章 */}
            {isHolidayTheme && holiday && (
              <div className="mt-8 bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center">
                  The History and Significance of {holiday.name}
                </h2>

                <div className="prose prose-lg max-w-none">
                  {holiday.article ? (
                    <>
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-3">
                          Origins and Cultural Background
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {holiday.article.origins}
                        </p>
                      </div>

                      <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-3">
                          Modern Celebrations and Traditions
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {holiday.article.modernCelebrations}
                        </p>
                      </div>

                      <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-3">
                          Educational Value and Learning Opportunities
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {holiday.article.educationalValue}
                        </p>
                      </div>
                    </>
                  ) : (
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-3">
                        About {holiday.name}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {holiday.description} This {holiday.category}{" "}
                        celebration represents more than just a date on the
                        calendar - it embodies the values, beliefs, and cultural
                        heritage that have been passed down through generations.
                      </p>
                    </div>
                  )}

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-sm font-semibold mb-2">
                      Key Themes and Keywords:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {holiday.keywords.map(
                        (keyword: string, index: number) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                          >
                            {keyword}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <GameOverlay
        status={
          gameState.status === "won" || gameState.status === "lost"
            ? gameState.status
            : null
        }
        score={gameState.score}
        onNewGame={handleNewGame}
        onContinue={handleContinue}
      />
    </>
  );
}
