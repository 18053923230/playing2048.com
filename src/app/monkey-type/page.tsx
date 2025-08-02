import { SEOHead } from "@/components/seo/SEOHead";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MonkeyTypePage() {
  return (
    <>
      <SEOHead
        title="2048 Cupcakes Monkey Type Edition - Typing Speed Challenge"
        description="Challenge your typing speed with 2048 Cupcakes Monkey Type Edition! Combine puzzle solving with typing practice in this unique 2048 variant."
        keywords="2048 cupcakes monkey type, monkey type 2048, typing game 2048, speed typing puzzle, 2048 typing challenge"
        canonical="https://playing2048.com/monkey-type"
      />

      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-100">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="text-5xl font-bold mb-4">
                <span className="text-orange-500">🐒 2048</span>
                <span className="text-yellow-500"> Cupcakes</span>
                <span className="text-purple-500"> Monkey Type</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                Combine the addictive puzzle gameplay of 2048 with typing speed
                challenges! Type faster to unlock special cupcakes and achieve
                higher scores in this unique Monkey Type edition.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
                  <span className="mr-2">⌨️</span>
                  Typing Speed Challenge
                </div>
                <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
                  <span className="mr-2">🧁</span>
                  Special Cupcakes
                </div>
                <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                  <span className="mr-2">⚡</span>
                  Speed Bonuses
                </div>
              </div>
            </header>

            {/* 游戏入口 */}
            <div className="text-center mb-12">
              <Link href="/game/cupcakes">
                <button className="bg-gradient-to-r from-orange-500 to-yellow-600 text-white px-12 py-4 rounded-lg text-xl font-bold hover:shadow-lg transition-all duration-300 hover:scale-105">
                  🐒 Play Monkey Type Edition Now
                </button>
              </Link>
            </div>

            {/* 特色介绍 */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center gap-2">
                    <span className="text-3xl">⌨️</span>
                    Typing Challenge
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Test your typing speed while playing 2048! Type words
                    quickly to unlock special cupcakes and earn speed bonuses.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center gap-2">
                    <span className="text-3xl">🧁</span>
                    Special Cupcakes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Unlock unique Monkey Type themed cupcakes with special
                    powers and bonus effects when you complete typing
                    challenges.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center gap-2">
                    <span className="text-3xl">🏆</span>
                    Speed Leaderboard
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Compete with other players on typing speed and accuracy.
                    Climb the leaderboard and become the fastest 2048 typist!
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* 游戏特色 */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-center mb-8">
                🎮 Monkey Type Features
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <span className="text-2xl">⌨️</span>
                    Typing Integration
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Words appear on cupcakes that you must type correctly to
                    merge them. The faster you type, the more points you earn!
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Real-time typing feedback
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      WPM (Words Per Minute) tracking
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Accuracy percentage display
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <span className="text-2xl">🎯</span>
                    Challenge Modes
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Multiple challenge modes to test different aspects of your
                    typing and puzzle-solving skills.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Speed mode - Type as fast as possible
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Accuracy mode - Focus on precision
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Endurance mode - Long typing sessions
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 如何玩 */}
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-2xl font-bold text-center mb-6">
                🎯 How to Play Monkey Type Edition
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Basic Gameplay</h3>
                  <ol className="space-y-2 text-gray-600">
                    <li>1. Move cupcakes using arrow keys or swipe</li>
                    <li>2. When cupcakes collide, type the word shown</li>
                    <li>3. Type correctly to merge and earn points</li>
                    <li>4. Faster typing = more bonus points</li>
                  </ol>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Typing Tips</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Focus on accuracy first, then speed</li>
                    <li>• Use proper finger positioning</li>
                    <li>• Don't look at the keyboard</li>
                    <li>• Practice regularly to improve</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 其他版本链接 */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-2xl font-bold text-center mb-6">
                🎨 Try Other 2048 Cupcakes Versions
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
                <Link href="/unblocked" className="group">
                  <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="text-4xl mb-3">🌐</div>
                    <h3 className="text-lg font-semibold mb-2">Unblocked</h3>
                    <p className="text-gray-600 text-sm">
                      Play anywhere, anytime
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
                <button className="bg-gradient-to-r from-orange-500 to-yellow-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                  🐒 Start Typing Challenge
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
