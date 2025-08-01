import { SEOHead } from "@/components/seo/SEOHead";
import { seoConfig } from "@/lib/seo/seoConfig";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function StrategyPage() {
  return (
    <>
      <SEOHead {...seoConfig.strategy} />

      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">
                How to Win 2048 Cupcakes
              </h1>
              <p className="text-xl text-gray-600">
                Master the game with these proven strategies and tips
              </p>
            </header>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🎯</span>
                    Basic Strategy
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">1. Corner Strategy</h3>
                    <p className="text-gray-600">
                      Keep your highest value tile in a corner and build around
                      it. This prevents it from getting in the way of merges.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">2. Snake Pattern</h3>
                    <p className="text-gray-600">
                      Move tiles in a snake-like pattern along the edges to
                      create chains of merges.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">
                      3. Avoid Random Moves
                    </h3>
                    <p className="text-gray-600">
                      Plan your moves ahead. Don&apos;t make random moves that
                      break your tile arrangement.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🚀</span>
                    Advanced Tips
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">1. Build Chains</h3>
                    <p className="text-gray-600">
                      Create chains of tiles with values 2, 4, 8, 16, etc. This
                      makes merging much easier.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">2. Use Undo Wisely</h3>
                    <p className="text-gray-600">
                      If you make a mistake, use the undo feature to go back and
                      try a different approach.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">3. Stay Calm</h3>
                    <p className="text-gray-600">
                      Don&apos;t panic when the board gets crowded. Look for
                      opportunities to merge tiles.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🎮</span>
                    Game Controls
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Keyboard Controls</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Arrow keys or WASD to move tiles</li>
                      <li>• Space bar to pause/resume</li>
                      <li>• R to restart the game</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Touch Controls</h3>
                    <p className="text-gray-600">
                      Swipe in any direction on mobile devices to move tiles.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🏆</span>
                    Scoring System
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Points Calculation</h3>
                    <p className="text-gray-600">
                      You earn points equal to the value of tiles you merge. For
                      example, merging two 512 tiles gives you 1024 points.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">High Score</h3>
                    <p className="text-gray-600">
                      Your best score is automatically saved and displayed on
                      the game board.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <a
                href="/cupcakes"
                className="inline-block bg-teal-500 text-white px-8 py-3 rounded-lg hover:bg-teal-600 transition-colors"
              >
                Play 2048 Cupcakes Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
