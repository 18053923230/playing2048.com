"use client";

import React from "react";
import { GameTile } from "@/types/game";
import { getThemeConfig } from "@/lib/game/gameThemes";

interface GameTileComponentProps {
  tile: GameTile;
  theme: string;
  selectedColor?: string;
  onClick?: () => void;
}

export const GameTileComponent: React.FC<GameTileComponentProps> = ({
  tile,
  theme,
  selectedColor = "#FF6B6B",
  onClick,
}) => {
  const themeConfig = getThemeConfig(theme);
  const tileConfig =
    themeConfig.tiles[tile.value as keyof typeof themeConfig.tiles];

  // 根据瓦片值生成不同的颜色深浅
  const getTileColor = (value: number) => {
    const baseColor = selectedColor;
    const intensity = Math.min(0.3 + (value / 4096) * 0.7, 1); // 根据值调整颜色强度
    return `${baseColor}${Math.round(intensity * 255)
      .toString(16)
      .padStart(2, "0")}`;
  };

  return (
    <div
      className={`
        w-full h-full rounded-lg flex items-center justify-center
        transition-all duration-200 ease-in-out
        ${tile.isNew ? "animate-pulse" : ""}
        ${tile.mergedFrom ? "animate-bounce" : ""}
        cursor-pointer hover:scale-105
      `}
      style={{
        backgroundColor: getTileColor(tile.value),
        color: themeConfig.colors.text,
        border: `2px solid ${selectedColor}60`,
      }}
      onClick={onClick}
    >
      <div className="text-center">
        <div className="text-2xl font-bold">
          {tileConfig?.emoji || tile.value}
        </div>
        <div className="text-xs font-medium">
          {tileConfig?.label || tile.value}
        </div>
      </div>
    </div>
  );
};
