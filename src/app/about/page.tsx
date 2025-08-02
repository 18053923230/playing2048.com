import { SEOHead } from "@/components/seo/SEOHead";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <SEOHead
        title="About Us - Playing2048.com"
        description="Learn about Playing2048.com, our mission to provide the best 2048 gaming experience, and our commitment to free, accessible puzzle games."
        keywords="about us, 2048 game, puzzle games, free games, gaming platform"
        canonical="https://playing2048.com/about"
      />

      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">About Playing2048.com</h1>
              <p className="text-xl text-gray-600">
                Bringing the joy of 2048 to everyone, everywhere
              </p>
            </header>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                At Playing2048.com, we believe that great games should be
                accessible to everyone. Our mission is to provide the most
                enjoyable and engaging 2048 gaming experience while keeping it
                completely free and accessible from any device.
              </p>
              <p className="text-gray-700">
                We&apos;ve taken the classic 2048 puzzle game and enhanced it
                with beautiful themes, daily holiday celebrations, and
                educational features that make learning fun.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-2xl">🎮</span>
                  What We Offer
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Multiple 2048 game themes</li>
                  <li>• Daily holiday celebrations</li>
                  <li>• Educational Roman numerals version</li>
                  <li>• Typing speed challenges</li>
                  <li>• Comprehensive strategy guides</li>
                  <li>• Mobile-optimized experience</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-2xl">🌟</span>
                  Our Values
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Free and accessible gaming</li>
                  <li>• Educational value</li>
                  <li>• User privacy and security</li>
                  <li>• Continuous improvement</li>
                  <li>• Community engagement</li>
                  <li>• Cross-platform compatibility</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Playing2048.com was created by a team of passionate developers
                and gamers who wanted to make the classic 2048 puzzle game more
                accessible and enjoyable for everyone. We recognized that while
                the original 2048 game was brilliant, there was room for
                improvement in terms of accessibility, themes, and educational
                value.
              </p>
              <p className="text-gray-700 mb-4">
                Our journey began with a simple idea: what if we could combine
                the addictive gameplay of 2048 with beautiful themes,
                educational content, and daily celebrations? This led to the
                creation of our first themed version - 2048 Cupcakes - which
                quickly became a favorite among our users.
              </p>
              <p className="text-gray-700">
                Today, we continue to expand our collection with new themes,
                educational features, and innovative gameplay mechanics, always
                keeping our core values of accessibility and fun at the
                forefront.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Why Choose Playing2048.com?
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">🆓</div>
                  <h3 className="text-lg font-semibold mb-2">
                    Completely Free
                  </h3>
                  <p className="text-gray-600">
                    No hidden costs, no premium features, no paywalls.
                    Everything is free for everyone.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">📱</div>
                  <h3 className="text-lg font-semibold mb-2">Play Anywhere</h3>
                  <p className="text-gray-600">
                    Works perfectly on desktop, tablet, and mobile devices. No
                    downloads required.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🎨</div>
                  <h3 className="text-lg font-semibold mb-2">
                    Beautiful Themes
                  </h3>
                  <p className="text-gray-600">
                    Multiple themes to choose from, including holiday editions
                    and educational versions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">
                Our Commitment to Privacy
              </h2>
              <p className="text-gray-700 mb-4">
                We take your privacy seriously. Our website is designed with
                privacy in mind, and we only collect the minimum amount of data
                necessary to provide you with the best gaming experience.
              </p>
              <p className="text-gray-700 mb-4">
                We use cookies and similar technologies to improve your
                experience and analyze website traffic, but we never sell your
                personal information to third parties. You can learn more about
                our data practices in our{" "}
                <Link href="/privacy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
              <p className="text-gray-700">
                We also comply with GDPR requirements and provide you with full
                control over your cookie preferences through our cookie consent
                system.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Get in Touch
              </h2>
              <p className="text-center text-gray-700 mb-6">
                Have questions, suggestions, or just want to say hello?
                We&apos;d love to hear from you!
              </p>
              <div className="text-center">
                <a
                  href="mailto:260316514@qq.com"
                  className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  📧 Contact Us
                </a>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/"
                className="inline-block bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
