import { SEOHead } from "@/components/seo/SEOHead";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TipsAndTricksPage() {
  return (
    <>
      <SEOHead
        title="2048 Cupcakes Tips & Tricks - Advanced Strategies to Win"
        description="Master 2048 Cupcakes with our expert tips and tricks! Learn advanced strategies, corner techniques, and snake patterns to achieve higher scores."
        keywords="2048 cupcakes tips, 2048 cupcakes tricks, 2048 strategy, 2048 advanced techniques, how to get high score 2048"
        canonical="https://playing2048.com/tips-and-tricks"
      />

      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-5xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">
                2048 Cupcakes Tips & Tricks
              </h1>
              <p className="text-xl text-gray-600">
                Master advanced strategies to achieve higher scores and become a
                2048 champion!
              </p>
            </header>

            {/* 核心策略 */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-3xl">🎯</span>
                  Core Strategies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <span className="text-2xl">🏠</span>
                      Corner Strategy
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Keep your highest value cupcake in a corner and build
                      around it. This prevents it from getting in the way of
                      merges and gives you more control over the board.
                    </p>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h4 className="font-semibold mb-2">Why it works:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Corner tiles have fewer neighbors</li>
                        <li>• Easier to maintain position</li>
                        <li>• Creates a stable foundation</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <span className="text-2xl">🐍</span>
                      Snake Pattern
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Move cupcakes in a snake-like pattern along the edges.
                      This creates chains of merges and keeps your high-value
                      cupcakes organized in a predictable sequence.
                    </p>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h4 className="font-semibold mb-2">How to execute:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Start from a corner</li>
                        <li>• Follow the edge of the board</li>
                        <li>• Maintain descending order</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 高级技巧 */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-3xl">🚀</span>
                  Advanced Techniques
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <span className="text-xl">🔗</span>
                      Chain Building
                    </h3>
                    <p className="text-gray-600 mb-3">
                      Create chains of cupcakes with values 2, 4, 8, 16, 32, 64,
                      etc. This makes merging much easier and more predictable.
                    </p>
                    <div className="bg-yellow-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <strong>Example:</strong> 2 → 4 → 8 → 16 → 32 → 64 → 128
                        → 256 → 512 → 1024 → 2048
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <span className="text-xl">🔄</span>
                      Undo Strategy
                    </h3>
                    <p className="text-gray-600 mb-3">
                      Use the undo feature strategically. Don't just undo
                      mistakes - use it to explore different move possibilities
                      and find the optimal path.
                    </p>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <h4 className="font-semibold mb-2">When to undo:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• When a move breaks your pattern</li>
                        <li>• When you see a better opportunity</li>
                        <li>• To avoid getting stuck</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <span className="text-xl">🎲</span>
                      Probability Management
                    </h3>
                    <p className="text-gray-600 mb-3">
                      Understand that new cupcakes appear randomly. Plan your
                      moves to minimize the chance of a new cupcake blocking
                      your strategy.
                    </p>
                    <div className="bg-red-50 p-3 rounded-lg">
                      <h4 className="font-semibold mb-2">Risk reduction:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Keep empty spaces in strategic locations</li>
                        <li>• Don't fill the board unnecessarily</li>
                        <li>• Plan for worst-case scenarios</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 常见错误 */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-3xl">❌</span>
                  Common Mistakes to Avoid
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3 text-red-600">
                      Random Moves
                    </h3>
                    <p className="text-gray-600 mb-3">
                      Making random moves without a plan will quickly lead to a
                      cluttered board and game over.
                    </p>
                    <div className="bg-red-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <strong>Solution:</strong> Always think 2-3 moves ahead
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3 text-red-600">
                      Ignoring Corners
                    </h3>
                    <p className="text-gray-600 mb-3">
                      Letting your highest value cupcake wander around the board
                      makes it harder to control and merge.
                    </p>
                    <div className="bg-red-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <strong>Solution:</strong> Keep high values in corners
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3 text-red-600">
                      Over-merging
                    </h3>
                    <p className="text-gray-600 mb-3">
                      Merging cupcakes too quickly can create gaps and break
                      your pattern, making future merges difficult.
                    </p>
                    <div className="bg-red-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <strong>Solution:</strong> Build chains before merging
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3 text-red-600">
                      Panic Moves
                    </h3>
                    <p className="text-gray-600 mb-3">
                      When the board gets crowded, don't panic and make hasty
                      moves. Take time to analyze the situation.
                    </p>
                    <div className="bg-red-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <strong>Solution:</strong> Stay calm and look for
                        opportunities
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 分数目标 */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-3xl">🏆</span>
                  Score Milestones
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl mb-2">🥉</div>
                    <h3 className="font-semibold mb-2">Beginner</h3>
                    <p className="text-sm text-gray-600 mb-2">Target: 512</p>
                    <p className="text-xs text-gray-500">
                      Master basic merging and corner strategy
                    </p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl mb-2">🥈</div>
                    <h3 className="font-semibold mb-2">Intermediate</h3>
                    <p className="text-sm text-gray-600 mb-2">Target: 1024</p>
                    <p className="text-xs text-gray-500">
                      Perfect snake patterns and chain building
                    </p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl mb-2">🥇</div>
                    <h3 className="font-semibold mb-2">Expert</h3>
                    <p className="text-sm text-gray-600 mb-2">Target: 2048+</p>
                    <p className="text-xs text-gray-500">
                      Advanced strategies and perfect execution
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 练习建议 */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-3xl">💪</span>
                  Practice Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Daily Practice</h3>
                    <p className="text-gray-600">
                      Play at least 3-5 games per day to build muscle memory and
                      improve your decision-making speed.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Analyze Your Games</h3>
                    <p className="text-gray-600">
                      After each game, think about what went well and what you
                      could have done differently.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">
                      Try Different Strategies
                    </h3>
                    <p className="text-gray-600">
                      Experiment with different approaches to find what works
                      best for your playing style.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Pro Tip</h3>
                    <p className="text-gray-700">
                      Record your games and watch them back to identify patterns
                      and areas for improvement. Even the best players can learn
                      from reviewing their gameplay!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 行动按钮 */}
            <div className="text-center space-y-4">
              <Link href="/game/cupcakes">
                <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                  🧁 Practice These Tips Now
                </button>
              </Link>
              <div className="flex justify-center gap-4">
                <Link
                  href="/how-to-play"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  📖 Basic Tutorial
                </Link>
                <Link
                  href="/strategy"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  📚 Strategy Guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
