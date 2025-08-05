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
import { getHolidayByDate, Holiday } from "@/lib/game/holidayThemes";
import { GameTileLegend } from "@/components/game/GameTileLegend";
import { MobileGameLayout } from "@/components/game/MobileGameLayout";

export default function HolidayPage() {
  const params = useParams();
  const dateString = params.date as string;
  const [holiday, setHoliday] = useState<Holiday | null>(null);
  const [game, setGame] = useState<Game2048 | null>(null);
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>("#FF6B6B");

  useEffect(() => {
    const foundHoliday = getHolidayByDate(dateString);
    if (!foundHoliday) {
      // 如果没有找到节日，重定向到404页面
      window.location.href = "/404";
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

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
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

      {/* 移动端布局 */}
      <MobileGameLayout
        gameState={gameState}
        theme={`holiday-${dateString}`}
        selectedColor={selectedColor}
        onMove={handleMove}
        onNewGame={handleNewGame}
        onReset={handleReset}
        onContinue={handleContinue}
        title={`${holiday.emojis[0]} 2048 ${holiday.name}`}
        description={holiday.description}
      />

      {/* 桌面端布局 */}
      <div className="hidden md:block min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-8">
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
                  theme={`holiday-${dateString}`}
                  selectedColor={selectedColor}
                />
                <GameTileLegend
                  theme={`holiday-${dateString}`}
                  selectedColor={selectedColor}
                  onColorChange={handleColorChange}
                />
              </div>
            </div>

            {/* 节日知识文章 */}
            <div className="mt-8 bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">
                The History and Significance of {holiday.name}
              </h2>

              <div className="prose prose-lg max-w-none">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">
                    Origins and Cultural Background
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {holiday.name} has deep roots in{" "}
                    {holiday.country === "Global"
                      ? "global culture and traditions"
                      : `${holiday.country} culture and traditions`}
                    . This {holiday.category} celebration represents more than
                    just a date on the calendar - it embodies the values,
                    beliefs, and cultural heritage that have been passed down
                    through generations.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {holiday.description} The significance of this day extends
                    beyond mere celebration, serving as a reminder of the rich
                    tapestry of human culture and the importance of preserving
                    and honoring our diverse traditions.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">
                    Modern Celebrations and Traditions
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Today, {holiday.name} is celebrated in various ways around
                    the world. From traditional ceremonies to modern
                    interpretations, people find meaningful ways to honor this
                    special day. The celebration often includes cultural
                    activities, educational events, and community gatherings
                    that bring people together to share in the spirit of the
                    occasion.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    In the digital age, {holiday.name} has also found new
                    expressions through online platforms, social media, and
                    interactive experiences like our 2048 game theme, which
                    allows players to engage with the holiday&apos;s symbols and
                    meanings in a fun, educational way.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">
                    Educational Value and Learning Opportunities
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {holiday.name} provides an excellent opportunity for
                    learning about different cultures, historical events, and
                    social movements. Understanding the context and significance
                    of this holiday helps foster cross-cultural understanding
                    and appreciation for diversity.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Through games like 2048 with {holiday.name} theme, players
                    can learn about the holiday&apos;s symbols, colors, and
                    cultural significance while enjoying an engaging puzzle
                    experience. This innovative approach to cultural education
                    makes learning both fun and memorable.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">
                    Key Themes and Keywords:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {holiday.keywords.map((keyword: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
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
