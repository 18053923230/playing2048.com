import { SEOHead } from "@/components/seo/SEOHead";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RomanNumeralsPage() {
  return (
    <>
      <SEOHead
        title="2048 Cupcakes Roman Numerals - Ancient Number Puzzle Game"
        description="Experience 2048 Cupcakes with Roman numerals! Merge ancient number symbols in this educational and challenging puzzle game. Learn Roman numerals while having fun!"
        keywords="2048 cupcakes roman numerals, roman numerals 2048, ancient numbers game, educational puzzle game, learn roman numerals"
        canonical="https://playing2048.com/roman-numerals"
      />

      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="text-5xl font-bold mb-4">
                <span className="text-amber-600">🏛️ 2048</span>
                <span className="text-orange-600"> Cupcakes</span>
                <span className="text-red-600"> Roman Numerals</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                Journey back to ancient Rome with 2048 Cupcakes Roman Numerals!
                Merge Roman numeral symbols (I, V, X, L, C, D, M) to reach the
                ultimate goal. Learn history while having fun!
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                  <span className="mr-2">🏛️</span>
                  Ancient Roman Theme
                </div>
                <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
                  <span className="mr-2">📚</span>
                  Educational
                </div>
                <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">
                  <span className="mr-2">🎯</span>
                  Historical Challenge
                </div>
              </div>
            </header>

            {/* 游戏入口 */}
            <div className="text-center mb-12">
              <Link href="/game/cupcakes">
                <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-12 py-4 rounded-lg text-xl font-bold hover:shadow-lg transition-all duration-300 hover:scale-105">
                  🏛️ Play Roman Numerals Edition
                </button>
              </Link>
            </div>

            {/* 特色介绍 */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center gap-2">
                    <span className="text-3xl">🏛️</span>
                    Ancient Theme
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Immerse yourself in ancient Roman aesthetics with classical
                    designs, colors, and symbols throughout the game.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center gap-2">
                    <span className="text-3xl">📚</span>
                    Educational Value
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Learn Roman numerals naturally through gameplay. Perfect for
                    students, teachers, and anyone interested in ancient
                    history.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center gap-2">
                    <span className="text-3xl">🎯</span>
                    Unique Challenge
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Experience 2048 with a historical twist! Roman numerals add
                    an extra layer of complexity and learning to the classic
                    game.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* 罗马数字介绍 */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-center mb-8">
                📚 Roman Numerals Guide
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <span className="text-2xl">🔢</span>
                    Basic Roman Numerals
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="font-mono text-lg">I</span>
                      <span className="text-gray-600">1</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="font-mono text-lg">V</span>
                      <span className="text-gray-600">5</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="font-mono text-lg">X</span>
                      <span className="text-gray-600">10</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="font-mono text-lg">L</span>
                      <span className="text-gray-600">50</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="font-mono text-lg">C</span>
                      <span className="text-gray-600">100</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="font-mono text-lg">D</span>
                      <span className="text-gray-600">500</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="font-mono text-lg">M</span>
                      <span className="text-gray-600">1000</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <span className="text-2xl">🎯</span>
                    Game Progression
                  </h3>
                  <p className="text-gray-600 mb-4">
                    In our Roman Numerals edition, you'll progress through these
                    values as you merge cupcakes:
                  </p>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">•</span>
                      Start with I (1) and II (2)
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">•</span>
                      Merge to create V (5), X (10), L (50)
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">•</span>
                      Continue to C (100), D (500), M (1000)
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">•</span>
                      Ultimate goal: MMXLVIII (2048)
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-amber-50 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>Fun Fact:</strong> MMXLVIII = 2048 in Roman
                      numerals!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 教育价值 */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-2xl font-bold text-center mb-6">
                🎓 Educational Benefits
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">For Students</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Learn Roman numerals through interactive gameplay</li>
                    <li>• Practice number recognition and conversion</li>
                    <li>• Develop strategic thinking and problem-solving</li>
                    <li>• Make learning history fun and engaging</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">For Teachers</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Perfect classroom activity for history lessons</li>
                    <li>• Reinforce math and number concepts</li>
                    <li>• Encourage critical thinking and strategy</li>
                    <li>• Provide hands-on learning experience</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 游戏特色 */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-center mb-8">
                🎮 Roman Numerals Features
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <span className="text-2xl">🏛️</span>
                    Classical Design
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Experience the game with authentic Roman-inspired visuals,
                    including classical fonts, colors, and decorative elements.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Classical Roman typography
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Ancient color palette
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Historical decorative elements
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <span className="text-2xl">📚</span>
                    Learning Tools
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Built-in learning features help you understand Roman
                    numerals as you play.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Hover tooltips with explanations
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Number conversion display
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Progress tracking with both systems
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 其他版本链接 */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-2xl font-bold text-center mb-6">
                🎨 Explore Other 2048 Cupcakes Versions
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/game/cupcakes" className="group">
                  <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="text-4xl mb-3">🧁</div>
                    <h3 className="text-lg font-semibold mb-2">
                      Classic Cupcakes
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Original delicious version
                    </p>
                  </div>
                </Link>
                <Link href="/monkey-type" className="group">
                  <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="text-4xl mb-3">🐒</div>
                    <h3 className="text-lg font-semibold mb-2">Monkey Type</h3>
                    <p className="text-gray-600 text-sm">
                      Typing speed challenge
                    </p>
                  </div>
                </Link>
                <Link href="/strategy" className="group">
                  <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="text-4xl mb-3">📚</div>
                    <h3 className="text-lg font-semibold mb-2">
                      Strategy Guide
                    </h3>
                    <p className="text-gray-600 text-sm">Master the game</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* 开始游戏按钮 */}
            <div className="text-center">
              <Link href="/game/cupcakes">
                <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                  🏛️ Start Roman Adventure
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
