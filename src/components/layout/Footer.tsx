import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* 网站信息 */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-red-500">🎮 20</span>
              <span className="text-teal-500">48</span>
            </h3>
            <p className="text-gray-300 mb-4">
              The most addictive puzzle game with daily holiday themes!
              Challenge your brain, merge tiles, and reach 2048. Play for FREE -
              no download required!
            </p>
            <div className="flex space-x-4">
              <div className="text-sm text-gray-400">
                <span className="mr-2">✅</span>
                Free to Play
              </div>
              <div className="text-sm text-gray-400">
                <span className="mr-2">✅</span>
                No Download
              </div>
              <div className="text-sm text-gray-400">
                <span className="mr-2">✅</span>
                No Registration
              </div>
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/game/cupcakes"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  🧁 Play Cupcakes
                </Link>
              </li>
              <li>
                <Link
                  href="/game/christmas"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  🎄 Christmas Edition
                </Link>
              </li>
              <li>
                <Link
                  href="/game/halloween"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  🎃 Halloween Edition
                </Link>
              </li>
              <li>
                <Link
                  href="/unblocked"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  🌐 Unblocked Version
                </Link>
              </li>
              <li>
                <Link
                  href="/strategy"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  📚 Strategy Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* 帮助和支持 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Help & Support</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/how-to-play"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  📖 How to Play
                </Link>
              </li>
              <li>
                <Link
                  href="/tips-and-tricks"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  💡 Tips & Tricks
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  ❓ FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  📧 Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 分隔线 */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            {/* 版权信息 */}
            <div className="text-sm text-gray-400">
              <p>&copy; 2024 Playing2048.com. All rights reserved.</p>
              <p className="mt-1">
                This website is not affiliated with the original 2048 game
                creators.
              </p>
            </div>

            {/* 法律链接 */}
            <div className="flex flex-wrap gap-4 text-sm">
              <Link
                href="/privacy"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
              <Link
                href="/about"
                className="text-gray-300 hover:text-white transition-colors"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>

        {/* Google AdSense 合规声明 */}
        <div className="mt-6 p-4 bg-gray-800 rounded-lg">
          <div className="text-xs text-gray-400">
            <p className="mb-2">
              <strong>Advertising Disclosure:</strong> This website may display
              third-party advertisements through Google AdSense. These ads help
              support the free operation of this site.
            </p>
            <p className="mb-2">
              <strong>Data Collection:</strong> We use cookies and similar
              technologies to improve your experience, analyze site traffic, and
              personalize content. By continuing to use this site, you consent
              to our use of cookies.
            </p>
            <p>
              <strong>Third-Party Services:</strong> This site uses Google
              Analytics and may display Google AdSense advertisements. These
              services have their own privacy policies and terms of use.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
