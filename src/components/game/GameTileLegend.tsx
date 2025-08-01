import React from "react";
import { getThemeConfig } from "@/lib/game/gameThemes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface GameTileLegendProps {
  theme: string;
}

export const GameTileLegend: React.FC<GameTileLegendProps> = ({ theme }) => {
  const themeConfig = getThemeConfig(theme);
  const sortedTiles = Object.entries(themeConfig.tiles)
    .map(([value, config]) => ({
      value: parseInt(value),
      ...config,
    }))
    .sort((a, b) => a.value - b.value);

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="text-xl">Tile Values & Meanings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {sortedTiles.map((tile) => (
            <div
              key={tile.value}
              className="flex flex-col items-center p-2 rounded-lg border"
              style={{ backgroundColor: `${tile.color}20` }}
            >
              <div className="text-3xl font-bold mb-1">
                {tile.emoji || tile.value}
              </div>
              <div className="text-sm font-semibold text-center">
                {tile.label}
              </div>
              <Badge variant="secondary" className="mt-1">
                {tile.value}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
