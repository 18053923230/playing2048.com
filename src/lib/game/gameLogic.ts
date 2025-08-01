import { GameState, GameTile, Direction, GameConfig } from "@/types/game";

export class Game2048 {
  private state: GameState;
  private config: GameConfig;

  constructor(config: GameConfig) {
    this.config = config;
    this.state = this.createInitialState();
  }

  private createInitialState(): GameState {
    const board = Array(this.config.size)
      .fill(null)
      .map(() => Array(this.config.size).fill(null));

    return {
      board,
      score: 0,
      bestScore: this.loadBestScore(),
      status: "playing",
      theme: this.config.theme,
      moves: 0,
      startTime: Date.now(),
      lastMoveTime: Date.now(),
    };
  }

  public move(direction: Direction): boolean {
    if (this.state.status !== "playing") return false;

    const moved = this.performMove(direction);

    if (moved) {
      this.addRandomTile();
      this.state.moves++;
      this.state.lastMoveTime = Date.now();
      this.checkGameStatus();
      this.saveGame();
    }

    return moved;
  }

  private performMove(direction: Direction): boolean {
    let moved = false;

    switch (direction) {
      case "left":
        moved = this.moveLeft();
        break;
      case "right":
        moved = this.moveRight();
        break;
      case "up":
        moved = this.moveUp();
        break;
      case "down":
        moved = this.moveDown();
        break;
    }

    return moved;
  }

  private moveLeft(): boolean {
    let moved = false;
    const size = this.config.size;

    for (let row = 0; row < size; row++) {
      const line = this.state.board[row].filter((tile) => tile !== null);
      const merged = this.mergeLine(line);

      if (merged.length !== this.state.board[row].length) {
        moved = true;
      }

      // 填充空位
      const newRow: (GameTile | null)[] = [...merged];
      while (newRow.length < size) {
        newRow.push(null);
      }

      this.state.board[row] = newRow;
    }

    return moved;
  }

  private moveRight(): boolean {
    this.rotateBoard(2);
    const moved = this.moveLeft();
    this.rotateBoard(2);
    return moved;
  }

  private moveUp(): boolean {
    this.rotateBoard(3);
    const moved = this.moveLeft();
    this.rotateBoard(1);
    return moved;
  }

  private moveDown(): boolean {
    this.rotateBoard(1);
    const moved = this.moveLeft();
    this.rotateBoard(3);
    return moved;
  }

  private mergeLine(line: GameTile[]): GameTile[] {
    const merged: GameTile[] = [];

    for (let i = 0; i < line.length; i++) {
      if (line[i] === null) continue;

      if (
        i + 1 < line.length &&
        line[i + 1] !== null &&
        line[i]!.value === line[i + 1]!.value
      ) {
        // 合并相同值的方块
        const mergedTile: GameTile = {
          id: `${Date.now()}-${Math.random()}`,
          value: line[i]!.value * 2,
          position: line[i]!.position,
          mergedFrom: [line[i]!.id, line[i + 1]!.id],
        };
        merged.push(mergedTile);
        this.state.score += mergedTile.value;
        i++; // 跳过下一个方块
      } else {
        merged.push(line[i]!);
      }
    }

    return merged;
  }

  private rotateBoard(times: number): void {
    const size = this.config.size;
    for (let t = 0; t < times; t++) {
      const rotated = Array(size)
        .fill(null)
        .map(() => Array(size).fill(null));

      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          rotated[j][size - 1 - i] = this.state.board[i][j];
        }
      }

      this.state.board = rotated;
    }
  }

  private addRandomTile(): void {
    const emptyCells = this.getEmptyCells();
    if (emptyCells.length === 0) return;

    const [row, col] =
      emptyCells[Math.floor(Math.random() * emptyCells.length)];
    const value = Math.random() < 0.9 ? 2 : 4;

    const newTile: GameTile = {
      id: `${Date.now()}-${Math.random()}`,
      value,
      position: [row, col],
      isNew: true,
    };

    this.state.board[row][col] = newTile;
  }

  private getEmptyCells(): [number, number][] {
    const empty: [number, number][] = [];
    const size = this.config.size;

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (this.state.board[i][j] === null) {
          empty.push([i, j]);
        }
      }
    }

    return empty;
  }

  private checkGameStatus(): void {
    // 检查是否获胜
    if (this.hasWinningTile()) {
      this.state.status = "won";
      return;
    }

    // 检查是否失败
    if (!this.canMove()) {
      this.state.status = "lost";
      return;
    }
  }

  private hasWinningTile(): boolean {
    const size = this.config.size;
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (
          this.state.board[i][j] &&
          this.state.board[i][j]!.value >= this.config.targetValue
        ) {
          return true;
        }
      }
    }
    return false;
  }

  private canMove(): boolean {
    // 检查是否有空位
    if (this.getEmptyCells().length > 0) return true;

    // 检查是否可以合并
    const size = this.config.size;
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        const current = this.state.board[i][j];
        if (!current) continue;

        // 检查右边
        if (
          j + 1 < size &&
          this.state.board[i][j + 1] &&
          current.value === this.state.board[i][j + 1]!.value
        ) {
          return true;
        }

        // 检查下边
        if (
          i + 1 < size &&
          this.state.board[i + 1][j] &&
          current.value === this.state.board[i + 1][j]!.value
        ) {
          return true;
        }
      }
    }

    return false;
  }

  public getState(): GameState {
    return { ...this.state };
  }

  public newGame(): void {
    this.state = this.createInitialState();
    this.addRandomTile();
    this.addRandomTile();
    this.saveGame();
  }

  public resetGame(): void {
    this.state.score = 0;
    this.state.moves = 0;
    this.state.status = "playing";
    this.state.startTime = Date.now();
    this.newGame();
  }

  public continueGame(): void {
    this.state.status = "playing";
    this.saveGame();
  }

  private loadBestScore(): number {
    if (typeof window === "undefined") return 0;
    return parseInt(
      localStorage.getItem(`2048-best-score-${this.config.theme}`) || "0"
    );
  }

  private saveGame(): void {
    if (typeof window === "undefined") return;

    localStorage.setItem(
      `2048-game-state-${this.config.theme}`,
      JSON.stringify(this.state)
    );

    if (this.state.score > this.state.bestScore) {
      this.state.bestScore = this.state.score;
      localStorage.setItem(
        `2048-best-score-${this.config.theme}`,
        this.state.bestScore.toString()
      );
    }
  }

  public loadGame(): void {
    if (typeof window === "undefined") return;

    const saved = localStorage.getItem(`2048-game-state-${this.config.theme}`);
    if (saved) {
      try {
        const loadedState = JSON.parse(saved);
        this.state = { ...this.state, ...loadedState };
      } catch (error) {
        console.error("Failed to load game state:", error);
      }
    }
  }
}
