"use client";

import React, { useEffect, useRef } from "react";
import { GameTile } from "@/types/game";
import { GameTileComponent } from "./GameTile";

interface GameBoardProps {
  board: (GameTile | null)[][];
  theme: string;
  selectedColor?: string;
  onTileClick?: (tile: GameTile) => void;
}

export const GameBoard: React.FC<GameBoardProps> = ({
  board,
  theme,
  selectedColor = "#FF6B6B",
  onTileClick,
}) => {
  const boardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = () => {
      // 键盘事件处理将在GameControls中实现
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div
      className="relative rounded-lg p-4 shadow-lg transition-all duration-300"
      style={{
        backgroundColor: `${selectedColor}15`,
        border: `2px solid ${selectedColor}30`,
      }}
    >
      <div
        ref={boardRef}
        className="grid grid-cols-4 gap-2 w-80 h-80 rounded-lg p-2 transition-all duration-300"
        style={{
          backgroundColor: `${selectedColor}25`,
          border: `1px solid ${selectedColor}40`,
        }}
      >
        {board.map((row, rowIndex) =>
          row.map((tile, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="w-full h-full rounded-lg flex items-center justify-center transition-all duration-200"
              style={{
                backgroundColor: `${selectedColor}10`,
                border: `1px solid ${selectedColor}20`,
              }}
            >
              {tile && (
                <GameTileComponent
                  tile={tile}
                  theme={theme}
                  selectedColor={selectedColor}
                  onClick={() => onTileClick?.(tile)}
                />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
