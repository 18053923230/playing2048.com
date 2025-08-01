"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface GameOverlayProps {
  status: "won" | "lost" | null;
  score: number;
  onNewGame: () => void;
  onContinue: () => void;
}

export const GameOverlay: React.FC<GameOverlayProps> = ({
  status,
  score,
  onNewGame,
  onContinue,
}) => {
  if (!status) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Card className="w-96">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">
            {status === "won" ? "🎉 Congratulations! 🎉" : "😔 Game Over 😔"}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-lg">
            {status === "won"
              ? "You've reached the target tile!"
              : "No more moves available."}
          </p>
          <p className="text-xl font-bold text-blue-600">
            Final Score: {score}
          </p>
          <div className="flex gap-2 justify-center">
            <Button onClick={onNewGame} className="flex-1">
              New Game
            </Button>
            {status === "won" && (
              <Button onClick={onContinue} variant="outline" className="flex-1">
                Continue Playing
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
