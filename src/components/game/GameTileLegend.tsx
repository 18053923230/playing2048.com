import React from "react";
import { getThemeConfig } from "@/lib/game/gameThemes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface GameTileLegendProps {
  theme: string;
  onColorChange?: (color: string) => void;
  selectedColor?: string;
}

// 预定义的颜色选项
const colorOptions = [
  "#FF6B6B", // 红色
  "#4ECDC4", // 青色
  "#45B7D1", // 蓝色
  "#96CEB4", // 绿色
  "#FFEAA7", // 黄色
  "#DDA0DD", // 紫色
  "#FFB347", // 橙色
  "#98D8C8", // 薄荷绿
  "#F7DC6F", // 金黄色
  "#BB8FCE", // 淡紫色
  "#85C1E9", // 天蓝色
  "#F8C471", // 杏色
  "#E74C3C", // 深红色
  "#3498DB", // 深蓝色
  "#2ECC71", // 深绿色
  "#F39C12", // 深橙色
  "#9B59B6", // 深紫色
  "#1ABC9C", // 青绿色
  "#E67E22", // 橙红色
  "#34495E", // 深灰色
  "#16A085", // 深青色
  "#8E44AD", // 深紫色
  "#D35400", // 深橙红色
  "#FF69B4", // 热粉色
];

// 生成颜色的不同透明度
const generateColorVariants = (baseColor: string) => {
  const variants = [];
  for (let i = 1; i <= 12; i++) {
    const opacity = 0.1 + i * 0.08; // 从0.1到1.0的透明度
    variants.push(
      `${baseColor}${Math.round(opacity * 255)
        .toString(16)
        .padStart(2, "0")}`
    );
  }
  return variants;
};

export const GameTileLegend: React.FC<GameTileLegendProps> = ({
  theme,
  onColorChange,
  selectedColor = "#FF6B6B",
}) => {
  const themeConfig = getThemeConfig(theme);
  const sortedTiles = Object.entries(themeConfig.tiles)
    .map(([value, config]) => ({
      value: parseInt(value),
      ...config,
    }))
    .sort((a, b) => a.value - b.value);

  const colorVariants = generateColorVariants(selectedColor);

  const handleColorSelect = (color: string) => {
    onColorChange?.(color);
  };

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="text-xl">Tile Values & Meanings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {sortedTiles.map((tile, index) => (
            <div
              key={tile.value}
              className="flex flex-col items-center p-2 rounded-lg border transition-all duration-200 hover:scale-105"
              style={{
                backgroundColor: colorVariants[index] || `${tile.color}20`,
                borderColor: selectedColor,
              }}
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

        {/* 颜色选择器 */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3">Choose a theme color</h3>
          <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-12 gap-2">
            {colorOptions.map((color) => (
              <button
                key={color}
                className={`w-10 h-10 rounded-full border-3 transition-all duration-200 hover:scale-110 shadow-md hover:shadow-lg ${
                  selectedColor === color
                    ? "border-gray-800 scale-110 ring-2 ring-gray-400"
                    : "border-gray-300 hover:border-gray-500"
                }`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorSelect(color)}
                title={`Choose ${color} as theme color`}
              />
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            Click on the color circle to change the game theme color, all icons
            and game areas will use different shades of that color
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
