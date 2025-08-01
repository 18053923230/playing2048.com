"use client";

import React, { useEffect, useRef } from "react";
import { GameTile } from "@/types/game";
import { GameTileComponent } from "./GameTile";

interface GameBoardProps {
  board: (GameTile | null)[][];
  theme: string;
  onTileClick?: (tile: GameTile) => void;
}

export const GameBoard: React.FC<GameBoardProps> = ({
  board,
  theme,
  onTileClick,
}) => {
  const boardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (_event: KeyboardEvent) => {
      // 键盘事件处理将在GameControls中实现
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative bg-gray-200 rounded-lg p-4 shadow-lg">
      <div
        ref={boardRef}
        className="grid grid-cols-4 gap-2 w-80 h-80 bg-gray-300 rounded-lg p-2"
      >
        {board.map((row, rowIndex) =>
          row.map((tile, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center"
            >
              {tile && (
                <GameTileComponent
                  tile={tile}
                  theme={theme}
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
