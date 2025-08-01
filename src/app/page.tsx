import { SEOHead } from "@/components/seo/SEOHead";
import { seoConfig } from "@/lib/seo/seoConfig";

import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <SEOHead {...seoConfig.home} />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">
          <header className="text-center mb-12">
            <h1 className="text-6xl font-bold mb-4">
              <span className="text-red-500">20</span>
              <span className="text-teal-500">48</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join numbers and get to the winning tile! Customize your base
              number and difficulty for endless fun.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href="/cupcakes" className="group">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🧁</div>
                <h2 className="text-2xl font-bold mb-2">Cupcakes</h2>
                <p className="text-gray-600">
                  The most delicious version of 2048
                </p>
              </div>
            </Link>

            <Link href="/christmas" className="group">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🎄</div>
                <h2 className="text-2xl font-bold mb-2">Christmas</h2>
                <p className="text-gray-600">Holiday-themed puzzle fun</p>
              </div>
            </Link>

            <Link href="/halloween" className="group">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🎃</div>
                <h2 className="text-2xl font-bold mb-2">Halloween</h2>
                <p className="text-gray-600">Spooky puzzle adventure</p>
              </div>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/strategy"
              className="inline-block bg-teal-500 text-white px-8 py-3 rounded-lg hover:bg-teal-600 transition-colors"
            >
              Learn How to Play
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
