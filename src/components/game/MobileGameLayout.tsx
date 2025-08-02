"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/outline";
import { GameBoard } from "./GameBoard";
import { GameControls } from "./GameControls";
import { GameStats } from "./GameStats";
import { GameOverlay } from "./GameOverlay";
import { GameState, Direction } from "@/types/game";

interface MobileGameLayoutProps {
  gameState: GameState;
  theme: string;
  selectedColor: string;
  onMove: (direction: Direction) => void;
  onNewGame: () => void;
  onReset: () => void;
  onContinue: () => void;

  title?: string;
  description?: string;
}

export function MobileGameLayout({
  gameState,
  theme,
  selectedColor,
  onMove,
  onNewGame,
  onReset,
  onContinue,
  title,
  description,
}: MobileGameLayoutProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!isMobile) {
    return null; // 在桌面端不显示此组件
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* 移动端顶部导航 */}
      <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="flex items-center justify-between px-4 py-3">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <HomeIcon className="w-5 h-5" />
            <span className="font-medium">Home</span>
          </Link>
          {title && (
            <div className="text-center flex-1">
              <h1 className="text-lg font-semibold text-gray-800 truncate">
                {title}
              </h1>
              {description && (
                <p className="text-xs text-gray-500 truncate">{description}</p>
              )}
            </div>
          )}
          <div className="w-16"></div> {/* 占位符，保持标题居中 */}
        </div>
      </div>

      {/* 移动端游戏内容 */}
      <div className="p-4">
        {/* 游戏统计 - 紧凑显示 */}
        <div className="mb-4">
          <GameStats
            score={gameState.score}
            bestScore={gameState.bestScore}
            moves={gameState.moves}
            selectedColor={selectedColor}
            compact={true}
          />
        </div>

        {/* 游戏棋盘 - 居中显示 */}
        <div className="flex justify-center mb-6">
          <GameBoard
            board={gameState.board}
            theme={theme}
            selectedColor={selectedColor}
            mobile={true}
          />
        </div>

        {/* 游戏控制 - 底部固定 */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-20">
          <GameControls
            onNewGame={onNewGame}
            onReset={onReset}
            onMove={onMove}
            selectedColor={selectedColor}
            mobile={true}
          />
        </div>

        {/* 底部间距，避免内容被控制栏遮挡 */}
        <div className="h-32"></div>
      </div>

      {/* 游戏结束覆盖层 */}
      <GameOverlay
        status={
          gameState.status === "won" || gameState.status === "lost"
            ? gameState.status
            : null
        }
        score={gameState.score}
        onNewGame={onNewGame}
        onContinue={onContinue}
      />
    </div>
  );
}
