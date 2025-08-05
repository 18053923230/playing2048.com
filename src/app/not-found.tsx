import Link from "next/link";
import { SEOHead } from "@/components/seo/SEOHead";

export default function NotFound() {
  return (
    <>
      <SEOHead
        title="404 - Page Not Found | Playing2048.com"
        description="The page you're looking for doesn't exist. Play 2048 online for free!"
        keywords="404, page not found, 2048 game, free online games"
        canonical="https://playing2048.com/404"
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-8xl font-bold text-gray-300 mb-4">404</h1>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-gray-600 mb-8">
              The page you're looking for doesn't exist. But don't worry, you
              can still enjoy playing 2048!
            </p>
          </div>

          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
            >
              🏠 Go Home
            </Link>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <Link
                href="/game/cupcakes"
                className="bg-white text-gray-800 px-4 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors border border-gray-200"
              >
                🧁 Play Cupcakes
              </Link>
              <Link
                href="/game/christmas"
                className="bg-white text-gray-800 px-4 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors border border-gray-200"
              >
                🎄 Christmas
              </Link>
            </div>
          </div>

          <div className="mt-8 text-sm text-gray-500">
            <p>Looking for something specific?</p>
            <div className="flex justify-center space-x-4 mt-2">
              <Link href="/strategy" className="hover:text-gray-700">
                Strategy Guide
              </Link>
              <Link href="/how-to-play" className="hover:text-gray-700">
                How to Play
              </Link>
              <Link href="/contact" className="hover:text-gray-700">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
