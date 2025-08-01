export type Direction = "up" | "down" | "left" | "right";
export type GameTheme = "cupcakes" | "christmas" | "halloween" | "classic";
export type GameStatus = "playing" | "won" | "lost" | "paused";

export interface GameTile {
  id: string;
  value: number;
  position: [number, number];
  mergedFrom?: string[];
  isNew?: boolean;
}

export interface GameState {
  board: (GameTile | null)[][];
  score: number;
  bestScore: number;
  status: GameStatus;
  theme: GameTheme;
  moves: number;
  startTime: number;
  lastMoveTime: number;
}

export interface GameConfig {
  size: number;
  targetValue: number;
  theme: GameTheme;
  difficulty: "easy" | "medium" | "hard";
}

export interface ThemeConfig {
  name: string;
  colors: {
    background: string;
    tile: string;
    text: string;
    accent: string;
  };
  tiles: Record<
    number,
    {
      label: string;
      color: string;
      emoji?: string;
    }
  >;
}
