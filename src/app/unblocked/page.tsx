import { SEOHead } from "@/components/seo/SEOHead";
import { seoConfig } from "@/lib/seo/seoConfig";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function UnblockedPage() {
  return (
    <>
      <SEOHead {...seoConfig.unblocked} />

      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="text-5xl font-bold mb-4">
                <span className="text-red-500">🎮 2048</span>
                <span className="text-teal-500"> Cupcakes</span>
                <span className="text-purple-500"> Unblocked</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                Play 2048 Cupcakes anywhere - school, work, or home! No
                restrictions, no downloads, just pure puzzle fun. Access the
                most delicious version of 2048 from any device.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                  <span className="mr-2">✅</span>
                  No Downloads Required
                </div>
                <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  <span className="mr-2">🌐</span>
                  Works Everywhere
                </div>
                <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                  <span className="mr-2">🎯</span>
                  School & Work Safe
                </div>
              </div>
            </header>

            {/* 游戏入口 */}
            <div className="text-center mb-12">
              <Link href="/game/cupcakes">
                <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-12 py-4 rounded-lg text-xl font-bold hover:shadow-lg transition-all duration-300 hover:scale-105">
                  🧁 Play 2048 Cupcakes Unblocked Now
                </button>
              </Link>
            </div>

            {/* 特色介绍 */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center gap-2">
                    <span className="text-3xl">🏫</span>
                    School Safe
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Perfect for school breaks! Educational puzzle game that
                    helps develop strategic thinking and problem-solving skills.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center gap-2">
                    <span className="text-3xl">💼</span>
                    Work Friendly
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Take a quick break at work! Lightweight game that won't slow
                    down your computer or require admin permissions.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center gap-2">
                    <span className="text-3xl">📱</span>
                    Mobile Ready
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Play on any device! Responsive design works perfectly on
                    phones, tablets, and computers.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* 游戏特色 */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-center mb-8">
                🎮 Why Choose 2048 Cupcakes Unblocked?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <span className="text-2xl">🧁</span>
                    Delicious Cupcake Theme
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Unlike the original 2048, our version features beautiful
                    cupcake graphics that make the game more visually appealing
                    and fun to play.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Beautiful cupcake graphics
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Satisfying merge animations
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Colorful visual feedback
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <span className="text-2xl">⚡</span>
                    Instant Access
                  </h3>
                  <p className="text-gray-600 mb-4">
                    No waiting, no downloads, no installations. Just click and
                    play immediately from any web browser.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      No registration required
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Works on all browsers
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Auto-saves your progress
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 其他版本链接 */}
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-2xl font-bold text-center mb-6">
                🎨 Try Other 2048 Cupcakes Versions
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/game/christmas" className="group">
                  <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="text-4xl mb-3">🎄</div>
                    <h3 className="text-lg font-semibold mb-2">
                      Christmas Edition
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Holiday-themed cupcakes
                    </p>
                  </div>
                </Link>
                <Link href="/game/halloween" className="group">
                  <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="text-4xl mb-3">🎃</div>
                    <h3 className="text-lg font-semibold mb-2">
                      Halloween Edition
                    </h3>
                    <p className="text-gray-600 text-sm">Spooky cupcake fun</p>
                  </div>
                </Link>
                <Link href="/strategy" className="group">
                  <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="text-4xl mb-3">📚</div>
                    <h3 className="text-lg font-semibold mb-2">
                      Strategy Guide
                    </h3>
                    <p className="text-gray-600 text-sm">Learn to win faster</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* FAQ 部分 */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-center mb-6">
                ❓ Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Is 2048 Cupcakes Unblocked really free?
                  </h3>
                  <p className="text-gray-600">
                    Yes! Our game is completely free to play. No hidden costs,
                    no premium features, no ads that interrupt gameplay.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Can I play at school or work?
                  </h3>
                  <p className="text-gray-600">
                    Absolutely! Our game is designed to work in restricted
                    environments. It doesn't require any downloads or special
                    permissions.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Does the game save my progress?
                  </h3>
                  <p className="text-gray-600">
                    Yes! Your game progress and high scores are automatically
                    saved in your browser's local storage.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    What's the difference from regular 2048?
                  </h3>
                  <p className="text-gray-600">
                    Our version features beautiful cupcake graphics instead of
                    plain numbers, making it more visually appealing and fun to
                    play.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/game/cupcakes">
                <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                  🚀 Start Playing Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
