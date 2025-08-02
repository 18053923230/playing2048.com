import { SEOHead } from "@/components/seo/SEOHead";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FAQPage() {
  return (
    <>
      <SEOHead
        title="2048 Cupcakes FAQ - Frequently Asked Questions & Answers"
        description="Find answers to all your questions about 2048 Cupcakes! From game rules to technical issues, we've got you covered with comprehensive FAQs."
        keywords="2048 cupcakes faq, 2048 cupcakes questions, 2048 game help, 2048 cupcakes support, 2048 cupcakes problems"
        canonical="https://playing2048.com/faq"
      />

      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-gray-600">
                Everything you need to know about 2048 Cupcakes
              </p>
            </header>

            {/* 游戏规则相关问题 */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-3xl">🎮</span>
                  Game Rules & Gameplay
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      What is 2048 Cupcakes?
                    </h3>
                    <p className="text-gray-600">
                      2048 Cupcakes is a puzzle game where you merge identical
                      cupcakes to create larger ones. The goal is to reach the
                      golden cupcake with a value of 2048. It&apos;s a delicious
                      twist on the classic 2048 game!
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      How do I play 2048 Cupcakes?
                    </h3>
                    <p className="text-gray-600">
                      Use arrow keys (or swipe on mobile) to move all cupcakes
                      in that direction. When two identical cupcakes collide,
                      they merge into one with double the value. Keep merging
                      until you reach 2048!
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      What&apos;s the difference between 2048 and 2048 Cupcakes?
                    </h3>
                    <p className="text-gray-600">
                      The core gameplay is the same, but 2048 Cupcakes features
                      beautiful cupcake graphics instead of plain numbers. Each
                      cupcake has a unique design and color, making the game
                      more visually appealing and fun!
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      How do I win the game?
                    </h3>
                    <p className="text-gray-600">
                      You win by creating a cupcake with the value of 2048.
                      However, you can continue playing after winning to achieve
                      even higher scores and create larger cupcakes!
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      When does the game end?
                    </h3>
                    <p className="text-gray-600">
                      The game ends when you can no longer make any valid moves.
                      This happens when the grid is full and no adjacent
                      cupcakes can be merged.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 技术相关问题 */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-3xl">💻</span>
                  Technical Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Do I need to download anything to play?
                    </h3>
                    <p className="text-gray-600">
                      No! 2048 Cupcakes is completely browser-based. You can
                      play directly in your web browser without any downloads or
                      installations.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      What devices can I play on?
                    </h3>
                    <p className="text-gray-600">
                      You can play on any device with a web browser - computers,
                      tablets, and smartphones. The game is fully responsive and
                      works on all screen sizes.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Does the game work on mobile?
                    </h3>
                    <p className="text-gray-600">
                      Yes! The game is fully optimized for mobile devices. You
                      can use touch gestures (swipe) to move cupcakes, and the
                      interface automatically adjusts to your screen size.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      What browsers are supported?
                    </h3>
                    <p className="text-gray-600">
                      The game works on all modern browsers including Chrome,
                      Firefox, Safari, and Edge. For the best experience, we
                      recommend using the latest version of your browser.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Why is the game slow on my device?
                    </h3>
                    <p className="text-gray-600">
                      If the game seems slow, try refreshing the page or closing
                      other browser tabs. The game is designed to be
                      lightweight, but having many other programs running can
                      affect performance.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 保存和进度相关问题 */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-3xl">💾</span>
                  Saving & Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Does the game save my progress?
                    </h3>
                    <p className="text-gray-600">
                      Yes! Your current game state and high scores are
                      automatically saved in your browser's local storage. You
                      can close the browser and return later to continue your
                      game.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      What happens if I clear my browser data?
                    </h3>
                    <p className="text-gray-600">
                      If you clear your browser's local storage or cookies, your
                      saved games and high scores will be lost. Make sure to
                      back up important data before clearing browser data.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Can I play on multiple devices?
                    </h3>
                    <p className="text-gray-600">
                      Currently, game progress is saved locally on each device.
                      Progress from one device won't automatically sync to
                      another. We're working on cloud save features for the
                      future!
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      How do I reset my high score?
                    </h3>
                    <p className="text-gray-600">
                      You can reset your high score by clearing your
                      browser&apos;s local storage for this website, or by using
                      the &quot;New Game&quot; button multiple times (though
                      this will only reset the current game, not the saved high
                      score).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 策略和技巧相关问题 */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-3xl">🎯</span>
                  Strategy & Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      How can I get a higher score?
                    </h3>
                    <p className="text-gray-600">
                      Focus on keeping your highest value cupcake in a corner,
                      use the snake pattern strategy, and avoid random moves.
                      Check out our{" "}
                      <Link
                        href="/tips-and-tricks"
                        className="text-blue-600 hover:underline"
                      >
                        Tips & Tricks
                      </Link>{" "}
                      page for detailed strategies!
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      What's the best strategy for beginners?
                    </h3>
                    <p className="text-gray-600">
                      Start by learning the corner strategy - keep your highest
                      value cupcake in a corner and build around it. Practice
                      merging smaller cupcakes first before attempting advanced
                      techniques.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      How long does it take to reach 2048?
                    </h3>
                    <p className="text-gray-600">
                      It varies greatly depending on your skill level and
                      strategy. Beginners might take 30-60 minutes, while
                      experienced players can reach 2048 in 10-20 minutes.
                      Practice makes perfect!
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Is there a maximum score possible?
                    </h3>
                    <p className="text-gray-600">
                      Theoretically, you can continue playing indefinitely and
                      reach very high scores. However, the game becomes
                      increasingly difficult as you create larger cupcakes, and
                      eventually becomes impossible to continue due to the
                      limited board space.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 其他问题 */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-3xl">❓</span>
                  Other Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Is 2048 Cupcakes free to play?
                    </h3>
                    <p className="text-gray-600">
                      Yes! 2048 Cupcakes is completely free to play. There are
                      no hidden costs, premium features, or paywalls. Enjoy
                      unlimited gameplay without any restrictions!
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Can I play at school or work?
                    </h3>
                    <p className="text-gray-600">
                      Yes! The game is designed to work in restricted
                      environments. It doesn't require any downloads or special
                      permissions, making it perfect for quick breaks at school
                      or work.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Are there different themes available?
                    </h3>
                    <p className="text-gray-600">
                      Yes! We offer several themed versions including Christmas,
                      Halloween, and more. Each theme features unique cupcake
                      designs and colors while maintaining the same addictive
                      gameplay.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      How can I report a bug or suggest a feature?
                    </h3>
                    <p className="text-gray-600">
                      We welcome feedback! You can contact us through our
                      website or social media channels. We're constantly working
                      to improve the game based on player suggestions.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Is there a multiplayer version?
                    </h3>
                    <p className="text-gray-600">
                      Currently, 2048 Cupcakes is a single-player game. However,
                      we're exploring multiplayer features for future updates.
                      Stay tuned for exciting new features!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 联系和支持 */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-3xl">📞</span>
                  Still Need Help?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <p className="text-gray-600 mb-4">
                    Can't find the answer you're looking for? We're here to
                    help!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/how-to-play">
                      <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                        📖 Game Tutorial
                      </button>
                    </Link>
                    <Link href="/tips-and-tricks">
                      <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
                        💡 Tips & Tricks
                      </button>
                    </Link>
                    <Link href="/strategy">
                      <button className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-colors">
                        📚 Strategy Guide
                      </button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 开始游戏按钮 */}
            <div className="text-center">
              <Link href="/game/cupcakes">
                <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                  🧁 Start Playing 2048 Cupcakes
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
