import { SEOHead } from "@/components/seo/SEOHead";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HowToPlayPage() {
  return (
    <>
      <SEOHead
        title="How to Play 2048 Cupcakes - Complete Game Guide & Tutorial"
        description="Learn how to play 2048 Cupcakes with our complete tutorial. Master the rules, controls, and strategies to become a 2048 champion!"
        keywords="how to play 2048 cupcakes, 2048 cupcakes tutorial, 2048 game rules, 2048 cupcakes guide, learn 2048"
        canonical="https://playing2048.com/how-to-play"
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">
                How to Play 2048 Cupcakes
              </h1>
              <p className="text-xl text-gray-600">
                Master the most delicious puzzle game with our complete guide
              </p>
            </header>

            {/* 游戏目标 */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-3xl">🎯</span>
                  Game Objective
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  The goal of 2048 Cupcakes is simple: merge identical cupcakes
                  to create larger ones until you reach the golden cupcake
                  (2048)!
                </p>
                <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">🏆 Winning Condition</h3>
                  <p className="text-gray-700">
                    Create a cupcake with the value of 2048 to win the game. But
                    don't stop there - you can continue playing to achieve even
                    higher scores!
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 基本规则 */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-3xl">📋</span>
                  Basic Rules
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">1. Starting the Game</h3>
                    <p className="text-gray-600">
                      The game starts with two cupcakes on a 4x4 grid. Each
                      cupcake has a value (usually 2 or 4).
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">2. Moving Cupcakes</h3>
                    <p className="text-gray-600">
                      Use arrow keys (or swipe on mobile) to move all cupcakes
                      in that direction. All cupcakes move together in the same
                      direction.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">3. Merging Cupcakes</h3>
                    <p className="text-gray-600">
                      When two cupcakes with the same value collide, they merge
                      into one cupcake with double the value.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">4. New Cupcakes</h3>
                    <p className="text-gray-600">
                      After each move, a new cupcake (value 2 or 4) appears in a
                      random empty cell.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 控制说明 */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-3xl">🎮</span>
                  Game Controls
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Desktop Controls</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <span className="bg-gray-200 px-2 py-1 rounded text-sm font-mono mr-2">
                          ↑
                        </span>
                        Move Up
                      </li>
                      <li className="flex items-center">
                        <span className="bg-gray-200 px-2 py-1 rounded text-sm font-mono mr-2">
                          ↓
                        </span>
                        Move Down
                      </li>
                      <li className="flex items-center">
                        <span className="bg-gray-200 px-2 py-1 rounded text-sm font-mono mr-2">
                          ←
                        </span>
                        Move Left
                      </li>
                      <li className="flex items-center">
                        <span className="bg-gray-200 px-2 py-1 rounded text-sm font-mono mr-2">
                          →
                        </span>
                        Move Right
                      </li>
                      <li className="flex items-center">
                        <span className="bg-gray-200 px-2 py-1 rounded text-sm font-mono mr-2">
                          R
                        </span>
                        Restart Game
                      </li>
                      <li className="flex items-center">
                        <span className="bg-gray-200 px-2 py-1 rounded text-sm font-mono mr-2">
                          Z
                        </span>
                        Undo Move
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Mobile Controls</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <span className="text-2xl mr-2">👆</span>
                        Swipe Up - Move Up
                      </li>
                      <li className="flex items-center">
                        <span className="text-2xl mr-2">👇</span>
                        Swipe Down - Move Down
                      </li>
                      <li className="flex items-center">
                        <span className="text-2xl mr-2">👈</span>
                        Swipe Left - Move Left
                      </li>
                      <li className="flex items-center">
                        <span className="text-2xl mr-2">👉</span>
                        Swipe Right - Move Right
                      </li>
                      <li className="flex items-center">
                        <span className="text-2xl mr-2">🔄</span>
                        Tap Restart Button
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 计分系统 */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-3xl">🏆</span>
                  Scoring System
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Your score increases every time you merge cupcakes. The
                    points you earn equal the value of the merged cupcake.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Score Examples:</h3>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Merge two 2s → Get 4 points</li>
                      <li>• Merge two 4s → Get 8 points</li>
                      <li>• Merge two 8s → Get 16 points</li>
                      <li>• Merge two 1024s → Get 2048 points</li>
                    </ul>
                  </div>
                  <p className="text-gray-700">
                    Your best score is automatically saved and displayed on the
                    game board.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 游戏结束条件 */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-3xl">💀</span>
                  Game Over Conditions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    The game ends when you can no longer make any valid moves.
                    This happens when:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      The grid is completely full AND no adjacent cupcakes can
                      be merged
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      You've reached the maximum possible cupcake value (though
                      this is very rare)
                    </li>
                  </ul>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-gray-700">
                      <strong>Tip:</strong> Don't worry about losing! You can
                      always restart the game and try again. Each game is a new
                      opportunity to improve your strategy.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 快速开始指南 */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-3xl">🚀</span>
                  Quick Start Guide
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl mb-2">1️⃣</div>
                      <h3 className="font-semibold mb-2">Start Playing</h3>
                      <p className="text-sm text-gray-600">
                        Click the play button and begin with the initial two
                        cupcakes
                      </p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl mb-2">2️⃣</div>
                      <h3 className="font-semibold mb-2">Learn the Moves</h3>
                      <p className="text-sm text-gray-600">
                        Practice moving cupcakes in all four directions
                      </p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl mb-2">3️⃣</div>
                      <h3 className="font-semibold mb-2">Master Merging</h3>
                      <p className="text-sm text-gray-600">
                        Focus on merging identical cupcakes to create larger
                        ones
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 行动按钮 */}
            <div className="text-center space-y-4">
              <Link href="/game/cupcakes">
                <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                  🧁 Start Playing 2048 Cupcakes
                </button>
              </Link>
              <div>
                <Link
                  href="/strategy"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  📚 Learn Advanced Strategies →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
