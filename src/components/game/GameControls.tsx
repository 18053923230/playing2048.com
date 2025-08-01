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
}

export const GameControls: React.FC<GameControlsProps> = ({
  onNewGame,
  onReset,
  onMove,
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

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Controls</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button onClick={onNewGame} className="w-full">
            New Game
          </Button>
          <Button onClick={onReset} variant="outline" className="w-full">
            Reset
          </Button>
        </CardContent>
      </Card>

      <Card>
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
              className="h-12"
            >
              <ArrowUpIcon className="h-4 w-4" />
            </Button>
            <div></div>
            <Button
              onClick={() => onMove("left")}
              variant="outline"
              size="sm"
              className="h-12"
            >
              <ArrowLeftIcon className="h-4 w-4" />
            </Button>
            <div className="h-12 flex items-center justify-center text-xs text-gray-500">
              WASD
            </div>
            <Button
              onClick={() => onMove("right")}
              variant="outline"
              size="sm"
              className="h-12"
            >
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
            <div></div>
            <Button
              onClick={() => onMove("down")}
              variant="outline"
              size="sm"
              className="h-12"
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
