"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface GameStatsProps {
  score: number;
  bestScore: number;
  moves: number;
  selectedColor?: string;
  compact?: boolean;
}

export const GameStats: React.FC<GameStatsProps> = ({
  score,
  bestScore,
  moves,
  selectedColor = "#FF6B6B",
  compact = false,
}) => {
  // 为得分区域生成不同深浅的颜色
  const getScoreColor = (type: "score" | "best" | "moves") => {
    const baseColor = selectedColor;
    switch (type) {
      case "score":
        return `${baseColor}FF`; // 完全不透明，最深的颜色
      case "best":
        return `${baseColor}CC`; // 80% 透明度
      case "moves":
        return `${baseColor}99`; // 60% 透明度
      default:
        return baseColor;
    }
  };

  if (compact) {
    return (
      <div className="grid grid-cols-3 gap-2">
        <div
          className="bg-white rounded-lg p-3 text-center shadow-sm"
          style={{
            borderColor: `${selectedColor}30`,
            backgroundColor: `${selectedColor}05`,
          }}
        >
          <div className="text-xs text-gray-600 mb-1">Score</div>
          <div
            className="text-lg font-bold"
            style={{ color: getScoreColor("score") }}
          >
            {score}
          </div>
        </div>
        <div
          className="bg-white rounded-lg p-3 text-center shadow-sm"
          style={{
            borderColor: `${selectedColor}30`,
            backgroundColor: `${selectedColor}05`,
          }}
        >
          <div className="text-xs text-gray-600 mb-1">Best</div>
          <div
            className="text-lg font-bold"
            style={{ color: getScoreColor("best") }}
          >
            {bestScore}
          </div>
        </div>
        <div
          className="bg-white rounded-lg p-3 text-center shadow-sm"
          style={{
            borderColor: `${selectedColor}30`,
            backgroundColor: `${selectedColor}05`,
          }}
        >
          <div className="text-xs text-gray-600 mb-1">Moves</div>
          <div
            className="text-lg font-bold"
            style={{ color: getScoreColor("moves") }}
          >
            {moves}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <Card
        className="transition-all duration-300"
        style={{
          borderColor: `${selectedColor}30`,
          backgroundColor: `${selectedColor}05`,
        }}
      >
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Score</CardTitle>
        </CardHeader>
        <CardContent>
          <div
            className="text-2xl font-bold"
            style={{ color: getScoreColor("score") }}
          >
            {score}
          </div>
        </CardContent>
      </Card>

      <Card
        className="transition-all duration-300"
        style={{
          borderColor: `${selectedColor}30`,
          backgroundColor: `${selectedColor}05`,
        }}
      >
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Best Score</CardTitle>
        </CardHeader>
        <CardContent>
          <div
            className="text-2xl font-bold"
            style={{ color: getScoreColor("best") }}
          >
            {bestScore}
          </div>
        </CardContent>
      </Card>

      <Card
        className="transition-all duration-300"
        style={{
          borderColor: `${selectedColor}30`,
          backgroundColor: `${selectedColor}05`,
        }}
      >
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Moves</CardTitle>
        </CardHeader>
        <CardContent>
          <div
            className="text-2xl font-bold"
            style={{ color: getScoreColor("moves") }}
          >
            {moves}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
