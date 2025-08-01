"use client";

import { useEffect, useState } from "react";
import { SEOHead } from "@/components/seo/SEOHead";
import { GameBoard } from "@/components/game/GameBoard";
import { GameControls } from "@/components/game/GameControls";
import { GameStats } from "@/components/game/GameStats";
import { GameOverlay } from "@/components/game/GameOverlay";
import { Game2048 } from "@/lib/game/gameLogic";
import { seoConfig } from "@/lib/seo/seoConfig";
import { GameState, Direction } from "@/types/game";

export default function CupcakesPage() {
  const [game, setGame] = useState<Game2048 | null>(null);
  const [gameState, setGameState] = useState<GameState | null>(null);

  useEffect(() => {
    const newGame = new Game2048({
      size: 4,
      targetValue: 4096,
      theme: "cupcakes",
      difficulty: "medium",
    });

    newGame.loadGame();
    setGame(newGame);
    setGameState(newGame.getState());
  }, []);

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

  if (!gameState) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <SEOHead {...seoConfig.cupcakes} />

      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-2">2048 Cupcakes</h1>
              <p className="text-gray-600">
                Merge cupcakes to reach the golden cupcake!
              </p>
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
                <GameBoard board={gameState.board} theme="cupcakes" />
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
