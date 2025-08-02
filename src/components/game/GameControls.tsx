"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Direction } from "@/types/game";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

interface GameControlsProps {
  onNewGame: () => void;
  onReset: () => void;
  onMove: (direction: Direction) => void;
  selectedColor?: string;
  mobile?: boolean;
}

export const GameControls: React.FC<GameControlsProps> = ({
  onNewGame,
  onReset,
  onMove,
  selectedColor = "#FF6B6B",
  mobile = false,
}) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowUp":
        case "w":
        case "W":
          event.preventDefault();
          onMove("up");
          break;
        case "ArrowDown":
        case "s":
        case "S":
          event.preventDefault();
          onMove("down");
          break;
        case "ArrowLeft":
        case "a":
        case "A":
          event.preventDefault();
          onMove("left");
          break;
        case "ArrowRight":
        case "d":
        case "D":
          event.preventDefault();
          onMove("right");
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onMove]);

  if (mobile) {
    return (
      <div className="space-y-3">
        {/* 移动端控制按钮 */}
        <div className="grid grid-cols-2 gap-2">
          <Button
            onClick={onNewGame}
            size="sm"
            className="transition-all duration-300"
            style={{
              backgroundColor: selectedColor,
              borderColor: selectedColor,
              color: "white",
            }}
          >
            New Game
          </Button>
          <Button
            onClick={onReset}
            variant="outline"
            size="sm"
            className="transition-all duration-300"
            style={{
              borderColor: `${selectedColor}60`,
              color: selectedColor,
            }}
          >
            Reset
          </Button>
        </div>

        {/* 移动端方向键 */}
        <div className="grid grid-cols-3 gap-2">
          <div></div>
          <Button
            onClick={() => onMove("up")}
            variant="outline"
            size="sm"
            className="h-10 transition-all duration-300"
            style={{
              borderColor: `${selectedColor}60`,
              color: selectedColor,
            }}
          >
            <ArrowUpIcon className="h-4 w-4" />
          </Button>
          <div></div>
          <Button
            onClick={() => onMove("left")}
            variant="outline"
            size="sm"
            className="h-10 transition-all duration-300"
            style={{
              borderColor: `${selectedColor}60`,
              color: selectedColor,
            }}
          >
            <ArrowLeftIcon className="h-4 w-4" />
          </Button>
          <div
            className="h-10 flex items-center justify-center text-xs transition-all duration-300"
            style={{ color: `${selectedColor}80` }}
          >
            SWIPE
          </div>
          <Button
            onClick={() => onMove("right")}
            variant="outline"
            size="sm"
            className="h-10 transition-all duration-300"
            style={{
              borderColor: `${selectedColor}60`,
              color: selectedColor,
            }}
          >
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
          <div></div>
          <Button
            onClick={() => onMove("down")}
            variant="outline"
            size="sm"
            className="h-10 transition-all duration-300"
            style={{
              borderColor: `${selectedColor}60`,
              color: selectedColor,
            }}
          >
            <ArrowDownIcon className="h-4 w-4" />
          </Button>
          <div></div>
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
          <CardTitle className="text-lg">Controls</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button
            onClick={onNewGame}
            className="w-full transition-all duration-300"
            style={{
              backgroundColor: selectedColor,
              borderColor: selectedColor,
              color: "white",
            }}
          >
            New Game
          </Button>
          <Button
            onClick={onReset}
            variant="outline"
            className="w-full transition-all duration-300"
            style={{
              borderColor: `${selectedColor}60`,
              color: selectedColor,
            }}
          >
            Reset
          </Button>
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
          <CardTitle className="text-lg">Direction Keys</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-2">
            <div></div>
            <Button
              onClick={() => onMove("up")}
              variant="outline"
              size="sm"
              className="h-12 transition-all duration-300"
              style={{
                borderColor: `${selectedColor}60`,
                color: selectedColor,
              }}
            >
              <ArrowUpIcon className="h-4 w-4" />
            </Button>
            <div></div>
            <Button
              onClick={() => onMove("left")}
              variant="outline"
              size="sm"
              className="h-12 transition-all duration-300"
              style={{
                borderColor: `${selectedColor}60`,
                color: selectedColor,
              }}
            >
              <ArrowLeftIcon className="h-4 w-4" />
            </Button>
            <div
              className="h-12 flex items-center justify-center text-xs transition-all duration-300"
              style={{ color: `${selectedColor}80` }}
            >
              WASD
            </div>
            <Button
              onClick={() => onMove("right")}
              variant="outline"
              size="sm"
              className="h-12 transition-all duration-300"
              style={{
                borderColor: `${selectedColor}60`,
                color: selectedColor,
              }}
            >
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
            <div></div>
            <Button
              onClick={() => onMove("down")}
              variant="outline"
              size="sm"
              className="h-12 transition-all duration-300"
              style={{
                borderColor: `${selectedColor}60`,
                color: selectedColor,
              }}
            >
              <ArrowDownIcon className="h-4 w-4" />
            </Button>
            <div></div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
