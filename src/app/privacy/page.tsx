import { SEOHead } from "@/components/seo/SEOHead";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <>
      <SEOHead
        title="Privacy Policy - Playing2048.com"
        description="Learn how we collect, use, and protect your personal information on Playing2048.com. Your privacy is important to us."
        keywords="privacy policy, data protection, cookies, personal information, 2048 game privacy"
        canonical="https://playing2048.com/privacy"
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-xl text-gray-600">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </header>

            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="prose max-w-none">
                <h2>1. Information We Collect</h2>
                <p>
                  We collect information you provide directly to us, such as
                  when you:
                </p>
                <ul>
                  <li>Play our games</li>
                  <li>Contact us via email</li>
                  <li>Interact with our website</li>
                </ul>

                <h2>2. Automatically Collected Information</h2>
                <p>
                  When you visit our website, we automatically collect certain
                  information, including:
                </p>
                <ul>
                  <li>Device information (browser type, operating system)</li>
                  <li>Usage data (pages visited, time spent)</li>
                  <li>IP address and general location</li>
                  <li>Game performance data</li>
                </ul>

                <h2>3. Cookies and Similar Technologies</h2>
                <p>We use cookies and similar technologies to:</p>
                <ul>
                  <li>Remember your game progress and preferences</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Provide personalized content and advertisements</li>
                  <li>Improve our services</li>
                </ul>

                <h2>4. Google Analytics and AdSense</h2>
                <p>
                  Our website uses Google Analytics and may display Google
                  AdSense advertisements. These services collect information
                  about your use of our website and may use cookies to track
                  your activity.
                </p>
                <p>
                  Google&apos;s use of advertising cookies enables it and its
                  partners to serve ads to you based on your visit to our site
                  and/or other sites on the internet.
                </p>

                <h2>5. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Provide and maintain our games and services</li>
                  <li>Improve user experience and game performance</li>
                  <li>Analyze usage patterns and trends</li>
                  <li>Display relevant advertisements</li>
                  <li>Respond to your inquiries and support requests</li>
                </ul>

                <h2>6. Information Sharing</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal
                  information to third parties, except as described in this
                  policy or with your consent.
                </p>
                <p>We may share information with:</p>
                <ul>
                  <li>Google Analytics and AdSense (as described above)</li>
                  <li>Service providers who assist in our operations</li>
                  <li>Law enforcement when required by law</li>
                </ul>

                <h2>7. Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your
                  personal information against unauthorized access, alteration,
                  disclosure, or destruction.
                </p>

                <h2>8. Your Rights</h2>
                <p>You have the right to:</p>
                <ul>
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of certain data collection</li>
                  <li>Withdraw consent for cookie usage</li>
                </ul>

                <h2>9. Children&apos;s Privacy</h2>
                <p>
                  Our services are not intended for children under 13. We do not
                  knowingly collect personal information from children under 13.
                  If you are a parent or guardian and believe your child has
                  provided us with personal information, please contact us.
                </p>

                <h2>10. Changes to This Policy</h2>
                <p>
                  We may update this privacy policy from time to time. We will
                  notify you of any changes by posting the new policy on this
                  page and updating the &quot;Last updated&quot; date.
                </p>

                <h2>11. Contact Us</h2>
                <p>
                  If you have any questions about this privacy policy, please
                  contact us at:{" "}
                  <a
                    href="mailto:260316514@qq.com"
                    className="text-blue-600 hover:underline"
                  >
                    260316514@qq.com
                  </a>
                </p>

                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold mb-2">Cookie Consent</h3>
                  <p className="text-sm text-gray-600">
                    By using our website, you consent to our use of cookies as
                    described in our{" "}
                    <Link
                      href="/cookies"
                      className="text-blue-600 hover:underline"
                    >
                      Cookie Policy
                    </Link>
                    . You can manage your cookie preferences at any time.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link
                href="/"
                className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
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
