"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { SEOHead } from "@/components/seo/SEOHead";
import { GameBoard } from "@/components/game/GameBoard";
import { GameControls } from "@/components/game/GameControls";
import { GameStats } from "@/components/game/GameStats";
import { GameOverlay } from "@/components/game/GameOverlay";
import { Game2048 } from "@/lib/game/gameLogic";
import { GameState, Direction } from "@/types/game";
import {
  getHolidayByDate,
  generateHolidayTheme,
  Holiday,
} from "@/lib/game/holidayThemes";

export default function HolidayPage() {
  const params = useParams();
  const dateString = params.date as string;
  const [holiday, setHoliday] = useState<Holiday | null>(null);
  const [game, setGame] = useState<Game2048 | null>(null);
  const [gameState, setGameState] = useState<GameState | null>(null);

  useEffect(() => {
    const foundHoliday = getHolidayByDate(dateString);
    if (!foundHoliday) {
      // 如果没有找到节日，重定向到首页
      window.location.href = "/";
      return;
    }

    setHoliday(foundHoliday);

    // 创建游戏实例
    const newGame = new Game2048({
      size: 4,
      targetValue: 4096,
      theme: `holiday-${dateString}`,
      difficulty: "medium",
    });

    newGame.loadGame();
    setGame(newGame);
    setGameState(newGame.getState());
  }, [dateString]);

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

  if (!holiday || !gameState) {
    return <div>Loading...</div>;
  }

  // 生成SEO配置
  const seoConfig = {
    title: `2048 ${holiday.name} - Play Online Free`,
    description: `Play 2048 ${holiday.name} online for free! ${holiday.description}`,
    keywords: `2048 ${holiday.name.toLowerCase()}, ${holiday.keywords.join(
      ", "
    )}, puzzle game`,
    canonical: `https://playing2048.com/holiday/${dateString}`,
  };

  return (
    <>
      <SEOHead {...seoConfig} />

      <div
        className="min-h-screen bg-gradient-to-br"
        style={{
          background: `linear-gradient(135deg, ${holiday.colors.primary}20, ${holiday.colors.secondary}20)`,
        }}
      >
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-2">
                {holiday.emojis[0]} 2048 {holiday.name} {holiday.emojis[1]}
              </h1>
              <p className="text-gray-600 mb-4">{holiday.description}</p>
              <div className="flex justify-center gap-2 mb-4">
                {holiday.emojis.map((emoji, index) => (
                  <span key={index} className="text-2xl">
                    {emoji}
                  </span>
                ))}
              </div>
              <div className="text-sm text-gray-500">
                {holiday.country} • {holiday.category}
              </div>
            </header>

            <div className="grid md:grid-cols-3 gap-8">
              {/* 游戏控制面板 */}
              <div className="md:col-span-1">
                <GameStats
                  score={gameState.score}
                  bestScore={gameState.bestScore}
                  moves={gameState.moves}
                />
                <GameControls
                  onNewGame={handleNewGame}
                  onReset={handleReset}
                  onMove={handleMove}
                />
              </div>

              {/* 游戏棋盘 */}
              <div className="md:col-span-2 flex justify-center">
                <GameBoard
                  board={gameState.board}
                  theme={`holiday-${dateString}`}
                />
              </div>
            </div>

            {/* 节日信息卡片 */}
            <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">About {holiday.name}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Description</h3>
                  <p className="text-gray-600">{holiday.description}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Keywords</h3>
                  <div className="flex flex-wrap gap-2">
                    {holiday.keywords.map((keyword, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
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
