"use client";

import React from "react";
import { GameTile } from "@/types/game";
import { getThemeConfig } from "@/lib/game/gameThemes";

interface GameTileComponentProps {
  tile: GameTile;
  theme: string;
  onClick?: () => void;
}

export const GameTileComponent: React.FC<GameTileComponentProps> = ({
  tile,
  theme,
  onClick,
}) => {
  const themeConfig = getThemeConfig(theme);
  const tileConfig =
    themeConfig.tiles[tile.value as keyof typeof themeConfig.tiles];

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
        backgroundColor: tileConfig?.color || "#ccc",
        color: themeConfig.colors.text,
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
